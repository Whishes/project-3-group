import { renderHeader, logOut } from "./components/header.js";
import { renderHomePage } from "./components/homePage.js";
import { errorBar } from "./components/renderErrorBar.js";
import { renderLoginForm } from "./components/loginForm.js";
import { renderRegistrationForm } from "./components/registration.js";

// global function imports
window.errorBar = errorBar;
window.logOut = logOut;
window.renderLoginForm = renderLoginForm;
window.renderRegistrationForm = renderRegistrationForm;
window.renderHomePage = renderHomePage;

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
