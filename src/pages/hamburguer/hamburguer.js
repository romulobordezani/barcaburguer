/**
 * Check if two hearts overlap
 * @param {Object} heart1 - First heart {x, y, size}
 * @param {Object} heart2 - Second heart {x, y, size}
 * @returns {boolean} - True if hearts overlap
 */
function checkOverlap(heart1, heart2) {
  const dx = heart1.x - heart2.x;
  const dy = heart1.y - heart2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const minDistance = (heart1.size + heart2.size) / 2;
  
  return distance < minDistance;
}

/**
 * Generates random heart SVG images inside the #post-burger .bg container
 * with random position, size, rotation, color, and opacity
 * Avoids the top-left area to protect the logo and overlaps with other hearts
 */
export function generateRandomHearts(id) {
  const container = document.querySelector(`#${id} .bg`);
  
  if (!container) {
    console.warn(`Container ${id} .bg not found`);
    return;
  }
  
  // Get container dimensions
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;

  // Number of hearts to generate
  const numberOfHearts = Math.floor(Math.random() * 10) + 15; // 15-25 hearts

  // Logo protected area (top-left corner)
  const logoProtectedWidth = 25; // percentage
  const logoProtectedHeight = 20; // percentage

  // Array to track placed hearts
  const placedHearts = [];

  for (let i = 0; i < numberOfHearts; i++) {
    let attempts = 0;
    const maxAttempts = 50; // Limit attempts to avoid infinite loops
    let validPosition = false;
    let left, top, size;

    // Try to find a non-overlapping position
    while (!validPosition && attempts < maxAttempts) {
      attempts++;

      // Random position avoiding top-left corner
      do {
        left = Math.random() * 100; // 0-100%
        top = Math.random() * 100; // 0-100%
      } while (left < logoProtectedWidth && top < logoProtectedHeight);

      // Random size (between 30px and 150px)
      size = Math.floor(Math.random() * 120) + 30;

      // Convert percentage to pixels for collision detection
      const xPos = (left / 100) * containerWidth + size / 2;
      const yPos = (top / 100) * containerHeight + size / 2;

      // Check for overlaps with existing hearts
      const newHeart = { x: xPos, y: yPos, size };
      const hasOverlap = placedHearts.some(existingHeart => 
        checkOverlap(newHeart, existingHeart)
      );

      if (!hasOverlap) {
        validPosition = true;
        placedHearts.push(newHeart);
      }
    }

    // If we couldn't find a valid position after max attempts, skip this heart
    if (!validPosition) {
      continue;
    }

    // Create image element
    const heart = document.createElement('img');
    
    // Randomly choose between green and purple hearts
    const heartColors = [
      '/barcaburguer/images/uis/heart-green.svg',
      '/barcaburguer/images/uis/heart-purple.svg'
    ];
    heart.src = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.className = 'random-heart';

    // Random rotation (0-360 degrees)
    const rotation = Math.floor(Math.random() * 360);

    // Random opacity (0.1 to 0.8 for subtle effect)
    const opacity = (Math.random() * 0.7) + 0.1;

    // Apply styles
    heart.style.cssText = `
      position: absolute;
      left: ${left}%;
      top: ${top}%;
      width: ${size}px;
      height: ${size}px;
      transform: rotate(${rotation}deg);
      opacity: ${opacity};
      pointer-events: none;
      z-index: 0;
    `;

    container.appendChild(heart);
  }
}


/* // Export function for manual triggering if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateRandomHearts };
} */

