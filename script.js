const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateCarousel() {
  if (!track) return;
  const cards = document.querySelectorAll('.carousel-card');
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.carousel-card');
    const maxIndex = cards.length - Math.floor(track.parentElement.offsetWidth / (cards[0].offsetWidth + 20));
    index = Math.min(index + 1, maxIndex);
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
}
