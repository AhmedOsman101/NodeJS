// Import the required modules
const http = require("http");
const fs = require("fs");

const port = 5003; // the port on which the server will listen
const form = fs.readFileSync("./index.html", "utf8"); // Read the form file

// Create a new HTTP server
http.createServer((req, res) => {
	var data = ""; // empty string to store the data

	// If a GET request is made to "/form", return the form file
	if (req.url === "/form" && req.method === "GET") {
		res.end(form);
	}
	// If a POST request is made to "/addUser", handle the new user data
	else if (req.url === "/addUser" && req.method === "POST") {
		// Listen for data events, which are sent when a chunk of data is available to read
		req.on("data", (chunk) => {
			data += chunk;
		});

		// Listen for the end event, which is sent when all request data has been read
		req.on("end", () => {
			// Split the POST data into key-value pairs
			let newData = data.split("&");
			let obj = {};
			newData.forEach((item) => {
				let valueKey = item.split("=");
				obj[valueKey[0]] = valueKey[1];
			});

			res.end(JSON.stringify(obj)); // Send back the updated data as a JSON string

			/*  other way (using querystring module):
            const querystring = require("querystring"); 
            let newData = querystring.parse(data); 
            res.end(JSON.stringify(newData)); 
             */
		});
	}
	// Start the server and have it listen on the specified port
}).listen(port, () => {
	console.log(`server is running http://localhost:${port}/form`);
});
