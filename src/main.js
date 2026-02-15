import './modules/preloader';
import './modules/clickable-cards';
import './modules/header';
import './pages/hamburguer';
import './pages/landing';
import './modules/side-nav';
import { generateRandomHearts } from './modules/heart-generator';
import scrollLink from './modules/scroll-link';

generateRandomHearts('post-burger');
generateRandomHearts('post-acai');
generateRandomHearts('post-tapioca');
generateRandomHearts('post-landing');
generateRandomHearts('post-about');
generateRandomHearts('post-cards');
generateRandomHearts('post-bolo');
generateRandomHearts('post-morango');
generateRandomHearts('post-fondue');

// Optional: Regenerate hearts on window resize for responsive layouts
let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(generateRandomHearts, 500);
});

window.scrollLink = scrollLink;

