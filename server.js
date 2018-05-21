const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

const API_BASE_URL = 'http://lcboapi.com';
const API_TOKEN = 'MDplNTFmZWRiNC01N2Q1LTExZTgtYjkzMC1jZjY3MTk3YTU1OTI6N3hVRTJyTXFCUFd0NW9yOEtMa2ZnZkhRWUdubFl5dXUzdTNO';
const AUTH_TOKEN = 'Token token=MDplNTFmZWRiNC01N2Q1LTExZTgtYjkzMC1jZjY3MTk3YTU1OTI6N3hVRTJyTXFCUFd0NW9yOEtMa2ZnZkhRWUdubFl5dXUzdTNO';

// Set the headers
const headers = {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',x
    // 'Access-Control-Allow-Credentials': true,
    'Authorization': AUTH_TOKEN,
}
// Configure the request
const options = {
    host: API_BASE_URL,
    path: '/products',
    port: port,
    method: 'GET',
    headers: headers
}


// app.get('/*', (req, res) => {
//     var client = http.createClient(port, 'http://lcboapi.com');
//     //Setup the request by passing the parameters in the URL (REST API)
//     var request = client.request(options);

//     request.addListener("response", (response) => { //Add listener to watch for the response
//         var body = "";
//         response.addListener("data", (data) => { //Add listener for the actual data
//             body += data; //Append all data coming from api to the body variable
//         });

//         response.addListener("end", function() { //When the response ends, do what you will with the data
//             var response = JSON.parse(body); //In this example, I am parsing a JSON response
//         });
//     });
//     request.end();
//     res.send({ express: 'Hello From the other side' });
// });

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, (() => {
    console.log(`Server started on port ${port}`);
}));


// var request = http.request(options, function(response){
//     var body = ""
//     response.on('data', function(data) {
//         body += data;
//     });
//     response.on('end', function() {
//         res.send(JSON.parse(body));
//     });
// });

// request.on('error', function(e) {
//     console.log('Problem with request: ' + e.message);
// });

// request(options, (error, response, body) => {
//     if (!error && response.statusCode == 200) {
//         // Print out the response body
//         console.log(body)
//     }
// })