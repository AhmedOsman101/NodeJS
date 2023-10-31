// Import the required modules
const http = require("http");
const GenUsers = require("./GenerateUsers");

// Define the port on which the server will listen
const port = 5001;

// create an empty array to hold the users
let Users = [];

// Generate mock data for 10 users using the GenUsers module
GenUsers.generateData(Users, 10);

// Create a new HTTP server
http.createServer((req, res) => {
	// If a DELETE request is made to "/Delete/User/{id}", delete the user with the given id
	if (req.url.startsWith("/Delete/User/") && req.method === "DELETE") {
		// Extract the user id from the URL
		let userId = +req.url.split("/").at(-1);

		// Find the index of the user with the given id
		let userIndex = Users.findIndex((user) => {
			return userId === user.id;
		});

		// If the user was not found, send an error message
		if (userIndex === -1) {
			res.end("User Is Not Found");
		}
		// Otherwise, delete the user and send back the updated Users array as a JSON string
		else {
			Users.splice(userIndex, 1);
			res.end(JSON.stringify(Users));
		}
	}
	// Start the server and have it listen on the specified port
}).listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
