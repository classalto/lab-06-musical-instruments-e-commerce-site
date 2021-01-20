import { renderProduct } from './renderProduct.js';
import { violin } from './data.js';

const ul = document.getElementById('products');

const listItem = renderProduct(violin);

ul.append(listItem); 