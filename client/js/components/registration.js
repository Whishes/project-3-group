const renderRegistrationForm = () => {
    const page = document.getElementById("page");
    const form = document.createElement("form");
    form.innerHTML = `
        <section id="registration">
            <form id="registration-form" action="">

                <h2>Glad to have you here!</h2>
                <p>Register to continue</p>

                <section id="error-msgs"></section>

                    <div class="div-input-field name-field">
                    <i class="fa-solid fa-user icon"></i>
                    <input class="short-input" type="text" name="firstname" placeholder="First Name">
                    </div>
                    
                    <div class="div-input-field name-field" id="surname">
                    <input class="short-input" type="text" name="surname" placeholder="Surname">
                    </div>
                   
                    <div class="div-input-field">
                    <i class="fa-solid fa-face-smile icon"></i>
                    <input class="long-input" type="text" name="username" placeholder="Username">
                    </div>
                   
                    <div class="div-input-field">
                    <i class="fa-solid fa-envelope icon"></i>
                    <input class="long-input" type="text" name="email" placeholder="Email">
                    </div>

                    <div class="div-input-field">
                    <i class="fa-solid fa-lock icon"></i>
                    <input class="long-input" type="password" name="password" placeholder="Password">
                    </div>

                    <div id="registration-base">
                    <span>Already have an account?</span> <button id="register">Register</button> 
                    </div>
                  
            </form>
            
        </section>`

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {
                firstname: formData.get("firstname"),
                surname: formData.get("surname"),
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password")
            };

            if (!data.firstname || !data.surname || !data.email || !data.password || !data.username) {
                return alert( "one of the fields is empty");
            } else {
                axios.post("api/signup", data).then(() => {
                    location = "/";
                }).catch((err) => {
                alert(err.response.data.message);
                });
            }});
        
        page.replaceChildren(form);
    };

        
       

module.exports = renderRegistrationForm;