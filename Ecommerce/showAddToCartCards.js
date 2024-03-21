import products from './api/products.json';
import { getProductsFromLocalStorage } from './getProductsFromLocalStorage';
import { fetchQuantityFromCartLs } from './fetchQuantityFromCartLs';
import { removeProductFromCart } from './removeProductFromCart';
import { increMentDecrement } from './increMentDecrement';
import { UpdateCartProductTotal } from './UpdateCartProductTotal';

let cartProducts = getProductsFromLocalStorage();
let filterProduct = products.filter((currProd)=>{
    // console.log(currProd.id);
    return cartProducts.some((currEle)=>currEle.id === currProd.id)
});
console.log(filterProduct);

const productCartContainer = document.querySelector('#productCartContainer');
const productCartTemplate = document.querySelector('#productCartTemplate');

const showCartProduct =()=>{
    filterProduct.forEach((currProduct)=>{
        const{id,name,category,brand,price,stock,description,image} = currProduct;
        
        let productClone = document.importNode(productCartTemplate.content, true);


        const lsActualData = fetchQuantityFromCartLs(id,price);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productPrice').textContent = lsActualData.price;
        productClone.querySelector('.productQuantity').textContent = lsActualData.quantity;
        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);

        productClone.querySelector('.stockElement').addEventListener('click',(e)=>{increMentDecrement(e,id,stock,price)
        });

        productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=> removeProductFromCart(id));

        productCartContainer.appendChild(productClone);
        
    })
}


showCartProduct();

UpdateCartProductTotal();