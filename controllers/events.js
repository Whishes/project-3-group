const express = require("express");
const router = express.Router();
const Events = require("../models/events");

router.get("/", (req, res) => {
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	const part_id = req.body.part_id;

	Events.getAll(part_id).then((eventRows) => res.json(eventRows));
});

module.exports = router;
