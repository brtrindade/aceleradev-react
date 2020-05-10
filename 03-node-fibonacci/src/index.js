'use strict'

const fibonacci = (maxValue = 350) => {
  let fibonacciSequence = []
  let i = 0;
  while (fibonacciIndexValue(i) < maxValue) {
    fibonacciSequence.push(fibonacciIndexValue(i));
    i += 1;
  }
  return fibonacciSequence;
};

const fibonacciIndexValue = i => {
  if (i < 2) {
    return i;
  } else {
    return fibonacciIndexValue(i - 1) + fibonacciIndexValue(i - 2);
  }
};
  
const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci
}
