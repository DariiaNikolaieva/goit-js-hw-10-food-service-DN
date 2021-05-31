import './styles.css';
import menu from './menu.json';
import menuCardsTpl from './templates/menu.hbs';

// const menuRef = document.querySelector('.js-menu');

// const markup = menuCardsTpl(menu);

// menuRef.insertAdjacentHTML('beforeend', markup);

console.log(menuCardsTpl(menu));
