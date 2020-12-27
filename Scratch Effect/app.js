document.addEventListener("mousemove",(e)=>{
    var body = document.querySelector('body');
    var span = document.createElement('span');
    span.style.left = e.offsetX + "px";
    span.style.top = e.offsetY + "px";

    body.appendChild(span);
})


