const express = require("express");
const router = express.Router();
const { isValidPassword } = require("../utils/hash");
const Session = require("../models/session");

// login stuff
router.post("/", (req, res) => {
	const { email, password } = req.body;

	Session.login(email).then((userRows) => {
		if (userRows.length !== 1) {
			return res
				.status(400)
				.json({ message: "The email and/or password are not correct" });
		}
		//console.log(userRows);
		const user = userRows[0];
		const hashedPassword = user.password;

		if (isValidPassword(password, hashedPassword)) {
			req.session.email = email;
			req.session.id = user.id;
			return res.json({});
		}
		return res
			.status(400)
			.json({ message: "The email and/or password are not correct" });
	});
});

router.get("/", (req, res) => {
	//console.log("session");
	const email = req.session.email;

	if (!email) {
		return res.status(401).send({ message: "Not logged in" });
	} else {
		return res.json({ email: email });
	}
});

router.delete("/", (req, res) => {
	req.session.destroy();
	return res.status(204).json({});
});

module.exports = router;