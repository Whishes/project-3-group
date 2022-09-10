const renderRegistrationForm = require("./registration.js");


// Test that registration form renders correctly

test('renderRegistrationForm should render 1 form with a heading, 5 inputs and 1 button', () => {
    document.body.innerHTML = '<section id="page"></section>';
    renderRegistrationForm();

    const forms = document.getElementsByTagName('form');
    expect(forms.length).toBe(1);

    const inputs = document.getElementsByTagName('input');
    expect(inputs.length).toBe(5);

    const buttons = document.getElementsByTagName('button');
    expect(buttons.length).toBe(1);
}) 

// Test that correctly filled form returns successful response

test('When all fields filled out with username & email unique, returns 200 status', () => {

})

// Test that form missing a field returns error code

// Test that non-unique username or email returns error code