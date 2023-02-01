import '../styles/animations.css';
import '../styles/hero.css';
import '../styles/style.css';
import Portrait from '../images/icon.jpg';
import Mail from '../images/icons/email.png';
import LoadSection from '../LoadSection';

function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const portrait = document.createElement('img');
    portrait.classList.add('portrait');
    portrait.src = Portrait;

    const header = document.createElement('h1');
    header.textContent = `Hi, I'm Aidan`;

    const para = document.createElement('p');
    para.textContent = 'Front-end developer from Glasgow, Scotland';

    const projects = document.createElement('button');
    projects.textContent = 'View My Projects';
    projects.type = 'button';
    projects.classList.add('big-link','hero-projects');
    projects.addEventListener('click', () => {
        document.querySelector('nav li a.project-link').classList.add('active');
        LoadSection('Projects');
    });

    const mailIcon = document.createElement('img');
    mailIcon.src = Mail;

    const contact = document.createElement('a');
    contact.textContent = 'Contact Me';
    contact.classList.add('big-link', 'hero-contact');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    
    contact.append(mailIcon);
    hero.append(header, para, projects, contact, portrait);

    return hero;
}

export default Hero;