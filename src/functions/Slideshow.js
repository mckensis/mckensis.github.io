function toggleActive(dots, index) {

    dots.forEach(dot => {
        if (dots.indexOf(dot) !== index) {
            dot.classList.remove('active');
        } else {
            dot.classList.add('active');
        }
    });
};

function updateDisplay(display, image) {
    display.src = image.src;
};

function updateArrows(arrows, images, index) {
    let previous = arrows[0];
    let next = arrows[1];

    if (index === images.length -1) {
        previous.style.display = 'block';
        next.style.display = 'none';
    } else if (index === 0) {
        previous.style.display = 'none';
        next.style.display = 'block';
    } else {
        previous.style.display = 'block';
        next.style.display = 'block';
    }
};

function Slideshow(parents) {

    let parentsArray = parents;

    for (let i = 0; i < parentsArray.length; i++) {
        if (!parentsArray[i]) {
            parentsArray.splice(i);
        }
    }

    parentsArray.forEach(parent => {
        let index = 0;
        const arrows = parent.querySelectorAll('.slideshow-button');
        const previous = parent.querySelector('.slideshow-button.previous');
        const next = parent.querySelector('.slideshow-button.next');
        const display = parent.querySelector('.slide');
        const dots = Array.from(parent.querySelector('.dots').children);
        const images = Array.from(parent.querySelector('.images').children);
        
        //Hide the previous arrow on initial slideshow load
        previous.style.display = 'none';
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                updateArrows(arrows, images, dots.indexOf(dot));
                toggleActive(dots, dots.indexOf(dot));
                updateDisplay(display, images[dots.indexOf(dot)]);
            });
        });

        next.addEventListener('click', () => {
            if (index !== images.length -1) {
                index++;
            }
            toggleActive(dots, index);
            updateArrows(arrows, images, index);
            updateDisplay(display, images[index]);
        });

        previous.addEventListener('click', () => {
            if (index !== 0) {
                index--;
            }
            toggleActive(dots, index);
            updateArrows(arrows, images, index);
            updateDisplay(display, images[index]);
        });
    });
}

export default Slideshow;