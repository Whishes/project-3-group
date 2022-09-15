import { renderHeader, logOut } from "./components/header.js";
import { renderHomePage } from "./components/homePage.js";
import { renderUserProfile } from "./components/profile.js";
import { errorBar } from "./components/renderErrorBar.js";
import { renderLoginForm } from "./components/loginForm.js";
import { renderRegistrationForm } from "./components/registration.js";
import { renderNewTrip } from "./components/newTrip.js";
import { renderEditHolidayForm } from "./components/editHoliday.js";
import { deleteHoliday } from "./components/deleteHoliday.js";
import renderHolidayParts from "./components/renderHolidayParts.js";
// import { renderHolidayParts } from "./components/renderHolidayParts.js";

console.log("HELLO!!!!");

// global function imports
window.errorBar = errorBar;
window.logOut = logOut;
window.renderUserProfile = renderUserProfile;
window.renderLoginForm = renderLoginForm;
window.renderRegistrationForm = renderRegistrationForm;
window.renderHomePage = renderHomePage;
window.renderNewTrip = renderNewTrip;
window.renderEditHolidayForm = renderEditHolidayForm;
window.deleteHoliday = deleteHoliday;
window.renderHolidayParts = renderHolidayParts;

const renderIndex = (loginPage = false) => {
	let isLoggedIn = false;
	axios
		.get("/api/session")
		.then((response) => {
			// if user is logged in do this
			isLoggedIn = true;
			const user = response.data;
			renderHeader(isLoggedIn, user);
			renderHomePage(isLoggedIn);
			if (loginPage) {
				errorBar("Login Successful", "success");
			}
		})
		.catch((err) => {
			// if user isn't logged in do this
			//console.log(err);
			renderHeader(isLoggedIn);
			renderHomePage(isLoggedIn);
		});
};
window.renderIndex = renderIndex;
renderIndex();
