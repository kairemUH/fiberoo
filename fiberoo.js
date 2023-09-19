function fib() {
  const returnArray = [];
  returnArray[0] = 0;
  returnArray[1] = 1;

  for (let i = 2; i < 50; i++) {
    returnArray[i] = returnArray[i - 1] + returnArray[i - 2];
  }

  return returnArray;
}

function numsToStrings(numArr) {
  return _.map(numArr, function (num) { return `${num}`; });
}

function numEvenNums(numArr) {
  const filteredByEven = _.filter(numArr, function (num) { return num % 2 === 0; });

  return filteredByEven.length;
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
