function findNegativeNumbers(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count++;
    }
  }

  return count;
}

let numberArray = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5, 6, 7, -6];

let output = findNegativeNumbers(numberArray);
console.log(output);
