export const renderEditHolidayForm = (holidayId) => {
    //get holiday data from api (to display into form)
    axios.get(`/${holidayId}`).then((response) => {
        const holiday = response.data[0];
    });

    //display the form with the holiday data filled in
    const page = document.getElementById("page");

    page.innerHTML = `
    <section id="editHoliday">
    <form id="editHoliday-form">

        <h2>Add a new holiday!</h2>

        <div class="div-input-field">
            <i class="fa-solid fa-suitcase icon"></i>
            <input name="holiday_name" class="long-input" type="text" placeholder="Holiday Name" value=${holiday.holiday_name}>
        </div>

        <div class="div-input-field">
            <i class="fa-solid fa-image icon"></i>
            <input name="location_name" class="long-input" type="text" placeholder="Destination Name"  value=${holiday.location_name}>
        </div>

        <div class="div-input-field">
            <i class="fa-solid fa-image icon"></i>
            <input name="img_link" class="long-input" type="text" placeholder="Destination Image Link"  value=${holiday.img_link}>
        </div>

        <div class="div-input-field date-field">
            <i class="fa-solid fa-plane-departure icon"></i>
            <input name="date_start" class="date-input" type="text" placeholder="Start Date"  value=${holiday.date_start}>
        </div>

        <div class="div-input-field date-field">
            <i class="fa-solid fa-plane-arrival icon"></i>
            <input name="date_end" class="date-input" type="text" placeholder="End Date"  value=${holiday.date_end}>
        </div>

        <div id="editHoliday-base">
            <button id="edit" type="submit">Confirm Edit</button>
        </div>

    </form>
    </section>
    `;

    //makes the UI of the start/end dates more responsive
    const dateInputs = document.querySelectorAll('.date-input');

    for (let input of dateInputs) {
        input.addEventListener('focus', (event) => {
            event.target.type = 'date';
            event.target.showPicker();
        });
        input.addEventListener('blur', (event) => {
            event.target.type = 'text';
        });
    }

    //code to post the form data
    const editHolidayForm = document.querySelector('#editHoliday-form');

    editHolidayForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(editHolidayForm);
        const data = {
            holiday_name: formData.get("holiday_name"),
            date_start: formData.get("date_start"),
            date_end: formData.get("date_end"),
            location_name: formData.get("location_name"),
            img_link: formData.get("img_link")
        }

        for(let value in data){
            if(!value){
                return alert("Please fill out entire form");
            }
        }

        if(data.date_start >= data.date_end){
            return alert("Ensure that your dates are correct");
        }

        axios.put("/api/holidays", data).then(() => {
            location.href = "/";
        }).catch((err) => {
            return alert(err);
            //errorBar(err.response.data.message, "error");   
        });
    });
}