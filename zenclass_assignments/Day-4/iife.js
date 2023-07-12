//a.printing odd numbers in an array
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

//b.converting all the strings to title caps in a string array
//using anonymous function
let city = [
  "mumbai",
  "chennai",
  "washington",
  "rome",
  "london",
  "vancouver",
  "moscow",
];

let titleCaps = function (element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
};

city.forEach(titleCaps);
console.log(city);

//using IIFE
let city = [
  "mumbai",
  "chennai",
  "washington",
  "rome",
  "london",
  "vancouver",
  "moscow",
];

(function () {
  let capsCity = [];
  for (let i = 0; i < city.length; i++) {
    let capitalized = (city[i] =
      city[i][0].toUpperCase() + city[i].substring(1));
    capsCity.push(capitalized);
  }
  console.log(capsCity);
})();

//c.sum of all numbers in an array
//using anonymous function
let numbers = [21, 40, 78, 36, 10, 25, 4, 91, 17, 35];

let sumNumbers = function () {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

sumNumbers();

//using IIFE
let numbers = [21, 40, 78, 36, 10, 25, 4, 91, 17, 35];

(function () {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
})();

//d.return the prime numbers in an array
//using anonymous function
let numbers = [21, 17, 8, 24, 69, 78, 47, 87, 93, 100, 55, 23];
let isPrime = function (number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }

    return true;
  }
};

let getPrimeNumbers = function () {
  let primeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  console.log(primeNumbers);
};

getPrimeNumbers();

//using IIFE

(function () {
  let numbers = [21, 17, 8, 24, 69, 78, 47, 87, 93, 100, 55, 23];
  let isPrime = function (number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }

      return true;
    }
  };

  let primeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  console.log(primeNumbers);
})();

//e.return all palindromes in an array
//using anonymous function
let isPalindrome = function (word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

let getPalindrome = function (words) {
  let palindromes = [];
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      palindromes.push(words[i]);
    }
  }
  return palindromes;
};

let words = ["madam", "sir", "topup", "level", "radar", "minimum"];
let palindromes = getPalindrome(words);
console.log(palindromes);

//using IIFE
(function () {
  let words = ["madam", "sir", "topup", "level", "radar", "minimum"];
  let isPalindrome = function (word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  };

  let palindromes = [];
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      palindromes.push(words[i]);
    }
  }
  console.log(palindromes);
})();

//f.return median of two sorted arrays of the same size
//using anonymous function

let findMedian = function (numbers1, numbers2) {
  const merged = [...numbers1, ...numbers2];
  merged.sort((a, b) => a - b);

  const length = merged.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

let numbers1 = [1, 3, 5];
let numbers2 = [2, 4, 6];
let median = findMedian(numbers1, numbers2);
console.log(median);

//using IIFE
(function () {
  let numbers1 = [1, 3, 5];
  let numbers2 = [2, 4, 6];
  const merged = [...numbers1, ...numbers2];
  merged.sort((a, b) => a - b);

  const length = merged.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    console.log((merged[mid - 1] + merged[mid]) / 2);
  } else {
    console.log(merged[mid]);
  }
})();

//g.remove duplicates from an array
//using anonymous function

let removeDuplicates = function (numbers) {
  let uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  return uniqueNumbers;
};

let numbers = [1, 3, 5, 7, 1, 5, 8, 4, 9, 5, 7];
let result = removeDuplicates(numbers);
console.log(result);

//using IIFE
(function () {
  let numbers = [1, 3, 5, 7, 1, 5, 8, 4, 9, 5, 7];
  let uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  console.log(uniqueNumbers);
})();

//h.rotate an array by k times
//using anonymous function
let rotateArray = function (arr, k) {
  if (k === 0) {
    return arr;
  }

  const rotations = k % arr.length;
  const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];

  return rotatedArray;
};

const array = [1, 2, 3, 4, 5];
const rotations = 4;
const rotatedArray = rotateArray(array, rotations);
console.log(rotatedArray);

//using IIFE
(function () {
  let rotateArray = function (arr, k) {
    if (k === 0) {
      return arr;
    }
    const rotations = k % arr.length;
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];

    return rotatedArray;
  };

  const array = [1, 2, 3, 4, 5];
  const rotations = 4;
  const rotatedArray = rotateArray(array, rotations);
  console.log(rotatedArray);
})();
