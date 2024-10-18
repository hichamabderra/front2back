const http = require('http');
const fs = require('fs'); // Import file system module
const path = require('path'); // Import path module

// Create a server
const server = http.createServer((req, res) => {
    // Set the path to index.html
    const filePath = path.join(__dirname, 'index.html');

    // Read the index.html file and serve it
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500; // Internal Server Error
            res.end('Error reading index.html');
            return;
        }
        res.statusCode = 200; // HTTP status code
        res.setHeader('Content-Type', 'text/html'); // Content type
        res.end(data); // Send the content of index.html
    });
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});

