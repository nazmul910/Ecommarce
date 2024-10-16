import { getcartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateValue } from "./updateValue";

export const removeProdFromCart=(id)=>{
  let cartProducts= getcartProductFromLS();
  cartProducts=cartProducts.filter((curProd)=> curProd.id !=id);

  localStorage.setItem('cartProductLS',JSON.stringify(cartProducts));

  let removeDiv=document.getElementById(`card${id}`);
  if(removeDiv){
    removeDiv.remove();

    showToast('detete',id);
  }

  updateValue(cartProducts);
}