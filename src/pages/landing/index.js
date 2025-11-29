document.getElementById('button-scroll-down-burger')?.addEventListener('click', function () {
    const nextSection = document.getElementById('post-burger');

    if (nextSection) {
        setTimeout(() => {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
});

document.getElementById('button-scroll-down-acai')?.addEventListener('click', function () {
    const nextSection = document.getElementById('post-acai');
    
    if (nextSection) {
        setTimeout(() => {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
});