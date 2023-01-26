import '../styles/about.css';
import '../styles/style.css';

function About() {
    const about = document.createElement('section');
    about.className = 'about';

    const heading = document.createElement('h2');
    heading.textContent = 'About Me';

    const paraOne = document.createElement('p');
    paraOne.textContent = `I'm a self-taught developer hoping to enter the industry, and I'm not afraid to put in the work to make it happen. `
        + `I'm extremely passionate about creating user-friendly experiences on the internet. `
        + `My current goal is to find a role where I can begin my career and continue learning / developing my skills.`;

    const paraTwo = document.createElement('p');
    paraTwo.textContent = `I love turning a blank page into something I am proud of, `
        + `and the feeling you get after successfully troubleshooting an issue.`;

    const facts = document.createElement('h2');
    facts.textContent = 'A Few Facts';

    const factOne = document.createElement('p');
    const factTwo = document.createElement('p');
    const factThree = document.createElement('p');

    factOne.textContent = `I love cooking, especially various types of curries, and also for themed meals i.e. Burns' Night, Halloween, etc.`;
    factTwo.textContent = `90s point & click games such as the Monkey Island series, and Legend of Kyrandia are among my favourites.`;
    factThree.textContent = `I worked for over five years as part of upper management in a pub which was owned by one of the largest pub companies in the UK.`;

    const hr = document.createElement('hr');

    about.append(paraOne, paraTwo, hr, factOne, factTwo, factThree);

    return about;
}


export default About;