import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import LoadSection from './LoadSection';

function LoadPage() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    const main = document.createElement('main');
    
    body.append(header);
    body.append(main);

    header.append(Nav());
    main.append(Hero());

    const links = document.querySelectorAll('nav li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.textContent !== 'Github' && link.textContent !== 'Download CV') {
                link.classList.add('active');
                links.forEach(link => {
                    if (link !== e.target) {
                        link.classList.remove('active');
                    }
                });

                LoadSection(link.textContent);
            }
        });
    });

    const home = document.querySelector('nav a.home');
    home.addEventListener('click', () => {
        LoadSection('Home');
        links.forEach(link => {
            link.classList.remove('active');
        });
    });
}

export default LoadPage;