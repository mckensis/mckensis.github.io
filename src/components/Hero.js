import LoadSection from '../LoadSection';
import '../styles/hero.css';

function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const header = document.createElement('h1');
    header.textContent = `Hi, I'm Aidan`;

    const para = document.createElement('p');
    para.textContent = 'A front-end developer from Glasgow, Scotland';

    const projects = document.createElement('button');
    projects.textContent = 'Check out my projects';
    projects.addEventListener('click', () => {
        LoadSection('Projects');
    });

    const contact = document.createElement('a');
    contact.textContent = 'Contact Me';
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';

    hero.append(header, para, projects, contact);

    return hero;
}

export default Hero;