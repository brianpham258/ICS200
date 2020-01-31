const add = require('./mymodule.js').add;
const sub = require('./mymodule.js').sub;
const mul = require('./mymodule.js').mul;
const div = require('./mymodule.js').div;
const process = require('process');

var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operator = process.argv[3];

// console.log(operator);

switch (operator) {
    case "+":
        console.log(add(num1, num2));
        break;
    case "-":
        console.log(sub(num1, num2));
        break;
    case "x":
        console.log(mul(num1, num2));
        break;
    case "/":
        console.log(div(num1,num2));
        break;
    default:
        console.log("not enough input!!");
}