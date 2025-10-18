document.getElementById('button-scroll-down')?.addEventListener('click', function () {
  const nextSection = document.getElementById('post-burger');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});