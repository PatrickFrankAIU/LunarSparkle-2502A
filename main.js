// dark mode toggle

function toggleDarkMode () {
    document.body.classList.toggle('darkMode')
}

// This persistence code works on my end.


// Check if a theme preference is stored in localStorage and apply it
window.onload = function() {
    let darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('darkMode');
        document.getElementById('darkModeToggle').checked = true; // Set the toggle position to match
    }
};

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('darkMode');
    // Store the theme preference in localStorage
    let darkModeEnabled = document.body.classList.contains('darkMode');
    localStorage.setItem('darkMode', darkModeEnabled); // Save the preference
}