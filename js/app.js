// *Variables  
const cart = document.querySelector('#cart');
const containerCart = document.querySelector('#list-cart tbody') 
const emptyCartBtn = document.querySelector('#empty-car')
const listComics = document.querySelector('#list-comics')
let articlesComics = [];

//* Functions

//?EventListeners 
reloadEventListener();

function reloadEventListener() { 

    //Add new comic
    listComics.addEventListener('click', addComic);
    
    //Delete a comic 
    cart.addEventListener('click', deleteComic);

    //Delete all comics 
    emptyCartBtn.addEventListener('click', deleteAllComics);
}

function addComic(e){ 
    e.preventDefault();

    if(e.target.classList.contains('add-cart')){ 
        const comicSelection = e.target.parentElement.parentElement; 
        readComic(comicSelection);
    }
}

function readComic(comic){ 
    const infoComic = { 
        image: comic.querySelector('img').src,
        name: comic.querySelector('h4').textContent, 
        price: comic.querySelector('.precio span').textContent, 
        id: comic.querySelector('a').getAttribute('data-id'), 
        quantity: 1
    }
   
    const exist = articlesComics.some(comic => comic.id === infoComic.id)
    if(exist){ 
        const comics = articlesComics.map(comic => { 
            if(comic.id === infoComic.id){ 
                comic.quantity++;
                return comic;
            }else { 
                return comic;
            }
        })
        articlesComics = [...comics]
    }else{ 
        articlesComics = [...articlesComics, infoComic]

    }
    //Call to function CartHTML
    cartHTML();


}

function cartHTML(){ 
    //Clear the cart 
    clearCart();
    
    //Loop for the vector  
    articlesComics.forEach((comic) => { 
        const row = document.createElement('tr'); 
        const {name, price, quantity, id} = comic; //Destructuring
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
function deleteAllComics(){ 
    articlesComics = [];
    clearCart();

}

function deleteComic(e){ 
    if(e.target.classList.contains('clear-comic')){ 
        const comicId = e.target.getAttribute('data-id');
    
       articlesComics = articlesComics.filter(comic => comic.id !== comicId)
        
       cartHTML();
    }
}

function clearCart(){
     containerCart.innerHTML = '';
}
