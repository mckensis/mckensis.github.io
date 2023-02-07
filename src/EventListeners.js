import LoadSection from "./LoadSection";
import toggleNav from './ToggleNav';

function Listeners() {
    const internal = document.querySelectorAll('.internal-link');

    internal.forEach(link => {
        link.addEventListener('click', (e) => {
            LoadSection(internal, e.target);
        });
    });

    //Hides the nav menu if it's open and the user clicks outside of it
    document.addEventListener('click', (e) => {
        if (e.target !== document.querySelector('nav ul li')
            && e.target !== document.querySelector('.burger')) {
                document.querySelector('nav ul').classList.remove('open');
                document.querySelector('.burger').classList.remove('open');
        };
    });

    const hamburger = document.querySelector('.burger');
    const list = document.querySelector('nav ul')

    hamburger.addEventListener('click', toggleNav.bind(hamburger, list));
}

export default Listeners;