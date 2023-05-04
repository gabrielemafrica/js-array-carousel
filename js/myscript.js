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

//setto un indice per segnare l'item attivo al momento

let activeItem = 0;

//setto una variabile per stabilire il primo elemento

const primaImg = items.length - (items.length - 1);

//disattivo tutte le immagini

for (let i = 0; i < items.length; i++) {

    //aggiungo classe item
    items[i].classList.add('item');
    
}

// mostro la prima immagine
if (items) {
    // seleziono le immagini
    const items = document.querySelectorAll('img');

    //aggiungo la classe active
    items[activeItem].classList.add('active');
}
    



/*
//seleziono gli item per poterli gestire


const items = document.querySelectorAll('.item');
console.log(items); // é un nod list, interrogabile come un array

//setto un indice per segnare l'item attivo al momento

let activeItem = 0;

//seleziono il next

const next = document.querySelector('.next');

//gestisco l'evento click sul next

next.addEventListener(
    'click',
    function () {
        //se non sono all'ultimo elemento
        if(activeItem < (items.length - 1)){

            //togli la classe active all'elemento attivo in quel momonto
            items[activeItem].classList.remove('active');
            
            //passare all'item successivo
            activeItem = activeItem + 1;
            //activeItem++;
            
            console.log(`nuovo valore di activeItem = ${activeItem}`);
            
            
            //aggiungo la classe active
            items[activeItem].classList.add('active');
            
            //se sono all'ultimo elemento faccio sparire il next

            if (activeItem === (items.length - 1)) {
                next.classList.add('hidden');
            }
        }
    }
)*/