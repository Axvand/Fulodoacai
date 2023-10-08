export default function PreLoad(){
    setTimeout(() => {
        document.querySelector('.preLoad').style.display= 'none'

        document.querySelector('.content').style.animation='fadeIn'
        document.querySelector('.content').style.animationDuration='500ms'

        document.querySelector('.content').style.display='block'
    }, 2000);
    
}