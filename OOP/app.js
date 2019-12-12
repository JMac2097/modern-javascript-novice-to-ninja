// class User {
//     constructor(username, email){

//         this.username = username;
//         this.email = email;
//         this.score = 0;

//     }
//     login() {
//         console.log(`${this.user} just logged in`);
//         return this;
//     }

//     logout() {
//         console.log(`${this.user} just logged out`);
//         return this;

//     }
//     incScore() {
//         this.score += 1;
//         console.log(`${this.user} has a score of ${this.score}`);
//         return this;

//     }
// }

// class Admin extends User {
//     constructor(username, email, title) {
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user) {
//         users = users.filter(u => u.username !== user.username);
//     }
// }


// const user1 = new User('Derek', 'derek@email.com');
// const user2 = new User('Kevin', 'kevin@email.com');
// const user3 = new Admin('Topper', 'topper@email.com', 'ninja');

// let users = [user1, user2, user3];

// console.log(users);

// user3.deleteUser(user2);

// console.log(users);


// function User(username, email) {
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function() {
//     console.log(`${this.username} has logged in`);
//     return this;
// }

// User.prototype.logout = function() {    
//     console.log(`${this.username} has logged out`);
//     return this;
// }

// function Admin(username, email, title) {
//     User.call(this, username, email);
//     this.title = title;
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function() {

// }


// const user1 = new User('mario', 'mario@email.com');
// const user2 = new User('luigi', 'luigi@email.com');
// const user3 = new Admin('Derek', 'derek@email.com', 'ninja');

// console.log(user1, user2, user3);