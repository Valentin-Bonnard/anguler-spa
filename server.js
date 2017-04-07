const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');


const api = require('./api/routes/api');

// Get API routes 
const app = express();

// Parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Point static path to dist 
app.use(express.static(path.join(__dirname, 'dist')));

//Set API routes
app.use('/api', api);

// Catch all other routes and return the index files 
app.get('*', (res, req) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment  and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost: ${port}`));