import '../styles/style.css';
import Portrait from '../images/portrait.jpg';
import Mail from '../images/icons/email.png';

function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';

    const portrait = document.createElement('img');
    portrait.classList.add('portrait');
    portrait.src = Portrait;

    const header = document.createElement('h1');
    header.textContent = `Hi, `;

    const span = document.createElement('span');
    span.textContent = `I'm Aidan`;

    const para = document.createElement('p');
    para.textContent = 'Front-end developer from Glasgow, Scotland';

    const projects = document.createElement('button');
    projects.textContent = 'View My Projects';
    projects.type = 'button';
    projects.classList.add('big-link','internal-link');

    const mailIcon = document.createElement('img');
    mailIcon.src = Mail;

    const contact = document.createElement('a');
    contact.textContent = 'Contact Me';
    contact.classList.add('big-link', 'hero-contact');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    
    header.append(span);
    contact.append(mailIcon);
    hero.append(portrait, header, para, projects, contact);

    return hero;
}

export default Hero;