// Bus data array
const buses = [
    { name: 'Royal Travels', area: 'Delhi to Jaipur', charges: 800 },
    { name: 'Green Line Express', area: 'Mumbai to Pune', charges: 600 },
    { name: 'City Connect', area: 'Bangalore to Chennai', charges: 900 },
    { name: 'Southern Comfort', area: 'Hyderabad to Kochi', charges: 1200 }
];

// Function to display buses
function displayBuses() {
    const container = document.getElementById('busContainer');
    buses.forEach((bus, index) => {
        const busCard = document.createElement('div');
        busCard.className = 'bus-card';
        busCard.style.animationDelay = `${index * 0.2}s`;  // Staggered animation
        busCard.innerHTML = `
            <h2 class="bus-name">${bus.name}</h2>
            <p class="bus-area">Route: ${bus.area}</p>
            <p class="bus-charges">Charges: ₹${bus.charges}</p>
            <button class="btn" onclick="bookBus('${bus.name}', '${bus.area}', ${bus.charges})">Book Now</button>
        `;
        container.appendChild(busCard);
    });
}

// Function to handle booking
function bookBus(name, area, charges) {
    if (confirm(`Book ${name}?\nRoute: ${area}\nCharges: ₹${charges}`)) {
        alert('Booking successful! Details sent to your email.');
    } else {
        alert('Booking canceled.');
    }
}

// Call display function on page load
window.onload = displayBuses;
s