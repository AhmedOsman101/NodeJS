const express = require("express");
const fs = require("fs");
const form = fs.readFileSync("./index.html", "utf8");
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

const App = express();
App.use(express.urlencoded({ extended: true }));

App.delete("/User/:id", (req, res) => {
    let userId = +req.url.split("/").at(-1);
    let userIndex = Users.findIndex((user) => {
        return userId === user.id;
    });

    if (userIndex !== -1) {
        Users.splice(userIndex, 1)
        res.send(Users)
    } else {
        res.send("User Is Not Found !!!")
    }
});


App.use((req, res) => {
    res.end("User Not Found");
});

const port = 1297;

App.listen(port, () => {
    console.log("done");
});
