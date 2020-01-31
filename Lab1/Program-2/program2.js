/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 1
 * Title: Introduction to NodeJS
 * Program: Loops
*/

// Initial variable
var value = 2;
var arr = [];
var str = "";

// generate a random string number of 100 character
for ( var i = 0; i < 100; i++) {
    str += (Math.floor(Math.random() * 10)).toString();
}

// for pf each character of str then multiple with 2
for (var element of str) {
    arr.push(element * value);
}

console.log(arr);