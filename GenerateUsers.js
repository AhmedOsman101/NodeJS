const methods = {
	// Function to generate a random password
	generatePassword: function (length) {
		let characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result;
	},
	// Function to generate random users
	generateData: function (array, length) {
		// Generate 30 Users
		for (let i = 0; i < length; i++) {
			let item = {
				id: i + 1,
				username: "user" + (i + 1),
				email: "user" + (i + 1) + "@example.com",
				password: methods.generatePassword(10),
				phone_number: "123-456-7" + (i + 1),
			};
			array.push(item);
		}
		return array;
	},
};

module.exports = methods;
