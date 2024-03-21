import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";
export const removeProductFromCart = (id)=>{
    let cartProducts = getProductsFromLocalStorage();
    cartProducts = cartProducts.filter((currPrd)=> currPrd.id !== id);

    localStorage.setItem('cartProductList', JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast('delete',id);
    }

    updateCartValue(cartProducts);
}