document.addEventListener('DOMContentLoaded', function() {
    var starsContainer = document.getElementById('stars');
  
    var numberOfStars = 100;
    var colors = ['#FFC0CB', '#FFD700', '#00FF00', '#00BFFF', '#FF4500']; /* Couleurs unies des étoiles */
  
    for (var i = 0; i < numberOfStars; i++) {
      var star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; /* Couleur aléatoire pour chaque étoile */
      starsContainer.appendChild(star);
    }
  });