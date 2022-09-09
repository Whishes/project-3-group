const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const Signup = require("../models/signup");

// signup stuff
router.post("/", (req, res) => {
	// console.log(req.body)
	const { firstname, surname, username, email, password } = req.body;

	const hashedPassword = generateHash(password);

	Signup.newAcc(firstname, surname, username, email, hashedPassword)
		.then(() => res.status(200).json({"success": true}))
		.catch((err) => res.sendStatus(500));
});

module.exports = router;
