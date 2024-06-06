
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

function submitForm(event) { debugger
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

function sendEmail() { debugger;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const data = {
        personalizations: [
            {
                to: [{ email: 'sphuntsho900@gmail.com' }]
            }
        ],
        from: { email: 'your-sendgrid-verified-email@example.com' },
        subject: subject,
        content: [
            {
                type: 'text/plain',
                value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            }
        ]
    };

    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_SENDGRID_API_KEY'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('Email sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    });
}