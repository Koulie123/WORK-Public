console.log("Hello to the world");

// This function will be called when the page loads
document.addEventListener('DOMContentLoaded', function() {
    let mainSize = getComputedStyle(document.documentElement)
        .getPropertyValue('--main-size').trim();
    
    let inputs = document.querySelectorAll("input");
    let resetButton = document.querySelector("#reset_button");
    let reset_button_offering = document.querySelector("#reset_button_offering");
    let lightModeButton = document.querySelector("#light_mode");
    let darkModeButton = document.querySelector("#dark_mode");
    let countElement = document.querySelector("#count_number");
    
    // Initialize count from the display (in case there's a value already there)
    let count = parseInt(countElement.textContent) || 0;
    
    // Function to increment the count
    function incrementCount() {
        count++;
        countElement.textContent = count;
    }

    resetButton.addEventListener('click', function() {
        inputs.forEach(element => {
            element.checked = false;
        });
        // Increment count when reset button is clicked
        incrementCount();
    });

    reset_button_offering.addEventListener('click', function() {
        inputs.forEach(element => {
            if (element.classList.contains('prog') == false) {
                element.checked = false;
            }
        });
        // Increment count when reset offering button is clicked
        incrementCount();
    });

    // Theme switching functionality
    lightModeButton.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 'light');
    });

    darkModeButton.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 'dark');
    });

    // Font changing buttons
    let increaseFontButton = document.querySelector("#increase_font");
    let decreaseFontButton = document.querySelector("#decrease_font");
    
    increaseFontButton.addEventListener('click', function() {
        let currentFont = getComputedStyle(document.documentElement)
            .getPropertyValue('--main-size').trim();
        let currentSize = parseFloat(currentFont);
    
        // Increase by 0.2rem
        let newSize = currentSize + 0.2;
    
        // Set the new value
        document.documentElement.style.setProperty('--main-size', newSize + 'rem');
    });
    
    decreaseFontButton.addEventListener('click', function() {
        let currentFont = getComputedStyle(document.documentElement)
            .getPropertyValue('--main-size').trim();
        let currentSize = parseFloat(currentFont);
        
        // Decrease by 0.2rem but don't go below 0.8rem
        let newSize = Math.max(currentSize - 0.2, 0.8);
        
        // Set the new value
        document.documentElement.style.setProperty('--main-size', newSize + 'rem');
    });
});