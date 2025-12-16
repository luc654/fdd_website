import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

console.log("a");
document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide').mount();
});
