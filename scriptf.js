// JavaScript for handling feedback form submission
document.querySelector('.feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your feedback!');
    this.reset();
});
