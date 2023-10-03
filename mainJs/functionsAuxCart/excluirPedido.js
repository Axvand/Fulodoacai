import SetAnimation from "../Sets/setAnimation.js"
import { pedidos } from "../main.js"
import { counterCart } from "../main.js" 


export default function ExcluirPedido( buttonExcluir , box , Element, ItemExclu){
  
    buttonExcluir.addEventListener('click',()=>{

            SetAnimation(Element, 'fadeOutLeft','300ms')

            setTimeout(() => {
                box.removeChild(Element)
            }, 300);

            pedidos.splice(pedidos.indexOf(ItemExclu), 1)

            console.log(pedidos)

            counterCart.innerHTML=`${pedidos.length}`
    })
    
}

