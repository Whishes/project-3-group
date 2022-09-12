const db = require("../database/db.js");

const Signup = {
	newAcc: (firstname, surname, username, email, hashedPassword) => {
		const sql = `INSERT INTO users(firstname, surname, username, email, password) VALUES($1, $2, $3, $4, $5)`;
		return db
			.query(sql, [firstname, surname, username, email, hashedPassword])
			.then((dbRes) => dbRes);
	},
	getInfo: (userId) => {
		const sql = "SELECT * FROM users WHERE id = $1";
		return db
			.query(sql, [userId])
			.then((dbRes) => dbRes.rows)
			.catch((err) => err);
	},
	saveInfo: (userId, firstname, surname, username, email) => {
		const sql = `UPDATE users SET firstname=$2, surname=$3, username=$4, email=$5 WHERE id=$1`;
		return db
			.query(sql, [userId, firstname, surname, username, email])
			.then((dbRes) => dbRes)
			.catch((err) => {
				return err;
			});
	},
	checkUsername: (username) => {
		const sql = "SELECT username FROM users WHERE username=$1";
		return db
			.query(sql, [username])
			.then((dbRes) => {
				return dbRes.rows;
			})
			.catch((err) => {
				return err;
			});
	},
	checkEmail: (email) => {
		const sql = "SELECT email FROM users WHERE email=$1";
		return db
			.query(sql, [email])
			.then((dbRes) => {
				return dbRes.rows;
			})
			.catch((err) => {
				return err;
			});
	},
};

module.exports = Signup;
