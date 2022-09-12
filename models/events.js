const db = require("../database/db.js");

const Events = {
	getAll: (part_id) => {
		const sql = "SELECT * FROM events WHERE part_id=$1";
		return db.query(sql, [part_id]).then((dbRes) => dbRes.rows);
	},
	getOne: (event_id) => {
		const sql = "SELECT * FROM events WHERE id=$1";
		return db.query(sql, [event_id]).then((dbRes) => dbRes.rows);
	},
	deleteOne: (eventId) => {
		const sql = `DELETE FROM events WHERE id = $1`;
		return db.query(sql, [eventId]).then((dbRes) => dbRes.rows);
	},
};

module.exports = Events;
