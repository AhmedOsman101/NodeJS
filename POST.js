const http = require("http");
const fs = require("fs");

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
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on("end", () => {
            const postData = JSON.parse(body);
            console.log(postData);

            // You can now handle the form data as per your application logic
            // For example, let's add the new data to the API
            API.push(postData);

            res.end("POST request handled");
        });
    } else {
        res.end("Invalid request");
    }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
