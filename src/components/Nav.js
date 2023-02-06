import '../styles/style.css';
import LoadSection from '../LoadSection';

//Create the nav list i.e About / Projects / Github / etc
function CreateList() {
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    about.classList.add('internal-link');
    about.textContent = 'About';
    
    const projects = document.createElement('li');
    projects.classList.add('internal-link');
    projects.textContent = 'Projects';

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
    contactLink.classList.add('contact','big-link','external');
    contactLink.textContent = 'Contact';
    contact.append(contactLink);

    list.append(about, projects, github, cv, contact);

    const internalLinks = [about, projects];

    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            link.classList.add('active');
            internalLinks.forEach(link => {
                    if (link !== e.target) {
                        link.classList.remove('active');
                    }
                });

                LoadSection(link.textContent);
            });
        });

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

//Toggle the nav menu when hamburger is clicked
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

    //Hides the nav menu if it's open and the user clicks outside of it
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