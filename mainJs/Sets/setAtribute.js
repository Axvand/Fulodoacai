export default function SetAttribute(Atri, Valor, Element){
    const Atributo = document.createAttribute(Atri)
    Atributo.value=Valor
    Element.setAttributeNode(Atributo)
}