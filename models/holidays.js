const db = require("../database/db.js");

const Holidays = {
    getAll: () => {
        const sql = 'SELECT * FROM holidays';
        return db.query(sql).then((dbRes) => dbRes.rows );
    },
    getOne: (holidayId) => {
        const sql = `SELECT * FROM holidays WHERE id = $1`;
        return db.query(sql, [holidayId]).then((dbRes) =>  dbRes.rows );
    },
    getAllForUser: (userId) => {
        const sql = `SELECT * FROM holidays WHERE user_id = $1`;
        return db.query(sql, [userId]).then((dbRes) => dbRes.rows); 
    },
    deleteOne: (holidayId) => {
        const sql = `DELETE FROM holidays WHERE id = $1`;
        return db.query(sql, [holidayId]).then((dbRes) => dbRes.rows);
    },
};

module.exports = Holidays;