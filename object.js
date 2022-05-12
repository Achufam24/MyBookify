// class User {
//     constructor(email,name,password){
//         this.email = email
//         this.name= name
//         this.password=password
//         this.score=0;
//     }
//     login (){
//         console.log(this.email, 'has logged in');
//         return this;
//     }
//     logout (){
//         console.log(this.email, 'has logged out');
//         return this;
//     }
//     updateScore (){
//         this.score++
//         console.log(this.email, 'has a score of', this.score);
//         return this;
//     }
// };
// var userOne = new User('achu@gmail.com','Achu',null);
// var userTwo = new User('Mary@yahoo.com','Mary',null);
// var userThree = new User('yosky@gmail.com', 'Yosky',12345);

// userOne.login().updateScore().updateScore().logout();

// function User(email,name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
// }

// User.prototype.login = function () {
//     this.online = true;
//     console.log(this.email, 'has logged in');
// }
// User.prototype.logout = function () {
//     this.online = false;
//     console.log(this.email, 'has logged out');
// }

// function Admin(...args) {
//     User.apply(this,args);
//     this.role = "Super Admin";
// }

//  Admin.prototype = Object.create(User.prototype);
//  Admin.prototype.deleteUser = function (u) {
//     users = users.filter(user => {
//         return user.email != u.email
//     })
//  };

// var userOne = new User('achu@gmail.com', 'Achu')
// var userTwo = new User('mary@gmail.com', 'Mary')
// var admin = new Admin('shaunninjas@g.com', 'shaun');

// var users = [userOne,userTwo, admin]

// console.log(userOne);
// console.log(userTwo);

// userTwo.login();
// userOne.logout();


// console.log(admin);
// console.log(users);
//console.log(add);



