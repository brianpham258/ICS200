/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 6
 * Title: S3 Storage Service
 * Program: Read S3 Bucket Object
 * References:
 */

const AWS = require('aws-sdk');
const fs = require('fs');

var s3 = new AWS.S3();
var params = {
    Bucket: "lab6-part3-qp-images",     // Define bucket's name
    Key: "happyface.txt"                // Define the object that will be pulled from the bucket
};

s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else {
        const StringDecoder = require('string_decoder').StringDecoder;      // Import StringDecoder
        const decoder = new StringDecoder('utf8');      // Decode to utf-8 form
        console.log(decoder.write(data.Body));
        fs.writeFileSync('happyface-copy.txt', decoder.write(data.Body));   // Write a new file name 
                                                                            // happyface-copy.txt with the 
                                                                            // decoded Body from data
    }
});