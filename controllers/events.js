const express = require("express");
const router = express.Router();
const Events = require("../models/events");

router.get("/", (req, res) => {
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	const part_id = req.query.part_id;

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
		.then(() => res.json({ message: "Event successfully deleted" }))
		.catch(() => res.status(500).json({ message: "Delete Unsuccessful" }));
});

router.post("/", (req, res) => {
	const userId = req.session.userid;
	const { part_id, event_name, location_name, img_link, event_description } =
		req.body;
	//console.log(req.body);

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	// check if all necessary fields have at least some sort of data in it
	if (
		!part_id ||
		!event_name ||
		!location_name ||
		!img_link ||
		!event_description
	) {
		return res.status(400).json({ message: "Please fill out all fields" });
	}

	Events.addOne(part_id, event_name, location_name, img_link, event_description)
		.then(() => res.status(200).json({ message: "Event successfully created" }))
		.catch(() =>
			res
				.status(500)
				.json({ message: "Could not create the event. Try again later" })
		);
});

router.put("/:id", (req, res) => {
	const userId = req.session.userid;
	const eventId = req.params.id;
	const { part_id, event_name, location_name, img_link, event_description } =
		req.body;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	if (
		!part_id ||
		!event_name ||
		!location_name ||
		!img_link ||
		!event_description
	) {
		return res.status(400).json({ message: "One of the fields is empty" });
	}

	// //console.log(
	// 	eventId,
	// 	part_id,
	// 	event_name,
	// 	location_name,
	// 	img_link,
	// 	event_description
	// );

	Events.editOne(
		eventId,
		part_id,
		event_name,
		location_name,
		img_link,
		event_description
	)
		.then((dbRes) => {
			//console.log(dbRes);
			res.status(200).json({ message: "Event successfully edited" });
		})
		.catch(() =>
			res
				.status(500)
				.json({ message: "Changes could not be changed. Try again later" })
		);
});

module.exports = router;
