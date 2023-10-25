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

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            res.end(`${JSON.stringify(API)}`);
        } else {
            res.end("<h1 font='80'>ERROR404 - PAGE NOT FOUND</h1>");
        }
    }
});

server.listen(3000, () => {
    console.log("server is running on port: http://localhost:3000/");
});
