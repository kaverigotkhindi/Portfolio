var icon = document.getElementById("icon");

icon.onclick = function darkMode(){
document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    } else {
   icon.src = "moon.png";
}
}
function sendEmail(){
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
// function message(){
// document.getElementById("wrapper").innerHTML = 'Your message has been sent successfully';
// }