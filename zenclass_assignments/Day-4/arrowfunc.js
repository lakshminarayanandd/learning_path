//1.printing odd numbers in an array
/*
let array = [7, 98, 63, 21, 4, 37, 50, 101, 59, 42];

let findOdds = () => {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  console.log(oddArray);
};

findOdds();
*/

//converting all the strings to title caps in a string array

let city = [
  "mumbai",
  "chennai",
  "washington",
  "rome",
  "london",
  "vancouver",
  "moscow",
];

let titleCaps = (element, index, array) => {
  array[index] = element[0].toUpperCase() + element.substring(1);
};

city.forEach(titleCaps);
console.log(city);
