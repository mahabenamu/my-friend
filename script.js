const thoughts = [
    "im so hungry",
    "if i dont have something sweet rn i WILL explode",
    "i need to go to the bathroom but i dont want to get up",
    "i should probably do my homework but i dont want to",
    "maths is so fun when you know whats going on",
    "sea shells she sells by the she sore"
];

const thoughtBox = document.getElementById("thoughtbox");
const thoughtTxt = document.getElementById("thoughttxt");

thoughtBox.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    thoughtTxt.textContent = thoughts[randomIndex];
});

const friendBox = document.querySelector(".friendbox");
const talkBtn = document.getElementById("talk");
const talkStage = document.querySelector(".talk-stage");
const talkTxt = document.getElementById("talktxt");

talkBtn.addEventListener("click", function(){
    friendBox.style.display = "none";
    talkStage.style.display = "flex";
    talkTxt.textContent = "how has your day been?";
});