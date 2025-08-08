# Basic Node.js HTTP Server

This is a simple Node.js HTTP server that sends a "Hello World" response to any incoming request.

## 📄 Code Example

const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello world from the server")
})

server.listen(3000, () => {
    console.log("server is running on port 3000")
})

🚀 How to Run
Make sure Node.js is installed. You can download it from nodejs.org

Save the code in a file, e.g., server.js

Open terminal in that folder and run:

node server.js
Open your browser and go to:

http://localhost:3000
You will see the message:
hello world from the server
