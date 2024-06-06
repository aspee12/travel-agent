
document.addEventListener('DOMContentLoaded', function(){
    const fields = ['name', 'email', 'subject', 'message'];

    fields.forEach(function(field){
        document.getElementById(field).addEventListener('blur', function(){
            vaidateField(field);
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event){
        let valid = true;
        fields.forEach(function(field) {
            if (!validateField(field)) {
                valid = false;
            }
        });
        if (!valid) {
            event.preventDefault();
        }
    });
});

function validateField(field) {
    const value = document.getElementById(field).value.trim();
    const errorElement = document.getElementById(`error-${field}`);
    if (!value) {
        errorElement.style.display = 'block';
        return false;
    } else {
        errorElement.style.display = 'none';
        return true;
    }
}

function submitForm(event) {
    event.preventDefault();
    const fields = ['name', 'email', 'subject', 'message'];
    let valid = true;
    
    fields.forEach(function(field) {
        if (!validateField(field)) {
            valid = false;
        }
    });
    
    if (valid) {
        // Submit the form
        document.getElementById('contactForm').submit();
        alert('Email sent successfully!');
    }
};
