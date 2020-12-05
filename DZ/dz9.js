// ##1.Даны длины трёхсторон треугольника.
// Определить, является ли треугольник прямоугольным.

const catet1 = 10;
const catet2 = 10;
const gipotenusa = 14.15;

function pifagor(a, b, c) {
  let result;
  a = Math.pow(a, 2);
  b = Math.pow(b, 2);
  c = Math.pow(c, 2);
  if (Math.floor(c) === Math.floor(a) + Math.floor(b)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
const answer = pifagor(catet1, catet2, gipotenusa);
console.log(answer);

// ##2.Пользователь вводит число R.
// Написать программу, которая выведет в консоль длину окружности
// и площадь круга с радиусом R.

const userRad = prompt('Введите радиус: ');

function circumference(r) {
  result = 2 * Math.PI * r;
  return result;
}

function square(r) {
  result = Math.PI * Math.pow(r, 2);
  return result;
}
const userCirc = circumference(userRad);
const userSquare = square(userRad);
console.log(userCirc, userSquare);

// ##3* Пользователь вводит числа a, b и c.
// Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

const a = 1;
const b = -6;
const c = 9;

// function discriminant(a, b, c) {
//     let result = Math.pow(b, 2) - 4 * a * c;
//     return result;
// }
// const disc = discriminant(a, b, c);

function roots(a, b, c) {
  const d = Math.pow(b, 2) - 4 * a * c;
  let solution = {};
  console.log(a, b, c, d); //
  console.log(typeof (a), typeof (b), typeof (c), typeof (d)); //
  if (d == 0) {
    solution = (-b + Math.sqrt(d)) / (2 * a);
  } else if (d > 0) {
    const tempArr = [];
    tempArr.push(((-b + Math.sqrt(d)) / (2 * a)));
    tempArr.push(((-b - Math.sqrt(d)) / (2 * a)));
    solution['Квадратные корни: '] = tempArr;
    // } else {
    //     solution = "Нет корней";
    // }
    return solution;
  }
}
// let def = typeof (disc);
console.log(roots(a, b, c));
