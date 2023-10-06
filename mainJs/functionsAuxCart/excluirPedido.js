import SetAnimation from "../Sets/setAnimation.js"
import { pedidos } from "../main.js"
import { counterCart } from "../main.js" 
import { ValueCart } from "./ValueCart.js"


//adiciona a função especifica de excluir a cada botao excluir dos cards de produtos que são inseridos no carrinho
export default function ExcluirPedido( buttonExcluir , box , Element, ItemExclu){
  
    buttonExcluir.addEventListener('click',()=>{

            SetAnimation(Element, 'fadeOutLeft','300ms')

            setTimeout(() => {
                box.removeChild(Element)
            }, 300);

            pedidos.splice(pedidos.indexOf(ItemExclu), 1)

            counterCart.innerHTML=`${pedidos.length}`



            //Chamada de atualizaçao do preçototal exibido no carrinho!
            ValueCart()
    })
   
    
}

