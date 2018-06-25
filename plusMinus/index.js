'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    let fractions = [];
    let arrLen = arr.length;
    arr.forEach((num) => {
     if (num !== 0) {
         if (num > 0) {
             positives += 1;
         } else {
             negatives += 1;
         }
     } else {
         zeros += 1;
     }
 })
    fractions.push((positives / arrLen).toFixed(6), (negatives / arrLen).toFixed(6), (zeros / arrLen).toFixed(6))
    
    fractions.forEach(frac => {
    console.log(frac)
    })
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
