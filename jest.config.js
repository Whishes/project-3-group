const axios = require("axios");
const moment = require("moment");

// prettier-ignore
module.exports = {
	testEnvironment: "jsdom",
	globals: {
		moment: moment,
		axios: axios
	},
};
