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

/* // Toggle burger sprite overlay on click
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('item--active');
      const overlay = item.querySelector('.item-overlay');
      overlay.classList.toggle('item-overlay--active');
      const backdrop = item.querySelector('::before');
      backdrop.classList.toggle('backdrop--active');
    });
  });
}); */

/* const dialog = document.createElement('dialog');
const item = document.querySelectorAll('.item')[0];
dialog.append(item);
document.body.append(dialog);

dialog.addEvenListener('close', 
  ({ target }) => target.remove()
);

dialog.showModal(); */

/* const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");



dialog.addEventListener("click", onClick);

dialog.showModal();

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEvenListener('close', 
  ({ target }) => target.remove()
); */



document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  
  items.forEach(item => {
    const dialog = item.querySelector('dialog');
    const closeButton = item.querySelector("dialog button");

    if (dialog) {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          event.target.close();
        }
      });
    }

    item.querySelector('.item-img').addEventListener('click', () => {
      dialog.showModal();
    });

    item.querySelector('.item-title').addEventListener('click', () => {
      dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
      dialog.close();
    });
  });
});
