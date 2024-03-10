import {products} from "./products.js"
import { saveToCart, cart } from "./savetocart.js";
let html = '';
products.forEach((productInfos) => {
  const product = `<div class="product-container">
<div>
  <img class="product-img" src= ${productInfos.image} alt="" />
</div>
<div class="product-name-div">
  <p class="product-name-p">${productInfos.name}</p>
</div>
<div class="product-info-div">
  <div>
    <p class="product-info-p">${productInfos.price} BTC</p>
    <button data-product-name = "${productInfos.name}" class="add-to-cart-button">Add To Cart</button>
  </div>
  <div><p class="product-info-p">${productInfos.ingredients}</p></div>
</div>
</div>`
  html += product;
document.querySelector('.main-div').innerHTML = html;
//console.log(document.querySelector('.add-to-cart-button').dataset.productName)
})
saveToCart();
const button = document.querySelectorAll('.add-to-cart-button')
const basket = document.querySelector('.basket')
let quantity = Number(localStorage.getItem('quantity')) || 0;
basket.innerHTML = `<a href="basket.html">Basket (${quantity})</a>` 
button.forEach((button) => {

  button.addEventListener('click', () =>{
    quantity++;
    basket.innerHTML = `<a href="basket.html">Basket (${quantity})</a>`
    localStorage.setItem('quantity', quantity);
  })
})






