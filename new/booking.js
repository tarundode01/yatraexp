document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const arrival = document.getElementById("arrival").value;
        const number = document.getElementById("number").value;
        const payment = document.getElementById("payment").value;

        // Form Validation
        if (name && email && arrival && number && payment) {
            alert(`Booking successful for ${name} with ${number} passengers!`);
            form.reset(); // Reset the form
        } else {
            alert("Please fill in all fields.");
        }
    });
});
s