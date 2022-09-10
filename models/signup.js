const db = require("../database/db.js");

const Signup = {
	newAcc: (firstname, surname, username, email, hashedPassword) => {
		const sql = `INSERT INTO users(firstname, surname, username, email, password) VALUES($1, $2, $3, $4, $5)`;
		return db.query(sql, [firstname, surname, username, email, hashedPassword]).then((dbRes) => dbRes);
	},
};

module.exports = Signup;
