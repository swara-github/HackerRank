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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    //Given string (s) -> 'abac' 
    //String should repeat for n -> 10 

        //In actual string ,count number of 'a' ->returns 2
       let countA = s.split('').filter(letter => letter == 'a').length;

    // repeat the string for n times ->returns 3  in this case
    //but this does not include the last characters 
    //which is partial string
        let repeatedStringNumber = Math.floor(n / s.length); 

  
    //'a' will repeat itself for this many times 
    countA = countA * repeatedStringNumber;

    //retrieve the last characters ->returns 1 in this case
     //partial string length
    let lastCharacters = n % s.length;
   

    //partial string -> return 'a' in this case
    let lastString = s.substring(0,lastCharacters);

    //count number of 'a' in this partial string
    let countAforLastChracters = lastString.split('').filter(letter => letter == 'a').length;


//add actual count of 'a' in complete repeated string and partial string
    countA = countA + countAforLastChracters;

//return the count
    return countA;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
