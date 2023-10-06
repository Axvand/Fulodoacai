import { pedidos } from "../main.js"
export function ValueCart(){

    let carrinho = 0

    for(var i = 0 ; i< pedidos.length ; i++){
        carrinho += parseFloat(pedidos[i].prix)

    }
 
    const x = carrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

   document.querySelector('.valorTotalPedido').innerHTML=`total:${x}`

//console.log(document.querySelector('.valorTotalPedido').innerHTML=`total:R$${x}`)
}



export function somaValue(pedidos){
    let carrinho = 0

    for(var i = 0 ; i< pedidos.length ; i++){
        carrinho += parseFloat(pedidos[i].prix)

    }

    return preco = carrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}