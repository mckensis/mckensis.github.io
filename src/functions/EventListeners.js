import LoadSection from "./LoadSection";
import { HandleNav } from "./ToggleNav";

function Listener() {
    const internal = document.querySelectorAll('.internal-link');

    //Listen for a click on any nav link or internal link
    internal.forEach(link => {
        link.addEventListener('click', (e) => {
            LoadSection(internal, e.target);
        });
    });

    //Hide the nav menu if it's open and the user clicks outside of it
    document.addEventListener('click', (e) => {
        HandleNav(e.target);
        return;
    });
}

export default Listener;