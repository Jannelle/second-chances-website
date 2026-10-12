const cards = document.querySelectorAll('.cast-card');

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.08}s`;
  card.style.animation = 'fadeInUp 0.6s ease forwards';
});
