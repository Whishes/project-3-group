const renderRegistrationForm = () => {
    const page = document.getElementById("page")
    
    page.innerHTML = `
        <section id="registration">
            <form id="registration-form" action="">
                <h2>Glad to have you here!</h2>
                <p>Register to continue</p>
                <section id="error-msgs"></section>
                <fieldset>
                    <label for="firstname">First Name</label>
                    <input type="text" name="firstname">
                </fieldset>
                <fieldset>
                    <label for="surname">Surname</label>
                    <input type="text" name="surname">
                </fieldset>
                <fieldset>
                    <label for="username">Username</label>
                    <input type="text" name="username">
                </fieldset>
                <fieldset>
                    <label for="email">Email</label>
                    <input type="text" name="email">
                </fieldset>
                <fieldset>
                    <label for="">Password</label>
                    <input type="password" name="password">
                </fieldset>
                <button>Register</button>
            </form>
            <p>Already have an account?</p> <button>Login</button>
        </section>`};

        const form = document.getElementById("registration-form");
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
       

module.exports = renderRegistrationForm;