const welcomeMessage = document.getElementById('welcome-message');

// Function to hide the welcome message after 3 seconds
function hideWelcomeMessage() {
    welcomeMessage.style.display = 'none';
}

// Call the hideWelcomeMessage function after 3 seconds (3000 milliseconds)
setTimeout(hideWelcomeMessage, 3000);

