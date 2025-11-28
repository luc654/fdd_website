const fullPath = '/public/gifs/fnaf-jumpscare.gif'
var randomWidth = 100000;

async function jumpscare(){

    const element = `<div id="jumpscare" class="w-full h-[1000px] fixed bottom-0 bg-[url(${fullPath})] bg-cover" style="background-position: calc(60%) center;"></div>`;
    document.querySelector('body').innerHTML += element;
    await sleep(1000);
    document.getElementById('jumpscare').remove();

    

clearInterval(timer);
timer = setInterval(jumpscare, parseInt(Math.random() * randomWidth));


}

// The random range will be from 0 to 3000, or whatever you want !
var timer = setInterval(jumpscare, parseInt(Math.random() * randomWidth));
