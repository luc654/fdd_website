const target = 'text-section';
const sizes = ['text-base', 'text-lg', 'text-xl']
let index = 0;
document.getElementById('enlargeText').addEventListener('click', () => {
    document.querySelectorAll(`#${target}`).forEach(elem => {
        elem.classList.remove(sizes[index]);
        elem.classList.add(sizes[index + 1]);
    });
    index++
    if(index > sizes.length - 1){
        index = 0;
    }
});