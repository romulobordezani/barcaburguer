/* import tippy from 'tippy.js';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';
import 'tippy.js/animations/scale.css';

tippy('.sprite', {
  allowHTML: true,
  interactive: true,
  duration: 200,
  appendTo: document.body,
  arrow: true,
  offset: [0, -30],
  animation: 'scale',
  theme: 'translucent',
  placement: 'top',
  hideOnClick: 'toggle', 
  trigger: "click" 
}); */

// Toggle burger sprite overlay on click
document.addEventListener('DOMContentLoaded', () => {
  const sprites = document.querySelectorAll('.sprite');
  
  sprites.forEach(sprite => {
    
    sprite.addEventListener('click', () => {
      sprite.classList.toggle('sprite--active');
      const overlay = sprite.querySelector('.burger-sprite-overlay');
      overlay.classList.toggle('burger-sprite-overlay--active');
    });
  });
});

