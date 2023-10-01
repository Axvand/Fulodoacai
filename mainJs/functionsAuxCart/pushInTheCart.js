
import IncrementCounterCart from "./IncrementCounterCart.js"
import CartAlert from "./alertPushInCart.js"
import { PushPedido } from "./pushPedidos.js"

export default function pushInTheCart(button, cart, item_Cardapio, Alert,cart_title){


    //CLICK QUE DISPARA
    button.addEventListener('click', () => {
        cart.push(item_Cardapio)
        IncrementCounterCart(cart)
        CartAlert(Alert)
        console.log(cart)
    })
}


/* async function getPedido(){
    let response = await fetch(pedidos);
    let pedidosCart = response.json;
    return pedidosCart

}*/




