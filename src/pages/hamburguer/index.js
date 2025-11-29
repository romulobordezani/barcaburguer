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
  const items = document.querySelectorAll('.item');
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('item--active');
      const overlay = item.querySelector('.item-overlay');
      overlay.classList.toggle('item-overlay--active');
    });
  });
});

