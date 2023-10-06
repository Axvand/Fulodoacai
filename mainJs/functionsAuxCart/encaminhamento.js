import { pedidos } from "../main.js";



export default function Encaminhar(){

const finalizar = document.querySelector('.finalizar')

finalizar.addEventListener('click',()=>{

    //===========observaçao==========

    const textObservacao = document.querySelector('.textObservacao').value;

    //===========Formulario Endereço======
    const Nome = document.querySelector('.Nome').value
    const cep = document.querySelector('.cep').value
    const bairro = document.querySelector('.bairro').value
    const logradouro = document.querySelector('.logradouro').value
    const localidade = document.querySelector('.localidade').value
    const resumoDosPedidos = pedidos.map(pedido => {
        return `
        ${pedido.title} 
        ${pedido.prix}`
    })
 let carrinho = 0

    for(var i = 0 ; i< pedidos.length ; i++){
        carrinho += parseFloat(pedidos[i].prix)

    }

    console.log(`
     Cliente: 
     ${Nome}

     Endereço Do Cliente: 
     cep: ${cep};
     Bairro: ${bairro}; 
     Logradouro:${logradouro};
     Localidade: ${localidade}
      
      /////////// 
      Observação: 
      ${textObservacao}
      ///////// 
      Pedidos Do Carrinho: 
      ${resumoDosPedidos}
      //////
      Valor total:
      ${carrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}

    `)


})

}