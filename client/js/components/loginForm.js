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
				if (err.response.data.message) {
					errorBar(err.response.data.message, "error");
				} else {
					errorBar(err, "error");
				}
			});
	});
};
