const snowContainer = document.createElement('div');
snowContainer.id = 'snow-container';
document.body.appendChild(snowContainer);

// Function to generate random numbers
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create snowflakes
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄'; // Snowflake symbol

  // Randomize size, position, and animation speed of the snowflake
  const size = random(10, 40);
  snowflake.style.left = `${random(0, 100)}vw`;
  snowflake.style.fontSize = `${size}px`;
  snowflake.style.animationDuration = `${random(5, 10)}s`; // Speed of falling
  snowflake.style.animationDelay = `${random(0, 10)}s`; // Stagger start

  // Append snowflake to container
  snowContainer.appendChild(snowflake);

  // Remove snowflake after it falls out of view
  setTimeout(() => {
    snowflake.remove();
  }, 35000);
}

// Variable to track animation state
let animationPaused = false;
let intervalId;

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause the snowflakes when the tab is not in focus
    animationPaused = true;
    clearInterval(intervalId); // Stop the snowflakes creation
  } else {
    // Resume the snowflakes when the tab is focused
    animationPaused = false;
    startSnowflakes(); // Continue from where it was paused
  }
});

// Start generating snowflakes only when the page is visible
function startSnowflakes() {
  if (!animationPaused) {
    // Start the snowflakes if not paused
    intervalId = setInterval(createSnowflake, 200); // Recreate snowflakes at intervals
  }
}

// Initialize snowflake animation
startSnowflakes();


const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
});
