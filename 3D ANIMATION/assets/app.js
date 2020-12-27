// Commented Section are used to done without external library

const container = document.querySelector(".contents");
const card = document.querySelector(".card")
const div = document.querySelectorAll(".card div")

window.addEventListener("mousemove", (e)=>{
    const xAxis = (window.innerWidth / 2 - e.pageX / 2) / 30;
    const yAxis = (window.innerHeight / 2 - e.pageY / 2) / 30;
    card.style.transition = "none";
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    console.log(xAxis, yAxis)
})

window.addEventListener("mousemove", ()=>{
    div.forEach(items=>{
        items.style.transform = "translateZ(70px)";
    })
})

window.addEventListener("mouseleave", ()=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateX(0) rotateY(0)";
    div.forEach(items=>{
        items.style.transform = "translateZ(0px)";
    })
})
