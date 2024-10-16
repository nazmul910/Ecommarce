import products from './api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getcartProductFromLS } from './getCartProduct';
import { increDecre } from './increDecre';
import { removeProdFromCart } from './removeProdFromCart';
import { showToast } from './showToast';
import { updateTotal } from './updateTotal';

let cartProducts= getcartProductFromLS();

let filterProducts =products.filter((curProd)=> {
  return cartProducts.some((curElem)=> curElem.id===curProd.id);
})


const cartElement =document.querySelector('#productCartContainer');
const templateContainer =document.querySelector('#productCartTemplate');



const showCartProduct =() =>{
  filterProducts.forEach((curProd)=>{
     const {category,id,image,name,stock,price}=curProd;

     let productClone =document.importNode(templateContainer.content, true);


     let lSActualData=fetchQuantityFromCartLS(id,price); 


     productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);
      
     productClone.querySelector('.category').textContent = category;
     productClone.querySelector('.productName').textContent = name;
     productClone.querySelector('.productImage').src = image;
   

     productClone.querySelector('.productQuantity').textContent=lSActualData.quantity;
     productClone.querySelector('.productPrice').textContent=lSActualData.price;


     productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
      increDecre(event,id,stock,price);
     })


     productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=> removeProdFromCart(id));


     cartElement.append(productClone);


  })
}





showCartProduct();






updateTotal();