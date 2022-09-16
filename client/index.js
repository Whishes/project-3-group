import { renderHeader, logOut } from "./js/components/header.js";
import { renderHomePage } from "./js/components/homePage.js";
import { renderUserProfile } from "./js/components/profile.js";
import { errorBar } from "./js/components/renderErrorBar.js";
import { renderLoginForm } from "./js/components/loginForm.js";
import { renderRegistrationForm } from "./js/components/registration.js";
import { renderNewTrip } from "./js/components/newTrip.js";
import { renderEditHolidayForm } from "./js/components/editHoliday.js";
import renderHolidayParts from "./js/components/renderHolidayParts.js";
import { renderNewEvent } from "./js/components/newEvent.js";
import renderEvents from "./js/components/renderEvents.js";

// global function imports
window.errorBar = errorBar;
window.logOut = logOut;
window.renderUserProfile = renderUserProfile;
window.renderLoginForm = renderLoginForm;
window.renderRegistrationForm = renderRegistrationForm;
window.renderHomePage = renderHomePage;
window.renderNewTrip = renderNewTrip;
window.renderEditHolidayForm = renderEditHolidayForm;
window.renderHolidayParts = renderHolidayParts;
window.renderNewEvent = renderNewEvent;
window.renderEvents = renderEvents;

let isLoggedIn = false;

// dummy data
// const data = {
// 	email: "janedoe@email.com",
// 	password: "test",
// };

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
