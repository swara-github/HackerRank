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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {

    let dt = 0;
//year where julian calender changed to gregorian calender 
    if (year == 1918) {
        dt = 256-230;
    }

//julian calender
    if (year >= 1700 && year < 1918) {
        if (year % 4 == 0) //its leap
            dt = 256 - 244;
        else
            dt = 256 - 243;
    }

//for gregorian calender
    else if (year > 1918 && year <= 2700) {

        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            //leap year
            dt = 256 - 244;
        }
        else {
            //not leap year
            dt = 256 - 243;
        }
    }
    else {
        return "year should be between 1700 - 2700 ";
    }

//256th day always falls in september -09

    let ans = dt + ".09" + "." + year;
        return ans;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
