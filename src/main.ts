const sonidoZ = new Audio('../sounds/Darbuka_06_76_SP_CUT.mp3');
const sonidoX = new Audio('../sounds/Darbuka_18_76_SP_CUT.mp3');
const sonidoC = new Audio('../sounds/Darbuka_42_76_SP_CUT.mp3');
const sonidoV = new Audio('../sounds/Darbuka_48_76_SP_CUT.mp3');
const sonidoB = new Audio('../sounds/Darbuka_105_76_SP_CUT.mp3');

const elementoZ = document.getElementsByClassName('sound z')[0] as HTMLElement;
const elementoX = document.getElementsByClassName('sound x')[0] as HTMLElement;
const elementoC = document.getElementsByClassName('sound c')[0] as HTMLElement;
const elementoV = document.getElementsByClassName('sound v')[0] as HTMLElement;
const elementoB = document.getElementsByClassName('sound b')[0] as HTMLElement;

const imagenAlterna01 = '../img/2.webp';
const imagenAlterna02 = '../img/3.webp';


document.addEventListener('keydown', function(event){
    

    switch(event.key){
        case 'Z':
            elementoZ.style.backgroundImage = `url(${imagenAlterna02})`;
            sonidoZ.play();
            sonidoZ.onended = function(){
                elementoZ.style.backgroundImage = `url(${'../img/2.webp'})`;
            }
            break;

        case 'X':
            elementoX.style.backgroundImage = `url(${imagenAlterna01})`;
            sonidoX.play();
            sonidoX.onended = function(){
                elementoX.style.backgroundImage = `url(${'../img/3.webp'})`;
            }
            break;

        case 'C':
            elementoC.style.backgroundImage = `url(${imagenAlterna02})`;
            sonidoC.play();
            sonidoC.onended = function(){
                elementoC.style.backgroundImage = `url(${'../img/2.webp'})`;
            }
            break;

        case 'V':
            elementoV.style.backgroundImage = `url(${imagenAlterna01})`;
            sonidoV.play();
            sonidoV.onended = function(){
                elementoV.style.backgroundImage = `url(${'../img/3.webp'})`;
            }
            break;

        case 'B':
            elementoB.style.backgroundImage = `url(${imagenAlterna02})`;
            sonidoB.play();
            sonidoB.onended = function(){
                elementoB.style.backgroundImage = `url(${'../img/2.webp'})`;
            }
            break;


    }
});