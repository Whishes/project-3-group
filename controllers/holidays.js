const express = require("express");
const router = express.Router();
const Holidays = require("../models/holidays");

router.get("/", (req, res) => {
    const userId = req.session.id;

    if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

    Holidays.getAllForUser(userId).then((holidayRows) => res.json(holidayRows));
});

router.delete("/:id", (req, res) => {
    const holidayId = req.params.id;
    Holidays.deleteOne(holidayId)
    .then(() => res.json({success: true }))
    .catch((error) => {
        res.status(500).json({message: 'holiday ID does not exist'});
    });
}); 

//these are for testing via Postman
router.get("/getAll", (req, res) => {
    Holidays.getAll().then((holidayRows) => res.json(holidayRows));
});

router.get("/getOne/:id", (req, res) => {
    Holidays.getOne(req.params.id).then((holidayRows) => res.json(holidayRows));
});