let isLoggedIn = false;

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
