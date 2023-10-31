const express = require("express");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");

const port = 5006;
let Users = [];
GenUsers.generateData(Users, 10);

const App = express();
App.use(express.json());

App.put("/Update/User/:id", (req, res) => {
	let userId = +req.url.split("/").at(-1);
	let userIndex = Users.findIndex((user) => {
		return userId === user.id;
	});

	if (userIndex !== -1) {
		Users[userIndex].name = req.body.name || Users[userIndex].name;
		Users[userIndex].age = req.body.name || Users[userIndex].age;
		res.json(Users);
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
