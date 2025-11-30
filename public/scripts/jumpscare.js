const fullPath = ''
var randomWidth = 10000;


const jumpscareObjects = {
    "1": {
        "path": '/public/gifs/skeleton_run.gif',
        "animated": false,
        'timer': 1000,
        'weight': 1
    },
    "2": {
        "path": '/public/gifs/skeleton_run.gif',
        "animated": true,
        'timer': 2000,
        'weight': 3,
    }
}


async function jumpscare(){

    const keys = Object.keys(jumpscareObjects);
const randomKey = keys[Math.floor(Math.random() * keys.length)];
const object = jumpscareObjects[randomKey];


    console.log(object)
    const element = `<div id="jumpscare" class="w-full h-[1000px] fixed bottom-0 bg-[url(${object['path']})] bg-cover" style="background-position: calc(60%) center;"></div>`;
    document.querySelector('body').innerHTML += element;
    await sleep(object['timer']);
    // document.getElementById('jumpscarebeïnvloedt').remove();

    



clearInterval(timer);
timer = setInterval(jumpscare, parseInt(Math.random() * randomWidth));


}

var timer = setInterval(jumpscare, parseInt(Math.random() * randomWidth));
