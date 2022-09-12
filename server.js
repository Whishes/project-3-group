// package imports
const express = require("express");
require("dotenv").config();

// file imports
const db = require("./database/db");
const sessionController = require("./controllers/session");
const signupController = require("./controllers/signup");
const holidaysController = require("./controllers/holidays");

const eventsController = require("./controllers/events");
const { expressSession, pgSession } = require("./session");

// express stuff
const app = express();
const port = 3000;

// getting session info working into the db
app.use(
	expressSession({
		resave: true,
		saveUninitialized: true,
		store: new pgSession({
			pool: db, // Connects to our postgres db
			createTableIfMissing: true, // Creates a session table in your database (go look at it!)
		}),
		secret: process.env.EXPRESS_SESSION_SECRET_KEY,
	})
);

// serve the frontend
app.use(express.json());
app.use(express.static("client"));

// routes
app.use("/api/signup", signupController);
app.use("/api/session", sessionController);
app.use("/api/holidays", holidaysController);

app.use("/api/events", eventsController);

// start the web server
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
