let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findIndex(numb) {
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] == 10) {
      return i;
    }
  }
  return -1;
}

let output = findIndex(numArr);
console.log(output);
