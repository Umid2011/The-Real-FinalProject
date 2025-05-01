function func(){
    window.location.href = "./login.html"
}
function goToUserPage() {
    window.location.href = "./user.html";
}

function func2(){
    window.location.href = "./productsale.html"
}
function buscet(){
    window.location.href = "./bascet.html"
}
let num = localStorage.getItem("num");

for (let i = 0; i < num; i++) {
    let obj = JSON.parse(localStorage.getItem(`user${i}`));
    let span1 = document.getElementById("span1");
    let span2 = document.getElementById("span2");
    let span3 = document.getElementById("span3");
    let span4 = document.getElementById("span4");
    span1.innerHTML = obj.name;
    span2.innerHTML = obj.surname;
    span3.innerHTML = obj.email;
    span4.innerHTML = obj.username;
}
let vvv = document.getElementsByClassName("vvv")[0];
let btn = document.getElementById("btn2");
if (localStorage.getItem("nickname")) {
    let nick = localStorage.getItem("nickname");
    vvv.innerHTML = nick;
    btn.innerHTML = "Log Out";
}
function func1() {
    localStorage.removeItem("nickname");
    window.location.href = "index.html";
}
// function goToLogin() {
//     window.location.href = "./login.html";
// }

// function goToUserPage() {
//     window.location.href = "./user.html";
// }

// function goToProductSale() {
//     window.location.href = "./productsale.html";
// }

// function logout() {
//     localStorage.removeItem("nickname");
//     localStorage.removeItem("loggedInUser");
//     window.location.href = "index.html";
// }

// // Отображение информации о пользователе
// let vvv = document.getElementsByClassName("vvv")[0];
// let btn = document.getElementById("btn2");

// if (localStorage.getItem("nickname")) {
//     let nick = localStorage.getItem("nickname");
//     vvv.innerHTML = nick;
//     btn.innerHTML = "Log Out";

//     let user = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (user) {
//         let span1 = document.getElementById("span1");
//         let span2 = document.getElementById("span2");
//         let span3 = document.getElementById("span3");
//         let span4 = document.getElementById("span4");

//         span1.innerHTML = user.name;
//         span2.innerHTML = user.surname;
//         span3.innerHTML = user.email;
//         span4.innerHTML = user.username;
//     }
// } else {
//     window.location.href = "login.html";
// }