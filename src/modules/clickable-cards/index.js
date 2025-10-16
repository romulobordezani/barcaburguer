function setupClickableDivs() {
  // Count clickable elements in post-cards and update CSS variable
  const postCards = document.getElementById('post-cards');
  
  if (postCards) {
    const clickableCount = postCards.querySelectorAll('.clickable').length;
    postCards.style.setProperty('--clickable-count', clickableCount);
  }

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