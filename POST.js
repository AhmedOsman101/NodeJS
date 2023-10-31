const http = require("http");
const fs = require("fs");
const GenUsers = require("./GenerateUsers");
const port = 5000;
const formContent = fs.readFileSync("./form.html");

let Users = [];
GenUsers.generateData(Users, 10);

http.createServer((req, res) => {
    var data = "";
    if (req.url === "/form" && req.method === "GET") {
        res.end(formContent);
    } else if (req.url === "/adduser" && req.method === "POST") {
        req.on("data", (chunck) => {
            data += chunck;
        });
        req.on("end", () => {
            let newData = data.split("&");
            let obj = Object;
            for (let i = 0; i < newData.length; i++) {
                let valueKey = newData[i].split("=");
                obj[valueKey[0]] = valueKey[1];
            }
            res.end(JSON.stringify(obj));
        });
    }
}).listen(port, () => {
    console.log("running");
});
