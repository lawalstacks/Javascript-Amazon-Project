export const cart = [
  
  ]


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
     productId,
     quantity : Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
   })
   }

}

