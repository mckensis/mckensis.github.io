import '../styles/style.css';

function About() {
    const about = document.createElement('section');
    about.className = 'about';

    const heading = document.createElement('h2');
    heading.textContent = 'About Me';

    const one = document.createElement('p');
    one.textContent =
        `I'm a self-taught developer who has been fully focusing my time and energy on learning web development since the beginning of 2022.`;

    const two = document.createElement('p');
    two.textContent =
        `I dabbled with C, Python, SQLite, and Lua during Covid lockdowns when I completed Harvard's CS50 course which made me realise how much passion and energy I have for programming, and I decided to focus on a career change.`

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