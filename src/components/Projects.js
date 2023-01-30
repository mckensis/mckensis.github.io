import '../styles/style.css';
import '../styles/projects.css';
import '../styles/slideshow.css';
import Slideshow from '../Slideshow';
import viewLive from '../images/icons/live.png';
import viewGithub from '../images/icons/github.png';
import GetScreenshots from '../GetScreenshots';

function GetProjects() {
    const battleship = {
        title: 'Battleship',
        alias: 'battleship',
        info: [
            `Classic Battleship board game`, 
            `Play against an AI player`,
            `First player to destroy the enemy's 5 ships wins`,
        ],
        development: 'I wrote unit tests with Jest during development of this project and purposefully broke the project with each new test until functionality was complete.',
        live: 'battleship',
        code: 'battleship',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest', 'TDD' ],
        images: [],
    };

    const weather = {
        title: 'Weather Forecast',
        alias: 'forecast',
        info: [
            `Enter a location to search for the weather`,
            `Current weather will display for the location`,
            `Later & tomorrow forecasts will also display`,
        ],
        development: `I used async and await along with multiple APIs from OpenWeather such as 'Geocoding', 'CurrentWeather', and '3 Hour / 5 Day Forecast'.`,
        live: 'weather-forecast',
        code: 'weather-forecast',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'API', 'Async / Await' ],
        images: [],
    };

    const todo = {
        title: 'To-Do List',
        alias: 'to-do-list',
        info: [
            `View lists on the left & tasks on the right`,
            `Add a new list or task within either section`,
            `Mark a tasks as complete, or change task priority`,
        ],
        development: `I used async and await along with multiple APIs from OpenWeather such as 'Geocoding', 'CurrentWeather', and '3 Hour / 5 Day Forecast'.`,
        live: 'to-do-list',
        code: 'to-do-list',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'LocalStorage' ],
        images: [],
    };

    return [ battleship, weather, todo ];
}

function CreateSlideshow(images) {
    const slideshow = document.createElement('section');
    slideshow.className = 'slideshow';

    const previous = document.createElement('div');
    previous.classList.add('arrow', 'previous');
    previous.innerHTML = '&lsaquo;';

    const next = document.createElement('div');
    next.classList.add('arrow', 'next');
    next.innerHTML = `&rsaquo;`;

    const slide = document.createElement('img');
    slide.className = 'slide';
    slide.src = images[0];

    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'images';
    
    const dots = document.createElement('div');

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        imagesDiv.append(img);

        const dot = document.createElement('p');
        dot.className = 'dot';
        dots.append(dot);
    });
    
    dots.className = 'dots';
    
    if (dots.children[0]) {
        dots.children[0].classList.add('active');
    }

    slideshow.append(previous, slide, next, dots, imagesDiv);

    return slideshow;
}

function CreateTags(tags) {
    const section = document.createElement('section');
    section.classList.add('tags');
    
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        section.append(span);
    });
    
    return section;
}

function CreateLinks(links) {
    const BASE_GITHUB_URL = 'https://github.com/mckensis/';

    const section = document.createElement('section');
    section.className = 'project-links';

    const heading = document.createElement('h4');
    heading.textContent = 'View Project';

    const liveLink = document.createElement('a');    
    const live = document.createElement('img');
    liveLink.href = links.live;
    liveLink.target = '_blank';
    liveLink.title = 'View project live';
    live.src = viewLive;
    
    const codeLink = document.createElement('a');
    const code = document.createElement('img');
    codeLink.href = BASE_GITHUB_URL + links.github;
    codeLink.target = '_blank';
    codeLink.title = 'View on GitHub';
    code.src = viewGithub;

    liveLink.append(live);
    codeLink.append(code);

    section.append(heading, liveLink, codeLink);

    return section;
}

function CreateDetailsSection(details) {
    const section = document.createElement('section');
    section.classList.add('details');

    const heading = document.createElement('h3');
    heading.textContent = 'Project Details';

    const list = document.createElement('ul');

    details.forEach(piece => {
        const item = document.createElement('li');
        item.textContent = piece;
        list.append(item);
    })

    section.append(heading, list);
    
    return section;
}

function CreateDevelopmentSection(info) {
    const section = document.createElement('section');
    section.classList.add('development');
    
    const heading = document.createElement('h3');
    heading.textContent = 'Development Process';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = info;

    section.append(heading, paragraph);
    return section;
}

function CreateProject(project) {
    const article = document.createElement('article');
    article.className = 'individual-project';
    
    //Header Section
    const header = document.createElement('section');
    header.classList.add('header');
    //Heading
    const heading = document.createElement('h2');
    heading.textContent = project.title;
    //Links
    const links = CreateLinks({ live: project.live, github: project.code });
    //Slideshow
    const slideshow = CreateSlideshow(project.images);
    //Tags
    const tags = CreateTags(project.tags);
    //Info
    const info = CreateDetailsSection(project.info);
    //Development
    const development = CreateDevelopmentSection(project.development);
    
    header.append(heading, links);
    article.append(header, tags, info, development, slideshow);
    
    return article;
}

function Projects() {
    const projects = document.createElement('section');
    projects.className = 'projects';

    const list = GetProjects();
    let parents = [];

    list.forEach(project => {
        project.images = GetScreenshots(project.alias, require.context('../images/screenshots/', false, /\.jpg$/));
        let parent = CreateProject(project);
        projects.append(parent);
        let slideshow = parent.querySelector('.slideshow')
        parents.push(slideshow);
    });

    Slideshow(parents);

    return projects;
}

export default Projects;