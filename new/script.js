// Smooth scroll to services section when button is clicked
document.getElementById('explore-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "services.html"; // Redirect to the services page
});

// Activate animations when elements are scrolled into view
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const options = {
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    serviceItems.forEach(item => {
        item.style.transform = 'translateX(50px)';
        observer.observe(item);
    });
});
