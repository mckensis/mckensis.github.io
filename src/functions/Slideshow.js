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

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                toggleActive(dots, dots.indexOf(dot));
                updateDisplay(display, images[dots.indexOf(dot)]);
            });
        });

        next.addEventListener('click', () => {
            if (index === images.length -1) {
                index = 0;
            } else {
                index++;
            }

            toggleActive(dots, index);
            updateDisplay(display, images[index]);
        });

        previous.addEventListener('click', () => {
            if (index === 0) {
                index = images.length - 1
            } else {
                index--;
            }
            
            toggleActive(dots, index);
            updateDisplay(display, images[index]);
        });
    });
}

export default Slideshow;