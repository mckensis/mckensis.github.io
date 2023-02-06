import '../styles/style.css';
import Home from '../images/icons/home.png';

function CreateList() {
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.textContent = 'About';
    about.append(aboutLink);
    
    const projects = document.createElement('li');
    const projectsLink = document.createElement('a');
    projectsLink.textContent = 'Projects';
    projectsLink.classList.add('project-link');
    projects.append(projectsLink);

    const github = document.createElement('li');
    const githubLink = document.createElement('a');
    githubLink.className = 'external';
    githubLink.textContent = 'Github';    
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    github.append(githubLink);
    
    const cv = document.createElement('li');
    const cvLink = document.createElement('a');
    cvLink.className = 'external';
    cvLink.textContent = 'View CV';
    cvLink.href = '#';
    cvLink.target = '_blank';
    cv.append(cvLink);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    contactLink.className = 'contact';
    contactLink.classList.add('big-link');
    contactLink.textContent = 'Contact';
    contact.append(contactLink);

    list.append(about, projects, github, cv, contact);

    return list;
}

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

function toggleNav(list) {
    this.classList.toggle('open');
    list.classList.toggle('open');
}

function Nav() {
    const nav = document.createElement('nav');
    
    const home = document.createElement('a');
    home.className = 'home';
    home.textContent = 'am.';

    const hamburger = CreateHamburger();
    const list = CreateList();

    hamburger.addEventListener('click', toggleNav.bind(hamburger, list));

    nav.append(home, hamburger, list);

    document.addEventListener('click', (e) => {
        if (e.target !== document.querySelector('nav ul li')
            && e.target !== document.querySelector('.burger')) {
                document.querySelector('nav ul').classList.remove('open');
                document.querySelector('.burger').classList.remove('open');
        };
    });

    return nav;
}

export default Nav;