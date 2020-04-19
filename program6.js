// Number Methods

//toString() returns a number as a string

var num = 125;
console.log(typeof (125));

num = toString(num);
console.log(typeof (num));

// toFixed() returns a string, with the number written with a specified number of decimals
var x = 7.856;
console.log(x.toFixed(0));
console.log(x.toFixed(1));
console.log(x.toFixed(2));

//toPrecision() returns a string, with a number written with a specified length.
var x = 9.656;
x.toPrecision(); // returns 9.656
x.toPrecision(2); // returns 9.7
x.toPrecision(4); // returns 9.656
x.toPrecision(6); // returns 9.65600 

// Number() method convert JavaScript variables to numbers
Number(true); // returns 1
Number(false); // returns 0
Number("10"); // returns 10
Number("  10"); // returns 10
Number("10  "); // returns 10
Number(" 10  "); // returns 10
Number("10.33"); // returns 10.33

// parseInt(), parseFloat()