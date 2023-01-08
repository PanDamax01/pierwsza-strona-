let text =document.getElementById('title')
let ballon1 =document.getElementById('ballon1')
let ballon2 =document.getElementById('ballon2') 
let rocks =document.getElementById('rocks') 
let water =document.getElementById('water') 
let btn =document.getElementById('btn') 
let forest =document.getElementById('forest') 
let header =document.getElementById('header')


window.addEventListener('scroll', function(){
    let value = window.scrollY
    
    text.style.top = 50 + value*-0.4+'%'
    ballon1.style.top = value * -1.5 + 'px'
    ballon1.style.left = value * 1.8 + 'px'
    ballon2.style.top = value * -1.5 + 'px'
    ballon2.style.left = value * -4 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    rocks.style.top = value * -0.12 + 'px'
    forest.style.top = value * 0.25 + 'px'
    header.style.top = value * 0.4 + 'px'
})
