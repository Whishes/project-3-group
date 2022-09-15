export const renderUserProfile = (userId) => {
	const page = document.getElementById("page");
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	axios
		.get(`/api/signup/${userId}`)
		.then((res) => {
			const { id, firstname, surname, username, email } = res.data;
			//console.log(email);

			const formContainer = document.createElement("div");
			formContainer.id = "registration";
			formContainer.innerHTML = `
            <form id="registration-form" action="">
                <h2>Your Profile!</h2>
                <p>Feel free to change anything you'd like</p>                   
                    <div id="name-container">
                        <div class="div-input-field name-field">
                            <i class="fa-solid fa-user icon"></i>
                            <input id="firstname-input" type="text" name="firstname" placeholder="First Name" required minlength="1" value="${capitalizeFirstLetter(
															firstname
														)}">
                        </div>
                        
                        <div class="div-input-field name-field" id="surname-div">
                            <input id="surname-input" type="text" name="surname" placeholder="Surname" required minlength="1" value="${capitalizeFirstLetter(
															surname
														)}">
                        </div>
                    </div>
                    <div class="div-input-field">
                        <i class="fa-solid fa-face-smile icon"></i>
                        <input class="long-input" type="text" name="username" placeholder="Username" required minlength="3" value="${capitalizeFirstLetter(
													username
												)}">
                    </div>
                   
                    <div class="div-input-field">
                        <i class="fa-solid fa-envelope icon"></i>
                        <input class="long-input" type="email" name="email" placeholder="Email" required value="${email}">
                    </div>   
					<div id="registration-base">
                       <button id="register-btn" style="width: 80%, height: 100%">Save Settings</button> 
                    </div>   
            </form>
`;
			page.replaceChildren(formContainer);

			const form = document.getElementById("registration-form");
			form.addEventListener("submit", (event) => {
				event.preventDefault();

				const formData = new FormData(form);
				const data = {
					firstname: formData.get("firstname"),
					surname: formData.get("surname"),
					username: formData.get("username"),
					email: formData.get("email"),
				};

				if (!data.email || !data.username || !data.firstname || !data.surname) {
					return errorBar("One of the fields is empty", "error");
				}

				axios
					.put(`api/signup/${id}`, data)
					.then(() => {
						renderIndex();
					})
					.catch((err) => {
						//console.log(err);
						if (err.response.data.message) {
							errorBar(err.response.data.message, "error");
						} else {
							errorBar(err, "error");
						}
					});
			});
		})
		.catch((err) => {
			if (err.response.data.message) {
				errorBar(err.response.data.message, "error");
			} else {
				errorBar(err, "error");
			}
		});
};
