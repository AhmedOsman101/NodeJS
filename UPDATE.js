const http = require("http");
const port = 5001;

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
    if (req.url.startsWith("/Update/User/") && req.method === "PUT") {
        let userID = req.url.split("/").at(-1);
        const userIndex = Users.findIndex((user) => {
            return +userID === user.id;
        });
        if (userIndex == -1) {
            res.end("user not found");
        } else {
            req.on("data", (chunck) => {
                data += chunck;
                console.log(JSON.stringify(data));
            });

            req.on("end", () => {
                let newData = JSON.parse(data);
                Users[userIndex].name = newData.name || Users[userIndex].name;
                Users[userIndex].age = newData.age || Users[userIndex].age;
                res.end(JSON.stringify(Users));
            });
        }
    }
}).listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
