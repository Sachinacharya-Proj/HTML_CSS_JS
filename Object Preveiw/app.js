var select  = document.querySelector('.select');
const input = document.querySelector('.input');
const main = document.querySelector('.main');
const color = ['orangered','rgb(18, 60, 97)','rgb(6, 75, 75)','rgb(100, 28, 6)','rgb(71, 10, 90)']
//Adding Event to invoke Files Input
select.onclick = ()=>{
    input.click()
}

//Adding INPUT Events
input.addEventListener('change', e =>{
    const files = e.srcElement.files;
    for(let i = 0;i < files.length; i++){
        const div = document.createElement('div');
        div.dataset.name = files[i].name;
        main.appendChild(div)

        if(files[i].type.startsWith('image/')){
            const reader = new FileReader();
            const file = reader.readAsDataURL(files[i]);
            reader.onload = ()=>{
                div.style.backgroundImage = `url('${reader.result}')`;
            }
        }else if(files[i].type.startsWith('video/')){
            const reader = new FileReader();
            const file = reader.readAsDataURL(files[i]);
            reader.onload = ()=>{
                div.innerHTML = `<video class='play' src='${reader.result}' style="height: 100%;width: 100%;" onclick="playPause(${i})"></video>`;
            }
        }else{
            div.textContent = files[i].type;
            const colorInterger = color[Math.floor(Math.random() * color.length)]
            div.style.color = colorInterger
        }
    }

    console.log(files[0])
})

function playPause(integer){
    const videos = document.querySelectorAll('video')
    if (videos[integer].classList.contains('play')){
        videos[integer].play()
        videos[integer].classList.remove('play')
        videos[integer].classList.add('pause')
    }else{
        videos[integer].currentTime = 0;
        videos[integer].pause()
        videos[integer].classList.add('play')
        videos[integer].classList.remove('pause')
    }
}