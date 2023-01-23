import '../styles/about.css';

//The icons in the About section
function Icons() {
    const div = document.createElement('div');
    div.className = 'icons';
    
    const html = document.createElement('i');
    html.className = 'fa-brands fa-html5 fa-2xl';
    html.title = 'HTML';
    
    const css = document.createElement('i');
    css.className = 'fa-brands fa-css3-alt fa-2xl';
    css.title = 'CSS';
    
    const js = document.createElement('i');
    js.className = 'fa-brands fa-square-js fa-2xl';
    js.title = 'JavaScript';
    
    const react = document.createElement('i');
    react.className = 'fa-brands fa-react fa-2xl';
    react.title = 'React';
    
    const git = document.createElement('i');
    git.className = 'fa-brands fa-git-alt fa-2xl';
    git.title = 'Git';
    
    const github = document.createElement('i');
    github.className = 'fa-brands fa-github fa-2xl';
    github.title = 'GitHub';
    
    const linux = document.createElement('i');
    linux.className = 'fa-brands fa-linux fa-2xl';
    linux.title = 'Linux';

    div.append(html, js, react, git, github, linux);

    return div;
}

function Facts() {

    const list = document.createElement('ul');
    const one = document.createElement('li');
    const two = document.createElement('li');
    const three = document.createElement('li');

    one.textContent = `I could spend all day cooking massive pots of food in the kitchen (and have done many times).`;
    two.textContent = `I love playing MS-DOS point & click adventures and dungeon crawlers from the late 80s/90s such as Day of the Tentacle & Eye of the Beholder.`;
    three.textContent = `I worked for several years as part of upper management in a pub which was owned by one of the largest pub companies in the UK.`;

    list.append(one, two, three);

    return list;
}

function About() {
    const about = document.createElement('section');
    about.className = 'about';

    const heading = document.createElement('h2');
    heading.textContent = 'About Me';

    const paraOne = document.createElement('p');
    paraOne.textContent = `I'm a self-taught developer building a portfolio of projects. `
        + `My goal is to get hired by a company where I can begin my career, and continue learning and developing my skills.`;

    const paraTwo = document.createElement('p');
    paraTwo.textContent = `I love the feeling of building something out of nothing, `;
        + `and I have a ton of patience which proves to be extremely helpful when problem solving.`

    const paraThree = document.createElement('p');
    paraThree.textContent = `I am open to learning and using other tech, but I have mainly used:`;

    const facts = document.createElement('h2');
    facts.textContent = 'A Few Facts About Me';

    about.append(heading, paraOne, paraTwo, paraThree);
    about.append(Icons());
    about.append(facts, Facts())

    return about;
}


export default About;