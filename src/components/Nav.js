import '../styles/nav.css';

function Nav() {
    const nav = document.createElement('nav');
    
    const home = document.createElement('a');
    home.href = './';
    home.className = 'home';
    home.textContent = 'AM.';

    const contact = document.createElement('a');
    contact.href = 'mailto:adn.mck@gmail.com?subject=Hi Aidan';
    contact.className = 'contact';
    contact.textContent = 'Contact';
    
    const list = document.createElement('ul');
    
    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.textContent = 'About';
    
    const projects = document.createElement('li');
    const projectsLink = document.createElement('a');
    projectsLink.textContent = 'Projects';
    
    const github = document.createElement('li');
    const githubLink = document.createElement('a');
    githubLink.textContent = 'Github';    
    githubLink.href = 'https://github.com/mckensis';
    githubLink.target = '_blank';
    
    about.append(aboutLink);
    projects.append(projectsLink);
    github.append(githubLink);
    list.append(about, projects, github);
    nav.append(home, list, contact);

    return nav;
}

export default Nav;