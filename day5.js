// Print odd numbers in an array
function printOddNums(arr) {
  arr.forEach((element) => {
    if (element % 2 === 1) console.log(first);
  });
}
// Convert all the strings to title caps in a string array
const titleCaps = (inpArr) => {
  let newArr = inpArr.map((el) => {
    return `${el[0].toUpperCase()}${el.slice(1, el.length)}`;
  });
  console.log(newArr);
};
titleCaps(["saab", "volvo", "bmw"]);

// Sum of all numbers in an array
let sum = 0;
function calcSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Return median of two sorted arrays of the same size
const getMedian = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  if (newArr.length % 2 === 0) {
    return (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2;
  }
  return newArr[newArr.length / 2 - 1];
};
console.log(getMedian([1, 2, 3], [4, 5, 6]));
// Remove duplicates from an array

// Rotate an array by k times

// Using arrow functions
// Print odd numbers in an array
const displayOdd = (inpArr) => {
  let oddArr = inpArr.filter((el) => el % 2 === 1);
  console.log(oddArr);
};
displayOdd([2, 3, 4, 1, 10, 22, 33]);

// Convert all the strings to title caps in a string array
const convertToUpCase = (inpArr) => {
  let newArr = inpArr.map((el) => el.toUpperCase());
  console.log(newArr);
};
convertToUpCase(["Saab", "Volvo", "BMW"]);

// Sum of all numbers in an array
const getSum = (inpArr) => {
  let sum = 0;
  sum = inpArr.reduce((acc, num) => {
    return acc + num;
  }, 0);
  console.log(sum);
};
getSum([2, 3, 4, 1, 10, 22, 33]);

// Return all the prime numbers in an array
const getPrimes = (inpArr) => {
  let primesArr = inpArr.filter((el) => {
    for (let i = 2; i * i <= el; i++) if (el % i === 0) return false;
    return el > 1;
  });
  console.log(primesArr);
};
getPrimes([2, 3, 4, 1, 10, 22, 33]);

// Return all the palindromes in an array
const checkPali = (strArr) => {
  let palArr = strArr.filter((el) => {
    let curr = el.toUpperCase();
    let pali = el.toUpperCase().split("").reverse().join("");
    console.log(curr, pali);
    return pali === curr;
  });
  console.log(palArr);
};
checkPali(["Malayalam", "Madam"]);
