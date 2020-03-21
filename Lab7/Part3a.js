/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 7
 * Title: Introduction to DYnamoDB
 * Program: Query API
 * References:
 */

const process = require('process');     // Import process
const AWS = require('aws-sdk');         // Load the AWS SDK for Node.js

// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
    ExpressionAttributeValues: {
        ':county': { S: process.argv[3]},
        ':policy_id': { N: process.argv[4]}
    },
    KeyConditionExpression: 'county = :county AND policy_id = :policy_id',
    TableName: process.argv[2]
};

ddb.query(params, (err, data) => {
    if(err) {
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