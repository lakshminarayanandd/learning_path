//a.printing odd numbers in an array
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

//b.converting all the strings to title caps in a string array
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

//c.sum of all numbers in an array
let numbers = [21, 40, 78, 36, 10, 25, 4, 91, 17, 35];

let sumNumbers = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

sumNumbers();

//d.return the prime numbers in an array
let numbers = [21, 17, 8, 24, 69, 78, 47, 87, 93, 100, 55, 23];
let isPrime = (number) => {
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

let getPrimeNumbers = () => {
  let primeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  console.log(primeNumbers);
};

getPrimeNumbers();

//e.return all palindromes in an array
let isPalindrome = (word) => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

let getPalindrome = (words) => {
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
