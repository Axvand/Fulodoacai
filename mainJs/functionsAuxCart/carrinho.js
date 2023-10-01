import SetAnimation from "../Sets/setAnimation.js";
import Display from "../Sets/setNoneOurBlock.js";
import { PushPedido } from "./pushPedidos.js";
import { pedidos } from "../main.js";

export default function OpenCart(Element,Element2){

        Display(Element, 'block')

        setTimeout(() => {
            SetAnimation(Element2,'fadeInLeft','0.5s')
            Display(Element2,'block')
        }, 400);

        for(var i = 0; i<pedidos.length; i++){
            PushPedido(pedidos[i].img, pedidos[i].title, pedidos[i].description, pedidos[i].prix )
        }

}