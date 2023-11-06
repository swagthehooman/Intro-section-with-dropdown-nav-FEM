const hamburger=document.querySelector('.hamburger-open')
const navMenu=document.querySelector('.nav-menu')
const feature=document.querySelector('#feature')
const company=document.querySelector('#company')

const up='./images/icon-arrow-up.svg'
const down='./images/icon-arrow-down.svg'

let cBool=false//false=hidden, true= initial
let fBool=false
let hamMenu=false

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    if(hamMenu){
        hamburger.src='./images/icon-menu.svg'
        hamMenu=false
    }else{
        hamMenu=true
        hamburger.src='./images/icon-close-menu.svg'
    }
    navMenu.classList.toggle("active")
})

feature.addEventListener("click",()=>{
    if(fBool){
        fBool=false
        feature.src='./images/icon-arrow-up.svg'
        document.getElementById('feature-sub-menu').style.display='initial'
    }else{
        fBool=true
        feature.src='./images/icon-arrow-down.svg'
        document.getElementById('feature-sub-menu').style.display='none'    
    }
})

company.addEventListener("click",()=>{
    if(cBool){
        cBool=false
        company.src='./images/icon-arrow-up.svg'
        document.getElementById('company-sub-menu').style.display='initial'
    }else{
        cBool=true
        company.src='./images/icon-arrow-down.svg'
        document.getElementById('company-sub-menu').style.display='none'
    }
})
