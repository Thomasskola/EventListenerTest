console.log("det fungerar")


document.addEventListener("keydown", (event) => {

console.log(event.key);

if(event.key == "t"){
document.getElementById("a").style = "color:red";

}})