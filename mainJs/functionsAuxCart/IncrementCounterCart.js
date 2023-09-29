export default function IncrementCounterCart(Cart){
    
    const boxCounterCart = document.querySelector('.counterCart') 
    const CounterCart =  parseInt(document.querySelector('.counterCart').innerHTML)


    document.querySelector('.counterCart').innerHTML = Cart.length; 

    if(CounterCart >= 0){
        boxCounterCart.style.display = 'block'
    }else{
        boxCounterCart.style.display = 'none'
    }
   
}