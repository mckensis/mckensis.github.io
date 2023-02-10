//Toggle the nav menu when hamburger is clicked
function ToggleNav(burger, list) {
    burger.classList.toggle('open');
    list.classList.toggle('open');
}

//Handles showing and hiding of the nav menu
function HandleNav(target) {
    let navList = document.querySelector('nav ul');
    let navListItem = navList.querySelectorAll('li');
    let burgerMenu = document.querySelector('.burger');

    //Can't scroll the page if the nav is open
    if (navList.classList.contains('open')) {
        document.body.classList.toggle('locked');
    }
    if (target !== navListItem
    && target !== burgerMenu) {
        HideNav(navList, burgerMenu);
    };
}

//Hides the nav
function HideNav(navList, burgerMenu) {
    document.body.classList.remove('locked');
    navList.classList.remove('open');
    burgerMenu.classList.remove('open');
}

//Listen for a click on the burger
function NavListeners(burger, list) {
    burger.addEventListener('click', () => {
        ToggleNav(burger, list);
    });
}

export { NavListeners, HandleNav, ToggleNav, HideNav };