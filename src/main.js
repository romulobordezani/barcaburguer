import tippy from 'tippy.js';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';
import 'tippy.js/animations/scale.css';

import './modules/preloader/index.js';
import './modules/clickable-cards/index.js';


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
  offset: [0, -30],
  animation: 'scale',
  theme: 'translucent',
  placement: 'auto',
  hideOnClick: 'toggle',
  trigger: "click"
});



