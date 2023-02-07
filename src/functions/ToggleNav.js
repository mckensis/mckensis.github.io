//Toggle the nav menu when hamburger is clicked
function ToggleNav(burger, list) {
    burger.classList.toggle('open');
    list.classList.toggle('open');
}

function NavListeners(burger, list) {
    burger.addEventListener('click', () => {
        ToggleNav(burger, list);
    });
}

export default NavListeners;