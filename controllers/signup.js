const express = require("express");
const router = express.Router();
const { generateHash } = require("../utils/hash");
const Signup = require("../models/signup");

// signup stuff
router.post("/", (req, res) => {
	// console.log(req.body)
	const { firstname, surname, username, email, password } = req.body;

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
	const { firstname, surname, username, email } = req.body;

	if (!savedId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	if (savedId != pathId) {
		return res.status(401).json({});
	}

	Signup.saveInfo(pathId, firstname, surname, username, email)
		.then((dbRes) => {
			res.status(200).json({ message: "New user settings have been saved" });
			//console.log(dbRes);
		})
		.catch((err) => res.status(500).json({ message: err }));
});

module.exports = router;
