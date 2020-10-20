//*Sweet Alerts 
/*
const require = require('requirejs');
const Swal = require('../node_modules/sweetalert2');
*/
// *Variables  
const cart = document.querySelector('#cart');
const containerCart = document.querySelector('#list-cart tbody') 
const emptyCartBtn = document.querySelector('#empty-car')
const listComics = document.querySelector('#list-comics')

let articlesComics = [];

function reloadEventListener() { 

    //Add new comic
    listComics.addEventListener('click', addComic);
    
    //Delete a comic 
    cart.addEventListener('click', deleteComic);

    //Delete all comics 
    emptyCartBtn.addEventListener('click', deleteAllComics);
}

function alerta() { 
   alert('Se añadio el comic al carrito');
}

function addComic({ target, preventDefault }) { 
    preventDefault();
 
    if (target.classList.contains('add-cart')) { 
        const comicSelection = target.parentElement.parentElement;
        
        alerta();
        readComic(comicSelection);
    }
}

function readComic(comic) { 
    
    const infoComic = {
            id: comic.querySelector('a').getAttribute('data-id'), 
            image: comic.querySelector('img').src,
            name: comic.querySelector('h4').textContent, 
            quantity: 1,
            price: comic.querySelector('.precio span').textContent,  
        }
    
    cartHTML();
}

function cartHTML() { 
    //Clear the cart 
    clearCart();
    
    //Loop for the vector  
    articlesComics.forEach((comic) => { 
        const row = document.createElement('tr'); 
        const { name, price, quantity, id } = comic; //Destructuring
        
        row.innerHTML = `
            <td> <img src = '${comic.image}' width = "100px"/> </td>
            <td>${name}</td> 
            <td>${price}</td>
            <td>${quantity}</td>
            <td>
                <a href = "#" class = "clear-comic" data-id="${id}"> X </a>
            </td>
        `
        containerCart.appendChild(row);
    })
}

function deleteAllComics() { 
    articlesComics = [];
    clearCart();
}

function deleteComic({ target }) { 
    if (!target.classList.contains('clear-comic')) return null
    
    const comicId = target.getAttribute('data-id');

    articlesComics = articlesComics.filter(comic => comic.id !== comicId)

   cartHTML();
}

function clearCart() {
     containerCart.innerHTML = '';
}

reloadEventListener();

class Shopping {
    constructor() {
       articlesComics: []
    }
    
    addComic (comic) {
        const isExist = this.articlesComics.some(comic => comic.id === infoComic.id)

        if (exist) { 
            const comics = this.articlesComics.map(comic => { 
                if (comic.id === infoComic.id) comic.quantity++;

                return comic;
            })

            articlesComics = [...comics]
        } else 
            articlesComics = [...articlesComics, infoComic]
    }
}
