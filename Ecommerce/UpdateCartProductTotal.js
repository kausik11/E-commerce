import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
export const UpdateCartProductTotal = ()=>{

    const productSubTotal = document.querySelector('.productSubTotal');
    const productFinalTotal = document.querySelector('.productFinalTotal');

    let cartProducts = getProductsFromLocalStorage();
    let initialValue = 0;
    let totalProductPrice = cartProducts.reduce((accumulator,currEle,index,arr,thisele)=>{
    let productPrice = currEle.price || 0;
    return accumulator + productPrice;
    },initialValue)
    console.log(totalProductPrice);

    productSubTotal.textContent = `$${totalProductPrice}`;
    productFinalTotal.textContent = `$${totalProductPrice + 50}`

}