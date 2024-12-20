// Display a message when a feature card is clicked
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Explore this feature in detail on our upcoming updates!');
    });
});
