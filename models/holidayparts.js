const db = require("../database/db.js");

const holidayParts = {
    getAll: (holidayId) => {
        const sql = `SELECT * FROM holiday_parts WHERE holiday_id = $1`;
        return db.query(sql, [holidayId]).then((dbRes) => dbRes.rows );
    },
    getOne: (holidayPartId) => {
        const sql = `SELECT * FROM holiday_parts WHERE id = $1`;
        return db.query(sql, [holidayPartId]).then((dbRes) =>  dbRes.rows );
    },
    deleteOne: (holidayPartId) => {
        const sql = `DELETE FROM holiday_parts WHERE id = $1`;
        return db.query(sql, [holidayPartId]).then((dbRes) => dbRes.rows);
    },
    addOne: (holiday_id, part_name, date_start, date_end, location_name, img_link) => {
		const sql =
			`INSERT INTO holiday_parts (holiday_id, part_name, date_start, date_end, location_name, img_link) VALUES ($1, $2, $3, $4, $5, $6)`;
		return db
			.query(sql, [
				holiday_id,
                part_name,
                date_start,
                date_end,
                location_name,
                img_link
			])
			.then((dbRes) => dbRes)
			.catch((err) => err);
	},
	editOne: (
		holiday_part_id,
		holiday_id,
		part_name,
		date_start,
		date_end,
		location_name,
		img_link
	) => {
		const sql = `UPDATE events SET part_name = $1, date_start = $2, date_end = $3, location_name = $4, img_link = $5 WHERE id = $5 AND holiday_id = $6`;
		return db
			.query(sql, [
                part_name,
                date_start,
                date_end,
                location_name,
                img_link,
                holiday_part_id,
                holiday_id
			])
			.then((dbRes) => dbRes)
			.catch((err) => err);
	},
};

module.exports = holidayParts;