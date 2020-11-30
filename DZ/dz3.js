// #1 Вывести в консоль сумму всехцелыхчисел от 50 до 100.
let sum = 0;
for (let i = 50; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// #2.Вывести в консоль таблицу умножения на 7.
const seven = 7;
for (let i = 1; i <= 10; i++) {
    let multip = seven * i;
    console.log(seven + ' * ' + i + ' = ' + multip);
}

// #3 - Не работает, возможно из-за счётчика
//Запросить у пользователя ввод числа N. 
//Вывести в консоль среднее арифметическое всехнечётныхчисел от 1 до N
const numberN = +prompt('Введите число: ');
let numberSum = 0;
let i;
for (i = 1; i <= numberN; i++) {
    if (i % 2 !== 0) {
        numberSum = numberSum + i;
    }

}
console.log('Среднее арифметическое = ' + (numberSum / i).toFixed(2));