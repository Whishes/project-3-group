const renderHeader = require("./header.js");

test("User not logged in: renderHeader should render a list with 2 items", () => {
	document.body.innerHTML = `<header id="header-nav"></header>`;
	const isLoggedIn = false;

	renderHeader(isLoggedIn);

	const headings = document.getElementsByTagName("h1");
	expect(headings.length).toBe(1);

	const ul = document.getElementById("navlist");
	expect(ul).not.toBe(null);

	const listItemCount = ul.childElementCount;
	expect(listItemCount).toBe(2);
});

test("User logged in: renderHeader should render a list with 4 items", () => {
	document.body.innerHTML = `<header id="header-nav"></header>`;
	const isLoggedIn = true;
	const user = { email: "test@test.com" };

	renderHeader(isLoggedIn, user);

	const headings = document.getElementsByTagName("h1");
	expect(headings.length).toBe(1);

	const ul = document.getElementById("navlist");
	expect(ul).not.toBe(null);

	const listItemCount = ul.childElementCount;
	expect(listItemCount).toBe(4);
});
