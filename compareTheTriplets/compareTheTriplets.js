'use strict';

const fs = require('fs');

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

// Complete the solve function below.
function solve(a, b) {
    let alicePts = 0;
    let bobPts = 0;
    let score = [];
    if (a.length === b.length) {
        for(let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]){
    if (a[i]>b[i]) {
        alicePts++;
    }
    else {
        bobPts++;
    }
        }
    }
    }
    score.push(alicePts, bobPts);
    return score
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let result = solve(a, b);

    ws.write(result.join(" ") + "\n");

    ws.end();
}