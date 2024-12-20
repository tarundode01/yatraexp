document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.querySelector('.contact-container');

    // Fade-in animation on load
    setTimeout(() => {
        contactContainer.classList.add('visible');
    }, 300);

    // Form submission handler
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            this.reset(); // Clear the form after submission
        } else {
            alert("Please fill out all fields.");
        }
    });
});
