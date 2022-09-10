const moment = require("moment");
const axios = require("axios");

module.exports = {
	testEnvironment: "jsdom",
	globals: {
		axios: axios,
		moment: moment,
	},
};
