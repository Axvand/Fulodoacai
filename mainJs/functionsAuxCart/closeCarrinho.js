import SetAnimation from "../Sets/setAnimation.js";
import Display from "../Sets/setNoneOurBlock.js";

export default function CloseCart(Element, Element2 ){ 
    SetAnimation(Element2, 'fadeOutLeft','900ms')

    setTimeout(() => {
    SetAnimation(Element,'fadeOut','0,1s')
    Display(Element,'none')
    }, 500);
}