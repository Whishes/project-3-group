export const renderLoginForm = (registered = false) => {
	const page = document.getElementById("page");
	const formContainer = document.createElement("div");
	formContainer.id = "registration";
	formContainer.innerHTML = `
            <form id="registration-form" action="">
                <h2>Welcome Back!</h2>
                <p>Login to continue</p>                   
                    <div class="div-input-field">
                        <i class="fa-solid fa-envelope fa-lg icon"></i>
                        <input class="long-input" type="email" name="email" placeholder="Email" required>
                    </div>

                    <div class="div-input-field">
                        <i class="fa-solid fa-lock fa-lg icon"></i>
                        <input class="long-input" type="password" name="password" placeholder="Password" required minlength="4">
                    </div>

                    <div id="registration-base">
                        <button id="register-btn">Login</button>
                        <span onclick="renderRegistrationForm()">No Account?</span> 
                    </div>          
            </form>
`;
	page.replaceChildren(formContainer);

	// back button code
	const backBtn = document.createElement("i");
	backBtn.className = "fa-solid fa-arrow-left";
	backBtn.id = "backBtn";
	backBtn.addEventListener("click", () => {
		renderHomePage(false);
		document.body.removeChild(backBtn);
	});
	if (document.querySelector("#backBtn") !== null) {
		document.body.removeChild(document.querySelector("#backBtn"));
	}
	document.body.appendChild(backBtn);

	// success message if passed parameter is true
	if (registered) {
		errorBar("Register was successful", "success");
	}

	const form = document.getElementById("registration-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		if (!data.email || !data.password) {
			return errorBar("Email and/or Password field is empty", "error");
		}

		axios
			.post("api/session", data)
			.then(() => {
				renderIndex(true);
			})
			.catch((err) => {
				//console.log(err.response.data.message);
				errorBar(err.response.data.message, "error");
			});
	});
};
