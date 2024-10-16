import { updateValue } from "./updateValue";

export const getcartProductFromLS= ()=>{
  let cartProducts = localStorage.getItem('cartProductLS');
  if(!cartProducts){
    return [];
  }
  cartProducts =JSON.parse(cartProducts);

  updateValue(cartProducts);

  return cartProducts;
}