const http = require("http");
const GenUsers = require("./GenerateUsers");

const port = 5001;
let Users = [];
GenUsers.generateData(Users, 10);
console.log(Users);
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
				// console.log(JSON.stringify(data));
			});

			req.on("end", () => {
				// Parsing the received data
				let newData = JSON.parse(data);

				// Updating the user's data if provided, else keeping the original data
				Users[userIndex].username =
					newData.username || Users[userIndex].username;
				Users[userIndex].email =
					newData.email || Users[userIndex].email;
				Users[userIndex].password =
					newData.password || Users[userIndex].password;
				Users[userIndex].phone_number =
					newData.phone_number || Users[userIndex].phone_number;

				// Sending the updated Users array as the response
				res.end(JSON.stringify(Users));
			});
		}
	}
}).listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
