const checkButton = document.getElementById("check");
const images = document.querySelectorAll('img');

checkButton.addEventListener('input', ()=>{
    if(checkButton.checked == true){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }
})