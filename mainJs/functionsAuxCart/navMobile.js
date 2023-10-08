import Display from "../Sets/setNoneOurBlock.js";

export function NavBar(){

    const buttonNav = document.querySelector('.buttonNav')
    const navMobile = document.querySelector('.navegacaoMobile')
    
    buttonNav.addEventListener('click',()=>{
        Display(navMobile,'block')
    })
    
    
    const header = document.querySelector("header")
    const main = document.querySelector("main")
    
    header.addEventListener('click',()=>{
        Display(navMobile,'none')
    })
    main.addEventListener('click',()=>{
        Display(navMobile,'none')
    })
    
} 
