document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark' && toggleSwitch) {
        toggleSwitch.checked = true;
    }

    function switchTheme(e) {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme);
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');

    if (hamburger && navContainer) {
        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {
                navContainer.classList.remove('active');
            }
        });
    }

    // Header Scroll Effect
    let lastScroll = 0;
    const header = document.querySelector('header');

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
            header.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(-30%)';
        } else {
            header.classList.remove('scrolled');
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    }

    if (header) {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', () => {
            header.style.transform = 'translateY(0)';
            document.documentElement.style.scrollBehavior = 'smooth';
        });
    }

    // Contact Form Submission with EmailJS
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            emailjs.sendForm('service_mhs41tn', 'template_xprqy1i', contactForm)
                .then(() => {
                    alert('Message sent successfully!');
                })
                .catch(() => {
                    alert('Failed to send the message. Please try again later.');
                });
        });
    }
});
