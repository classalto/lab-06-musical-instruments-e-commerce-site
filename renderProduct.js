// import functions and grab DOM elements

import { addToCart } from './cart/cart-api.js';


// initialize state

// set event listeners to update state and DOM

export function renderProduct(item) {
    const li = document.createElement('li');

    const h3 = document.createElement('h3');
    h3.className = 'product-name';
    h3.textContent = item.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    
    if (item.id === 1) {
        img.src = 'assets/violin-one.png';
    } else if (item.id === 2) {
        img.src = 'assets/violin2.png';
    } else if (item.id === 3) {
        img.src = 'assets/violin3.png';
    } else {
        img.src = 'assets/violin4.png';
    }
    img.alt = 'A new violin';
    img.className = 'violin-one';
    li.appendChild(img);

    const pDescription = document.createElement('p');
    pDescription.className = 'description';
    pDescription.textContent = item.description;
    li.appendChild(pDescription);

    const pBow = document.createElement('p');
    pBow.className = 'has-bow';
    if (item.hasBow === true) {
        pBow.textContent = 'Bow: Included';
    } else {
        pBow.textContent = 'Bow: Sold Separately';
    }
    li.appendChild(pBow);

    const pStrings = document.createElement('p');
    pStrings.className = 'has-strings';
    if (item.hasStrings === true) {
        pStrings.textContent = 'Strings: Included';
    } else {
        pStrings.textContent = 'Strings: Sold Separately';
    }
    li.appendChild(pStrings);

    const pCase = document.createElement('p');
    pCase.className = 'has-case';
    if (item.hasCase === true) {
        pCase.textContent = 'Case: Included';
    } else {
        pCase.textContent = 'Case: Sold Separately';
    }
    li.appendChild(pCase);

    const pPrice = document.createElement('p');
    pPrice.className = 'price';
    pPrice.textContent = '$' + item.price;
    li.appendChild(pPrice);

    const button = document.createElement('button');
    button.className = 'buy';
    button.value = 'product-id';
    button.textContent = 'Add To Cart!';
    li.appendChild(button);

    button.addEventListener('click', () => {
        addToCart(item.id);
    });

    return li;
}