console.log("det fungerar")


document.addEventListener("keydown", (event) => {

console.log(event.key);

const sound = new Audio("graaa.mp3")

if(event.key == "m") {
document.getElementById("a").style = "color:red";
sound.currentTime = 0;

sound.play();

}})