const express = require("express");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");

const port = 5006;
let Users = [];
GenUsers.generateData(Users, 10);

const App = express();
App.use(express.json());

// Handle PUT requests to "/Update/User/:id" URL
App.put("/Update/User/:id", (req, res) => {
	let data = req.body; // Extract the request body (new user data)
	let userId = +req.params.id; // Extract the user id from the request parameters

	// Find the index of the user with the given id in the Users array
	let userIndex = Users.findIndex((user) => {
		return userId === user.id;
	});

	// If the user was found in the Users array:
	if (userIndex !== -1) {
		// Update the user's data with the new data, if provided
		Users[userIndex].username = data.username || Users[userIndex].username;
		Users[userIndex].email = data.email || Users[userIndex].email;
		Users[userIndex].password = data.password || Users[userIndex].password;

		// Send back the updated Users array as a response
		res.json(Users);
	}
	// If the user was not found in the Users array:
	else {
		res.send("User Doesn't Exist !!!"); // Send back an error message as a response
	}
});

// handle any other requests
App.use((req, res) => {
	res.end("ERROR-404 Page Was Not Found"); // Send back an error message as a response
});

App.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
