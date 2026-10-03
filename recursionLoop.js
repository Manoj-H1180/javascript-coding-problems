function loop(num) {
  if (num > 10) {
    return;
  }

  console.log(num);
  loop(num + 1);
}

loop(1);
