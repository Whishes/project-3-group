const db = require("../database/db.js");

const Holidays = {
    getAll: () => {
        const sql = 'SELECT * FROM holidays';
        db.query(sql).then((dbRes) => { return dbRes.rows });
    },
    getOne: (holidayId) => {
        const sql = `SELECT * FROM holidays WHERE id = $1`;
        db.query(sql, [holidayId]).then((dbRes) => { return dbRes.rows });
    },
    getAllForUser: (userId) => {
        const sql = `SELECT * FROM holidays WHERE user_id = $1`;
        db.query(sql, [userId]).then((dbRes) => { return dbRes.rows }); 
    },
    deleteOne: (holidayId) => {
        const sql = `DELETE FROM holidays WHERE id = $1`;
        db.query(sql, [holidayId]).then((dbRes) => { return dbRes.rows });
    },
};

module.exports = Holidays;