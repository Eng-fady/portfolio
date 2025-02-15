const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-container').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navContainer = document.querySelector('.nav-container');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {
        navContainer.classList.remove('active');
    }
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) { // Scroll down 100px
        header.classList.add('scrolled');
        if (currentScroll > lastScroll) { // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else { // Scrolling up
            header.style.transform = 'translateY(-30%)';
        }
    } else {
        header.classList.remove('scrolled');
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Ensure header reappears when reaching top
window.addEventListener('scroll', () => {
    if (window.pageYOffset === 0) {
        header.classList.remove('scrolled');
        header.style.transform = 'translateY(0)';
    }
});

// Reset on page load
window.addEventListener('load', () => {
    header.style.transform = 'translateY(0)';
    document.documentElement.style.scrollBehavior = 'smooth';
});

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
const currentTheme = localStorage.getItem('theme') || 'light'; // Default to light
document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual Service ID and Template ID from EmailJS
  emailjs.sendForm('service_mhs41tn', 'template_xprqy1i', this)
      .then(function() {
          alert('Message sent successfully!');
      }, function(error) {
          alert('Failed to send the message. Please try again later.');
      });
});

