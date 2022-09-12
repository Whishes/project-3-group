const express = require("express");
const router = express.Router();
const Events = require("../models/events");

router.get("/", (req, res) => {
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	const part_id = req.body.part_id;

	Events.getAll(part_id)
		.then((eventRows) => res.json(eventRows))
		.catch((err) => {
			res.status(500).json({ message: "Could not get data" });
		});
});

router.get("/:id", (req, res) => {
	const userId = req.session.userid;
	const eventId = req.params.id;
	//console.log(eventId);

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	Events.getOne(eventId)
		.then((eventRows) => res.json(eventRows))
		.catch((err) => {
			res.status(500).json({ message: "Could not get data" });
		});
});

router.delete("/:id", (req, res) => {
	const userId = req.session.userid;
	const eventId = req.params.id;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	Events.deleteOne(eventId)
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(500).json({ message: "Delete Unsuccessful" }));
});

module.exports = router;
