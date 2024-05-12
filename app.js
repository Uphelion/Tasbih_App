// initial count
let count = 0;

//value + buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const circlesContainer = document.querySelector('.circles-container');


// Maximum number of circles to display
const maxCircles = 4;

// Update opacity for circles based on their position relative to the middle circle
function updateOpacity() {
    const circles = circlesContainer.querySelectorAll('.circle');
    const middleIndex = Math.floor(circles.length / 2);
    
    circles.forEach((circle, index) => {
        if (index < middleIndex) {
            circle.classList.add('fade-out');
            circle.classList.remove('fade-in');
        } else if (index === middleIndex) {
            circle.classList.add('middle');
            circle.classList.remove('fade-out');
            circle.classList.remove('fade-in');
        } else {
            circle.classList.add('fade-in');
            circle.classList.remove('fade-out');
        }
    });
}

// Call the function to update opacity initially
updateOpacity();

btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
        // Reset button functionality
        if (btn.classList.contains('reset')) {
            // Reset count to 0
            count = 0;

            // Update value display
            value.textContent = count;
            value.style.color = "#222";

            // Remove all circles from the circles container
            circlesContainer.innerHTML = '';
        } else {
            // Increase count when '+' button is clicked
            if (btn.classList.contains('increase')) {
                count++;
            }

            // Update value display
            if (count > 0) {
                value.style.color = "green";
            } else {
                value.style.color = "#222";
            }
            value.textContent = count;

            // Add a new circle to the circles container if the maximum number of circles is not reached
            const circles = circlesContainer.querySelectorAll('.circle');
            if (circles.length < maxCircles) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                circlesContainer.appendChild(circle);

                // Update opacity for circles
                updateOpacity();
            } else if (circles.length === maxCircles) {
                const circle = document.createElement('div');
                circle.classList.add('circle', 'animate');
                circlesContainer.appendChild(circle);
            }
        }
    });
});