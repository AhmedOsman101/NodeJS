const http = require("http");
const GenUsers = require("./GenerateUsers");

const port = 5005;
let Users = [];
GenUsers.generateData(Users, 10);

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
			res.end("User Doesn't Exist !!!"); // Send back an error message as a response
		} else {
			// If the user is found
			req.on("data", (chunk) => {
				data += chunk; // adding the received data
			});

			req.on("end", () => {
				let newData = JSON.parse(data); // Parsing the received data

				// Updating the user's data if provided, else keeping the original data
				Users[userIndex].username =
					newData.username || Users[userIndex].username;
				Users[userIndex].email =
					newData.email || Users[userIndex].email;
				Users[userIndex].password =
					newData.password || Users[userIndex].password;
				Users[userIndex].phone_number =
					newData.phone_number || Users[userIndex].phone_number;

				res.end(JSON.stringify(Users)); // Sending the updated Users array as the response
			});
		}
	}
}).listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
