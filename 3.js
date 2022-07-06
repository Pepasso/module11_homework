// Сначала сделал как отдельные функции, но потом внимательно прочитав понял что это должна быть функция в функие

// function firstNum(x) {
//   return x;
// }

// function secondNum(y) {
//   return y;
// }

// const sumNum = firstNum(10) + secondNum(11);

// console.log(sumNum);

function sumNum(firstArg) {
  return function (secondArg) {
    return firstArg + secondArg;
  };
}
console.log(sumNum(10)(11));