import { renderHeader } from "./components/header.js";
import { renderHomePage } from "./components/homePage.js";
let isLoggedIn = false;

// dummy data
const data = {
	email: "janedoe@email.com",
	password: "test",
};

// dummy login to test card creationn
axios
	.post("/api/session", data)
	.then()
	.catch((err) => alert("not logged in:", err));

axios
	.get("/api/session")
	.then((response) => {
		// if user is logged in do this
		isLoggedIn = true;
		const user = response.data;

		renderHeader(isLoggedIn, user);
		renderHomePage(isLoggedIn);
	})
	.catch((err) => {
		// if user isn't logged in do this
		//console.log(err);
		renderHeader(isLoggedIn);
		renderHomePage(isLoggedIn);
	});
