const fs = require("fs");
const os = require("os");
const http = require("http");

const home = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            res.end(home);
        } else if (req.url === "/about") {
            res.end('<p style="font-size:5rem">About</p>');
        } else {
            res.end("ERROR_404 NOT FOUND");
        }
    }
});

server.listen(3000, () => {
    console.log("http://localhost:3000/");
});
