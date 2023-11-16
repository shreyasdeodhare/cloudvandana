const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements of the array : ', function(input) {

  const array = input.split(' ').map(function(element) {
    return Number(element);
  });

  let swapped;
  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] < array[j + 1]) {

        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  console.log('Descending Order:', array);

  rl.close();
});