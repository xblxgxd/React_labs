document.addEventListener("DOMContentLoaded", function() {
    var themeToggleButton = document.getElementById('themeToggleBtn');
    var body = document.body;

    // Function to toggle the theme and update local storage
    function toggleTheme() {
        body.classList.toggle("dark-theme");

        // Store the user's preference in local storage
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem('body-theme', 'dark-theme');
            
        } else {
            localStorage.setItem('body-theme', 'light-theme');
        }

    }

    // Check for user's preference on page load and apply theme
    if (localStorage.getItem('body-theme') === 'dark-theme') {
        body.classList.add("dark-theme"); // Use add() here
    } else {
        body.classList.remove("dark-theme");
    }

    
    themeToggleButton.addEventListener('click', toggleTheme); 
});