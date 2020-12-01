let user = {name: 'John'};

//#1
user.age = prompt('Введите возраст: ');
console.log(user);

//#2
let admin = Object.assign({role: 'admin'}, user);
console.log(admin);

//#3
let {role, name, age} = admin;
console.log(role, name, age);