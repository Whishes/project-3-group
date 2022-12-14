export const renderRegistrationForm = () => {
	const page = document.getElementById("page");
	const formContainer = document.createElement("div");
	formContainer.id = "registration";
	formContainer.innerHTML = `

            <form id="registration-form" action="">

                <h2>Glad to have you here!</h2>
                <p>Register to continue</p>
                    <div id="name-container">
                        <div class="div-input-field name-field">
                            <i class="fa-solid fa-user icon"></i>
                            <input id="firstname-input" type="text" name="firstname" placeholder="First Name" required minlength="1">
                        </div>
                        
                        <div class="div-input-field name-field" id="surname-div">
                            <input id="surname-input" type="text" name="surname" placeholder="Surname" required minlength="1">
                        </div>
                    </div>
                    <div class="div-input-field">
                        <i class="fa-solid fa-face-smile icon"></i>
                        <input class="long-input" type="text" name="username" placeholder="Username" required minlength="3">
                    </div>
                   
                    <div class="div-input-field">
                        <i class="fa-solid fa-envelope icon"></i>
                        <input class="long-input" type="email" name="email" placeholder="Email" required>
                    </div>

                    <div class="div-input-field">
                        <i class="fa-solid fa-lock icon"></i>
                        <input class="long-input" type="password" name="password" placeholder="Password" required minlength="4">
                    </div>

                    <div id="registration-base">
                        <span onclick="renderLoginForm()">Already have an account?</span> <button id="register-btn">Register</button> 
                    </div>
                  
            </form>`;

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

	// form code
	const form = document.getElementById("registration-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const data = {
			firstname: formData.get("firstname"),
			surname: formData.get("surname"),
			username: formData.get("username"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		if (
			!data.firstname ||
			!data.surname ||
			!data.email ||
			!data.password ||
			!data.username
		) {
			//return alert("one of the fields is empty");
			return errorBar("Please ensure all fields aren't empty", "error");
		} else {
			axios
				.post("api/signup", data)
				.then(() => {
					renderLoginForm(true);
				})
				.catch((err) => {
					errorBar(err.response.data.message, "error");
				});
		}
	});
};
