document.addEventListener('DOMContentLoaded', function() {
    var animationItems = document.querySelectorAll('.animation');
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });
  
    animationItems.forEach(function(item) {
      observer.observe(item);
    });
  });