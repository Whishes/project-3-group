const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const Signup = require("../models/signup");

// signup stuff
router.post("/", (req, res) => {
	// console.log(req.body)
	const { firstname, surname, username, email, password } = req.body;
	
	if (!firstname || !surname || !email || !password || !username) {
		return res.status(400).json({message: "one of the fields is empty"})
	}

	const hashedPassword = generateHash(password);

	Signup.newAcc(firstname, surname, username, email, hashedPassword)
		.then(() => res.status(200).json({"success": true}) )
		.catch((err) => {
			console.log(err)
			if (err.code === "23505") {
				res.status(400).json({message: "Sorry, this username or email is already taken"})
		  	} else {res.sendStatus(500)}});
});

module.exports = router;
