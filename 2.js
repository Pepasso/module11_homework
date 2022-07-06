function checkNum(n) {
  if (!Number.isInteger(n) || n < 2 || n > 1000) return "данные неверны";

  let koren = Math.sqrt(n);
  for (let i = 2; i <= koren; i++)
    if (n % i === 0) return "не простое число";

  return "простое число";
}

console.log(checkNum(555));
console.log(checkNum(7));