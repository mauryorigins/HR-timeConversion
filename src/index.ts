/* eslint-disable no-return-assign */
// import inmutability from './inmutability';
// import bigTestCode from './bigTestCode';

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(ar: Array<number>): number {
  let suma = 0;
  ar.forEach((element) => suma += element);
  return suma;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 2, 3, 4, 10, 11];
  const result = simpleArraySum(testArray);
  console.log('Result: ', result);
}

main();
