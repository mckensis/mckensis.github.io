import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Listeners from "./EventListeners";

//Applies the 'active' class to the internal nav link for the active section
function ManageActiveClass(links, target) {
    links.forEach(link => {
        if (link !== target) {
            link.classList.remove('active');
        }
    });

    //As long as the link isn't the home link
    //Or the hero link
    if (!target.classList.contains('home')
        && !target.classList.contains('big-link')) {
            target.classList.add('active');
    }

    //If we came here from the hero section
    //Add the active class to 'Projects' on the Nav
    if (target.classList.contains('big-link')) {
        document.querySelector('.internal-link.projects').classList.add('active');
    }
}

//Removes the current section from main
function RemoveCurrentSection(main) {
    if (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
}

//Decides which section to display
function DisplayNewSection(main, section) {
    switch(section) {
        case 'About':
            main.append(About());
            break;
        case 'Projects':
        case 'View My Projects':
            main.append(Projects());
            break;
        case 'am.':
        default:
            main.append(Hero());
            Listeners();
            break;
    }
}

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

//Scroll to the top of the page
function ScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function Animate() {
    const hr = Array.from(document.querySelectorAll('hr'));
    const projects = Array.from(document.querySelectorAll('.individual-project'));

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('individual-project')) {
                    console.log(entry.target);
                    entry.target.classList.add('projectAnimate');
                } else {
                    entry.target.classList.add("hrAnimate");
                    observer.unobserve(entry.target);
                }
            }
        });
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    }

    const Observer = new IntersectionObserver(callback, options)
    
    if (hr) {
        hr.forEach(line => {
            if (hr.indexOf(line) % 2 !== 0) {
                line.classList.add('odd');
            }
            Observer.observe(line);
        });
    }

    if (projects) {
        projects.forEach(project => {
            Observer.observe(project);
        });
    }
}

//Handles loading a new internal section to display within main
function LoadSection(links, target) {
    const main = document.querySelector('main');

    CloseBurgerMenu();
    RemoveCurrentSection(main);    
    ManageActiveClass(links, target);
    DisplayNewSection(main, target.textContent);
    ScrollToTop();
    Animate();
}

export default LoadSection;