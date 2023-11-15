const fibonacciSequence = (n) => {
  //creates an array of numbers with "n" amount of numbers
  let arr = Array.from(Array(n).keys());

  //loops from 2 index and until reaches index n
  for (let i = 2; i < n; i++) {
    // sum of 2 previous numbers in sequence
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let arr = Array.from(Array(n).keys());
  }
}

console.log(fibonacciSequence(7));
