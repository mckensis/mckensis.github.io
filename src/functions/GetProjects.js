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
        development: `I created this CRUD style project using localStorage to store the user's lists and tasks, and task properties such as completion and priority.`,
        live: 'to-do-list',
        code: 'to-do-list',
        tags: [ 'CRUD', 'Web Storage API', 'LocalStorage' ],
        images: [],
    };

    return [ todo, battleship, weather ];
}

export default GetProjects;