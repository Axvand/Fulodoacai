import SetAttribute from "../Sets/setAtribute.js"
const InScroll = document.querySelector('.inScroll')

export function PushPedido( img,title, description,prix ){

    function AppendChild(InScroll, pedido){
        InScroll.appendChild(pedido)
    }

    const preco = prix.toString()


    let pedido = document.createElement('div')
    AppendChild(InScroll, pedido)
    SetAttribute('class', 'Pedido', pedido)

        let headerPedido = document.createElement('div')
        SetAttribute('class','headerPedido', headerPedido)
        AppendChild(pedido, headerPedido)


            let imgPedido = document.createElement('div')
            SetAttribute('class','imgPedido', imgPedido )
            AppendChild(headerPedido, imgPedido)
            imgPedido.style.background = `url(${img})`
            imgPedido.style.backgroundSize = `cover`

            let titlePedido = document.createElement('div')
            SetAttribute('class','titlePedido', titlePedido)
            AppendChild(headerPedido, titlePedido); 

                let P = document.createElement('p')
                AppendChild(titlePedido, P)
                let content = document.createTextNode(title)
                AppendChild(P, content)
        
        let mainPedido = document.createElement('div')
        SetAttribute('class', 'mainPedido', mainPedido)
        AppendChild(pedido, mainPedido)

            let descricaoPedido = document.createElement('div')
            SetAttribute('class','descricaoPedido', descricaoPedido)
            AppendChild(mainPedido, descricaoPedido)

                let Descript = document.createElement('p')
                AppendChild(descricaoPedido, Descript)
                let content2 = document.createTextNode(description)
                AppendChild(Descript, content2)

        let functionsPedido = document.createElement('div')
        SetAttribute('class', 'functionsPedido', functionsPedido)
        AppendChild(pedido, functionsPedido)

            let Prix = document.createElement('p')
            AppendChild(functionsPedido, Prix)
            let content3 = document.createTextNode(`Preço: R$${preco.replace('.',',')}`)
            AppendChild(Prix, content3)

            let qtdPedido = document.createElement('div')
            SetAttribute('class', 'qtdPedido', qtdPedido)
            AppendChild(functionsPedido, qtdPedido)    
            
            let excluirPedido = document.createElement('div')
            SetAttribute('class','excluirPedido', excluirPedido)
            AppendChild(functionsPedido, excluirPedido)
                let imgIcon = document.createElement('img')
                AppendChild(excluirPedido, imgIcon)
                SetAttribute('height', '30px', imgIcon) 
                SetAttribute('src', '../imgs/botao-x.png', imgIcon)

            let br2 = document.createElement('br')
            AppendChild(pedido, br2)
            
}




//const node = document.createTextNode("This is a paragraph.");

/*
<div class="inScroll">
                <div class="Pedido">
                    <div class="headerPedido">
                        <div class="imgPedido"></div>
                        <div class="titlePedido">
                            <p>CAMARÃO CARIBENHO, EMPANADO NO COCO.</p>
                        </div>
                    </div>
                    <div class="mainPedido">
                        <div class="descricaoPedido">
                            <p>Açaí batido com xarope de Guaraná,frutas em fatias (banana, morango, abacaxi, mamão e manga), leite em pó, leite condensado + 2 complementos a sua escolha ( granola, amendoim, confetes ou paçoca).</p>
                        </div><br>
                        <div class="functionsPedido">
                            <p class="preço">Preço: 20,00</p>
                            <div class="qtdPedido"></div>
                            <div class="excluirPedido"><img height="30px" src="imgs/botao-x.png" alt=""></div>
                        </div>
                    </div> 
                </div><br> */