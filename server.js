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
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
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

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, (() => {
    console.log(`Server started on port ${port}`);
}));
