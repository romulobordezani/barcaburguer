import scrollLink from '../scroll-link';

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.sidenav__hamburger');
    const sidenav = document.querySelector('.sidenav__sidenav');
    const overlay = document.querySelector('.sidenav__overlay');
    const closeBtn = document.querySelector('.sidenav__close');
    const menuLinks = document.querySelectorAll('.sidenav__menu a');
  
    // Open menu
    hamburger?.addEventListener('click', () => {
        hamburger.classList.add('active');
        setTimeout(() => {        
            sidenav?.classList.add('open');
            overlay?.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }, 200);
    });
  
    // Close menu function
    const closeMenu = () => {
      hamburger?.classList.remove('active');
      sidenav?.classList.remove('open');
      overlay?.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    };
  
    // Close menu on close button click
    closeBtn?.addEventListener('click', closeMenu);
  
    // Close menu on overlay click
    overlay?.addEventListener('click', closeMenu);
  
    // Smooth scroll to sections and close menu
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
        scrollLink(link.getAttribute('href'));
      });
    });
  
    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidenav?.classList.contains('open')) {
        closeMenu();
      }
    });
  });