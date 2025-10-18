import './modules/preloader';
import './modules/clickable-cards';
import './modules/header';
import './pages/hamburguer';
import { generateRandomHearts } from './modules/heart-generator';

generateRandomHearts('post-burger');
generateRandomHearts('post-acai');
generateRandomHearts('post-tapioca');
generateRandomHearts('post-landing');
generateRandomHearts('post-about');
generateRandomHearts('post-cards');

// Optional: Regenerate hearts on window resize for responsive layouts
let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(generateRandomHearts, 500);
});