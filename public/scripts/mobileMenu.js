// Collection of function that handles the opening and closing animation of the mobile menu. 
// See animations.css for animations

// https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame


const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');
const panel = document.getElementById('menu-panel');

openBtn.addEventListener('click', () => {
overlay.classList.remove('hidden'); 
requestAnimationFrame(() => {
    overlay.classList.add('open'); 
    panel.classList.add('open'); 
});
});

closeBtn.addEventListener('click', () => {
panel.classList.remove('open'); 
overlay.classList.remove('open');

setTimeout(() => {
    overlay.classList.add('hidden');
}, 350);
});


overlay.addEventListener('click', (e) => {
if (e.target === overlay) {
    panel.classList.remove('open');
    setTimeout(() => {
    overlay.classList.add('hidden');
    }, 350);
}
});