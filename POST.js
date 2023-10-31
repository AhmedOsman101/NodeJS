const http = require("http");
const fs = require("fs");
const port = 5000;
const formContent = fs.readFileSync("./form.html");

let Users = [
    {
        id: 1,
        name: "John",
        age: 25,
    },
    {
        id: 2,
        name: "Sarah",
        age: 30,
    },
    {
        id: 3,
        name: "Michael",
        age: 35,
    },
    {
        id: 4,
        name: "Emily",
        age: 28,
    },
    {
        id: 5,
        name: "David",
        age: 32,
    },
    {
        id: 6,
        name: "Jessica",
        age: 27,
    },
    {
        id: 7,
        name: "Daniel",
        age: 31,
    },
    {
        id: 8,
        name: "Olivia",
        age: 29,
    },
    {
        id: 9,
        name: "Matthew",
        age: 34,
    },
    {
        id: 10,
        name: "Sophia",
        age: 26,
    },
];

http.createServer((req, res) => {
    var data = "";
    if (req.url === "/form" && req.method === "GET") {
        res.end(formContent);
    } else if (req.url === "/adduser" && req.method === "POST") {
        req.on("data", (chunck) => {
            data += chunck;
        });
        req.on("end", () => {
            let newData = data.split("&");
            let obj = Object;
            for (let i = 0; i < newData.length; i++) {
                let valueKey = newData[i].split("=");
                obj[valueKey[0]] = valueKey[1];
            }
            res.end(JSON.stringify(obj));
        });
    }
}).listen(5000, () => {
    console.log("running");
});
