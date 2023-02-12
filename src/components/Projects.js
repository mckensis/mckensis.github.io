import '../styles/style.css';
import Slideshow from '../functions/Slideshow';
import GetScreenshots from '../functions/GetScreenshots';
import GetProjects from '../functions/GetProjects';

//Shows the slideshow overlay
function viewSlideshow() {
    const slideshow = this.querySelector('.slideshow');
    
    //If the project doesn't have a slideshow, then just return
    if (!slideshow) {
        return;
    }

    slideshow.style.display = 'grid';
    document.body.style.overflow = 'hidden';

    const close = this.querySelector('.slideshow-close');

    close.addEventListener('click', () => {
        document.body.style.overflow = 'unset';
        slideshow.style.display = 'none';
    });
}

//Creates a slideshow for each project
//TO-DO: only create one slideshow, and send the images to it when viewing
function CreateSlideshow(images) {
    const slideshow = document.createElement('section');
    slideshow.className = 'slideshow';

    const container = document.createElement('div');
    container.classList.add('slide-container');

    const previous = document.createElement('button');
    previous.classList.add('slideshow-button', 'previous');
    previous.innerHTML = '&lsaquo;';

    const next = document.createElement('button');
    next.classList.add('slideshow-button', 'next');
    next.innerHTML = `&rsaquo;`;

    const slide = document.createElement('img');
    slide.className = 'slide';
    slide.src = images[0];

    container.append(previous, slide, next);

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

    slideshow.append(closeBtn, container, dots, imagesDiv);

    //slideshow.append(closeBtn, previous, slide, next, dots, imagesDiv);

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
    
    const list = document.createElement('ul');
    list.className = 'project-links';

    const listLive = document.createElement('li');
    const live = document.createElement('a');
    live.classList.add('big-link');
    live.textContent = 'Live';

    const listGithub = document.createElement('li');
    const github = document.createElement('a');
    github.classList.add('big-link');
    github.textContent = 'GitHub';
    
    const listScreenshots = document.createElement('li');
    const screenshots = document.createElement('a');
    screenshots.classList.add('big-link');
    screenshots.textContent = 'Screenshots';

    listLive.append(live);
    listGithub.append(github);
    listScreenshots.append(screenshots);
    list.append(listLive, listGithub, listScreenshots);

    listScreenshots.addEventListener('click', viewSlideshow.bind(links.article));

    return list;
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
    //Tags
    const tags = CreateTags(project.tags);
    //Info
    const info = CreateDetailsSection(project.info);
    //Development
    const development = CreateDevelopmentSection(project.development);
    
    article.append(heading, links, tags, info, development);
    
    //Slideshow if there are images present
    if (project.images.length > 0) {
        const slideshow = CreateSlideshow(project.images);
        article.append(slideshow);
    }
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
        const parent = CreateProject(project);
        projects.append(parent);
        
        if (list.indexOf(project) !== list.length -1) {
            const hr = document.createElement('hr');
            projects.append(hr);
        };

        const slideshow = parent.querySelector('.slideshow')
        parents.push(slideshow);
    });

    Slideshow(parents);

    return projects;
}

export default Projects;