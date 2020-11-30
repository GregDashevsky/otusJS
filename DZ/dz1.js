// #1
const a = 10;
const b = 5;
console.log(a * b, a + b);

// #2
const c = '12sdf';
const d = 'a8v';
console.log((c + d).length);

// #3
const userInput = prompt('Введите трёхзначное число: ');
let arr0 = userInput.split('');
let userSum = 0;
for (i = 1; i <= arr0.length;) {
   let numArr = +arr0.pop();
   userSum = userSum + numArr;
}
console.log('Сумма введённых чисел: ' + userSum);