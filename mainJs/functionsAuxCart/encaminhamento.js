import SetAttribute from "../Sets/setAtribute.js";
import { pedidos } from "../main.js";



export default function Encaminhar(){
    const bairro = document.querySelector('.bairro')
    const logradouro = document.querySelector('.logradouro')
    const localidade = document.querySelector('.localidade')
    const alertCep = document.querySelector('.AlertCep')
    const cep = document.querySelector('.cep')


 cep.addEventListener('change', async ()=>{
    
    let cepContent = document.querySelector('.cep').value
    let Adress;
    try{
       
    Adress = await fetch(`http://viacep.com.br/ws/${cepContent}/json`).then(response => response.json()).then(res => res)
    // autoincrementando os inputs:
    SetAttribute('value',`${Adress.bairro}`, bairro)
    SetAttribute('value',`${Adress.logradouro}`, logradouro)
    SetAttribute('value',`${Adress.localidade}`, localidade)
    document.querySelector('.AlertCep').style.display='none'
    
    // em caso de erro:
    }catch(error){
       console.log('Nao encontrado')
    }
        
    })

 //-======================
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
    const lote = document.querySelector('.lote').value

    const resumoDosPedidos = pedidos.map(pedido => {
        return `
        Item:${pedido.title}, Preço:${pedido.prix};;;


        `
    })
 let carrinho = 0

    for(var i = 0 ; i< pedidos.length ; i++){
        carrinho += parseFloat(pedidos[i].prix)

    }


    const link = ` https://api.whatsapp.com/send?phone=5561996081625&text=Cliente:%20%20${Nome}%0A_____________________%0AEndere%C3%A7o%20Do%20Cliente:%20%0ACep:%20CEP;%0ABairro:%20${bairro};%20%0ALogradouro:%20${logradouro};%0ALocalidade:%20${localidade};%0ALote%20:%20${lote}%0A_____________________%0AValor%20total:%0A${carrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}%0A_____________________%0AObserva%C3%A7%C3%A3o:%20%0A${textObservacao}%0A____________%20%0APedidos%20Do%20Carrinho:%20%0A${resumoDosPedidos}%0A`

    SetAttribute('href',link, finalizar)
    
})

 }
