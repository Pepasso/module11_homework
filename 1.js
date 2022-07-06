let arr = [33, 107, 0, 2, NaN, true, 605, "28", "test", null, 0, 10, "try"];
let zero = 0;
let even = 0;
let odd = 0;

function findEl() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (typeof (arr[i]) !== "number" || typeof (arr[i]) === "NaN") {
      console.log(`${arr[i]} -  это не число`);
    } else if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(`${zero} - нулей`);
  console.log(`${even} - чётных чисел`);
  console.log(`${odd} - не чётных чисел`);
}

findEl();