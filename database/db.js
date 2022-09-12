const pg = require("pg");
require("dotenv").config();
//const connectionString = process.env.CONNECTION_STRING;

const db = new pg.Pool({
	database: "travel_diary",
	//connectionString,
});

module.exports = db;
