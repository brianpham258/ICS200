/*
 * Student: Quang Pham
 * Student Number: C0472147
 * Lab: 5
 * Title: Introduction to Lambda
 * Program: Hello Lambda Package
 * References:
 */
exports.handler = async (event) => {
    // TODO implement
    console.log(JSON.stringify(event));

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };

    return response;
};