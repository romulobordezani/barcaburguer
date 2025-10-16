// Hide pre-loader after 2 seconds
document.addEventListener('DOMContentLoaded', function () {

  const timer = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 0 : 6000;
  
  setTimeout(function () {
    const preLoader = document.getElementById('main-pre-loader-wrapper');
    const body = document.getElementById('bb-body');
    if (preLoader && body) {
      body.classList.remove('loading');
      body.classList.add('loaded');
      preLoader.remove();
    }
  }, timer);
});