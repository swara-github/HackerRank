'use strict';

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

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
//k -> item which Anna wont eat
//b -> amount calculated by Brian to pay
//bill -> array

    let itemsInBill = bill.length;
    let removeAnnasShare = bill[k];
    let costAsPerBrian = b;

    let totalFoodBill = 0;
    for(let food of bill) {
        totalFoodBill += food;
    }

    let actualBill = totalFoodBill - removeAnnasShare;  
    
    let costPerPerson = actualBill / 2; 
    
    if (costPerPerson < costAsPerBrian) {
        console.log(costAsPerBrian - costPerPerson);
    }
    else
        console.log("Bon Appetit");

}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
