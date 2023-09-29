import IncrementCounterCart from "./IncrementCounterCart.js"
import CartAlert from "./alertPushInCart.js"

export default function pushInTheCart(button, cart, item_Cardapio, Alert){


    //CLICK QUE DISPARA
    button.addEventListener('click', ()=>{
        cart.push(item_Cardapio)
        console.log(cart)
        IncrementCounterCart(cart)
        CartAlert(Alert)
        
    })
}

