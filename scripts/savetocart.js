//localStorage.clear()
export const cart =JSON.parse(localStorage.getItem('cart')) || []

function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function saveToCart() {
 
  document.querySelectorAll('.add-to-cart-button').forEach((button)=> {

    button.addEventListener('click',()=>{
      
      const productName = button.dataset.productName;
      
      let matchingItem;
      cart.forEach((item) => {
          
        if (productName === item.productName) {
          matchingItem = item;
        }
        
      })
      
        if (matchingItem) {
          matchingItem.quantity++;
        }else{
          cart.push({
            productName: productName,
            quantity:1
          })
        }
      console.log(cart);
      saveCart();
      })
    })

  } 
