//Returns an array containing the projects that will display on the page
function GetProjects() {
    const battleship = {
        title: 'Battleship',
        alias: 'battleship',
        development: 'I developed this web version of the classic Battleship game while learning the Jest testing framework. I coded the project following Test-Driven Development practices, where I purposefully caused each newly written test to fail and then built the functionality to allow the test to pass. I repeated this process until the project was complete.',
        live: 'battleship',
        code: 'battleship',
        tags: [ 'Jest', 'Test-Driven Development', 'Javascript', 'Git' ],
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
        tags: [ 'OpenWeather API', 'Async / Await', 'Git' ],
        images: [],
    };

    const todo = {
        title: 'To-Do List',
        alias: 'to-do-list',
        development: `I created this To-Do List project in order to keep track of important tasks easily. I originally coded this CRUD style project in 2022 with vanilla Javascript and utilised localStorage to store the user's data between sessions. I have since converted the project into a React app and added Firebase support. This allowed me to implement user Auth and storage of data on Firestore rather than localStorage.`,
        live: 'to-do-list-react',
        code: 'to-do-list-react',
        tags: ['React', 'Firebase', 'Auth', 'Firestore', 'CRUD', 'Git' ],
        images: [],
    };

    const bothyCamp = {
        title: 'Bothy Camp',
        alias: 'bothy-camp',
        development: `I programmed this project while learning about the MERN stack and RESTful APIs. The purpose of the project is to display all bothies across Scotland, view reviews of those bothies, and allow a user to review or add a bothy to the database. I utilised EJS for constructing the templates and pages, and programmed CRUD functionality for the project to allow creation of users, bothies, and reviews. I used Mongo Atlas to connect the project to a database to store all data such as users, reviews, and bothies.`,
        live: 'bothycamp.fly.dev',
        code: 'bothy-camp',
        tags: [ 'MERN', 'CRUD', 'RESTful API', 'EJS', 'Node', 'Git' ],
        images: [],
    };

    const cvProject = {
        title: 'CV Project',
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
        tags: [ 'React', 'CRUD', 'LocalStorage', 'Git' ],
        images: [],
    };

    const shop = {
        title: 'Shopping Cart',
        alias: 'shopping-cart',
        info: [
            `Multipage shop site`,
            `Homepage, store, and contact pages`,
            `Add to basket functionality`
        ],
        development: `I developed this multipage project in React as a mock-up of a functional shop website. I implemented Client-Side Routing to allow users to visit the different pages of the project. I wrote the code with modern React Hooks and programmed a shopping cart to enable the user to add and remove products from the shop.`,
        live: 'shopping-cart',
        code: 'shopping-cart',
        tags: [ 'React', 'Hash Router', 'Client-Side Routing', 'Git' ],
        images: [],
    };
    
    //This is the order the projects will display on the page
    return [ cvProject, shop, todo, bothyCamp, battleship ];
}

export default GetProjects;