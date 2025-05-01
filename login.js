// function func1(){
//     window.location.href = "./user.html"
// }
// let num = +localStorage.getItem("num");
// document.getElementById("myForm").addEventListener("submit", function(event){
//     event.preventDefault
// })
// function func2(){
//     for(let i = 0; i < num; i++){
//         let obj = JSON.parse(localStorage.getItem(`user ${i}`));
//         let inp1 = document.getElementsByClassName("inp1")[0];
//         let inp2 = document.getElementsByClassName("inp1")[0];
//         if(inp1.value == obj.name && inp2.value == obj.password){
//             alert("Succsesufull")
//             // window.location.href = "index.html";
//             localStorage.setItem("loggedInUser",JSON.stringify(obj));
//             break;
//             }else if((inp1.value != obj.name || inp2.value != obj.password) && i == num-1){
//                 alert("Error")
//             }else{
//                 continue;
//             }
//         }
//     }

// function func1() {
//     window.location.href = "./user.html";
//   }
//   // let num = +localStorage.getItem("num") ;
//   document.getElementById(".signup-form").addEventListener("submit", function (i) {
//     i.preventDefault();
  
//     let inp1 = document.getElementsByClassName("inp1")[0];
//     let inp2 = document.getElementsByClassName("inp2")[0];
//     let num = +localStorage.getItem("num");
  
//     for (let i = 0; i < num; i++) {
//       let obj = JSON.parse(localStorage.getItem(`user${i}`));
//       if (inp1.value === obj.username && inp2.value === obj.password) {
//         alert("Login successful");
//         localStorage.setItem("nickname", obj.username);
//         localStorage.setItem("loggedInUser", JSON.stringify(obj));
//         window.location.href = "index.html";
//         return;
//       }
//     }
  
//     alert("Error: Invalid credentials");
//   });
function func1() {
  window.location.href = "./user.html";
}
function buscet(){
  window.location.href = "./bascet.html"
}
document.querySelector(".signup-form1").addEventListener("submit", function (event) {
  event.preventDefault();

  let inp1 = document.getElementsByClassName("inp1")[0];
  let inp2 = document.getElementsByClassName("inp2")[0];

  let num = +localStorage.getItem("num") || 0;

  for (let i = 0; i < num; i++) {
    let obj = JSON.parse(localStorage.getItem(`user${i}`));
    if (inp1.value === obj.username && inp2.value === obj.password) {
      alert("Login successful!");
      localStorage.setItem("nickname", obj.username);
      localStorage.setItem("loggedInUser", JSON.stringify(obj));
      window.location.href = "index.html"; 
      return;
    }
  }
  alert("Error: Invalid credentials");
});
window.addEventListener("DOMContentLoaded", function() {
  let nickname = localStorage.getItem("nickname");
  if (nickname) {
    // let usernameSpan = document.querySelector("#myform span");
    // usernameSpan.textContent = nickname;
    let usernameSpan = document.getElementById("user-nickname");
usernameSpan.textContent = nickname;
  }
});