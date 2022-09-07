const renderRegistrationForm = () => {
    const page = document.getElementById("page")
    
    page.innerHTML = `
        <section id="registration">
            <form id="registration-form" action="">
                <h2>Glad to have you here!</h2>
                <p>Register to continue</p>
                <section id="error-msgs"></section>
                <fieldset>
                    <label for="first-name">First Name</label>
                    <input type="text" name="first-name">
                </fieldset>
                <fieldset>
                    <label for="surname">Surname</label>
                    <input type="text" name="surname">
                </fieldset>
                <fieldset>
                    <label for="">Email</label>
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

module.exports = renderRegistrationForm;