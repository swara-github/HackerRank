'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here

    let matchingCountForFactor = 0;
     
    for (let counter = 1; counter<= 100; counter++) // factors to be found in range 1-100
    { 
        let flag = 1; 
        for (let i = 0; i < a.length; i++)

        //set flag to zero -if element of a is not factor of considered counter value
            if (counter % a[i] != 0) 
            flag=0;

      //set flag to zero -if considered counter value is not factor of elements in b
        for (let i = 0; i < b.length; i++)
            if (b[i] % counter != 0)  
            flag=0;

      //  if flag is unchanged then add my number of matching count
        if (flag ==1)
            matchingCountForFactor++;
    }

 
    return matchingCountForFactor;
    
     
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
