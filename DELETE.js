const http = require("http");
const GenUsers = require("./GenerateUsers");
const port = 5002;

let Users = [];
GenUsers.generateData(Users, 10);

http.createServer((req, res) => {
	if (req.url.startsWith("/Delete/User/") && req.method === "DELETE") {
		let userId = +req.url.split("/").at(-1);
		let userIndex = Users.findIndex((user) => {
			return userId === user.id;
		});
		if (userIndex === -1) {
			res.end("User Is Not Found");
		} else {
			Users.splice(userIndex, 1);
			res.end(JSON.stringify(Users));
		}
	}
}).listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
