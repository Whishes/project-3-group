import { renderNewTrip } from "./newTrip.js";
import renderCard from "./renderCard.js";

const renderHolidayParts = (itemId) => {
	const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "content-container";
	// console.log(holidayId)

	const data = {
		holiday_id: itemId,
	};

	axios
		.get("/api/holidayparts", { params: data })
		.then((container.innerHTML = "<h1>Loading...</h1>"))
		.then((response) => {
			container.innerHTML = "";
			// console.log("holiday parts res:", response);
			const data = response.data;
			// check if there are tables in the array
			if (data.length === 0) {
				container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new holiday part?</h2>
				<button onClick="renderNewTrip('holiday_part', ${itemId})">New holiday part</button>
			</div>
		</div>
		`;
			} else {
				data.forEach((holidayPart) => {
					// console.log(holidayPart)
					// creates a card element using the holiday part object passed as a parameter
					renderCard(holidayPart);
				});

				//adding icon to add part below
				const plusSign = document.createElement("div");
				plusSign.className = "add-part-div";
				plusSign.addEventListener("click", function () {
					renderNewTrip("holiday_part", itemId);
				});
				plusSign.innerHTML = `
						<i class="fa-regular fa-square-plus" id="addPart"></i>
					`;
				container.appendChild(plusSign);
			}
		})
		.catch((err) => {
			//console.log("holidays api:", err);
			container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new holiday part?</h2>
				<button onClick="renderNewTrip('holiday_part', ${itemId})">New Holiday Part</button>
			</div>
		</div>
		`;
		});

	sectionPage.replaceChildren(container);

	// back button code
	const backBtn = document.createElement("i");
	backBtn.className = "fa-solid fa-arrow-left";
	backBtn.id = "backBtn";
	backBtn.addEventListener("click", () => {
		document.body.removeChild(backBtn);
		renderHomePage(true);
	});
	if (document.querySelector("#backBtn") !== null) {
		document.body.removeChild(document.querySelector("#backBtn"));
	}
	document.body.appendChild(backBtn);
};

export default renderHolidayParts;
