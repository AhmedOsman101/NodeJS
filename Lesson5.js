// Import the required modules
const sql = require("mysql2");
const express = require("express");
const port = 5004; // the port on which the server will start

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

// Handle GET requests to "/" URL
App.post("/User/:id", (req, res) => {
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

// handle any other requests
App.use((req, res) => {
    res.end("ERROR-404 Page Was Not Found"); // Send back an error message as a response
});

// Start the server and have it listen on the specified port
App.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
