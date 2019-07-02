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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    let matchingPair = 0;
    let sortedSocks = ar.sort((a, b) => a - b); //[sorted list of array in ascending                                                     //       order]

    for (let i = 0; i < sortedSocks.length; i++){
        if (sortedSocks[i] == sortedSocks[i + 1]) { // check the current element with                                                        // its next element
            matchingPair++;

            i++;                  //skip this currently matched element and                                                // proceed next
        }
        //if not matched continue checking
    }

    return matchingPair;
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

