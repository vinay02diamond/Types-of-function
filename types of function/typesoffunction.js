// Function that takes nothing and returns nothing
var y = 5;
function displayTable() {
    console.log("Start of function");
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log("End of function");
}
displayTable();

// Function takes nothing and returns something
function sum() {
    var x = 10;
    var y = 50;
    var z = x + y;
    return z;
}

var val = sum();
console.log(val * 100);

// Function takes something and returns nothing
function displayTableWithInput(y) {  // y is an input parameter
    for (var i = 1; i <= 10; i++) {
        console.log(y * i);
    }
}

console.log("After Function");
displayTableWithInput(5);

// Function takes something and returns something
function sumWithParams(x, y) {
    return x + y; // Corrected return statement
}

console.log("Hello");
console.log(sumWithParams(20, 30));
console.log("Sum ended!");

var val = sumWithParams(45, 80);
console.log(val * 100);
