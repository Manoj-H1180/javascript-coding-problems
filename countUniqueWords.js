let words = [
  "apple",
  "banana",
  "orange",
  "apple",
  "mango",
  "banana",
  "grape",
  "apple",
  "orange",
  "mango",
  "banana",
  "kiwi",
];

let checkedWords = [];

for (let i = 0; i < words.length; i++) {
  let count = 1;
  let alreadyChecked = false;

  for (let k = 0; k < checkedWords.length; k++) {
    if (checkedWords[k] === words[i]) {
      alreadyChecked = true;
      break;
    }
  }

  if (alreadyChecked) {
    continue;
  }

  for (let j = i + 1; j < words.length; j++) {
    if (words[i] === words[j]) {
      count++;
    }
  }
  if (count >= 1) {
    console.log(`${words[i]} = ${count}`);
  }

  checkedWords[checkedWords.length] = words[i];
}
