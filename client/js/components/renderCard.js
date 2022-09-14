import renderHolidayParts from "./renderHolidayParts.js";


const renderCard = (dbData) => {
	// console.log(dbData)
	const cardContainer = document.createElement("div");
	cardContainer.className = "card-container";
	cardContainer.innerHTML = `
					<div class="card-top" id="${dbData.id}">
						<img alt=${Object.values(dbData)[5]} src=${Object.values(dbData)[6]}></img>
					</div>
					<div class="card-bottom">
						<div>
							<h2><a class="card-title" id="${dbData.id}">${Object.values(dbData)[2]}</a></h2>
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
		const cardTop = Array.from(document.getElementsByClassName("card-top"));
		const cardTitle = Array.from(document.getElementsByClassName("card-title"));
	
		cardTop.forEach(top => top.addEventListener("click", function(){
			const itemId = top.getAttribute("id")
			alert(`Render events ${itemId}`)
		}));

		cardTitle.forEach(title => title.addEventListener("click", function(){
			const itemId = title.getAttribute("id")
			alert(`Render events ${itemId}`)
		}));

	} else {
		const cardTop = Array.from(document.getElementsByClassName("card-top"));
		const cardTitle = Array.from(document.getElementsByClassName("card-title"));
	
		cardTop.forEach(top => top.addEventListener("click", function(){
			const itemId = top.getAttribute("id")
			renderHolidayParts(itemId)
		}));

		cardTitle.forEach(title => title.addEventListener("click", function(){
			const itemId = title.getAttribute("id")
			renderHolidayParts(itemId)
		}));
		
	}

	
};

export default renderCard;
