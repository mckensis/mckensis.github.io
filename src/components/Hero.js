import '../styles/style.css';
import Portrait from '../images/portrait.jpg';
import Mail from '../images/icons/email.png';

// Swaps the word on hero page
function swapWord() {
    let count = 0;
    const words = ['creative', 'patient', 'personable', 'positive', 'reliable', 'passionate'];
    setInterval(() => {
        const element = document.querySelector("#swapping > span")
        if (!element) return;
        element.textContent = words[count];
        count < words.length - 1 ? count = count + 1 : count = 0;
    }, 1500);
}

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
    para.innerHTML = `A <span>passionate</span> web developer from Glasgow`;
    para.id = 'swapping';

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

swapWord();

export default Hero;