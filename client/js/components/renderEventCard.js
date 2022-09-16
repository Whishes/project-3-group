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
            <i class="fa-solid fa-pencil icon" onClick="alert(renderEditEvent)"></i>
            <i class="fa-solid fa-xmark icon onClick="alert(deleteEvent)"></i>
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
        deleteFunction(dbData.id, "event")
    });

    const deleteIcon = eventCard.children[0].children[1].children[1].children[0];

    deleteIcon.addEventListener("click", function() {
        editFunction(dbData.id, "event")
    });
}

export default renderEventCard;