const renderHomePage = (isLoggedIn) => {
	const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "content-container";
	if (isLoggedIn) {
		// user is logged in
		container.innerHTML = `
		<h1 id="oops">Oops! Looks like there's no content...</h1>
		<div id="subheading-container"><h2 id="subheading">Add new holiday?</h2><button onClick="renderNewTrip()">New Trip</button></div>
		`;
	} else {
		// user isn't logged in
		container.innerHTML = `<h2>User isn't logged in</h2>`;
	}
	sectionPage.appendChild(container);
};
