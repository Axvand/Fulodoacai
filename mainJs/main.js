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
import { somaValue } from "./functionsAuxCart/ValueCart.js";
import Encaminhar from "./functionsAuxCart/Encaminhamento.js";


const urlJson = './cardapio/cardapio.json'
const buttonCardAcai = document.querySelectorAll('.buttonCard');//Açais
const buttonCardANovidades = document.querySelectorAll('.buttonCard1');
const buttonCardAcompanhamentos = document.querySelectorAll('.buttonCard2');

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
 
    //pushCart na Primeira parte do cardápio "Açais"  A função PUshInTheCart é composta por outras minifunções//
    for(var i = 0; i<cardapio_Açais.length; i++){
        pushInTheCart(buttonCardAcai[i], pedidos, cardapio_Açais[i],boxCartAlert,i)
    }
    //pushCart na Segunda parte do cardápio "Novidades"//
    for(var y = 0; y<cardapio_Novidades.length; y++){
        pushInTheCart(buttonCardANovidades[y], pedidos, cardapio_Novidades[y],boxCartAlert,y)
    }
    //pushCart na Segunda parte do cardápio "Acompanhamentos"//
    for(var z = 0; z<cardapio_Acompanhamentos.length; z++){
        pushInTheCart(buttonCardAcompanhamentos[z], pedidos, cardapio_Acompanhamentos[z],boxCartAlert,z)
    }


    
})
 
//fechar o carrinho

const sideCarrinho = document.querySelector('.sideCarrinho')
const boxCart = document.querySelector('.boxCarrinho')
export const counterCart = document.querySelector('.counterCart');

sideCarrinho.addEventListener('click', ()=>{
    CloseCart( boxCart)
})


//Tirando os items do carrinho e da array (O CLICK DO ICONEDECARRINHO ESTÁ ATUALIZANDO A VARIAVEL PARA PODER EXCLUIR OS ITENSDOCARRINHO(ARRAY) MAIS OS CARDS)

export default function atualizarVariavel(){

    const buttonExcluirPedido = document.querySelectorAll('.excluirPedido')
    const cardPedido = document.querySelectorAll('.Pedido')
    const inScroll = document.querySelector('.inScroll')


for (let i = 0; i < buttonExcluirPedido.length; i++) {
    ExcluirPedido(buttonExcluirPedido[i],inScroll, cardPedido[i], pedidos[i])
}

   
}

//========================Rncaminhamento de pedido=================================


Encaminhar()