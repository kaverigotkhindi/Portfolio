var icon = document.getElementById("icon");

icon.onclick = function darkMode(){
document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    } else {
   icon.src = "moon.png";
}
}
// function message(){
// document.getElementById("wrapper").innerHTML = 'Your message has been sent successfully';
// }