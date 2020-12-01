//Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка:
//1.Датой. 2.Адресом электроннойпочты. 3.*Номером телефона.

function regTest(input) {
    const phone = /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    const email = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/;
    const date = /\d{4}-\d{2}-\d{2}/;

    if (phone.test(input)) {
        return "Это номер телефона";
    } else if (email.test(input)) {
        return "Это email";
    } else if (date.test(input)) {
        return "Это дата";
    } else {
        return "Не подходит";
    }
}

const userInput = prompt('Введите телефон в формате +7(916)111-12-15, или email, или дату в формате 2000-01-01');
console.log(regTest(userInput));