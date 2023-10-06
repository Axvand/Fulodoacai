
import IncrementCounterCart from "./IncrementCounterCart.js"
import CartAlert from "./alertPushInCart.js"
import { PushPedido } from "./pushPedidos.js"
import { pedidos } from "../main.js"
import {ValueCart} from "./ValueCart.js"


export default function pushInTheCart(button, cart, item_Cardapio, Alert,i){
        //CLICK QUE DISPARA
    button.addEventListener('click', () => {
        cart.push(item_Cardapio)
        IncrementCounterCart(cart)
        CartAlert(Alert)
     
        //colocando o card nos pedidos
            const counter = parseInt(document.querySelector('.counterCart').innerHTML-1)
            PushPedido( pedidos[counter].img, pedidos[counter].title, pedidos[counter].description, pedidos[counter].prix )

             //Chamada de atualizaçao do preçototal exibido no carrinho!
            ValueCart()
        //
        

    })
}
    
//})

/* async function getPedido(){
    let response = await fetch(pedidos);
    let pedidosCart = response.json;
    return pedidosCart

}*/




