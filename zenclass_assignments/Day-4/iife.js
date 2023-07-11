//1.printing odd numbers in an array
//using anonymous function

let array = [7, 98, 63, 21, 4, 37, 50, 101, 59, 42];

let findOdds = function () {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  console.log(oddArray);
};

findOdds();

//using IIFE
let array = [7, 98, 63, 21, 4, 37, 50, 101, 59, 42];

(function () {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  console.log(oddArray);
})();
