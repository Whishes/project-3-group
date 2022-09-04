const db = require("../database/db.js");

const Signup = {
	newAcc: (email, hashedPassword) => {
		const sql = `INSERT INTO users(email, password) VALUES($1, $2)`;
		return db.query(sql, [email, hashedPassword]).then({ success: true });
	},
};

module.exports = Signup;
