const db = require("../database/db.js");

const Events = {
	getAll: (part_id) => {
		const sql = `SELECT * FROM events WHERE part_id=${part_id}`;
		return db.query(sql).then((dbRes) => dbRes.rows);
	},
	getOne: (event_id) => {
		const sql = `SELECT * FROM events WHERE id=${event_id}`;
		return db.query(sql).then((dbRes) => dbRes.rows);
	},
};

module.exports = Events;
