import { pedidos } from "../main.js"
import { counterCart } from "../main.js" 


export default function ExcluirPedido( buttonExcluir , box , Element, ItemExclu){
  
    buttonExcluir.addEventListener('click',()=>{


            box.removeChild(Element)
            pedidos.splice(pedidos.indexOf(ItemExclu), 1)

            console.log(pedidos)

            counterCart.innerHTML=`${pedidos.length}`
    })
    
}

