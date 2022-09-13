const renderCard = (holiday) => {
	const holidayId = holiday.id;
	const cardContainer = document.createElement("div");
	cardContainer.className = "card-container";
	cardContainer.innerHTML = `
					<div class="card-top" onclick="renderHolidayParts(${holidayId})">
						<img alt=${holiday.location_name} src=${holiday.img_link}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2><a onClick="renderHolidayParts(${holidayId})">${holiday.holiday_name}</a></h2>
							<h4>${holiday.location_name}</h4>
							<p>${moment(holiday.date_start).format("MMM Do YY")} - ${moment(
		holiday.date_end
	).format("MMM Do YY")}</p>
						</div>
						<div class="btn-bottom">
							<button id="edit-btn" onClick="renderEditHolidayForm(${holiday.id})">Edit</button>
							<div class="line"></div>
							<button id="delete-btn" onClick="deleteHoliday(${holiday.id})">Delete</button>
						</div>
					</div>
					`;

	return cardContainer;
};

export default renderCard;
