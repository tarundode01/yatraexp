document.addEventListener("DOMContentLoaded", () => {
    const aboutItems = document.querySelectorAll(".about-item");

    // Fade-in animation when elements are in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    aboutItems.forEach(item => {
        observer.observe(item);
    });
});

// Add class for visibility (CSS will control transition)
document.querySelectorAll('.about-item').forEach(item => {
    item.classList.add('fade');
});
