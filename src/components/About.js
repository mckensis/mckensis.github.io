import '../styles/about.css';
import '../styles/style.css';

function About() {
    const about = document.createElement('section');
    about.className = 'about';

    const heading = document.createElement('h2');
    heading.textContent = 'About Me';

    const para = document.createElement('p');
    para.textContent = `I'm a self-taught developer who has been learning web development since early 2022 and I'm now looking to enter the industry and grow within a professional environment. `
        + `My current goal is to find a role where I can begin my career and continue developing my skillset.`;

    const tools = document.createElement('p');
    tools.textContent = 'While I am eager to learn new languages & frameworks, I am primarily using the following at the moment:';

    const hr = document.createElement('hr');

    about.append(para, hr, tools);

    return about;
}

export default About;