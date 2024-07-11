document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const email = formData.get('email');
    const name = formData.get('name');
    const message = formData.get('message');

    window.location.href = `mailto:fadyromany390@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
    alert('Thank you for your message!');
});
