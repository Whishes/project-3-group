const express = require("express");
const router = express.Router();
const holidayParts = require("../models/holidayparts");

router.get("/", (req, res) => {
	// console.log(req.query)
	const userId = req.session.userid;
	const holidayId = req.query.holiday_id;
	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	holidayParts
		.getAll(holidayId)
		.then((holidayPartsRows) => res.json(holidayPartsRows))
		.catch((err) => {
			res.status(500).json({ message: "Could not get data" });
		});
});

router.get("/:id", (req, res) => {
	const holidayPartId = req.params.id;
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	holidayParts
		.getOne(holidayPartId)
		.then((holidayPartsRows) => res.json(holidayPartsRows))
		.catch((err) => {
			res.status(500).json({ message: "Could not get data" });
		});
});

router.delete("/:id", (req, res) => {
	const holidayPartId = req.params.id;
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	holidayParts
		.deleteOne(holidayPartId)
		.then((holidayPartsRows) => res.json({ message: "Delete success" }))
		.catch((err) => {
			res.status(500).json({ message: "Delete failed" });
		});
});

router.post("/", (req, res) => {
	const userId = req.session.userid;
	const {
		holiday_id,
		part_name,
		date_start,
		date_end,
		location_name,
		img_link,
	} = req.body;
	//console.log(req.data);

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	// check if all necessary fields have at least some sort of data in it
	if (
		!holiday_id ||
		!part_name ||
		!date_start ||
		!date_end ||
		!location_name ||
		!img_link
	) {
		return res.status(400).json({ message: "One of the fields is empty" });
	}

	holidayParts
		.addOne(
			holiday_id,
			part_name,
			date_start,
			date_end,
			location_name,
			img_link
		)
		.then(() => res.status(200).json({ message: "Event successfully created" }))
		.catch(() =>
			res
				.status(500)
				.json({ message: "Could not create the event. Try again later" })
		);
});

router.put("/:id", (req, res) => {
	const userId = req.session.userid;
	const holiday_part_id = req.params.id;
	const {
		holiday_id,
		part_name,
		date_start,
		date_end,
		location_name,
		img_link,
	} = req.body;
	//console.log(req.body);

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	if (
		!holiday_id ||
		!part_name ||
		!date_start ||
		!date_end ||
		!location_name ||
		!img_link
	) {
		return res.status(400).json({ message: "One of the fields is empty" });
	}

	holidayParts
		.editOne(
			holiday_part_id,
			holiday_id,
			part_name,
			date_start,
			date_end,
			location_name,
			img_link
		)
		.then((dbRes) => {
			res.status(200).json({ message: "Holiday part successfully edited" });
		})
		.catch(() =>
			res
				.status(500)
				.json({ message: "Changes could not be changed. Try again later" })
		);
});

module.exports = router;
