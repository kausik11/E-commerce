import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
import { UpdateCartProductTotal } from "./UpdateCartProductTotal";
export const increMentDecrement = (e,id,stock,price)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector('.productQuantity');
    const productPrice = currentCardElement.querySelector('.productPrice');  
    
    
    let quantity = 1;
    let localStoragePrice = 0;

    let cartProducts = getProductsFromLocalStorage();

    let existingProducts = cartProducts.find((currele)=>currele.id === id);

    if(existingProducts){
        quantity = existingProducts.quantity;
        localStoragePrice = existingProducts.price;
    }else{
        localStoragePrice = price;
        price = price;
    }

    if(e.target.className === 'cartIncrement'){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }
    if(e.target.className === 'cartDecrement'){
        if(quantity>1){
            quantity-=1;
        }
    }

    localStoragePrice = price * quantity;

    let updateCard = {id,quantity,price : localStoragePrice};
    updateCard = cartProducts.map((currEle)=>{
        return currEle.id === id ? updateCard : currEle;
    });
    // console.log(updateCard);
    localStorage.setItem('cartProductList', JSON.stringify(updateCard));


    productQuantity.textContent = quantity;
    productPrice.textContent = localStoragePrice;

    UpdateCartProductTotal();
};

