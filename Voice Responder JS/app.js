//Declaring Assignment
const button = document.querySelector(".button");
const consent = document.querySelector('.consent');
const beep = document.querySelector('.beep');
//Questions Inclusions
const greetings = [
    'hi',
    'how are you',
    'are you good',
    'how are you doing',
    'good to see you',
    'how was your day',
    'how do you do'
];

const question1 = [
    'what is you name',
    'what time is it',
    'who are you',
]


//Requesting Voice Listenner
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//Informing Startup
recognition.onstart = () => {
    beep.play();
}

//Generating Output
recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    consent.innerHTML = `<p>${transcript}</p>`;
    ReadOutLoud(transcript);
}

//Adding KeyVoice
button.addEventListener("click", () => {
    recognition.start();
})

//Output in Speech
function ReadOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    const speaker = window.speechSynthesis;
    const voicess = window.speechSynthesis.getVoices();
    var finalText = "What the Fuck did you just said !!";
    if(message.includes('hello' || 'hi' || 'good morning' || 'good afternoon' ||'good night' || 'namaste' || 'have a nice day')){
        finalText = greetings[Math.floor(Math.random() * greetings.length)]
    
    }
    speech.text = finalText;
    speech.voice = voicess[1];
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speaker.addEventListener("voiceschanged",()=>{
        speaker.speak(speech)
    })
}
