const rhymes = ["free","degree","key","tree","agree",
                "tea","guarantee","knee","Tennessee",
                "debris","bee","flee","ski",
                "jubilee","LSD","glee","referee",
                "VIP","oui","banshee","trustee", "nominee", "licensee", "rupee", "pee", "ghee","cree","hee hee", "potpourri", "dal makhani", "chapati"];
const noRhymes = ["amy","aidan"];

const button = document.querySelector('button')
const body = document.querySelector('body');
const word = document.createElement('p');
const sentence = document.createElement('p');

button.addEventListener('click', findOut);

function findOut(e) {

    if (e) {
    e.preventDefault();
    }

    const previousWord = word.textContent;
    const randomNumber = random();

    if (randomNumber < 29) {
        rhymeCheck();
    } else { 
        noRhymeCheck();
    }

    if (word.textContent === previousWord) {
        findOut();
    } else {
        body.appendChild(word);
        body.appendChild(sentence);
    }
};

//Choose a random number between 1 and 10
function random() {
    const max = 30;
    const min = 1;
    return choice = Math.floor(Math.random() * (max - min + 1) + min);
}

//Return a rhyming word
function rhymeCheck() {
    return word.textContent = rhymes[Math.floor(Math.random() * rhymes.length)], sentence.textContent = "rhymes with spee!";
}

//Return a non-rhyming word
function noRhymeCheck() {
    return word.textContent = noRhymes[Math.floor(Math.random() * noRhymes.length)], sentence.textContent = "doesn't rhyme with spee!";
}