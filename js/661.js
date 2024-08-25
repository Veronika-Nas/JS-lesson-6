const text = prompt("Введите текст");
const lowerCaseText = text.toLowerCase();

const leftToRight = lowerCaseText.split(" ").join("");
const rightToLeft = leftToRight.split("").reverse().join("");

if (leftToRight === rightToLeft) {
  console.log("задача 6.6.1", `"${text}" - Палиндром`);
} else {
  console.log("задача 6.6.1", `"${text}" - Не палиндром`);
}
