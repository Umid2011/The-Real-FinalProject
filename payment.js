function func(){
    window.location.href = "./login.html"
}
function func1(){
    window.location.href = "./user.html"
}
function func2(){
    window.location.href = "./newproduct.html"
}
function buscet(){
  window.location.href = "./bascet.html"
}
function func11() {
  window.location.href = "./index.html";
  for (let i = 1; i <= 10; i++) {
    localStorage.removeItem("custom" + i);
  }
}
window.addEventListener("DOMContentLoaded", function() {
    let nickname = localStorage.getItem("nickname");
  
    if (nickname) {
      let vvv = document.getElementsByClassName("vvv")[0];
      let btn = document.getElementById("btn2");
      let usernameSpan = document.querySelector("#myform span");
  
      if (vvv) {
        vvv.innerHTML = nickname;
      }
      if (btn) {
        btn.innerHTML = "Log Out";
      }
      if (usernameSpan) {
        usernameSpan.textContent = nickname;
      }
    }
  });