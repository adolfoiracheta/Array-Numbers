// an array of numbers
let arrayNumbers1 = [[1,2,3], [4,5,6], [7,8,9]];
let arrayNumbers2 = [];

for (let i = 0; i < arrayNumbers1.length; i++) {
  for (let j = 0; j < arrayNumbers1.length; j++) {
    arrayNumbers2.push(arrayNumbers1[i][j]);
  }
}
console.log(arrayNumbers2);