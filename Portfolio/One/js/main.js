const slideBox = document.querySelector(".innerSlider");
const images = slideBox.querySelectorAll("img");
var toggler = document.querySelectorAll(".toggler div");
let counter = 1;
let cnt = 0;
let size = 100;
let prev;

slideBox.style.transform = "translateX("+(-size * counter)+"%)";

function ForwardSlide(){
    slideBox.style.transition = "transform 0.6s ease-in-out";
    counter++;
    slideBox.style.transform = "translateX("+(-size * counter)+"%)";
    if(cnt == toggler.length) cnt = 0;
    if(cnt == 0) prev = toggler.length - 1;
    else prev = cnt - 1; 
    toggler[prev].style.background = "transparent";
    toggler[cnt].style.background = "#fff";
    cnt++;
}

document.addEventListener("transitionend",()=>{
    if(images[counter].id == "firstClone"){
        slideBox.style.transition = "none";
        counter = images.length - counter;
        slideBox.style.transform = "translateX("+(-size * counter)+"%)";
    }
})


const nextButton = document.querySelector(".nextSlide");
function RegularButtonClick(){
    nextButton.click();
    setTimeout(RegularButtonClick,3000)
}

RegularButtonClick();



//Typing Effect
const textArray = ['Web Developer','UI/UX Designer','Frontend Developer','And Backend Developer','Python Developer']
const typingDelay = 200;
const erasingDelay = 100;
const NextTextDelay = 2000;
let TextIndex = 0;
let CharIndex = 0;
const area = document.querySelector(".updatingText");
const cursor = document.querySelector(".cursorBlink");


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