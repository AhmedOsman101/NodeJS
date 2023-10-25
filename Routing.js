const { readFileSync } = require("fs");
const http = require("http");

const API = [
    {
        id: 1,
        name: "Othman",
        age: 18,
        gender: "male",
    },
    {
        id: 2,
        name: "Adam",
        age: 18,
        gender: "male",
    },
    {
        id: 3,
        name: "Amir Sal3at",
        age: 16,
        gender: "female",
    },
    {
        id: 4,
        name: "3wees",
        age: 17,
        gender: "male",
    },
];
const form = readFileSync("./index.html");
const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            res.end(form);
        } else {
            res.end("<h1>ERROR404 - PAGE NOT FOUND</h1>");
        }
    } else if (req.method === "POST") {
        if (req.url === "/done") {
            req.on("data", (chunk) => {
                API.push(JSON.parse(chunk));
                console.log(API);
            });
            res.end(JSON.stringify(API));
        }
    }
});

const port = 3001;
server.listen(port, () => {
    console.log(`server is running on port: http://localhost:${port}/`);
    console.log(API);
});
