let down = document.querySelector('.down-button')
let sidebar = document.querySelector('.sidebar')
let slides = document.querySelector('.main-slide')
let up = document.querySelector('.up-button')

let count = 0

down.addEventListener('click', ()=> {
    
    slides.children[count].style.display = 'none'
    sidebar.children[count].style.display = 'none'
    count++
    if(count === 4) {
        for(i = 0; i < 4; i++){
            slides.children[i].style.display = 'block'
            sidebar.children[i].style.display = 'flex'
        }
        count = 0
    }
})
up.addEventListener('click',()=> {
    
    count--
    if(count === -1) {
        count = 3
        for(i = 0; i < 4; i++){
            slides.children[i].style.display = 'none'
            sidebar.children[i].style.display = 'none'
        }
        slides.children[count].style.display = 'block'
        sidebar.children[count].style.display = 'flex'
    } else {
        slides.children[count].style.display = 'block'
        sidebar.children[count].style.display = 'flex'
    }
    
    
})