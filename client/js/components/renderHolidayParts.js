const renderPartCard = (holidayPart) => {
	const cardContainer = document.createElement("div");
	cardContainer.className = "card-container";
	cardContainer.innerHTML = `
					<div class="card-top" onclick="alert('render events')">
						<img alt=${holidayPart.location_name} src=${holidayPart.img_link}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2><a onClick="alert('render events')">${holidayPart.part_name}</a></h2>
							<h4>${holidayPart.location_name}</h4>
							<p>${moment(holidayPart.date_start).format("MMM Do YY")} - ${moment(
holidayPart.date_end
	).format("MMM Do YY")}</p>
						</div>
						<div class="btn-bottom">
							<button id="edit-btn" onClick="renderEditHolidayPartForm(${holidayPart.id})">Edit</button>
							<div class="line"></div>
							<button id="delete-btn" onClick="deleteHolidayPart(${holidayPart.id})">Delete</button>
						</div>
					</div>
					`;

	return cardContainer;
};

export const renderHolidayParts = (holidayId) => {
	const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "content-container";

    const data = {
        holiday_id: holidayId
    }
   
	//
	// if (isLoggedIn) {
	// 	// user is logged in
		axios
			.get("/api/holidayparts", data)
			.then((container.innerHTML = "<h1>Loading...</h1>"))
			.then((response) => {
				container.innerHTML = "";
				console.log("holiday parts res:", response);
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
					data.forEach((holidayPart) => {
						// creates a card element using the holiday object passed as a parameter
						const cardElement = renderPartCard(holidayPart);
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
	// } else {
		// user isn't logged in
		container.innerHTML = `<h2>User isn't logged in</h2>`;
	// }
	sectionPage.replaceChildren(container);
};