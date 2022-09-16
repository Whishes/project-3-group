export const renderNewEvent = (part_id) => {
	const page = document.getElementById("page");
	page.innerHTML = `
    <section id="newtrip">
    <form id="newtrip-form">

        <h2>Add a new event!</h2>

        <div class="div-input-field">
            <i class="fa-solid fa-suitcase icon"></i>
            <input name="holiday_name" class="long-input" type="text" placeholder="Event Name">
        </div>

        <div class="div-input-field">
            <i class="fa-solid fa-earth-americas icon"></i>
            <input name="location_name" class="long-input" type="text" placeholder="Destination Name">
        </div>

        <div class="div-input-field">
            <i class="fa-solid fa-image icon"></i>
            <input name="img_link" class="long-input" type="text" placeholder="Destination Image Link">
        </div>

        <div class="div-input-field long-input description-field">
            <textarea name="description" class="" placeholder="Event Description"></textarea>
        </div>

        <div id="newtrip-base">
            <button id="create" type="submit">Create</button>
        </div>

    </form>
    </section>
    `;

	//code to post the form data
	const newTripForm = document.querySelector("#newtrip-form");

	newTripForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(newTripForm);
		const data = {
			part_id: part_id,
			event_name: formData.get("holiday_name"),
			location_name: formData.get("location_name"),
			img_link: formData.get("img_link"),
			event_description: formData.get("description"),
		};

		for (let value in data) {
			if (!value) {
				return errorBar("Please fill out entire form", "error");
			}
		}

		axios
			.post("/api/events", data)
			.then(() => {
				//renderEventsPage(part_id);
				alert(`renderEventsPage with id ${part_id}`);
			})
			.catch((err) => {
				if (err.response.data.message) {
					errorBar(err.response.data.message, "error");
				} else {
					errorBar(err, "error");
				}
			});
	});
};
