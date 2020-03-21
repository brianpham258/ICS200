/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 7
 * Title: Introduction to DYnamoDB
 * Program: Scan API
 * References:
 */

const process = require('process');     // Import process
const AWS = require('aws-sdk');         // Load the AWS SDK for Node.js
const tableName = process.argv[2];
const fieldName = ':' + process.argv[3];
var fieldValue = process.argv[4];
if(isNaN(fieldValue)) {
    fieldValue = {S: process.argv[4]};
}
else {
    fieldValue = {N: process.argv[4]};
}

// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
    ExpressionAttributeValues: {
        ':construction': {S: 'Wood'}
    },
    FilterExpression: 'contains (:construction, :construction)',
    TableName: tableName
};

ddb.scan(params, (err, data) => {
    if (err) {
        console.log("Error: ", err);
    }
    else {
        // console.log("Success: ", data);
        if(data.Count == 0) {
            console.log("Item not found");
        }
        else {
            data.Items.forEach((element) => {
                console.log(element);
            });
        }
    }
});