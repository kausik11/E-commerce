const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');
import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";


export const showProductContainer = (products)=>{
  if (!products) {
    return false;
  }
  products.forEach(element => {
    const{id,name,category,brand,price,stock,description,image} = element;
    // document.importNode is used to clone the contenet of a template, at the end we use a true parameter 
    //to copy all the descendents of that prent template
    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.productStock').textContent = stock;
    productClone.querySelector('.productPrice').textContent = `$${price}`;
    productClone.querySelector('.productActualPrice').textContent = `${price*4}`;
    productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);

   productClone.querySelector('.stockElement').addEventListener('click',(e)=>{

    homeQuantityToggle(e,id,stock);
   })

   productClone.querySelector('.add-to-cart-button').addEventListener('click',(e)=>{
    addToCart(e,id,stock)
   })

    productContainer.append(productClone);
  });
}