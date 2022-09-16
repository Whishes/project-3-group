export const errorBar = (message, status = "error") => {
	const sectionPage = document.getElementById("page");
	const bar = document.createElement("div");
	bar.id = "error-bar";
	bar.className = status;
	bar.innerHTML = `
    <p>${message}</p>
    `;

	sectionPage.appendChild(bar);
	setTimeout(() => {
		sectionPage.removeChild(bar);
	}, 4000);
};
