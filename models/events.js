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
	addOne: (part_id, event_name, location_name, img_link, event_description) => {
		const sql =
			"INSERT INTO events (part_id, event_name, location_name, img_link, event_description) VALUES ($1, $2, $3, $4, $5)";
		return db
			.query(sql, [
				part_id,
				event_name,
				location_name,
				img_link,
				event_description,
			])
			.then((dbRes) => dbRes)
			.catch((err) => err);
	},
	editOne: (
		event_id,
		part_id,
		event_name,
		location_name,
		img_link,
		event_description
	) => {
		const sql = `UPDATE events SET event_name = $1, location_name = $2, img_link = $3, event_description = $4 WHERE id = $5 AND part_id = $6`;
		return db
			.query(sql, [
				event_name,
				location_name,
				img_link,
				event_description,
				event_id,
				part_id,
			])
			.then((dbRes) => dbRes)
			.catch((err) => err);
	},
};

module.exports = Events;
