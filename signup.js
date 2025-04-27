function func1(){
  window.location.href = "./user.html"
}
document.querySelector(".signup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!name || !surname || !email || !username || !password) {
    alert("Please Enter in all fields!");
    return;
  }

  let user = { 
    name, 
    surname, 
    email, 
    username, 
    password };

  let num = +localStorage.getItem("num") || 0;
  localStorage.setItem(`user${num}`, JSON.stringify(user));
  localStorage.setItem("num", num + 1);

  alert("Account created successfully!");
  window.location.href = "login.html";
});
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
// localStorage.clear()