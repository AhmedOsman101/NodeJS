const http = require("http");
const express = require("express");
const mysql2 = require("mysql2");
const fs = require("fs");

const form = fs.readFileSync("../client/Form.html", "utf8");
const port = 2000;

const connection = mysql2.createConnection({
    user: "root",
    password: "",
    database: "revision",
    host: "localhost",
});

http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            connection.execute("SELECT * FROM `products`", (err, data) => {
                if (err) {
                    res.writeHead(404, { "Content-Type": "application/json" });
                    res.end(`ERROR: ${err}`);
                } else {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data));
                }
            });
        } else if (req.url === "/form") {
            res.end(form);
        }
    } else if (req.method === "POST" && req.url === "/submit") {
    }
}).listen(port, () => {
    console.log(`Server Is Running On http://localhost:${port}`);
});
