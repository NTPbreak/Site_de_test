document.addEventListener('DOMContentLoaded', function() {
  var cubes = document.querySelectorAll('.cube');
  var content = document.querySelector('.content');

  var animationSpeed = 1; // Vitesse de l'animation, ajustez selon vos besoins

  var contentTop = content.offsetTop;
  var windowHeight = window.innerHeight;

  function handleScroll() {
    var scrollPosition = window.pageYOffset;

    if (scrollPosition + windowHeight > contentTop) {
      cubes.forEach(function(cube) {
        cube.style.animationDuration = `${animationSpeed}s`;
        cube.style.animationPlayState = 'running';
      });
    } else {
      cubes.forEach(function(cube) {
        cube.styleanimationPlayState = 'paused';
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
});