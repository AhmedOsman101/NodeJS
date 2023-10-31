const express = require("express");
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
const port = 5002;

const App = express();
App.use(express.json);

App.get("/")

App.listen(port, ()=>{
    console.log("done");
})
