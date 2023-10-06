document.addEventListener('DOMContentLoaded', function() {
  var circle = document.querySelector('.circle');
  var title = document.querySelector('.fade-in');
  var slideLeftText = document.querySelector('.slide-left');
  var fadeUpText = document.querySelector('.fade-up');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Animation du cercle
    circle.style.transform = 'translate(-50%, -50%) scale(' + (1 + scrollPosition * 0.01) + ')';

    // Animation du titre
    if (scrollPosition > title.offsetTop - window.innerHeight) {
      title.classList.add('active');
    }

    // Animation du texte glissant vers la gauche
    if (scrollPosition > slideLeftText.offsetTop - window.innerHeight) {
      slideLeftText.classList.add('active');
    }

    // Animation du texte apparaissant en fondu vers le haut
    if (scrollPosition > fadeUpText.offsetTop - window.innerHeight) {
      fadeUpText.classList.add('active');
    }
  });
});