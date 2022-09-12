export const renderUserProfile = (userId) => {
	const page = document.getElementById("page");
	const formContainer = document.createElement("div");
	formContainer.id = "registration";
	formContainer.innerHTML = `
            <form id="registration-form" action="">
                <h2>Your Profile!</h2>
                <p>Feel free to change anything you'd like</p>                   
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
					<div id="registration-base">
                       <button id="register-btn" style="width: 80%">Save Settings</button> 
                    </div>   
            </form>
`;
	page.replaceChildren(formContainer);

	// do the axios request to get user data then render the form with all fields filled in
};
