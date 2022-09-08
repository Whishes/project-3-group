const renderCard = (holiday) => {
	const cardContainer = document.createElement("div");
	cardContainer.className = "card-container";
	cardContainer.innerHTML = `
					<div class="card-top">
						<img alt=${holiday.location_name} src=${holiday.img_link}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2>${holiday.holiday_name}</h2>
							<h4>${holiday.location_name}</h4>
							<p>${moment(holiday.date_start).format("MMM Do YY")} - ${moment(
		holiday.date_start
	).format("MMM Do YY")}</p>
						</div>
						<div class="btn-bottom">
							<button id="edit-btn" onClick="alert('edit function')">Edit</button>
							<button id="delete-btn" onClick="alert('delete function')">Delete</button>
						</div>
					</div>
					`;

	return cardContainer;
};
