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
)