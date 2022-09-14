import renderHolidayParts from "./renderHolidayParts.js";

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
							<p>${moment((dbData.date_start)).format("MMM Do YY")} - ${moment(
								dbData.date_end
	).format("MMM Do YY")}</p>
						</div>
						<div class="btn-bottom">
							<button id="edit-btn" onClick="renderEditHolidayForm(${dbData.id})">Edit</button>
							<div class="line"></div>
							<button id="delete-btn" onClick="deleteHoliday(${dbData.id})">Delete</button>
						</div>
					</div>
					`;			

	const container = document.getElementById("content-container");
	container.appendChild(cardContainer)

	if (dbData.holiday_id) {
		cardContainer.addEventListener("click", function(){
			alert("Render events")
		});

	} else {
		cardContainer.addEventListener("click", function(){
			renderHolidayParts(dbData.id)
		});
	}

	
};

export default renderCard;
