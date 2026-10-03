function findLargestNumber(numsArray) {
  let largestNum = 0;
  for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > largestNum) {
      largestNum = numsArray[i];
    }
  }
  return largestNum;
}

let arr = [-2, 5, 4, 7, 3, 6, 9, 8, 10, 100];

let output = findLargestNumber(arr);
console.log(output);
