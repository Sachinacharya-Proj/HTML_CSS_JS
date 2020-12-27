// Typing Effects

const area = document.querySelector(".contents");
const cursor = document.querySelector(".cursor");
const textArray = ['WEBSITES DESIGN','GRAPHICS DESIGN','SOFTWARE DEVELOPMENT']
const typingDelay = 200;
const erasingDelay = 100;
const NextTextDelay = 2000;
let TextIndex = 0;
let CharIndex = 0;

function Typing(){
    if(CharIndex < textArray[TextIndex].length){
        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing");
        }
        area.textContent += textArray[TextIndex].charAt(CharIndex);
        CharIndex++;
        setTimeout(Typing,typingDelay);
    }else{
        setTimeout(erase,NextTextDelay)
        cursor.classList.remove("typing");
    }
}


function erase(){
    if(CharIndex > 0){
        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing");
        }
        area.textContent = textArray[TextIndex].substring(0,CharIndex-1);
        CharIndex--;
        setTimeout(erase,erasingDelay)
    }else{
        TextIndex++;
        if(TextIndex == textArray.length){
            TextIndex = 0;
        }
        cursor.classList.remove("typing");
        setTimeout(Typing,typingDelay+1100);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(Typing,NextTextDelay + 250)
})

//Menus

const menuBtn = document.querySelector('.menu-btn');
const menusItems = document.querySelector('nav ul');
const menuIcons = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', ()=>{
    if(menusItems.classList.contains('open')){
        menusItems.classList.remove('open');
        menuIcons.classList.add('fa-bars');
        menuIcons.classList.remove('fa-times');
    }else{
        menuIcons.classList.remove('fa-bars');
        menuIcons.classList.add('fa-times');
        menusItems.classList.add('open');
    }
})

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('menu-btn') == false){
        if(menusItems.classList.contains('open')){
            menusItems.classList.remove('open');
            menuIcons.classList.add('fa-bars');
            menuIcons.classList.remove('fa-times');
        }
    }
})
