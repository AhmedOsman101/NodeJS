const http = require("http");
const fs = require("fs");

const PORT = 3000;
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
        gender: "email",
    },
];
const home = fs.readFile("./index.html");

createServer((req, res) => {
    var data = "";
    if (req.method === "GET") {
        if (req.url === "/form") {
            res.end(home);
        }
    } else if (req.method === "POST") {
        req.on("data", (chunk) => {
            data += chunk; // convert Buffer to string
        });
        req.on("end", () => {
            let newData = data.split("&");
            let obj = {};
            for (let i = 0; i < array.length; i++) {
                let keyVal = array[i];
                obj[keyVal[0]] = keyVal[1];
            }
            // const postData = JSON.parse(data);
            console.log(postData);
            // API.push(postData);
            res.end(JSON.stringify(newData));
        });
    }
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));
