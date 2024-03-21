import { updateCartValue } from "./updateCartValue";
export const getProductsFromLocalStorage = ()=>{
   let CartProduct = localStorage.getItem('cartProductList');
   if(!CartProduct){
    return [];
   }

   CartProduct= JSON.parse(CartProduct);
   console.log(CartProduct);
   updateCartValue(CartProduct); 
   return CartProduct;
};