const express = require("express");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");
const form = fs.readFileSync("./index.html", 'utf8');

let Users = [];
GenUsers.generateData(Users, 10);

const App = express();
App.use(express.urlencoded({ extended: true }));

App.get("/form", (req, res) => {
    res.send(form);
});

App.post("/addUser", (req, res) => {
    const data = req.body;
    res.send(data);
});

App.use((req, res) => {
    res.end("User Not Found");
});

const port = 1298;

App.listen(port, () => {
    console.log("done");
});
