import renderCard from "./renderCard.js";
//window.renderNewTrip = renderNewTrip;

export const renderHomePage = (isLoggedIn) => {
	const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "content-container";
	//
	if (isLoggedIn) {
		// user is logged in
		axios
			.get("/api/holidays")
			.then((container.innerHTML = "<h1>Loading...</h1>"))
			.then((response) => {
				container.innerHTML = "";
				// console.log("holiday res:", response);
				const data = response.data;
				// check if there are tables in the array
				if (data.length === 0) {
					container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new holiday?</h2>
				<button onClick="renderNewTrip('holiday')">New Trip</button>
			</div>
		</div>
		`;
				} else {
					data.forEach((holiday) => {
						// creates a card element using the holiday object passed as a parameter
						// const cardElement = renderCard(holiday);
						renderCard(holiday)
						// container.appendChild(cardElement);
					});
					
				}
			})
			.catch((err) => {
				console.log("holidays api:", err);
				container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new holiday?</h2>
				<button onClick="renderNewTrip('holiday')">New Trip</button>
			</div>
		</div>
		`;
			});
	} else {
		// user isn't logged in
		container.innerHTML = `<h2>User isn't logged in</h2>`;
	}
	sectionPage.replaceChildren(container);
};
