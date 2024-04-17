export let cart = JSON.parse(localStorage.getItem('cart'));


if(!cart){

  cart =[
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 0,
      deliveryOptionId: '1'
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 0,
      deliveryOptionId: '2'
    }
    ];
  
}
  



function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((item) => {
     cartQuantity += item.quantity;
    });
   
     document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    
}
export function addToCart(productId){
  let matchingItem;
   cart.forEach((item)=>{
     if(productId === item.productId){
       matchingItem = item;
     }
   })
   if(matchingItem){
     matchingItem.quantity += Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
       }
  else{
   cart.push({
     productId: productId,
     quantity : Number(document.querySelector(`.js-quantity-selector-${productId}`).value),
     deliveryOptionId: '1'
   })
   }
}

export function removeFromCart(productId){
  const newCart = [];
  
  cart.forEach((cartItem) =>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}