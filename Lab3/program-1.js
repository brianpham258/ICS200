/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 3
 * Title: S3 Hosted Website
 * Program: Restful Service Call
*/

const request = require('request');

request("https://jsonplaceholder.typicode.com/todos/1", function (error, response, body) {
    Object.entries(JSON.parse(body)).forEach(([key, value]) => {    // for each json object to get key and value
        console.log(`${key} ${value}`);     // print out the result
    });
});