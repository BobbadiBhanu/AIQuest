// Sample motivational quotes
const quotes = [
    "Believe in yourself! Have faith in your abilities!",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only way to do great work is to love what you do.",
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don't wait for opportunity. Create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Don’t stop when you’re tired. Stop when you’re done."
];

// Fixed background image (calm and interactive)
const backgroundImage = 'https://www.w3schools.com/w3images/forest.jpg';  // Example calm image

// Set a constant color for the quotes (e.g., white color for text)
const constantColor = '#ffffff';  // You can change this to any color you like

// Get elements
const quoteDisplay = document.getElementById('quoteText');
const generateQuoteBtn = document.getElementById('generateQuoteBtn');

// Function to set the constant background image
function setBackground() {
    document.body.style.transition = 'background-image 1s ease'; // Smooth transition for background change
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';  // Ensure it covers the whole page
    document.body.style.backgroundPosition = 'center';  // Center the background image
}

// Function to get a random quote
function getQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Add a fade-out effect before the new quote appears
    quoteDisplay.style.opacity = 0;
    setTimeout(() => {
        quoteDisplay.textContent = `"${randomQuote}"`;
        quoteDisplay.style.opacity = 1;
    }, 300); // Delay before quote appears (for smooth transition)

    // Set the constant color for the quote text
    quoteDisplay.style.color = constantColor;
}

// Event listener for button click
generateQuoteBtn.addEventListener('click', getQuote);

// Optionally, generate the first quote on page load
setBackground();
getQuote();
