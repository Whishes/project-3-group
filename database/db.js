const pg = require("pg");
require("dotenv").config();
const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({
	database: "travel_diary",
	//connectionString,
});

module.exports = db;
