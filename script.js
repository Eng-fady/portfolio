document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual Service ID and Template ID from EmailJS
    emailjs.sendForm('service_vzy41ym', 'template_xprqy1i', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
        });
});

