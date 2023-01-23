import '../styles/projects.css';
import Slideshow from '../Slideshow';
import GetScreenshots from '../GetScreenshots';

function GetProjects() {
    const battleship = {
        title: 'Battleship',
        alias: 'battleship',
        info: 'The classic Battleship game, developed using TDD (Test-driven Development) methods.',
        live: 'battleship',
        code: 'battleship',
        tags: [
            'JavaScript',
            'Webpack',
            'TDD',
        ],
        images: [],
    };

    const weather = {
        title: 'Weather Forecast',
        alias: 'forecast',
        info: `Built using async / await along with multiple APIs from OpenWeather such as 'Geocoding', and '3 Hour / 5 Day Forecast'.`,
        live: 'weather-forecast',
        code: 'weather-forecast',
        tags: [
            'Javascript',
            'Webpack',
            'API',
        ],
        images: [],
    };

    return [ battleship, weather ];
}

function CreateProject(project) {

    const BASE_GITHUB_URL = 'https://github.com/mckensis/';

    const article = document.createElement('article');
    article.className = 'individual-project';

    const heading = document.createElement('h3');
    heading.textContent = project.title;
    
    const slideshow = document.createElement('div');
    slideshow.className = 'slideshow';

    const previous = document.createElement('div');
    previous.classList.add('arrow', 'previous');
    previous.innerHTML = '&lsaquo;';

    const next = document.createElement('div');
    next.classList.add('arrow', 'next');
    next.innerHTML = `&rsaquo;`;

    const slide = document.createElement('img');
    slide.className = 'slide';
    slide.src = project.images[0];

    const images = document.createElement('div');
    images.className = 'images';

    project.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        images.append(img);
    });

    const dots = document.createElement('div');
    dots.className = 'dots';

    for (let i = 0; i < project.images.length; i++) {
        const dot = document.createElement('p');
        dot.className = 'dot';
        dots.append(dot);
    }

    dots.children[0].classList.add('active');

    const tags = document.createElement('div');
    tags.classList.add('tags');
    
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        tags.append(span);
    })

    slideshow.append(previous, slide, next, dots, images);

    const info = document.createElement('div');
    const infoP = document.createElement('p');
    infoP.textContent = project.info;
    info.classList.add('info');
    info.appendChild(infoP);

    const links = document.createElement('div');
    links.className = 'project-links';

    const live = document.createElement('a');
    live.textContent = 'Live';
    live.href = project.live;

    const code = document.createElement('a');
    code.textContent = 'GitHub';
    code.href = BASE_GITHUB_URL + project.code;

    links.append(live, code);

    article.append(heading, slideshow, tags, info, links);

    return article;
}

function Projects() {
    const projects = document.createElement('section');
    projects.className = 'projects';

    const heading = document.createElement('h2');
    heading.textContent = 'Projects';

    projects.append(heading);

    const list = GetProjects();
    let parents = [];

    list.forEach(project => {
        project.images = GetScreenshots(project.alias, require.context('../images/screenshots/', false, /\.jpg$/));
        let parent = CreateProject(project);
        projects.append(parent);
        let slideshow = parent.querySelector('.slideshow')
        parents.push(slideshow);
    })

    Slideshow(parents);

    return projects;
}

export default Projects;