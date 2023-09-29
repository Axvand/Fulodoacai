import SetAnimation from "../Sets/setAnimation.js"
import Display from "../Sets/setNoneOurBlock.js"

 export default function CartAlert(boxCartAlert){

    SetAnimation(boxCartAlert, 'fadeInUp','0.2s')
    Display(boxCartAlert, 'block')
    setTimeout(()=>{
        SetAnimation(boxCartAlert, 'fadeOut','0.3s')
        setTimeout(() => {
            Display(boxCartAlert, 'none')  
        },200);
      
        
    },1000)

}
