const target = 'text-section';
const sizes = ['text-lg', 'text-xl', 'text-2xl'];
let index = 0;

const elements = document.querySelectorAll(`#${target}`);

document.getElementById('enlargeText').addEventListener('mousedown', () => {
    const nextIndex = (index + 1) % sizes.length;

    elements.forEach(elem => {
        elem.classList.remove(sizes[index]);
        elem.classList.add(sizes[nextIndex]);
    });

    index = nextIndex;
});

elements.forEach(elem => {
    elem.classList.add(sizes[index]);
});
