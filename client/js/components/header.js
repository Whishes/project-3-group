const renderHeader = (isLoggedIn) => {
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
	return;
};
