export const errorBar = (message, status = "error") => {
	const sectionPage = document.getElementById("page");
	const bar = document.createElement("div");
	bar.id = "error-bar";
	bar.innerHTML = `
    <p class=${status}>${message}</p>
    `;

	sectionPage.appendChild(bar);
	setTimeout(() => {
		sectionPage.removeChild(bar);
	}, 4000);
};
