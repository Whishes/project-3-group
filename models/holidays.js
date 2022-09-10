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
    add: (data) => {
        const dataArray = [];

        for(let item in data){
            dataArray.push(data[item]);
        }      

        const sql = `INSERT INTO holidays (user_id, holiday_name, date_start, date_end, location_name, img_link) VALUES ($1, $2, $3, $4, $5, $6)`;
        return db.query(sql, dataArray)
        .then((dbRes) => {
            dbRes;
        }).catch((err) => {
            err;
        });
    },
    edit: (data) => {
        const dataArray = [];

        for(let item in data){
            dataArray.push(data[item]);
        } 

        const sql = `UPDATE holidays SET holiday_name = $2, date_start = $3, date_end = $4, location_name = $5, img_link = $6 WHERE id = $1`;
        return db.query(sql, dataArray)
        .then((dbRes) => {
            dbRes;
        }).catch((err) => {
            err;
        });
    }
};

module.exports = Holidays;