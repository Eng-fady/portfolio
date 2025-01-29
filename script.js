const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
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
