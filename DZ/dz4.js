// Создайте объект user, содержащий поле nameсо значением ‘John’

let user = {name: 'John'};

//#1 Запросить у пользователя ввод числа. Записать введенное значение в поле ageобъекта user
user.age = prompt('Введите возраст: ');
console.log(user);

//#2 Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.
let admin = Object.assign({role: 'admin'}, user);
console.log(admin);

//#3 *Записать все значения полей объекта admin в отдельные переменные. 
// Имена переменных должны совпадать с названиями полей.
let {role, name, age} = admin;
console.log(role, name, age);