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
        // Extracting the user ID from the request URL
        let userID = req.url.split("/").at(-1);

        // Finding the user index in the Users array based on the ID
        const userIndex = Users.findIndex((user) => {
            return +userID === user.id;
        });

        if (userIndex == -1) {
            // If the user is not found
            res.end("User not found");
        } else {
            // If the user is found
            req.on("data", (chunk) => {
                // Accumulating the received data
                data += chunk;
                console.log(JSON.stringify(data));
            });

            req.on("end", () => {
                // Parsing the received data
                let newData = JSON.parse(data);

                // Updating the user's name if provided, else keeping the original name
                Users[userIndex].name = newData.name || Users[userIndex].name;

                // Updating the user's age if provided, else keeping the original age
                Users[userIndex].age = newData.age || Users[userIndex].age;

                // Sending the updated Users array as the response
                res.end(JSON.stringify(Users));
            });
        }
    }
}).listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
