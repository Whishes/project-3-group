import renderHolidayParts from "./renderHolidayParts.js";

export const renderNewTrip = (what, holidayId) => {
	const page = document.getElementById("page");

	if (what === "holiday") {
		page.innerHTML = `
		<section id="newtrip">
		<form id="newtrip-form">

			<h2>Add a new holiday!</h2>

			<div class="div-input-field">
				<i class="fa-solid fa-suitcase icon"></i>
				<input name="holiday_name" class="long-input" type="text" placeholder="Holiday Name">
			</div>

			<div class="div-input-field">
				<i class="fa-solid fa-earth-americas icon"></i>
				<input name="location_name" class="long-input" type="text" placeholder="Destination Name">
			</div>

			<div class="div-input-field">
				<i class="fa-solid fa-image icon"></i>
				<input name="img_link" class="long-input" type="text" placeholder="Destination Image Link">
			</div>

			<div class="div-input-field date-field">
				<i class="fa-solid fa-plane-departure icon"></i>
				<input name="date_start" class="date-input" type="text" placeholder="Start Date">
			</div>

			<div class="div-input-field date-field">
				<i class="fa-solid fa-plane-arrival icon"></i>
				<input name="date_end" class="date-input" type="text" placeholder="End Date">
			</div>

			<div id="newtrip-base">
				<button id="create" type="submit">Create</button>
			</div>

		</form>
		</section>
		`;

		//makes the UI of the start/end dates more responsive
		const dateInputs = document.querySelectorAll(".date-input");

		for (let input of dateInputs) {
			input.addEventListener("focus", (event) => {
				event.target.type = "date";
				event.target.showPicker();
			});
			input.addEventListener("blur", (event) => {
				event.target.type = "text";
			});
		}

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

		//code to post the form data
		const newTripForm = document.querySelector("#newtrip-form");

		newTripForm.addEventListener("submit", (event) => {
			event.preventDefault();
			const formData = new FormData(newTripForm);
			const data = {
				holiday_name: formData.get("holiday_name"),
				date_start: formData.get("date_start"),
				date_end: formData.get("date_end"),
				location_name: formData.get("location_name"),
				img_link: formData.get("img_link"),
			};

			for (let value in data) {
				if (!value) {
					return errorBar("Please fill out entire form", "error");
				}
			}

			if (data.date_start >= data.date_end) {
				return errorBar("Ensure that your dates are correct", "error");
			}

			axios
				.post("/api/holidays", data)
				.then(() => {
					location.href = "/";
				})
				.catch((err) => {
					errorBar(err.response.data.message, "error");
				});
		});
	} else if (what === "holiday_part") {
		// alert(`Add part ${holidayId}`)

		page.innerHTML = `
		<section id="newtrip">
		<form id="newtrip-form">

			<h2>Add a new holiday part!</h2>

			<input name="holiday_id" class="long-input" type="hidden" value=${holidayId}>

			<div class="div-input-field">
				<i class="fa-solid fa-suitcase icon"></i>
				<input name="part_name" class="long-input" type="text" placeholder="Holiday Part Name">
			</div>

			<div class="div-input-field">
				<i class="fa-solid fa-earth-americas icon"></i>
				<input name="location_name" class="long-input" type="text" placeholder="Location">
			</div>

			<div class="div-input-field">
				<i class="fa-solid fa-image icon"></i>
				<input name="img_link" class="long-input" type="text" placeholder="Location Image Link">
			</div>

			<div class="div-input-field date-field">
				<i class="fa-solid fa-plane-departure icon"></i>
				<input name="date_start" class="date-input" type="text" placeholder="Start Date">
			</div>

			<div class="div-input-field date-field">
				<i class="fa-solid fa-plane-arrival icon"></i>
				<input name="date_end" class="date-input" type="text" placeholder="End Date">
			</div>

			<div id="newtrip-base">
				<button id="create" type="submit">Create</button>
			</div>

		</form>
		</section>
		`;

		//makes the UI of the start/end dates more responsive
		const dateInputs = document.querySelectorAll(".date-input");

		for (let input of dateInputs) {
			input.addEventListener("focus", (event) => {
				event.target.type = "date";
				event.target.showPicker();
			});
			input.addEventListener("blur", (event) => {
				event.target.type = "text";
			});
		}

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

		//code to post the form data
		const newTripForm = document.querySelector("#newtrip-form");

		newTripForm.addEventListener("submit", (event) => {
			event.preventDefault();
			const formData = new FormData(newTripForm);
			const data = {
				holiday_id: formData.get("holiday_id"),
				part_name: formData.get("part_name"),
				date_start: formData.get("date_start"),
				date_end: formData.get("date_end"),
				location_name: formData.get("location_name"),
				img_link: formData.get("img_link"),
			};

			for (let value in data) {
				if (!value) {
					return errorBar("Please fill out entire form", "error");
				}
			}

			if (data.date_start >= data.date_end) {
				return errorBar("Ensure that your dates are correct", "error");
			}

			axios
				.post("/api/holidayparts", data)
				.then(() => {
					renderHolidayParts(holidayId);
				})
				.catch((err) => {
					errorBar(err.response.data.message, "error");
				});
		});
	}
};
