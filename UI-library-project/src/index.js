// import ToolTip from './ninja-ui/tooltip';
// import Dropdown from './ninja-ui/dropdown';
// import Tabs from './ninja-ui/tabs';
// import Snackbar from './ninja-ui/snackbar';

// // create a tootip
// const tooltip = new ToolTip(document.querySelector('.tooltip'));

// tooltip.init();

// // create dropdowns
// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//     const instance = new Dropdown(dropdown);
//     instance.init();
// });

// // create tabs
// const tabs = new Tabs(document.querySelector('.tabs'));
// tabs.init();

// // create snackbar
// const snackbar = new Snackbar();
// snackbar.init();

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     snackbar.show('You clicked me :)');
// });


import Tooltip from './derek-ui/tooltip';
import Tabs from './derek-ui/tabs';
import Dropdowns from './derek-ui/dropdown';
import Snackbar from './derek-ui/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create the dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach( dropdown => {
    const instance = new Dropdowns(dropdown);
    instance.init();
});

// create tabs 
const tabs = new Tabs(document.querySelector('.tabs'));

tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You have clicked me again');
});