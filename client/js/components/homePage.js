const renderHomePage = (isLoggedIn) => {
	const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "content-container";

	//
	if (isLoggedIn) {
		// user is logged in
		axios
			.get("/api/holidays")
			.then((response) => {
				console.log(response);
				const data = response.data;

				data.forEach((holiday) => {
					const cardContainer = document.createElement("div");
					cardContainer.className = "card-container";
					cardContainer.innerHTML = `
					<div class="card-top">
						<img alt=${holiday.location_name} src=${holiday.img_link}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2>${holiday.holiday_name}</h2>
							<h4>${holiday.location_name}</h4>
							<p>${holiday.date_start} to ${holiday.date_end}<p>
						</div>
						<div class="btn-bottom">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</div>
					`;

					container.appendChild(cardContainer);
				});
			})
			.catch((err) => {
				alert(err);
				container.innerHTML = `
		<h1 id="oops">Oops! Looks like there's no content...</h1>
		<div id="subheading-container">
			<h2 id="subheading">Add new holiday?</h2>
			<button onClick="renderNewTrip()">New Trip</button>
		</div>
		`;
			});
	} else {
		// user isn't logged in
		container.innerHTML = `<h2>User isn't logged in</h2>`;
	}
	sectionPage.appendChild(container);
};
