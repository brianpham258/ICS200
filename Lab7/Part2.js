/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 7
 * Title: Introduction to DYnamoDB
 * Program: Write data to DynamoDB
 * References:
 */

const csv = require('csv-parser');      // Import csv-parser
const fs = require('fs');               // Import fs
const process = require('process');     // Import process
const AWS = require('aws-sdk');         // Load the AWS SDK for Node.js
const results = [];

// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

fs.createReadStream(process.argv[2])
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('error', (error) => {
        console.log(error);
    })
    .on('end', () => {
        results.forEach(element => { 
            var arr = {};
            for (const [key, value] of Object.entries(element)) {
                // console.log(`${key}: ${value}`);
                if(isNaN(value)) {
                    arr[key] = {S: value};
                }
                else {
                    arr[key] = {N: value};
                }
            }
            // console.log(arr);

            var params = {
                TableName: 'insurance_data',
                Item: arr
            };

            // Call DynamoDB to add the item to the table
            ddb.putItem(params, (err, data) => {
                if(err) {
                    console.log("Error ", err);
                }
                else {
                    console.log("Success ", data);
                }
            });
        });
    });