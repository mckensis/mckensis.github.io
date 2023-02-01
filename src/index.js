import LoadPage from './LoadPage';
import './styles/style.css';

window.addEventListener('load', LoadPage);
document.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target !== document.querySelector('nav ul')
        && e.target !== document.querySelector('.burger') 
        && e.target !== document.querySelector('.burger span')) {
            document.querySelector('nav ul').classList.remove('open');
            document.querySelector('.burger').classList.remove('open');
    };
});