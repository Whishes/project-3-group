import renderEvents from "./renderEvents.js";
import editEvent from "./editEvent.js";

const renderEventCard = (eventObj, part_id, holidayId) => {
	const eventCard = document.createElement("div");
	eventCard.className = "event-card";
	eventCard.innerHTML = `
<div class="event-content">
    <div class="event-img">
        <img alt="${eventObj.location_name}"
            src="${eventObj.img_link}" />
    </div>
    <div class="event-header">
        <div class="event-title">
            <h2>${eventObj.event_name}</h2>
            <h4>${eventObj.location_name}</h4>
        </div>
        <div class="event-icons">
            <i class="fa-solid fa-pencil event-icon"></i>
            <i class="fa-solid fa-xmark event-icon"></i>
        </div>
    </div>
    <div class="event-description">
        <p>${eventObj.event_description}</p>
    </div>
</div>
    `;

	const eventContainer = document.getElementById("event-container");
	eventContainer.appendChild(eventCard);

	const editIcon = eventCard.children[0].children[1].children[1].children[0];

	editIcon.addEventListener("click", function () {
		editEvent(eventObj.id, part_id, holidayId);
	});

	const deleteIcon = eventCard.children[0].children[1].children[1].children[1];

	deleteIcon.addEventListener("click", function () {
		deleteFunction(eventObj.id, eventObj.part_id, holidayId);
	});
};

const deleteFunction = (id, holidayPartId, holidayId) => {
	axios.delete(`/api/events/${id}`).then(() => {
        // console.log(` DELETE EVENT event id: ${id} part_id: ${holidayPartId} holiday_id: ${holidayId}`)
		renderEvents(holidayPartId, holidayId);
	});
};

export default renderEventCard;
