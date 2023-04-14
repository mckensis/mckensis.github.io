//Returns an array containing the projects that will display on the page
function GetProjects() {
    const battleship = {
        title: 'Battleship',
        alias: 'battleship',
        info: [
            `Classic Battleship game`, 
            `Play against an AI player`,
            `Destroy 5 ships to win`,
        ],
        development: 'I wrote unit tests with the Jest framework during development of this project. I purposefully caused each newly written test to fail and then built the functionality to allow the test to pass. I repeated this process until the project was complete.',
        live: 'battleship',
        code: 'battleship',
        tags: [ 'Jest', 'Test-Driven Development' ],
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
        development: `I used async and await to fetch data from OpenWeather's APIs such as 'Geocoding', 'CurrentWeather', and '3 Hour / 5 Day Forecast'. I then extracted and formatted the JSON which I required to create the project.`,
        live: 'weather-forecast',
        code: 'weather-forecast',
        tags: [ 'OpenWeather API', 'Async / Await' ],
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
            `Delete a task`,
            `Delete a list`,
        ],
        development: `I created this CRUD style project using localStorage to store the user's data between sessions. All lists, tasks, and task properties such as completion and priority will be saved.`,
        live: 'to-do-list',
        code: 'to-do-list',
        tags: [ 'CRUD', 'Web Storage API', 'LocalStorage' ],
        images: [],
    };

    const bothyCamp = {
        title: 'Bothy Camp',
        alias: 'bothy-camp',
        info: [
            `Login / Register functionality`,
            `View all bothies`,
            `Select a bothy from the list`,
            `Select a bothy from the map`,
            `Create a bothy`,
            `Review a bothy`,
            `Edit a bothy`,
            `Delete a bothy`,
        ],
        development: `I developed this MERN project while learning about MongoDB, Express, Node, and RESTful APIs. I utilised EJS for constructing the webpages, and it has CRUD functionality.`,
        live: 'bothycamp.fly.dev',
        code: 'bothy-camp',
        tags: [ 'MERN', 'CRUD', 'RESTful API', 'Express', 'MongoDB', 'EJS', 'Node' ],
        images: [],
    };

    const cvProject = {
        title: 'CV Building Project',
        alias: 'cv-project',
        info: [
            `Build a CV using my template`,
            `Remove irrelevant sections`,
            `Add relevant information`,
            `Print or Save as PDF`,
        ],
        development: `I developed this React project with CRUD operations which heavily utilises React Functional Components, and hooks such as UseState, UseEffect, and UseRef. I also implemented functionality to print the document or save it as a PDF locally.`,
        live: 'cv-project',
        code: 'cv-project',
        tags: [ 'React', 'CRUD', 'LocalStorage' ],
        images: [],
    };

    //This is the order the projects will display on the page
    return [ cvProject, bothyCamp, todo, battleship, weather ];
}

export default GetProjects;