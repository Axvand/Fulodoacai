//================carrinho================

import OpenCart from "./functionsAuxCart/carrinho.js";

const IconCart = document.querySelector('.cartBox')
const  boxCarrinho = document.querySelector('.boxCarrinho')
const carrinho = document.querySelector('.Carrinho')

    IconCart.addEventListener("click",()=>{
         OpenCart(boxCarrinho, carrinho)
    })


//==================CART===================

import pushInTheCart from "./functionsAuxCart/pushInTheCart.js"; 


const urlJson = './cardapio/cardapio.json'
const buttonCardAcai = document.querySelectorAll('.buttonCard');//Açais
const buttonCardANovidades = document.querySelectorAll('.buttonCard1');

const boxCartAlert = document.querySelector('.boxCartAlert') //alerta
const pedidos = []

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
        pushInTheCart(buttonCardAcai[i], pedidos, cardapio_Açais[i],boxCartAlert)
    }
    //pushCart na Segunda parte do cardápio "Novidades"
    for(var y = 0; y<cardapio_Novidades.length; y++){
        pushInTheCart(buttonCardANovidades[y], pedidos, cardapio_Novidades[y],boxCartAlert)
    }

})


const boxPedidos = document.querySelector('.boxCartPedidoScrollInterno').innerHTML;











