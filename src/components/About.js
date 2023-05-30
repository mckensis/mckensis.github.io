import '../styles/style.css';

function About() {
    const about = document.createElement('section');
    about.className = 'about';

    const heading = document.createElement('h2');
    heading.textContent = 'About Me';

    const one = document.createElement('p');
    one.textContent =
        `I'm a self-taught developer who has been fully focusing my time and energy on learning web development since the beginning of 2022 when I decided to work towards a career change into software development. I've always been passionate about computers and technology, and this passion and interest has continued to grow as time has passed.`;

    const two = document.createElement('p');
    two.textContent = 
        `I began my journey into web development via The Odin Project's curriculum. I spent a year creating projects with vanilla JavaScript, Webpack, and Git. I then moved on to learn React, and have been doing so for the past 6 months. I believe that keeping up to date with new technologies is essential in this industry, and learning is not something that should ever be considered complete.`;
    
    const three = document.createElement('p');
    three.textContent =
        `My current goal is to find a role where I can begin my career and continue developing my skillset within a professional environment while doing a job that I am incredibly passionate about.`;
    
    let sentences = [one, two, three];

    sentences.forEach(sentence => {
        about.append(sentence);
        //Append an hr if it's not the last sentence
        if (sentences.indexOf(sentence) !== sentences.length -1) {
            const hr = document.createElement('hr');
            about.append(hr);
        };
    });

    return about;
}

export default About;