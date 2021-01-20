import { renderProduct } from './renderProduct.js';
import { violins } from './data.js';

const ul = document.getElementById('products');

for (let violin of violins) {
    const listItem = renderProduct(violin);
    ul.append(listItem); 
}
