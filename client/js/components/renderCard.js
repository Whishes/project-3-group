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
							<p>${holiday.date_start} to ${holiday.date_end}<p>
						</div>
						<div class="btn-bottom">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</div>
					`;

	return cardContainer;
};
