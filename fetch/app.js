
// async & await

// returns a promise
const getTodos = async () => {

    const response = await fetch('../async-js/todos/derek.json');

    if(response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }

    const data = await response.json();

    return data;

};

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', err.message));

console.log(3);
console.log(4);




// fetch api

// // returns a promise
// fetch('../async-js/todos/clive.json').then(response => {
//     console.log('resolved', response);
//     // returns another promise
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('rejected', err);
// });