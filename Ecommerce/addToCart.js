import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";
getProductsFromLocalStorage();
export const addToCart = (e,id,stock)=>{

    const arrLocalStorage = getProductsFromLocalStorage(); 


   const currentProductEle = document.querySelector(`#card${id}`);
   let quantity = currentProductEle.querySelector('.productQuantity').textContent;
   let price = currentProductEle.querySelector('.productPrice').textContent;


//    console.log(quantity,`${quantity * parseInt(price.slice(1))}`);

  price = parseInt(price.slice(1));
  quantity = parseInt(quantity);
  price = price * quantity;

  let existingData = arrLocalStorage.find((currEle)=>currEle.id === id);

  if(existingData && quantity > 1){

    quantity = existingData.quantity + quantity; 
    price = price * quantity;
    let updateCard = {id,quantity,price};
    updateCard = arrLocalStorage.map((currEle)=>{
        return currEle.id === id ? updateCard : currEle;
    });
    console.log(updateCard);
    localStorage.setItem('cartProductList', JSON.stringify(updateCard));
    showToast('add',id);
  }

      if (existingData) {
        // alert("Already in cart");
        return false;
      }

  let updateCard = {id,quantity,price};
  arrLocalStorage.push(updateCard);
  localStorage.setItem('cartProductList',JSON.stringify(arrLocalStorage));


   updateCartValue(arrLocalStorage); 
  showToast('add',id);
}