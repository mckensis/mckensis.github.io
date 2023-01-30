import '../styles/style.css';
import '../styles/nav.css';

function Nav() {
    const nav = document.createElement('nav');
    
    const home = document.createElement('a');
    home.className = 'home';
    home.textContent = 'AM.';

    const contact = document.createElement('a');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    contact.className = 'contact';
    contact.classList.add('big-link');
    contact.textContent = 'Contact';
    
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.textContent = 'About';
    
    const projects = document.createElement('li');
    const projectsLink = document.createElement('a');
    projectsLink.textContent = 'Projects';
    projectsLink.classList.add('project-link');
    
    const github = document.createElement('li');
    const githubLink = document.createElement('a');
    githubLink.textContent = 'Github';    
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    
    const cv = document.createElement('li');
    const cvLink = document.createElement('a');
    cvLink.textContent = 'View CV';
    cvLink.href = '#';
    cvLink.target = '_blank';

    about.append(aboutLink);
    projects.append(projectsLink);
    github.append(githubLink);
    cv.append(cvLink);
    list.append(about, projects, github, cv);
    nav.append(home, list, contact);

    return nav;
}

export default Nav;