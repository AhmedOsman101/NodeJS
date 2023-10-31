// Import the required modules
const express = require("express");
const GenUsers = require("./GenerateUsers");

const port = 5002; // the port on which the server will start
let Users = [];
GenUsers.generateData(Users, 10); // Generate random data for 10 users using the GenUsers module

const App = express(); // Create a new Express application
App.use(express.json()); // Use express.json() middleware for parsing JSON data of incoming requests

// Handle GET requests to "/" URL
App.get("/", (req, res) => {
	res.json(Users); // Send back the Users array as a JSON response
});

// Handle DELETE requests to "/Delete/User/:id" URL
App.delete("/Delete/User/:id", (req, res) => {
	let userId = +req.params.id; // Extract the user id from the request parameters

	// Find the index of the user with the given id in the Users array
	let userIndex = Users.findIndex((user) => {
		return userId === user.id;
	});

	// If the user was found in the Users array...
	if (userIndex !== -1) {
		Users.splice(userIndex, 1); // Remove the user from the Users array
		res.send(Users); // Send back the updated Users array as a response
	}
	// If the user was not found in the Users array...
	else {
		res.send("User Doesn't Exist !!!"); // Send back an error message as a response
	}
});

// handle any other requests
App.use((req, res) => {
	res.end("ERROR-404 Page Was Not Found"); // Send back an error message as a response
});

// Start the server and have it listen on the specified port
App.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
