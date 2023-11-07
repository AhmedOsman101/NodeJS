const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const App = express();
App.use(express.json());
App.use(cors());

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "test",
});

const showDatabase = (req, res) => {
	connection.execute("SELECT * FROM `users`", (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(data);
			return data;
		}
	});
};

const addUser = (req, res, data) => {
	connection.execute(
		"INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
		[data.username, data.email, data.password],
		(err, data) => {
			if (err) {
				res.status(500).send(err);
			} else {
				showDatabase(req, res);
			}
		}
	);
};

App.get("/", (req, res) => {
	showDatabase(req, res);
});

App.post("/addUser", (req, res) => {
	let data = req.body;
	addUser(req, res, data);
});

App.delete("/DeleteUser/:id", (req, res) => {
	const userId = +req.params.id;
	connection.execute(
		"DELETE FROM `users` WHERE id= ?",
		[userId],
		(err, data) => {
			if (err) {
				res.status(500).send(err);
			} else if (data.affectedRows === 0) {
				res.status(404).send("user not found");
			} else if (0 < data.affectedRows) {
				showDatabase(req, res);
			}
		}
	);
});

App.put("/UpdateUser/:id", (req, res) => {
	const userId = +req.params.id;
	let { username, email, password } = req.body;
	connection.execute(
		"UPDATE `users` SET `username`= ?,`email`= ?,`password`= ? WHERE id= ?",
		[username, email, password, userId],
		(err, data) => {
			if (err) {
				res.status(500).send(err);
			} else if (data.affectedRows === 0) {
				connection.execute(
					"INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)",
					[userId, username, email, password],
					(err, data) => {
						if (err) {
							res.status(500).send(err);
						} else {
							showDatabase(req, res);
						}
					}
				);
			} else if (0 < data.affectedRows) {
				showDatabase(req, res);
			}
		}
	);
});

App.listen(5000, () => {
	console.log(`server is running on http://localhost:5000`);
});
