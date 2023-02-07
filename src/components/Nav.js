import '../styles/style.css';
//import LoadSection from '../LoadSection';

//Create the nav list i.e About / Projects / Github / etc
function CreateList() {
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    about.classList.add('internal-link');
    about.textContent = 'About';
    
    const projects = document.createElement('li');
    projects.classList.add('internal-link','projects');
    projects.textContent = 'Projects';

    const github = document.createElement('li');
    const githubLink = document.createElement('a');
    githubLink.className = 'external-link';
    githubLink.textContent = 'Github';
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    github.append(githubLink);
    
    const cv = document.createElement('li');
    const cvLink = document.createElement('a');
    cvLink.className = 'external-link';
    cvLink.textContent = 'View CV';
    cvLink.href = '#';
    cvLink.target = '_blank';
    cv.append(cvLink);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    contactLink.classList.add('contact','big-link','external-link');
    contactLink.textContent = 'Contact';
    contact.append(contactLink);

    list.append(about, projects, github, cv, contact);

    return list;
}

//Create the hamburger button
function CreateHamburger() {
    const burger = document.createElement('button');
    burger.className = 'burger';
    burger.title = 'Toggle Navigation';

    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        burger.append(span);
    }

    return burger;
}

function Nav() {
    const nav = document.createElement('nav');
    
    const home = document.createElement('a');
    home.classList.add('home','internal-link');
    home.textContent = 'am.';

    const hamburger = CreateHamburger();
    const list = CreateList();

    nav.append(home, hamburger, list);

    return nav;
}

export default Nav;