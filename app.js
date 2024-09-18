// Append character to display when buttons are clicked
function appendCharacter(character) {
    document.getElementById("display").value += character;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Calculate and display result
function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1000);  // Clear "Error" after 2 seconds
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById("display");

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        // Allow numbers and operators
        display.value += key;
    } else if (key === 'Enter') {
        // Enter key to calculate result
        calculateResult();
    } else if (key === 'Backspace') {
        // Backspace to remove the last character
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        // Escape key to clear display
        clearDisplay();
    } else if (key === 'c' || key === 'C') {
        // 'C' key to clear display (in case user prefers keyboard)
        clearDisplay();
    }
});
