const deleteFunction = (id, what, holidayId) => {
	if (what === "holiday") {
		axios.delete(`/api/holidays/${id}`).then(() => {
			renderHomePage(true);
		});
	} else if (what === "holiday_part") {
		axios.delete(`/api/holidayparts/${id}`).then(() => {
			renderHolidayParts(holidayId);
		});
	}
};

const editFunction = (id, what, holidayId = null) => {
	if (what === "holiday") {
		renderEditHolidayForm(id, what);
	} else if (what === "holiday_part") {
		renderEditHolidayForm(id, what, holidayId);
	}
};

const renderCard = (dbData) => {
	// console.log(dbData)
	const cardContainer = document.createElement("div");
	cardContainer.className = "card-container";
	cardContainer.innerHTML = `
					<div class="card-top">
						<img alt=${dbData.location_name} src=${dbData.img_link}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2><a class="card-title">${Object.values(dbData)[2]}</a></h2>
							<h4>${dbData.location_name}</h4>
							<p>${moment(dbData.date_start).format("MMM Do YY")} - ${moment(
		dbData.date_end
	).format("MMM Do YY")}</p>
						</div>
						<div class="btn-bottom">
							<button id="edit-btn">Edit</button>
							<div class="line"></div>
							<button id="delete-btn">Delete</button>
						</div>
					</div>
					`;

	const container = document.getElementById("content-container");
	container.appendChild(cardContainer);

	if (dbData.holiday_id) {
		// if it's holiday parts section
		cardContainer.addEventListener("click", function () {
			console.log("render events")
		});

		const deleteBtn = cardContainer.children[1].children[1].children[2];

		deleteBtn.addEventListener("click", function () {
			deleteFunction(dbData.id, "holiday_part", dbData.holiday_id);
		});

		const editBtn = cardContainer.children[1].children[1].children[0];

		editBtn.addEventListener("click", function () {
			editFunction(dbData.id, "holiday_part", dbData.holiday_id);
		});
	} else {
		// if it's the base holiday section
		cardContainer.addEventListener("click", function () {
			renderHolidayParts(dbData.id);
		});
		const deleteBtn = cardContainer.children[1].children[1].children[2];
		deleteBtn.addEventListener("click", function () {
			deleteFunction(dbData.id, "holiday");
		});

		const editBtn = cardContainer.children[1].children[1].children[0];

		editBtn.addEventListener("click", function () {
			editFunction(dbData.id, "holiday");
		});
	}
};

export default renderCard;
