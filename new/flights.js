document.addEventListener("DOMContentLoaded", function () {
    const flightInfos = document.querySelectorAll('.flight-info');

    // Intersection Observer to trigger animation when flight-info is in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    // Observe all flight-info elements
    flightInfos.forEach(flight => {
        observer.observe(flight);
    });
});
