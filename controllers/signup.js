const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const Signup = require("../models/signup");

// signup stuff
router.post("/", (req, res) => {
	// console.log(req.body)
	let { firstname, surname, username, email, password } = req.body;
	firstname = firstname.toLowerCase();
	surname = surname.toLowerCase();
	username = username.toLowerCase();
	email = email.toLowerCase();

	if (!firstname || !surname || !email || !password || !username) {
		return res.status(400).json({ message: "one of the fields is empty" });
	}

	const hashedPassword = generateHash(password);

	Signup.newAcc(firstname, surname, username, email, hashedPassword)
		.then(() => res.status(200).json({ success: true }))
		.catch((err) => {
			//console.log(err);
			if (err.code === "23505") {
				res
					.status(400)
					.json({ message: "Sorry, this username or email is already taken" });
			} else {
				res.sendStatus(500);
			}
		});
});

router.get("/:userId", (req, res) => {
	const savedId = req.session.userid;
	const pathId = req.params.userId;

	if (!savedId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	if (savedId != pathId) {
		return res.status(401).json({});
	}

	Signup.getInfo(pathId)
		.then((dbRes) => res.status(200).send(dbRes[0]))
		.catch((err) => res.status(500).send(err));
});

router.put("/:userId", (req, res) => {
	const savedId = req.session.userid;
	const pathId = req.params.userId;
	let { firstname, surname, username, email } = req.body;
	firstname = firstname.toLowerCase();
	surname = surname.toLowerCase();
	username = username.toLowerCase();
	email = email.toLowerCase();

	if (!savedId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	if (savedId != pathId) {
		return res.status(401).json({});
	}

	Signup.checkUsername(username)
		.then((dbRes) => {
			// check if the username exists in the table or if it's matching the current one then continue
			if (dbRes.length == 0 || dbRes[0].username === username) {
				Signup.checkEmail(email)
					.then((data) => {
						// check if the email exists in the table or if it's matching the current one then continue
						if (data.length == 0 || data[0].email === email) {
							Signup.saveInfo(pathId, firstname, surname, username, email)
								.then((dbRes) => {
									res
										.status(200)
										.json({ message: "New user settings have been saved" });
								})
								.catch((err) => res.status(500).json({ message: err }));
						} else {
							return res.status(400).json({ message: "email already exists" });
						}
					})
					.catch((err) => {
						//console.log(err);
						return res.status(400).json({ message: err });
					});
			} else {
				return res.status(400).json({ message: "username already exists" });
			}
		})
		.catch((err) => {
			return res.status(400).json({ message: err });
		});
});

module.exports = router;
