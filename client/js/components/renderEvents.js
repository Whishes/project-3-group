import { renderNewEvent } from "./newEvent.js";
import renderEventCard from "./renderEventCard.js";
import renderHolidayParts from "./renderHolidayParts.js";

const renderEvents = (itemId, holidayId) => {
	const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "event-container";

	const partId = {
		part_id: itemId,
	};

	axios
		.get("/api/events", { params: partId })
		.then((container.innerHTML = "<h1>Loading...</h1>"))
		.then((response) => {
			const data = response.data;

			// check if there are tables in the array
			if (data.length === 0) {
				const deez = document.createElement("div");
				deez.id = "content-container";
				deez.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new event?</h2>
				<button onClick="renderNewEvent(${itemId}, ${holidayId})">New Event</button>
			</div>
		</div>
		`;
				sectionPage.appendChild(deez);
			} else {
				//clear the container
				container.innerHTML = "";
				data.forEach((eventObj) => {
					// creates a card element using the holiday part object passed as a parameter
					renderEventCard(eventObj, itemId, holidayId);
				});

				//adding icon to add part below
				const plusSign = document.createElement("div");
				plusSign.className = "add-part-div";
				plusSign.addEventListener("click", function () {
					renderNewEvent(itemId, holidayId);
				});
				plusSign.innerHTML = `
						<i class="fa-regular fa-square-plus" id="addPart"></i>
					`;
				container.appendChild(plusSign);
			}
		})
		.catch((err) => {
			//console.log("events api:", err);
			container.innerHTML = "";
			const deez = document.createElement("div");
			deez.id = "content-container";
			deez.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new event?</h2>
				<button onClick="renderNewEvent(${itemId}, ${holidayId})">New Event</button>
			</div>
		</div>
		`;
			sectionPage.appendChild(deez);
		});

	sectionPage.replaceChildren(container);

	// back button code
	const backBtn = document.createElement("i");
	backBtn.className = "fa-solid fa-arrow-left";
	backBtn.id = "backBtn";
	backBtn.addEventListener("click", () => {
		document.body.removeChild(backBtn);
		renderHolidayParts(holidayId);
	});

	if (document.querySelector("#backBtn") !== null) {
		document.body.removeChild(document.querySelector("#backBtn"));
	}
	document.body.appendChild(backBtn);
};

export default renderEvents;
