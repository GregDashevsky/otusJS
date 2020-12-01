let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//#1
let sum = 0;
array.forEach(function (el) {
    sum = sum + el;
});
console.log(sum);

//#2
let array2 = array.map(function (el) {
    let mult = el * 2;
    return mult;
});
console.log(array2);

//#3
//наверняка это можно было решить с помощью сравнения массива...
console.log(Math.min.apply(null, array), Math.max.apply(null, array));