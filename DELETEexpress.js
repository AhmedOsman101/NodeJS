const express = require("express");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");

const port = 5002;
const App = express();
let Users = [];

GenUsers.generateData(Users, 10);

App.use(express.json());

App.delete("/User/:id", (req, res) => {
	let userId = +req.url.split("/").at(-1);
	let userIndex = Users.findIndex((user) => {
		return userId === user.id;
	});

	if (userIndex !== -1) {
		Users.splice(userIndex, 1);
		res.send(Users);
	} else {
		res.send("User Is Not Found !!!");
	}
});

App.use((req, res) => {
	res.end("User Not Found");
});

App.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
