const express = require("express");
const router = express.Router();
const holidayParts = require("../models/holiday-parts");

router.get("/:holidayId", (req, res) => {
	const holidayId = req.params.holidayId;
	
	if (!holidayId) {
		return res.status(401).send({ message: "Error! Holiday cannot be found" });
	}

	holidayParts.getAllForHoliday(req.params.holidayId).then((holidayPartsRows) => res.json(holidayPartsRows));
});

router.delete("/:id", (req, res) => {
	const holidayPartsId = req.params.id;
	holidayParts.deleteOne(holidayPartsId)
		.then(() => res.json({ success: true }))
		.catch((error) => {
			res.status(500).json({ message: "holiday part does not exist" });
		});
});

//these are for testing via Postman
router.get("/getAll", (req, res) => {
	holidayParts.getAll().then((holidayPartsRows) => res.json(holidayPartsRows));
});

router.get("/getOne/:id", (req, res) => {
	holidayParts.getOne(req.params.id).then((holidayPartsRows) => res.json(holidayPartsRows));
});

router.get("/getAllForHoliday/:holidayId", (req, res) => {
	holidayParts.getAllForHoliday(req.params.holidayId).then((holidayPartsRows) => res.json(holidayPartsRows));
});

module.exports = router;