import renderEvents from "./renderEvents";

const renderEventCard = (event) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.innerHTML = `
<div class="event-content">
    <div class="event-img">
        <img alt="${event.location_name}"
            src="${event.img_link}" />
    </div>
    <div class="event-header">
        <div class="event-title">
            <h2>${event.event_name}</h2>
            <h4>${event.location_name}</h4>
        </div>
        <div class="event-icons">
            <i class="fa-solid fa-pencil event-icon"></i>
            <i class="fa-solid fa-xmark event-icon"></i>
        </div>
    </div>
    <div class="event-description">
        <p>${event.event_description}</p>
    </div>
</div>
    `;

    const eventContainer = document.getElementById('event-container');
    eventContainer.appendChild(eventCard);

    const editIcon = eventCard.children[0].children[1].children[1].children[0];

    editIcon.addEventListener("click", function() {
        alert("editEvent");
    });

    const deleteIcon = eventCard.children[0].children[1].children[1].children[1];

    deleteIcon.addEventListener("click", function() {
        deleteFunction(event.id, event.part_id);
    });
}

const deleteFunction = (id, holidayPartId) => {
		axios.delete(`/api/events/${id}`).then(() => {
			renderEvents(holidayPartId);
		});
    }

export default renderEventCard;