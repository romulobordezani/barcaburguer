import './modules/preloader/index.js';
import './modules/clickable-cards/index.js';
import './modules/header/header.js';
import { generateRandomHearts } from './pages/hamburguer/hamburguer.js';


generateRandomHearts('post-burger');
generateRandomHearts('post-acai');
generateRandomHearts('post-dogs');
generateRandomHearts('post-landing');
generateRandomHearts('post-about');

// Optional: Regenerate hearts on window resize for responsive layouts
/* let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(generateRandomHearts, 500);
}); */