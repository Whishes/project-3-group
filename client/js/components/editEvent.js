import renderEvents from "./renderEvents.js";

const editEvent = (event_id, part_id, holidayId) => {
	axios.get(`/api/events/${event_id}`).then((response) => {
		const eventivity = response.data[0];
		// console.log(eventivity)

		const page = document.getElementById("page");
		page.innerHTML = `
    <section id="newtrip">
    <form id="newtrip-form">
        <h2>Edit "${eventivity.event_name}"</h2>
        <div class="div-input-field">
            <i class="fa-solid fa-suitcase icon"></i>
            <input name="event_name" class="long-input" type="text" placeholder="Event Name" value="${eventivity.event_name}">
        </div>
        <div class="div-input-field">
            <i class="fa-solid fa-earth-americas icon"></i>
            <input name="location_name" class="long-input" type="text" placeholder="Destination Name" value="${eventivity.location_name}">
        </div>
        <div class="div-input-field">
            <i class="fa-solid fa-image icon"></i>
            <input name="img_link" class="long-input" type="text" placeholder="Destination Image Link" value="${eventivity.img_link}">
        </div>
        <div class="div-input-field long-input description-field">
            <textarea name="description" class="" placeholder="Event Description">${eventivity.event_description}</textarea>
        </div>
        <div id="newtrip-base">
            <button id="create" type="submit">Update</button>
        </div>
    </form>
    </section>
    `;

		// back button code
		const backBtn = document.createElement("i");
		backBtn.className = "fa-solid fa-arrow-left";
		backBtn.id = "backBtn";
		backBtn.addEventListener("click", () => {
			document.body.removeChild(backBtn);
			renderEvents(part_id, holidayId);
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
				part_id: eventivity.part_id,
				event_name: formData.get("event_name"),
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
				.put(`/api/events/${eventivity.id}`, data)
				.then(() => {
					//renderEventsPage(part_id);
					renderEvents(part_id, holidayId);
				})
				.catch((err) => {
					if (err.response.data.message) {
						errorBar(err.response.data.message, "error");
					} else {
						errorBar(err, "error");
					}
				});
		});
	});
};

export default editEvent;
