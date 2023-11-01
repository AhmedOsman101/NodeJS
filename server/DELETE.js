// Import the required modules
const http = require("http");
const GenUsers = require("./GenerateUsers");

const port = 5001; // the port on which the server will listen
let Users = []; // create an empty array to hold the users
GenUsers.generateData(Users, 10); // Generate mock data for 10 users using the GenUsers module

// Create a new HTTP server
http.createServer((req, res) => {
	// If a DELETE request is made to "/Delete/User/{id}", delete the user with the given id
	if (req.url.startsWith("/Delete/User/") && req.method === "DELETE") {
		let userId = +req.url.split("/").at(-1); // Extract the user id from the URL

		// Find the index of the user with the given id
		let userIndex = Users.findIndex((user) => {
			return userId === user.id;
		});

		// If the user was not found, send an error message
		if (userIndex === -1) {
			res.end("User Doesn't Exist !!!"); // Send back an error message as a response
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
