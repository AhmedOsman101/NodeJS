// Import the required modules
const express = require("express");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");

// Read the HTML file
const form = fs.readFileSync("./index.html", "utf8");

// Define the port on which the server will start
const port = 5004;

// create an empty array to hold the users
let Users = [];

// Generate mock data for 10 users using the GenUsers module
GenUsers.generateData(Users, 10);

// Create a new Express application
const App = express();

// Use express.json() middleware for parsing JSON data of incoming requests
App.use(express.json());

// Handle GET requests to "/" URL
App.get("/", (req, res) => {
	// Send back the Users array as a JSON response
	res.json(Users);
});

// Handle GET requests to "/form" URL
App.get("/form", (req, res) => {
	// Send back the form as a response
	res.send(form);
});

// Handle POST requests to "/addUser" URL
App.post("/addUser", (req, res) => {
	// Extract the request body (new user data)
	let data = req.body;
	// Send back the new user data as a JSON response
	res.json(data);
});

// handle any other requests
App.use((req, res) => {
	// Send back an error message as a response
	res.end("User Not Found");
});

// Start the server and have it listen on the specified port
App.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
