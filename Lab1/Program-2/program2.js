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

// Start for loop
for(var i = 0; i < 100; i++) {
    if(arr.length === 0) { // Check if array is empty or not
        
        arr.push(0); // If empty push 0 for the first value
    }
    else if (arr[i-1] === 0) { // Check if the previous value is equal to 0 or not
        
        // If previous value is equal to 0, 
        // add the value instead of multiply
        arr.push(arr[i-1] + value);
    }
    else {
        // Multiply the later value with 2
        arr.push(arr[i-1] * value);
    }
    console.log(arr[i]);
}