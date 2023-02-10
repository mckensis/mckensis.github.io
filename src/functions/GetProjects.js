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
        development: `I used async and await along with multiple APIs from OpenWeather such as 'Geocoding', 'CurrentWeather', and '3 Hour / 5 Day Forecast'.`,
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
        ],
        development: `I created this CRUD-style project using 'localstorage' to store the user's tasks and lists that they have created, as well as any tasks that have been completed.`,
        live: 'to-do-list',
        code: 'to-do-list',
        tags: [ 'CRUD', 'LocalStorage' ],
        images: [],
    };

    return [ battleship, weather, todo ];
}

export default GetProjects;