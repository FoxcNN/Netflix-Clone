const esitle = document.querySelectorAll('.esitle')
const dilSec = document.querySelectorAll('.dil-sec')

const inp = document.querySelectorAll('.email')
const lbl = document.querySelectorAll('.label')

const yokols = document.querySelectorAll('.yokol')
const acts = document.querySelectorAll('.accordion-title') 
let acYazi = document.querySelectorAll('.accordion-yazi')
let acIcon = document.querySelectorAll('.fa-plus')
acts.forEach(act =>{
    act.addEventListener('click',function(){
        let icon = this.querySelector('.fa-plus')
        let div = this.parentElement
        let yazi = div.querySelector('.accordion-yazi')

        if(yazi.classList.contains('accordion-aktif')){
            yazi.classList.remove('accordion-aktif')
        
            icon.classList.remove('carpi')
        }else{
            acYazi.forEach(yazi=>{
                yazi.classList.remove('accordion-aktif')
            })
            acIcon.forEach(icon=>{
                icon.classList.remove('carpi')
            })
            yazi.classList.toggle('accordion-aktif')
            icon.classList.toggle('carpi')
        }
    })
})



dilSec.forEach(dil =>{
    dil.addEventListener('click',function (){

        let drop = this.parentElement.parentElement.parentElement
        let btn = drop.querySelector('button')
        btn.innerHTML = dil.innerHTML
    })
})



inp.forEach(input=>{
    input.addEventListener('focusin',function(){
        let parent = this.parentElement
        let label = parent.querySelector('.label')
        label.classList.add('lbl-active')
    })
    input.addEventListener('focusout',function(){
        let parent = this.parentElement
        let label = parent.querySelector('.label')
        if(input.value == ''){
            label.classList.remove('lbl-active')
        }
    })
})

// inp.addEventListener('focusin',function(){
//     lbl.classList.add('lbl-active')
// })
// inp.addEventListener('focusout',function(){
//     if(inp.value == ''){
//         lbl.classList.remove('lbl-active')
//     } 
// })

window.addEventListener('resize',iConKalsın)

function iConKalsın(){
    if(window.innerWidth <= 450){
        yokols.forEach(yokol =>{
            yokol.style.display = 'none'
        })
    }else{
        yokols.forEach(yokol =>{
            yokol.style.display = 'inline'
        })
    }
}
iConKalsın()