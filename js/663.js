const number = +prompt("Введите любое число");

const newArray = [];
for (let i = 1; i <= number; i += 1) {
  newArray.push(i);
}
console.log("задача 6.6.3", newArray);
