const db = require("../database/db.js");

const holidayParts = {
    getAll: () => {
        const sql = 'SELECT * FROM holiday_parts';
        return db.query(sql).then((dbRes) => dbRes.rows );
    },
    getOne: (holidayPartId) => {
        const sql = `SELECT * FROM holiday_parts WHERE id = $1`;
        return db.query(sql, [holidayPartId]).then((dbRes) =>  dbRes.rows );
    },
    getAllForHoliday: (holidayId) => {
        const sql = `SELECT * FROM holiday_parts WHERE holiday_id = $1`;
        return db.query(sql, [holidayId]).then((dbRes) => dbRes.rows); 
    }
    // deleteOne: (holidayPartsId) => {
    //     const sql = `DELETE FROM holiday_parts WHERE id = $1`;
    //     return db.query(sql, [holidayPartsId]).then((dbRes) => dbRes.rows);
    // },
    // add: (data) => {
    //     const dataArray = [];

    //     for(let item in data){
    //         dataArray.push(data[item]);
    //     }      

    //     const sql = `INSERT INTO holiday_parts (holiday_id, part_name, date_start, date_end, location_name, img_link) VALUES ($1, $2, $3, $4, $5, $6)`;
    //     return db.query(sql, dataArray)
    //     .then((dbRes) => {
    //         dbRes;
    //     }).catch((err) => {
    //         err;
    //     });
    // },
    // edit: (data) => {
    //     const dataArray = [];

    //     for(let item in data){
    //         dataArray.push(data[item]);
    //     } 

    //     const sql = `UPDATE holiday_parts  SET part_name = $2, date_start = $3, date_end = $4, location_name = $5, img_link = $6 WHERE id = $1`;
    //     return db.query(sql, dataArray)
    //     .then((dbRes) => {
    //         dbRes;
    //     }).catch((err) => {
    //         err;
    //     });
    // }
};

module.exports = holidayParts;