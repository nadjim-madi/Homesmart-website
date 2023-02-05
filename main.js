import './style.css'

const navbtn = document.querySelector('#menu'); //get element by id 
const menubar = document.querySelector('[role="menubar"]');
const menuBtn = document.getElementById('menu-btn');
const menuBtnbefore = document.getElementById('before')
const menuBtnafter = document.getElementById('after')
const isExpanded = JSON.parse(navbtn.getAttribute ('aria-expanded'));
var etat = false
navbtn.addEventListener('click',() =>{
    // const isExpanded = JSON.parse(navbtn.getAttribute ('aria-expanded'));
    navbtn.setAttribute('aria-expanded', !isExpanded);
    menubar.classList.toggle('hidden');
    menubar.classList.toggle('flex');
    etat = true
    menuBtn.classList.toggle('w-6')
    menuBtn.classList.toggle('h-1')
    menuBtn.classList.toggle('hidden')
    // menuBtnbefore.classList.toggle('-translate-x-2')
    // menuBtnafter.classList.toggle('-translate-x-2')
    menuBtnafter.classList.toggle('-translate-y-1')
    menuBtnbefore.classList.toggle('translate-y-1')
    menuBtnbefore.classList.toggle('-rotate-45')
    menuBtnafter.classList.toggle('rotate-45')
    // navbtn.classList.toggle('translate-y-1')
    

})

navbtn.addEventListener('mouseover',() => {
    
    if (menuBtnbefore.classList.contains('-rotate-45') == false) {
        menuBtnbefore.classList.toggle('translate-x-2')
        menuBtnafter.classList.toggle('translate-x-2')
    }
    // alert(menuBtnbefore.classList.contains('-rotate-45'))
        // console.log(isExpanded)
   
})
navbtn.addEventListener('mouseout',() =>{
    if (menuBtnbefore.classList.contains('-rotate-45') == false) {
        menuBtnbefore.classList.toggle('translate-x-2')
        menuBtnafter.classList.toggle('translate-x-2')
    }

})
// const menuBtn = document.getElementById('menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click',() => {
//     if(!menuOpen){
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.add('open');
//         menuOpen = false;
//     }
// });