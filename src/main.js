import tippy from 'tippy.js';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';
import 'tippy.js/animations/scale.css';


document.getElementById('button-scroll-down')?.addEventListener('click', function () {
  const nextSection = document.getElementById('post-burger');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});


tippy('.sprite', {
  allowHTML: true,
  interactive: true,
  duration: 200,
  appendTo: document.body,
  arrow: true,
  animation: 'scale',
  theme: 'translucent',
  arrow: true,
  placement: 'top',
});


function setupClickableDivs() {
  document.querySelectorAll('div.clickable').forEach(function (div) {
    div.addEventListener('click', function () {
      div.classList.add('clicked');

      setTimeout(() => {
        const url = div.getAttribute('data-clickable-url');
        if (url) {
          window.open(url, '_blank');
        }
      }, 500); // Delay to allow the click animation to finish
    });
  });
}

document.addEventListener('DOMContentLoaded', setupClickableDivs);

// Hide pre-loader after 2 seconds
document.addEventListener('DOMContentLoaded', function () {

  const timer = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 0 : 6000;
  
  setTimeout(function () {
    const preLoader = document.getElementById('main-pre-loader-wrapper');
    if (preLoader) {
      preLoader.remove();
    }
  }, timer);
});



