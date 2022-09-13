import renderHolidayParts from "./renderHolidayParts.js";

const renderTest = () => {
	console.log("render holiday parts")

}

const renderCard = (dbData) => {
	const cardContainer = document.createElement("div");
	cardContainer.className = "card-container";
	cardContainer.innerHTML = `
					<div class="card-top">
						<img alt=${Object.values(dbData)[5]} src=${Object.values(dbData)[6]}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2><a class="card-title">${Object.values(dbData)[2]}</a></h2>
							<h4>${Object.values(dbData)[5]}</h4>
							<p>${moment((Object.values(dbData)[3])).format("MMM Do YY")} - ${moment(
								(Object.values(dbData)[4])
	).format("MMM Do YY")}</p>
						</div>
						<div class="btn-bottom">
							<button id="edit-btn" onClick="renderEditHolidayForm(${Object.values(dbData)[0]})">Edit</button>
							<div class="line"></div>
							<button id="delete-btn" onClick="deleteHoliday(${Object.values(dbData)[0]})">Delete</button>
						</div>
					</div>
					`;			
								
	// return cardContainer;

	const container = document.getElementById("content-container");
	container.appendChild(cardContainer)

	if (dbData.holiday_id) {
		// Get both element IDs that has the onclicks 
		const cardTop = Array.from(document.getElementsByClassName("card-top"));
		const cardTitle = Array.from(document.getElementsByClassName("card-title"));
		

		cardTop.forEach(top => top.addEventListener("click", renderTest));
		cardTitle.forEach(title => title.addEventListener("click", renderTest));

		// cardTop.forEach(top => top.addEventListener("click", renderHolidayParts(`${itemId}`)));
		// cardTitle.forEach(title => title.addEventListener("click", renderHolidayParts(`${itemId}`)));

	} else {
		const itemId = dbData.id;
		const cardTop = Array.from(document.getElementsByClassName("card-top"));
		const cardTitle = Array.from(document.getElementsByClassName("card-title"));

		cardTop.forEach(top => top.addEventListener("click", renderTest));
		cardTitle.forEach(title => title.addEventListener("click", renderTest));
		
		// cardTop.forEach(top => top.addEventListener("click", renderHolidayParts(`${itemId}`)));
		// cardTitle.forEach(title => title.addEventListener("click", renderHolidayParts(`${itemId}`)));
	}

	
};

export default renderCard;
