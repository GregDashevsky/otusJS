// #1 Напишите функцию diff, которая получает в качестве параметров 2 числа
// и возвращает разницу между наибольшим и наименьшим.
function diff(firstNumber, secondNumber) {
  let differ;
  if (firstNumber > secondNumber) {
    differ = firstNumber - secondNumber;
  } else {
    differ = secondNumber - firstNumber;
  }
  console.log(differ);
}
diff(10, 6);

// #2 Напишите функциюisWord, которая принимает на вход текстовуюстроку.
// Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.
function isWord(str) {
  let x;
  const testArr = str.split(" ");
  if (testArr.length === 1) {
    x = true;
  } else {
    x = false;
  }
  console.log(x);
}
const userInput = prompt("Введите одно слово или несколько: ");
isWord(userInput);

// #3 Напишите функциюpow(a, x), которая вернёт значение числа a, возведённого в степень x.
function pow(a, x) {
  let mult = 1;
  for (i = 1; i <= x; i++) {
    mult *= a;
  }
  return mult;
}
const result = pow(3, 5);
console.log(result);
