import SetAnimation from "../Sets/setAnimation.js";
import Display from "../Sets/setNoneOurBlock.js";
import atualizarVariavel from "../main.js";


export default function OpenCart(Element,Element2){

        Display(Element, 'flex')

        setTimeout(() => {
            SetAnimation(Element2,'fadeInLeft','0.5s')
            Display(Element2,'block')
        }, 400);



        atualizarVariavel()

}

