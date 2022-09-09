const renderRegistrationForm = () => {
    const page = document.getElementById("page");
    const form = document.createElement("form");
    form.innerHTML = `
        <section id="registration">
            <form id="registration-form" action="">
                <h2>Glad to have you here!</h2>
                <p>Register to continue</p>
                <section id="error-msgs"></section>
                    
                    <input type="text" id="firstname" class="name-field" name="firstname" placeholder="First Name">
                    
                    <input type="text" id="surname" class="name-field" name="surname" placeholder="Surname">
                   
                    <input type="text" id="username" name="username" placeholder="Username">
                   
                    <input type="text" id="email" name="email" placeholder="Email">
                 
                    <input type="password" id="password" name="password" placeholder="Password">

                    <div>
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
            axios.post("api/signup", data).then(() => {
                location = "/";
            }).catch((err) => {
            alert(err.response.data.message);
            });
        });
        page.replaceChildren(form);
    };

        
       

module.exports = renderRegistrationForm;