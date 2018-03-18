import mdcAutoInit from '@material/auto-init';
import {MDCRipple} from '@material/ripple';

mdcAutoInit.register(MDCRipple.name, MDCRipple);

mdcAutoInit();

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
}, {passive: true});