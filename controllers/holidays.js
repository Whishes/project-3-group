const express = require("express");
const router = express.Router();
const Holidays = require("../models/holidays");

router.get("/", (req, res) => {
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	Holidays.getAllForUser(userId).then((holidayRows) => res.json(holidayRows));
});

router.get("/:id", (req, res) => {
    const holidayId = req.params.id;
	const userId = req.session.userid;

	if (!userId) {
		return res.status(401).send({ message: "Not logged in" });
	}

	Holidays.getOneForUser(holidayId, userId).then((holidayRows) => res.json(holidayRows));
});

router.delete("/:id", (req, res) => {
	const holidayId = req.params.id;
	Holidays.deleteOne(holidayId)
		.then(() => res.json({ success: true }))
		.catch((error) => {
			res.status(500).json({ message: "holiday does not exist" });
		});
});

router.post("/", (req, res) => {
    //if you are working on the holidays page,
    //change this to a hard coded id
    //i.e. userId = 1;
    const userId = 1;

    if (!userId) {
		return res.status(401).send({ message: "Not logged in!" });
	}

    //just creates the variables of the following names with their respective values
    const { holiday_name, date_start, date_end, location_name, img_link } = req.body;

    if(holiday_name === ''
        || date_start === '' 
        || date_end === '' 
        || location_name === '' 
        || img_link === '' ) {
            return res.status(400).json({ message: 'Please fill in the entire form.' });
        }

    //this just stores the req.body contents within the data object
    // i.e. data = {
    // userId: 1,
    // holiday_name: 'Paris'
    // date_start: '1997-07-28'
    //etc...etc...
    // }
    const data = { userId, ...req.body };

    Holidays.add(data)
    .then(() => res.status(200).json({ success: true }))
    .catch(() => res.status(500).json({ success: false }));
});

router.put("/:id", (req, res) => {
    //if you are working on the holidays page,
    //change this to a hard coded id
    //i.e. userId = 1;
    const userId = req.session.id;

    if (!userId) {
		return res.status(401).send({ message: "Not logged in!" });
	}

    //just creates the variables of the following names with their respective values
    const { holiday_name, date_start, date_end, location_name, img_link } = req.body;
    const holiday_id = req.params.id;

    if(holiday_name === ''
        || date_start === '' 
        || date_end === '' 
        || location_name === '' 
        || img_link === '' ) {
            return res.status(400).json({ message: 'Please fill in the entire form.' });
        }

    //this just stores the req.body contents within the data object
    // i.e. data = {
    // userId: 1,
    // holiday_name: 'Paris'
    // date_start: '1997-07-28'
    //etc...etc...
    // }
    const data = { holiday_id, ...req.body };

    Holidays.edit(data)
    .then(() => res.status(200).json({ success: true }))
    .catch(() => res.status(500).json({ success: false }));
});

//these are for testing via Postman
router.get("/getAll", (req, res) => {
	Holidays.getAll().then((holidayRows) => res.json(holidayRows));
});

router.get("/getOne/:id", (req, res) => {
	Holidays.getOne(req.params.id).then((holidayRows) => res.json(holidayRows));
});

module.exports = router;
