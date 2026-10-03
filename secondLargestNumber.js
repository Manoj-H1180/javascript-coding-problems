function findSecondLargestNum(num) {
  let firstLargestNum = -Infinity;
  let secondLargestNum = -Infinity;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > firstLargestNum) {
      secondLargestNum = firstLargestNum;
      firstLargestNum = num[i];
    } else if (num[i] > secondLargestNum) {
      secondLargestNum = num[i];
    }
  }
  return secondLargestNum;
}

let numArray = [2, 4, 5, 7, 1, 3, 6, 9, 10, 8];

let output = findSecondLargestNum(numArray);
console.log(output);
