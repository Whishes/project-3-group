import renderEventCard from "./renderEventCard.js";

const renderEvents = (itemId) => {
    const sectionPage = document.getElementById("page");
	const container = document.createElement("div");
	container.id = "event-container";

    const partId = { 
		parts_id: itemId 
	}

    axios
			.get("/api/events", { params: partId })
			.then((container.innerHTML = "<h1>Loading...</h1>"))
			.then((response) => {
                const data = response.data;

                // check if there are tables in the array
				if (data.length === 0) {
					container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new event?</h2>
				<button onClick="alert(renderNewEvent(${itemId}))">New Event</button>
			</div>
		</div>
		`;
				} else {
					data.forEach((event) => {
						// creates a card element using the holiday part object passed as a parameter
						renderEventCard(event);
					});

					//adding icon to add part below
					const plusSign = document.createElement("div")
					plusSign.className = "add-part-div"
					plusSign.addEventListener("click", function() {
						alert('renderNewEvent');
					})
					plusSign.innerHTML = `
						<i class="fa-regular fa-square-plus" id="addPart"></i>
					`
				}
			})
			.catch((err) => {
				console.log("events api:", err);
				container.innerHTML = `
		<div>
			<h1 id="oops">Oops! No content could be found...</h1>
			<div id="subheading-container">
				<h2 id="subheading">Add new event?</h2>
				<button onClick="alert(renderNewEvent())">New Event</button>
			</div>
		</div>
		`;
			});
	// } else {
		// user isn't logged in
		container.innerHTML = `<h2>User isn't logged in</h2>`;
	// }
	sectionPage.replaceChildren(container);
    };

export default renderEvents;