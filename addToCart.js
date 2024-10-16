import { getcartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateValue } from "./updateValue";

getcartProductFromLS();

export const addToCart=(event,id,stock)=>{


  let arrLocalStorageProduct = getcartProductFromLS();


  const currentProdElem=document.querySelector(`#card${id}`);
  
  let quantity = currentProdElem.querySelector('.productQuantity').innerText;

  let price = currentProdElem.querySelector('.productPrice').innerText;



  price=price.replace('৳','');

  let existingProd=arrLocalStorageProduct.find((curProd)=> curProd.id == id);

  if(existingProd && quantity>1){

    quantity=Number(existingProd.quantity)+Number(quantity);
    price=Number(price*quantity);

     let updatecart={id,quantity,price};
     updatecart = arrLocalStorageProduct.map((curProd)=>{
     return curProd.id == id? updatecart : curProd;
     });

     localStorage.setItem('cartProductLS',JSON.stringify(updatecart));

     showToast('add',id);
    
  }
  if(existingProd){
    // alert("It's Here Already!!");
    return false;
  }



  price=Number(price*quantity);
  quantity=Number(quantity);
//  let updatecart={id,quantity,price}

 arrLocalStorageProduct.push({id,quantity,price});

 localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));


 updateValue(arrLocalStorageProduct);

 showToast('add',id);

};
