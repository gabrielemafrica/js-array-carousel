//creo array di immagini


const imgCarusel = ['01','02','03','04','05'];

//prendo il contenitore

const container_carusel = document.getElementById('container_carusel');


//ciclo le immagini

for (let i = 0; i < imgCarusel.length; i++) {
    const elementImg = imgCarusel[i];    
    console.log(elementImg);
    //setto numero immagine
    const numeroImg = i + 1;

    //le inserisco nel contenitore
    const insertImg = `<img src="img/${elementImg}.webp" alt="immagine${numeroImg}">`;
    container_carusel.innerHTML += insertImg;
}

// seleziono le immagini
const items = document.querySelectorAll('img');
console.log(items);
//setto un indice per segnare l'item attivo al momento

let activeItem = 0;

//setto una variabile per stabilire il primo elemento

const primaImg = items.length - (items.length - 1);

//disattivo tutte le immagini

for (let i = 0; i < items.length; i++) {

    //aggiungo classe item
    items[i].classList.add('item');

    //aggiungo la classe active al primo
    items[activeItem].classList.add('active');    
}

    
//funzionamento frecce

//prendo la freccia su
const next = document.querySelector('.fa-circle-arrow-up');

//al click
next.addEventListener(
    'click',
    function() {
        //se non sono all'ultimo elemento
        if(activeItem < (items.length - 1)){
            //tolgo la classe active
            items[activeItem].classList.remove('active');
            //passo al successivo
            activeItem++;
            //aggiungo la classe active al nuovo elemento
            items[activeItem].classList.add('active');

            //se sono all'ultimo elemento cliccando torno al primo (se lo faccio poi non va)
        }else if(activeItem === (items.length - 1)) {
            //tolgo la classe active alla foto in corso
            items[activeItem].classList.remove('active');
            // passo alla prima foto
            // riporto activItem a zero
            activeItem = 0;
            // mostro di nuovo la prima img
            items[activeItem].classList.add('active');
        }    
    }          
)

//prendo freccia giú
const prev = document.querySelector('.fa-circle-arrow-down');
//al click
prev.addEventListener(
    'click',
    function() {
        //se non sono all'ultimo elemento
        if(activeItem > 0){
            //tolgo la classe active  
            items[activeItem].classList.remove('active');
            //passo al precedente
            activeItem--;
            //aggiungo la classe active al nuovo elemento
            items[activeItem].classList.add('active');

            //se sono all'ultimo elemento cliccando torno al primo 
        }else if(activeItem === 0){
            //tolgo la classe active  
            items[activeItem].classList.remove('active');
            //passo all'ultimo
            activeItem = items.length - 1;
            //aggiungo la classe active al nuovo elemento
            items[activeItem].classList.add('active');           
        }
    }
)    

