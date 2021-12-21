let checked = false

const btnMenu = document.querySelector('.btn-mobile')
btnMenu.addEventListener('click', ()=>{
    let animationMenu = document.querySelector('.mobile-nav-absolute')

    if(!checked){
        btnMenu.classList.add('cross-animation')
        animationMenu.classList.add('open-menu')
        animationMenu.classList.remove('close-menu')
        checked = true
    } else {
        btnMenu.classList.remove('cross-animation')
        animationMenu.classList.add('close-menu')
        animationMenu.classList.remove('open-menu')
        checked = false
    }
})