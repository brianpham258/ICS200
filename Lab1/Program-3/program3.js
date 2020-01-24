/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 1
 * Title: Introduction to NodeJS
 * Program: Exception
 */

// Get random number between 0 and 200
function getRandom() {
    return Math.floor(Math.random() * 200);
}

function getRandomException() {
    var random = getRandom();

    if (random < 100) { // Check if result is less than 100
        throw ("Less than 100");
    } else if (random > 100) { // Check if result is larger than 100
        throw ("More than 100");
    } else if (random === 100) { // Check if result is equal to 100
        throw ("Equal to 100");
    }
}

try {
    // Call the function
    getRandomException();
    console.log("No exception");
} catch (err) {
    // Display the message
    console.log(err);
}