import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
     type   : 'loop',
    gap: '1rem',
  }).mount();
});
