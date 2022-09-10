import { errorBar } from "./renderErrorBar.js";

export const logOut = () => {
	axios
		.delete("/api/session")
		.then((response) => {
			//console.log(response);
			location.href = "/";
		})
		.catch((err) => {
			errorBar("Log out unsuccessful", "error");
		});
};

export const renderHeader = (isLoggedIn, user) => {
	const header = document.getElementById("header-nav");
	if (isLoggedIn) {
		// if user is logged in
		header.innerHTML = `
     <h1><a href="/">Travel Diary</a></h1>
     <ul id="navlist">
	 
        <button onClick="renderNewTrip()">New Trip</button>
        <li><a onClick="renderProfile()">Profile</a></li>
        <li><a onClick="logOut()">Logout</a></li>
     </ul>
    `;
	} else {
		//if user isn't logged in
		header.innerHTML = `
     <h1><a href="/">Travel Diary</a></h1>
     <ul id="navlist">
        <li><a href="login.html">Login</a></li>
        <li><a href="register.html">Register</a></li>
     </ul>
    `;
	}
};
