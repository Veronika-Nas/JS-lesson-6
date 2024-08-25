const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};

let arrValues = [];

const valuesList = Object.values(obj);

for (let i = 0; i < valuesList.length; i++) {
  if (Array.isArray(valuesList[i])) {
    arrValues.push(...valuesList[i]);
  } else {
    arrValues.push(valuesList[i]);
  }
}
console.log("задача 6.6.5", arrValues);
