// Import the required modules
const sql = require("mysql2");
const express = require("express");
const port = 5004; // the port on which the server will start
const fs = require("fs");
const form = fs.readFileSync("./index.html", "utf8"); // Read the form file

const App = express(); // Create a new Express application
App.use(express.json()); // Use express.json() middleware for parsing JSON data of incoming requests
const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myDB",
});

// Handle GET requests to "/" URL
App.get("/", (req, res) => {
    const query = "SELECT * FROM `users`";
    connection.execute(query, (err, data) => {
        if (err) {
            res.send(`ERROR: ${err}`);
        } else {
            res.json(data);
        }
    });
});

// Handle GET requests to "/" URL
App.get("/User/:id", (req, res) => {
    const userID = req.params.id;
    const query = "SELECT * FROM `users` WHERE id=" + userID;
    connection.execute(query, (err, data) => {
        if (err) {
            res.send(`ERROR: ${err}`);
        } else {
            res.send(data);
        }
    });
});


// Handle POST requests to "/User/post" URL
App.post("/User/post", (req, res) => {
    const userData = req.body;
    const query =
        "INSERT INTO `users`(`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [userData.username, userData.email, userData.password];
    connection.execute(query, values, (err, data) => {
        if (err) {
            res.send(`ERROR: ${err}`);
        } else {
            connection.execute("SELECT * FROM `users`", (err, data) => {
                if (err) {
                    res.send(`ERROR: ${err}`);
                } else {
                    res.send(data);
                }
            });
        }
    });
});

// Handle DELETE requests to "/Delete/User/" URL
App.delete("/Delete/User/:id", (req, res) => {
    const userID = req.params.id;
    const query = "DELETE FROM `users` WHERE id=?";
    connection.execute(query, [userID], (err, data) => {
        if (err) {
            res.send(`ERROR: ${err}`);
        } else if (data.affectedRows === 0) {
            res.send("ERROR: USER WAS NOT FOUND !!!");
        } else {
            res.send("USER DELETED SUCCESSFULLY");
        }
    });
});

// handle any other requests
App.use((req, res) => {
    res.end("ERROR-404 Page Was Not Found"); // Send back an error message as a response
});

// Start the server and have it listen on the specified port
App.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
