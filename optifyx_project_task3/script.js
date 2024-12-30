function filterImages(category) {
    const items = document.querySelectorAll('.gallery-item');
  
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }