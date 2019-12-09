
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
 
        const request = new XMLHttpRequest();
        
        request.addEventListener("readystatechange", () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Error getting resource');
            }
        });
        
        request.open("GET", resource);
        request.send();
    });

};

// CallBack HeLL !!!!
// getTodos('todos/derek.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/clive.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/norman.json', (err, data) => {
//             console.log(data);
//         })
//     })
// });

getTodos('todos/derek.json').then(data => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/norman.json');
}).then(data => {
    console.log('Promise 2 resolved', data);
    return getTodos('todos/clive.json');
}).then(data => {
    console.log('Promise 3 resolved', data);
}).catch((err) => {
    console.error('Promise rejected', err);
});