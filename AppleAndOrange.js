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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
   /*  s ->  start point of house
    t -> end point of house
    a -> location of Apple tree
    b -> location of Orange tree
    apples -> array - values of apples 
oranges -> array - values of oranges
 */

    let countOfApples;
    let countOfOranges; 
   
  // Adding each apple from apples array with the tree position  i.e a
    apples = apples.map(apple => apple + a);
    
/* 
filtering out only those apples which lie in range of house i.e (s and t)
filter property return only true values ;so apples array will be updated with only 
apples that fulfill the condition
length property will return total no. of apples in array  */

    countOfApples = apples.filter(apple => (apple >= s && apple <= t)).length;


 // Adding each orange from oranges array with the tree position  i.e b
    oranges = oranges.map(orange => orange + b);

/*
filtering the oranges.
*/    
    countOfOranges= oranges.filter(orange => (orange >= s && orange <= t)).length;


   //printing the counts of Apples and Oranges on house   
    console.log(countOfApples);
    console.log(countOfOranges);
 
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
