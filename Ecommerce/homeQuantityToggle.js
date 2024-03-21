export const homeQuantityToggle = (e,id,stock)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    const cardQuantity = currentCardElement.querySelector('.productQuantity');
    console.log(cardQuantity);
    let quantity = parseInt(cardQuantity.getAttribute('data-quantity'))|| 1;

    if(e.target.className === 'cartIncrement'){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }

    if(e.target.className === 'cartDecrement'){
        if(quantity>1){
            quantity-=1;
        }
    }
    cardQuantity.textContent = quantity;
    cardQuantity.setAttribute('data-quantity',quantity.toString());
}