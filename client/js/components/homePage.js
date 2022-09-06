const renderHomePage = (isLoggedIn) => {
	const sectionPage = document.getElementById("page");
	if (isLoggedIn) {
		// user is logged in
		sectionPage.innerHTML = `<h2>User is logged in</h2>`;
	} else {
		// user isn't logged in
		sectionPage.innerHTML = `<h2>User isn't logged in</h2>`;
	}
};
