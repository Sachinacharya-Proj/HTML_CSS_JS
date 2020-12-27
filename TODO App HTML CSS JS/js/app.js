var inputText = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const content = document.querySelector(".content");
const noDataText = document.querySelector(".noData");

var data = localStorage;

//data.clear();

if(data.length == 0){
    noDataText.style.display = "block";
}else{
    noDataText.style.display = "none";
    for(let i=0;i<data.length;i++){
        var KeyValue = i+"S";
        var itemValue = data.getItem(KeyValue);
        if(itemValue == "Deleted Item"){
            content.innerHTML +=`<p class="deletedItems"><span>Deleted Item</span></p>`;
        }else{
            content.innerHTML +=`<p class="viewed"><span>${itemValue}</span><span class="delete" onclick="ClearThisElement('${i}S')"><i class="fas fa-trash-alt"></i></span></p>`;
        }
    }
}

addButton.addEventListener("click",()=>{
    if(inputText.checkValidity()){
        var index = data.length+"S";
        var value = inputText.value;
        data.setItem(index,value);
        location.reload();
    }else{
        location.reload();
    }
});

document.addEventListener("keydown",(e)=>{
   if(e.keyCode == 13){
    addButton.click();
   }
})



function ClearThisElement(indexValue){
    data.setItem(indexValue,"Deleted Item");
    location.reload();
}



const wipeButton = document.querySelector(".wipeButton");
wipeButton.addEventListener("click",()=>{
    data.clear();
    location.reload();
});


var Del = document.querySelectorAll(".deletedItems");

