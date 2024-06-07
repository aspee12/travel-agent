document.addEventListener('DOMContentLoaded', function(){
    const fields = ['name', 'email', 'subject', 'message'];
    const bookingFields = ['name', 'email', 'phone', 'message'];

    const contact = document.getElementById('contactForm');

    const focusedFiled = contact ? fields : bookingFields
    // Checking for every value changes for input field
    focusedFiled.forEach(function(field) {
        document.getElementById(field).addEventListener('focus', function(event) {
            document.getElementById(field).addEventListener('input', function (event){
                handleFocus(event, field);
            });
        });
    });

    // Attach submit event listener to the contact form
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        submitForm(event); // Call submitForm with key=false for contact form
    });

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        // Attach submit event listener to the booking form
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            submitForm(event); // Call submitForm with key=true for booking form
        });
    }
});

// This logic is to remove form validation with value of form
function handleFocus(event, field) {
    const inputField = document.getElementById(field);
    const errorElement = document.getElementById(`error-${field}`);
    const value = inputField.value;
    if (value) {
        inputField.style.border = '1px solid lightgrey';
        errorElement.style.display = 'none';
    } else {
        errorElement.style.display = 'block';
        inputField.style.border = 'none';
        inputField.style.border = '1px solid red';
    }
}

// Checking Input Form validation during submission
function validateField(field) {
    const value = document.getElementById(field).value.trim();
    const inputField = document.getElementById(`${field}`);
    const errorElement = document.getElementById(`error-${field}`);
    if (!value) {
        errorElement.style.display = 'block';
        inputField.style.border = 'none';
        inputField.style.border = '1px solid red'
        return false;
    } else {
        errorElement.style.display = 'none';
        return true;
    }
}

function submitForm(event, key) {
    event.preventDefault();
    const fields = ['name', 'email', 'subject', 'message'];
    const bookingField = ['name', 'email', 'phone', 'message'];
    let valid = true;

    const formFields = key ? bookingField : fields

    formFields.forEach(function(field) {
        if (!validateField(field)) {
            valid = false;
        }
    });
    
    if (valid) {
        // Submit the form
        document.getElementById( key ? 'bookingForm' : 'contactForm').submit();
        alert(key ? 'Your Booking has submitted Successfully!' : 'Email sent successfully!');
    }
}