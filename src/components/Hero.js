import '../styles/style.css';
import '../styles/hero.css';
import Img from '../images/icon.jpg';
import LoadSection from '../LoadSection';

function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const image = new Image();
    image.src = Img;

    const header = document.createElement('h1');
    header.textContent = `Hi, I'm Aidan`;

    const para = document.createElement('p');
    para.textContent = 'Front-end developer from Glasgow, Scotland';

    const projects = document.createElement('button');
    projects.textContent = 'Check out my projects';
    projects.type = 'button';
    projects.classList.add('big-link');
    projects.addEventListener('click', () => {
        document.querySelector('nav li a.project-link').classList.add('active');
        LoadSection('Projects');
    });

    const contact = document.createElement('a');
    contact.textContent = 'Contact Me';
    contact.classList.add('big-link');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';

    hero.append(header, para, projects, contact);

    hero.append(image);

    return hero;
}

export default Hero;