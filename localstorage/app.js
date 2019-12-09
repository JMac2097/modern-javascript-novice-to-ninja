// store data
localStorage.setItem('name', 'Mario');
localStorage.setItem('age', 50);

// get data
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
// console.log(name, age);

// update data
localStorage.setItem('name', 'Luigi');
localStorage.setItem('age', '40');

name = localStorage.getItem('name');
age = localStorage.getItem('age');
// console.log(name, age);

// deleting data from localstorage
localStorage.removeItem('name');

// clear all localstorage
localStorage.clear();



const todos = [
    {text: 'play MarioKart', author: 'Derek'},
    {text: 'cook dinner', author: 'Arnold'},
    {text: 'Do dishes', author: 'Terry'}
];

localStorage.setItem('todos', JSON.stringify(todos));


const stored = JSON.parse(localStorage.getItem('todos'));

console.log(stored);