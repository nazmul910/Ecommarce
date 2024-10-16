import { getcartProductFromLS } from "./getCartProduct";

export const updateTotal=()=>{

  let productSub=document.querySelector('.productSubTotal');
  let productTotal=document.querySelector('.productFinalTotal');

  let localCartProducts=getcartProductFromLS();
  let initialValue=0;
  let totalPrice= localCartProducts.reduce((accum,curElem)=>{


    let productPrice=parseInt(curElem.price) || 0;
    return accum+productPrice;


  },initialValue);

  
  productSub.textContent=`৳${totalPrice.toFixed(2)}`;
  
  productTotal.textContent=`৳${(totalPrice)}` ;
  
  


};