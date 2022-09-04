const pg = require("pg");
require("dotenv").config();
const connectionString = process.env.CONNECTION_STRING;

const db = new pg.Pool({
	database: "scavenger_hunt",
	connectionString,
});

module.exports = db;
