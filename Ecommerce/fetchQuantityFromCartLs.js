import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
export const fetchQuantityFromCartLs=(id,price)=>{
    let localStorageData = getProductsFromLocalStorage();

    let existingProduct = localStorageData.find((currPrd)=> currPrd.id === id);
    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity,price};
};