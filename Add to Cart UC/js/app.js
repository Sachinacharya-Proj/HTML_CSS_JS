localStorage.clear();
const span = document.querySelector('.cart span');
const button = document.querySelectorAll('button');
const img = document.querySelectorAll("img");
let counts = 0;
let value = 0;
button.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(btn.classList.contains("add")){
            counts++;
            const attr = btn.getAttribute(['data-src']);
            localStorage.setItem(`img${counts}`,attr);
            btn.setAttribute(['data-index'],counts)
            btn.classList.remove("add");
            btn.classList.add("remove");
            value++;
            span.innerHTML = value;
        }else{
            const val = btn.getAttribute(['data-index']);
            btn.classList.remove("remove");
            btn.classList.add("add");
            localStorage.removeItem(`img${val}`)
            value = value - 1;
            span.innerHTML = value;
        }
    })
})