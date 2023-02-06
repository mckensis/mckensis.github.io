import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

//Handles closing the burger menu when loading a new section
function CloseBurgerMenu() {
    const burger = document.querySelector('.burger');
    const list = document.querySelector('nav ul');

    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        list.classList.remove('open');
    }
    return;
}

function LoadSection(section) {

    const main = document.querySelector('main');
    
    //Removes the current section from main
    if (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }

    CloseBurgerMenu();

    switch(section) {
        case 'About':
            main.append(About());
            break;
        case 'Projects':
            main.append(Projects());
            break;
        case 'Home':
            main.append(Hero());
            break;
        default:
            main.append(Hero());
            break;
    }
}

export default LoadSection;