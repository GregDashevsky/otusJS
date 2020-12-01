//#1
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

//#2
function isWord(str) {
    let x;
    const testArr = str.split(' ');
    if (testArr.length === 1) {
        x = true;
    } else {
        x = false;
    }
    console.log(x);
}
const userInput = prompt('Введите одно слово или несколько: ');
isWord(userInput);

//#3
function pow(a,x){
    let mult = 1;
    for(i = 1; i <= x; i++){
        mult = mult * a;
    }
    return mult;
}
let result = pow(3, 5);
console.log(result);