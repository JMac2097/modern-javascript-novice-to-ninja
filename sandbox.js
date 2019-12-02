
const products = [
    {name: 'mario', price: 20},
    {name: 'luigi', price: 10},
    {name: 'chun-li', price: 50},
    {name: 'yoshi', price: 30},
    {name: 'shaun', price: 70}
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`
// });


const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);