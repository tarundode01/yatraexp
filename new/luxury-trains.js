// Train data array
const trains = [
    { name: 'The Palace on Wheels', area: 'Rajasthan Luxury Tour', charges: 50000 },
    { name: 'The Golden Chariot', area: 'South India Expedition', charges: 45000 },
    { name: 'The Deccan Odyssey', area: 'Maharashtra Splendor', charges: 60000 },
    { name: 'Maharajas’ Express', area: 'Pan-India Royal Journey', charges: 75000 }
];

// Function to display trains
function displayTrains() {
    const container = document.getElementById('trainContainer');
    trains.forEach((train, index) => {
        const trainCard = document.createElement('div');
        trainCard.className = 'train-card';
        trainCard.style.animationDelay = `${index * 0.2}s`;  // Staggered animation
        trainCard.innerHTML = `
            <h2 class="train-name">${train.name}</h2>
            <p class="train-area">Route: ${train.area}</p>
            <p class="train-charges">Charges: ₹${train.charges}</p>
            <button class="btn" onclick="bookTrain('${train.name}', '${train.area}', ${train.charges})">Book Now</button>
        `;
        container.appendChild(trainCard);
    });
}

// Function to handle booking
function bookTrain(name, area, charges) {
    if (confirm(`Book ${name}?\nRoute: ${area}\nCharges: ₹${charges}`)) {
        alert('Booking successful! Details sent to your email.');
    } else {
        alert('Booking canceled.');
    }
}

// Call display function on page load
window.onload = displayTrains;
