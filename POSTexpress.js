// Import the required modules
const express = require("express");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");

const form = fs.readFileSync("./index.html", "utf8"); // read the HTML file
const port = 5004; // the port on which the server will start
let Users = [];
GenUsers.generateData(Users, 10); // Generate random data for 10 users using the GenUsers module

const App = express(); // Create a new Express application
App.use(express.json()); // Use express.json() middleware for parsing JSON data of incoming requests

// Handle GET requests to "/" URL
App.get("/", (req, res) => {
	res.json(Users); // Send back the Users array as a JSON response
});

// Handle GET requests to "/form" URL
App.get("/form", (req, res) => {
	res.send(form); // Send back the form as a response
});

// Handle POST requests to "/addUser" URL
App.post("/addUser", (req, res) => {
	let data = req.body; // Extract the request body (new user data)
	res.json(data); // Send back the new user data as a JSON response
});

// handle any other requests
App.use((req, res) => {
	res.end("ERROR-404 Page Was Not Found"); // Send back an error message as a response
});

// Start the server and have it listen on the specified port
App.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
