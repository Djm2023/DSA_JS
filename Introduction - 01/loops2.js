// Write a function to search an element in the array and return the index, if not found return -1;

function searchElement(k, arr) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      index = i;
    }
  }
  if (index !== null) {
    return index;
  } else {
    return -1;
  }
}

const arr = [5, 6, 12, 14, 25, 122, 36, 99, 456];
console.log(searchElement(99, arr));

// More optimised solution

function searchElementOne(k, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
}

const arrOne = [5, 6, 12, 14, 25, 122, 36, 99, 456];
console.log(searchElementOne(99, arrOne));

// Example - 02 Write a function to count the number of negative numbers in an array.

let arrNeg = [1, -5, 6, 8, 12, -88, -125];

function countNegativeNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegativeNum(arrNeg));

// Example - 03 Find the largest number in the array.

function largestNum(arr) {
  let largeNum = arr[0]; //or can be taken -Infinity
  for (let i = 0; i < arr.length-1 ; i++) {
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }
  return largeNum;
}

const arrLargestNum = [-2,52,65,25,-100,-489,36,5,2,28];
console.log(largestNum(arrLargestNum))

// Example - 04 Find the smallest number in the array.

function smallestNum(arr) {
  let smallNum = arr[0]; //or can be taken Infinity
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
  }
  return smallNum;
}

const arrsmallestNum = [-2,52,65,25,-100,-489,36,5,2,28];
console.log(smallestNum(arrsmallestNum))