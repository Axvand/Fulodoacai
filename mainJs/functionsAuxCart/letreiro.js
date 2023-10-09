export default function Letreiro() {
    const letreiro = document.querySelector('.letreiro');
    const data = new Date()
    const horas = data.getHours()
    const minutos = data.getMinutes()

    if(horas<14||horas>21){
        letreiro.innerHTML= 'Fechado'
        letreiro.style.color = 'red'
        letreiro.style.borderColor = 'red'
        letreiro.style.boxShadow = '0px 0px 10px red'
        letreiro.style.textShadow = '0px 0px 10px red'
        letreiro.style.background = 'rgb(46, 1, 1)'
        
    }
}