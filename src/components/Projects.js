import '../styles/style.css';
import Slideshow from '../Slideshow';
import viewLive from '../images/icons/live.png';
import viewGithub from '../images/icons/github.png';
import viewScreenshots from '../images/icons/slideshow-50.png';
import GetScreenshots from '../GetScreenshots';

//Shows the slideshow overlay
function viewSlideshow() {
    const slideshow = this.querySelector('.slideshow');
    slideshow.style.display = 'grid';
    document.body.style.overflow = 'hidden';

    const close = this.querySelector('.slideshow-close');

    close.addEventListener('click', () => {
        document.body.style.overflow = 'unset';
        slideshow.style.display = 'none';
    });
}

//Returns an array containing the projects I want to display on the page
function GetProjects() {
    const battleship = {
        title: 'Battleship',
        alias: 'battleship',
        info: [
            `Classic Battleship game`, 
            `Play against an AI player`,
            `Destroy 5 ships to win`,
        ],
        development: 'I wrote unit tests with the Jest framework during development of this project. I purposefully caused each newly written test to fail and then built the functionality to allow the test to pass. I repeated this until the project was complete.',
        live: 'battleship',
        code: 'battleship',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest', 'TDD' ],
        images: [],
    };

    const weather = {
        title: 'Weather Forecast',
        alias: 'forecast',
        info: [
            `Search for a location`,
            `Current weather will display`,
            `Later & Tomorrow will also display`,
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
            `View lists on the left`,
            `View tasks on the right`,
            `Add a new list or task`,
            `Change the priority of a task`,
            `Mark a task as complete`,
        ],
        development: `I used localstorage in this project to keep track of a user's tasks and lists that they have created, as well as any tasks that have been completed.`,
        live: 'to-do-list',
        code: 'to-do-list',
        tags: [ 'HTML', 'CSS', 'JavaScript', 'Webpack', 'LocalStorage' ],
        images: [],
    };

    return [ battleship, weather, todo ];
}

//Creates a slideshow for each project
//TO-DO: only create one slideshow, and send the images to it when viewing
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

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('slideshow-close','big-link');

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

    slideshow.append(closeBtn, previous, slide, next, dots, imagesDiv);

    return slideshow;
}

//Creates the tags i.e. 'HTML' 'API' etc.
function CreateTags(tags) {
    const list = document.createElement('ul');
    list.classList.add('tags');
    
    tags.forEach(tag => {
        const item = document.createElement('li');
        item.textContent = tag;
        list.append(item);
    });
    
    return list;
}

//Creates the image links i.e. Live / Github / Slideshow
function CreateLinks(links) {
    const BASE_GITHUB_URL = 'https://github.com/mckensis/';

    const section = document.createElement('section');
    section.className = 'project-links';

    const heading = document.createElement('h4');
    heading.textContent = 'View';

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

    const viewImages = document.createElement('img');
    viewImages.src = viewScreenshots;
    viewImages.alt = 'Screenshots link';
    viewImages.title = 'View Project Screenshots';

    liveLink.append(live);
    codeLink.append(code);

    viewImages.addEventListener('click', viewSlideshow.bind(links.article));

    section.append(heading, liveLink, codeLink, viewImages);

    return section;
}

//Details section
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

//Development Process section
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

//General layout for the project
function CreateProject(project) {
    const article = document.createElement('article');
    article.className = 'individual-project';
    
    //Heading
    const heading = document.createElement('h2');
    heading.textContent = project.title;
    //Links
    const links = CreateLinks({ live: project.live, github: project.code, article });
    //Slideshow
    const slideshow = CreateSlideshow(project.images);
    //Tags
    const tags = CreateTags(project.tags);
    //Info
    const info = CreateDetailsSection(project.info);
    //Development
    const development = CreateDevelopmentSection(project.development);
    
    article.append(heading, links, tags, info, development, slideshow);
    
    return article;
}

//The Projects parent section
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