const db = require("../database/db.js");

const Holidays = {
	getAll: (part_id) => {
		const sql = `SELECT * FROM events WHERE part_id=${part_id}`;
		return db.query(sql).then((dbRes) => dbRes.rows);
	},
};

module.exports = Holidays;
