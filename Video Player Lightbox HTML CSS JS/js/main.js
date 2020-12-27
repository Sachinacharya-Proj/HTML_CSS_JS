const video = document.querySelector("video");
var barDiv = document.querySelector("#barInput");
var RangeInput = document.querySelector(".progressDiv input");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cap = document.querySelector(".captions");
const pipBtn = document.querySelector(".pipBtn");
const screenToggle = document.querySelector(".screenToggle");
const playPause = document.querySelector(".playPause");
const div = document.querySelector(".container");
//Progress Bar Functions
video.addEventListener("timeupdate",()=>{
    Costvalue = (video.currentTime / video.duration) * 100 +"%";
    barDiv.style.width = Costvalue;
});

RangeInput.addEventListener("input",()=>{
    video.currentTime = (RangeInput.value / 100) * video.duration;
    barDiv.style.width = RangeInput.value + "%";
})

video.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})

video.addEventListener("ended",()=>{
    video.currentTime = 0;
    RangeInput.value = 0;
    barDiv.style.width = "0";
    playPause.classList.remove("pause");
    playPause.classList.add("play");
})

function CallAllTheTime(){
    if(video.paused){
            playPause.classList.remove("play");
            playPause.classList.add("pause");
            video.play();
    }else{
            playPause.classList.add("play");
            playPause.classList.remove("pause");
            video.pause();
    }
}
playPause.addEventListener("click",()=>{
    CallAllTheTime();
})

video.addEventListener("click",()=>{
    CallAllTheTime();
})

prev.addEventListener("click",()=>{
    video.currentTime = video.currentTime - 0.5;
})

next.addEventListener("click",()=>{
    video.currentTime = video.currentTime + 0.5;
})

cap.addEventListener("click",()=>{
   var val = video.textTracks;
    if(val[0].mode == "disabled"){
        val[0].mode = "showing";
    }else{
        val[0].mode = "disabled";
    }

})


document.addEventListener("keydown",(e)=>{
   // console.log(e.keyCode)
    if(e.keyCode == 32){
        e.preventDefault();
        playPause.click();
    }
    if(e.keyCode == 39){
        next.click();
    }
    if(e.keyCode == 37){
        prev.click();
    }
   
})

function openFullscreen() {
    if (div.requestFullscreen) {
      div.requestFullscreen();
    } else if (div.mozRequestFullScreen) { /* Firefox */
      div.mozRequestFullScreen();
    } else if (div.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      div.webkitRequestFullscreen();
    } else if (div.msRequestFullscreen) { /* IE/Edge */
      div.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
}

screenToggle.addEventListener("click",()=>{
    if(screenToggle.classList.contains("full")){
        openFullscreen();
    }else{
        closeFullscreen();
    }
})


document.addEventListener("fullscreenchange",(e)=>{
    if(screenToggle.classList.contains("full")){
        screenToggle.classList.remove("full");
        screenToggle.classList.add("nor");
    }else{
        screenToggle.classList.remove("nor");
        screenToggle.classList.add("full");
    }
})


if("pictureInPictureEnabled" in document){
    pipBtn.addEventListener("click",()=>{
        if(document.pictureInPictureElement){
            document.exitPictureInPicture().catch(err =>{
                console.log(err);
            });
            return;
        }

        video.requestPictureInPicture().catch(err =>{
            console.log(err);
        })
    })
}

const menuOtions = document.querySelector(".menuOtions");
function HideShow(){
    if(menuOtions.classList.contains("open")){
        menuOtions.classList.remove("open");
    }else{
        menuOtions.classList.add("open");
    }
}

const muteOrNot = document.querySelector(".muteOrNot");
const speed = document.querySelector(".speed");
const loopOrNot = document.querySelector(".loopOrNot");
speed.addEventListener("input",()=>{
    video.playbackRate = speed.value;
})

function SoundThrow(){
    if(video.muted){
        video.muted = false;
        muteOrNot.textContent = "Mute"
    }else{
        video.muted = true;
        muteOrNot.textContent = "Unmute"
    }
}

loopOrNot.addEventListener("click",()=>{
    if(video.loop){
        loopOrNot.textContent = "Enable Loop";
        video.loop = false;
    }else{
        loopOrNot.textContent = "Disable Loop";
        video.loop = true;   
    }
})