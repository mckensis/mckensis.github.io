//Returns screenshots from the dist folder which match the project variable
function GetScreenshots(project, context) {
    let images = [];

    console.log(project, context);

    //For each item in the images/screenshots folder
    //If the image name matches the project variable,
    //Add it to the images array
    context.keys().forEach((item) => {
        if (item.includes(project)) {
            let temp = context(item);
            images.push(temp);
        }
    });

    console.log(images);
    return images;
}


export default GetScreenshots;