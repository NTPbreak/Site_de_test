// Utilisation de GSAP pour animer l'en-tête
// import GSAP from 'gsap';
// import TweenMax from gsap;
const gsap = require('gsap');
import gsap from 'gsap';

gsap.from('.header h1', {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  });
  
  // Utilisation de GSAP pour animer le contenu
  gsap.from('.content p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
  });