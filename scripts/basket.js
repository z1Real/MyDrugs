import { products } from "./products.js";
function updateBasket() {
const mycart = JSON.parse(localStorage.getItem('cart'));
console.log(mycart)
let html = '';
let total = 0;
  mycart.forEach((item) => {
    const productName = item.productName 
    let matchingProduct;
    

    products.forEach((product) => {
      if(productName === product.name){
        matchingProduct = product;
      }
      
    })
    total += ((matchingProduct.price * 10000) * item.quantity) / 10000;

    document.querySelector('.total').innerHTML = 'Total: ' + total + ' BTC';

    //let myPrice = eval(matchingProduct.price * item.quantity);
    const datahtml = `<div class="product-container">
<div class="product-img-div">
  <img class="product-img" src="${matchingProduct.image}" />
</div>
<div class="product-info-div">
  <div><p style = 'color:${matchingProduct.color}' class="product-info name">${item.productName}</p></div>
  <div><p class="product-info price">${matchingProduct.price} BTC</p></div>
  <div><p class="product-info quantity">quantity: ${item.quantity}</p></div>
  </div></div>`

  html += datahtml;
  let productContainer =  document.querySelector('.products-div');
productContainer.innerHTML = html;
 
  })
}



updateBasket();
  const cleanButton = document.querySelector('.clean-basket')
  cleanButton.addEventListener('click', () => {
    localStorage.clear();
  })








