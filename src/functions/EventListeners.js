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
        if (document.querySelector('nav ul').classList.contains('open')) {
            document.body.classList.add('locked');
        } else {
            document.body.classList.remove('locked');
        }
        if (e.target !== document.querySelector('nav ul li')
            && e.target !== document.querySelector('.burger')) {
                document.querySelector('nav ul').classList.remove('open');
                document.querySelector('.burger').classList.remove('open');
        };
    });
}

export default Listeners;