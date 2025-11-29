document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  
  items.forEach(item => {
    const dialog = item.querySelector('dialog');
    const closeButton = item.querySelector("dialog button");

    if (dialog) {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          event.target.close();
        }
      });
    }

    item.querySelector('.item-img').addEventListener('click', () => {
      dialog.showModal();
    });

    item.querySelector('.item-title').addEventListener('click', () => {
      dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
      dialog.close();
    });
  });
});
