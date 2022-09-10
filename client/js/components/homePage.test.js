import { renderHomePage } from "./homePage.js";
import MockAdapter from "axios-mock-adapter";
import { waitFor, fireEvent } from "@testing-library/dom";

test("render homePage correctly with data from user", () => {
	document.body.innerHTML = '<section id="page"></section>';

	const mockAdaptor = new MockAdapter(axios);

	mockAdaptor.onGet("/api/holidays").reply(200, [
		{
			id: 1,
			user_id: 1,
			holiday_name: "Test Holiday Test",
			date_start: "2022-01-07T13:00:00.000Z",
			date_end: "2022-02-07T13:00:00.000Z",
			location_name: "Sydney",
			img_link:
				"https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?k=20&m=535455441&s=612x612&w=0&h=9eDvK_3h-KKHJEOLlOL2kFxtg0y95MXacEyFpHzu-9s=",
		},
	]);

	const isLoggedIn = true;
	renderHomePage(isLoggedIn);

	return waitFor(() => {
		const card = document.querySelectorAll(".card-container");
		expect(card.length).not.toEqual(0);
	});
});
