import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Listener from './EventListeners';
import Projects from '../components/Projects';

function LoadPage() {

    const body = document.querySelector('body');
    const header = document.createElement('header');
    const main = document.createElement('main');

    body.append(header);
    body.append(main);

    //The background gradient is an absolute positioned div
    //To disable background scroll on mobile
    const backgroundGradient = document.createElement('div');
    backgroundGradient.className = 'bg';
    body.append(backgroundGradient);

    header.append(Nav());
    main.append(Hero());
    Listener();
}

export default LoadPage;