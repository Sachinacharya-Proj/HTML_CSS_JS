const file = document.querySelector('.file');
const button = document.querySelector('.button');
const output = document.querySelector('.fileList');
const span = document.querySelector('.def');
const preview = document.querySelector('.span');

// Logging
const log = console.log;

output.addEventListener("dragover",(e)=>{
    e.preventDefault();
    output.classList.add("over");
});

output.addEventListener('dragleave',(e)=>{
    output.classList.remove("over");
});

output.addEventListener('dragend',(e)=>{
    output.classList.remove("over");
});

output.addEventListener('drop',(e)=>{
    e.preventDefault();
    if(e.dataTransfer.files.length){
        updateThumbnails(output,e.dataTransfer.files[0]);
    }

    output.classList.remove("over");
})

function updateThumbnails(output,file){
    let thumbnail = output.querySelector('.span');

    if(span){
        span.remove();
    }
    if(!thumbnail){
        thumbnail = document.createElement('div');
        thumbnail.classList.add('span');
        output.appendChild(thumbnail);
    }

    thumbnail.dataset.name = file.name;

    if(file.type.startsWith('image/')){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            thumbnail.style.backgroundImage = `url('${reader.result}')`;
        }
    }else{
        thumbnail.style.backgroundImage = null;
    }
}

//
// Accessing File Input
// button.addEventListener("click",()=>{
//     file.click();
// });
// //Adding Event to Remove Default Span on File Loaded
// file.addEventListener('change',(e)=>{
//     const files = e.srcElement.files;
//     const length = files.length;
//     if(length == 0){
//         span.style.display = "block";
//     }else{
//         span.style.display = "none";
//     }
//     for(let i=0;i<files.length;i++){
//         output.innerHTML += `<span>${files[i].name}</span>`;
//     }
// });
// 
