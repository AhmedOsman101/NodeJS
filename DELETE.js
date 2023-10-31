const http = require("http");
const fs = require("fs");
const port = 5000;

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
    if (req.url.startsWith("/Delete/User/") && req.method === "DELETE") {
        let userId = +req.url.split("/").at(-1);
        let userIndex = Users.findIndex((user) => {
            return userId === user.id;
        });
        if (userIndex === -1) {
            res.end("User Is Not Found");
        } else {
            Users.splice(userIndex, 1);
            res.end(JSON.stringify(Users));
        }
    }
}).listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
