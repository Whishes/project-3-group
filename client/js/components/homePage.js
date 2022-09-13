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
				//console.log("holiday res:", response);
				const data = response.data;
				// check if there are tables in the array
				if (data.length === 0) {
					container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new holiday?</h2>
				<button onClick="renderNewTrip()">New Trip</button>
			</div>
		</div>
		`;
				} else {
					data.forEach((holiday) => {
						// creates a card element using the holiday object passed as a parameter
						const cardElement = renderCard(holiday);
						container.appendChild(cardElement);
					});
				}
			})
			.catch((err) => {
				//console.log("holidays api:", err);
				container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new holiday?</h2>
				<button onClick="renderNewTrip()">New Trip</button>
			</div>
		</div>
		`;
			});
	} else {
		// user isn't logged in
		container.innerHTML = `
		<section>
			<h1 id="oops">Create your own story!</h1>
			<div id="cards-container">
				<div class="home-containers" id="holiday-container">
					<img src="../../images/holiday.png" alt="holiday card">
					<p>All your holidays in one place!</p>
				</div>
				<i class="fa-solid fa-arrow-right fa-2xl"></i>
				<div class="home-containers" id="part-container">
				<img src="../../images/holiday_part.png" alt="holiday_part card">
					<p>Separated however you want!</p>
				</div>
				<i class="fa-solid fa-arrow-right fa-2xl"></i>
				<div class="home-containers" id="event-container">
					<img src="../../images/holiday_part.png" alt="holiday_part card">
					<p>Each event right at your fingertips!</p>
				</div>
			</div>
		</section>
		`;
	}
	sectionPage.replaceChildren(container);
	const cards_container = document.getElementById("cards-container");
	cards_container.style.display = "flex";
};
