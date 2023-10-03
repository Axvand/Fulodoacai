//================carrinho================

import OpenCart from "./functionsAuxCart/carrinho.js";
import { PushPedido } from "./functionsAuxCart/pushPedidos.js";
const IconCart = document.querySelector('.cartBox')
const boxCarrinho = document.querySelector('.boxCarrinho')
const carrinho = document.querySelector('.Carrinho')

    IconCart.addEventListener("click",()=>{
         OpenCart(boxCarrinho, carrinho)
    })

//==================CART===================

import pushInTheCart from "./functionsAuxCart/pushInTheCart.js"; 
import CloseCart from "./functionsAuxCart/closeCarrinho.js";
import ExcluirPedido from "./functionsAuxCart/excluirPedido.js";


const urlJson = './cardapio/cardapio.json'
const buttonCardAcai = document.querySelectorAll('.buttonCard');//Açais
const buttonCardANovidades = document.querySelectorAll('.buttonCard1');

const boxCartAlert = document.querySelector('.boxCartAlert') //alerta
export const pedidos = []

//=======FetchDoCardápio=======

fetch(urlJson,{
    headers: {
        accept: "aplication/json"
    }
})
.then(response => response.json())
.then(res =>{
    const cardapio_Açais = res.Glaces
    const cardapio_Novidades = res.Novidades
    const cardapio_Acompanhamentos = res.acompanhamento
 
    //pushCart na Primeira parte do cardápio "Açais"
    for(var i = 0; i<cardapio_Açais.length; i++){
        pushInTheCart(buttonCardAcai[i], pedidos, cardapio_Açais[i],boxCartAlert,i)
    }
    //pushCart na Segunda parte do cardápio "Novidades"
    for(var y = 0; y<cardapio_Novidades.length; y++){
        pushInTheCart(buttonCardANovidades[y], pedidos, cardapio_Novidades[y],boxCartAlert,y)
    }


    
})
 


const sideCarrinho = document.querySelector('.sideCarrinho')
const boxCart = document.querySelector('.boxCarrinho')
export const counterCart = document.querySelector('.counterCart');

sideCarrinho.addEventListener('click', ()=>{
    CloseCart( boxCart)
})


//Tirando os items do carrinho e da array

export default function atualizarVariavel(){

    const buttonExcluirPedido = document.querySelectorAll('.excluirPedido')
    const cardPedido = document.querySelectorAll('.Pedido')
    const inScroll = document.querySelector('.inScroll')
   

console.log(buttonExcluirPedido, cardPedido, pedidos)

for (let i = 0; i < buttonExcluirPedido.length; i++) {
    ExcluirPedido(buttonExcluirPedido[i],inScroll, cardPedido[i], pedidos[i])
}

   
}

