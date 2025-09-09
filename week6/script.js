// Global variable to track calculation count
let calculationCount = 0;

// Function to demonstrate parameters and return values
function multiply(a, b) {
    // Local variables - scope is limited to this function
    const result = a * b;
    return result;
}

// Function to demonstrate different operations
function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers';
        return;
    }
    
    // Using the multiply function with parameters and return value
    const multiplication = multiply(num1, num2);
    
    // Other calculations
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const division = num1 / num2;
    
    // Update the result display
    document.getElementById('result').innerHTML = `
        <strong>Results:</strong><br>
        ${num1} + ${num2} = ${addition}<br>
        ${num1} - ${num2} = ${subtraction}<br>
        ${num1} × ${num2} = ${multiplication}<br>
        ${num1} ÷ ${num2} = ${division.toFixed(2)}
    `;
    
    // Update calculation count (using global variable)
    calculationCount++;
    document.getElementById('calculation-count').textContent = `Calculations performed: ${calculationCount}`;
}

// Function to change background color - demonstrating DOM manipulation
function changeColor() {
    const colors = ['#1a2a6c', '#b21f1f', '#fdbb2d', '#4a00e0', '#8e2de2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.background = `linear-gradient(135deg, ${randomColor}, #000)`;
    
    // Update calculation count
    calculationCount++;
    document.getElementById('calculation-count').textContent = `Calculations performed: ${calculationCount}`;
}

// Function to reset calculations
function resetCalculations() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Results will appear here';
    calculationCount = 0;
    document.getElementById('calculation-count').textContent = 'Calculations performed: 0';
    document.body.style.background = 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)';
}

// Function to start animations - demonstrates adding CSS classes with JavaScript
function startAnimation(elementId, animationType) {
    const element = document.getElementById(elementId);
    
    // Remove any existing animation classes
    element.classList.remove('slide-animation', 'pulse-animation', 'spin-animation');
    
    // Force reflow to ensure the animation restarts
    void element.offsetWidth;
    
    // Add the requested animation class
    switch(animationType) {
        case 'slide':
            element.classList.add('slide-animation');
            break;
        case 'pulse':
            element.classList.add('pulse-animation');
            break;
        case 'spin':
            element.classList.add('spin-animation');
            break;
    }
}

// Function to reset animation
function resetAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('slide-animation', 'pulse-animation', 'spin-animation');
}

// Function to flip cards
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Function to show modal with animation
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}

// Function to close modal with animation
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Close modal if clicked outside of content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Initialize page with some animations
document.addEventListener('DOMContentLoaded', function() {
    // Add initial animation to the title
    const title = document.querySelector('h1');
    title.style.animation = 'colorShift 8s infinite alternate';
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});