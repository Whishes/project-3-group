const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const Signup = require("../models/signup");

// signup stuff
router.post("/", (req, res) => {
	//console.log("here");
	const { email, password } = req.body;

	const hashedPassword = generateHash(password);

	Signup.newAcc(email, hashedPassword)
		.then((res) => res.json({}))
		.catch((err) => res.sendStatus(500));
});

module.exports = router;
