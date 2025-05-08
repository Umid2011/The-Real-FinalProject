function func() {
  window.location.href = "./login.html";
}

function func1() {
  window.location.href = "./user.html";
}

function func2() {
  window.location.href = "./newproduct.html";
}

function func3() {
  window.location.href = "./payment.html";
}
window.addEventListener("DOMContentLoaded", function() {
  let nickname = localStorage.getItem("nickname");
  if (nickname) {
    let vvv = document.getElementsByClassName("vvv")[0];
    let btn = document.getElementById("btn2");
    let usernameSpan = document.querySelector("#myform span");

    if (vvv) vvv.innerHTML = nickname;
    if (btn) btn.innerHTML = "Log Out";
    if (usernameSpan) usernameSpan.textContent = nickname;
  }
  loadProducts();
});
function loadProducts() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = ""; 
  products.forEach(product => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${product.id}</td>
      <td>${product.brand}</td>
      <td>${product.model}</td>
      <td>${product.category}</td>
      <td><img src="${product.imageUrl}" width="50"></td>
      <td>${product.price}$</td>
      <td>${product.rating}</td>
      <td><button class="butt1" data-id="${product.id}">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
  updateCartTotal();
}
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("butt1")) {
    e.target.closest("tr").remove();
  }
});
function updateCartTotal() {
  let products = JSON.parse(localStorage.getItem("products"));
  let subtotal = products.reduce((sum, product) => {
    return sum + parseFloat(product.price);
  }, 0);
  let shipping = products.length * 5;
  let total = subtotal + shipping;
  let cartTotal = document.querySelector(".cart-total");
  if (cartTotal) {
    let ps = cartTotal.querySelectorAll("p");
    if (ps.length >= 3) {
      ps[0].innerHTML = `Subtotal: ${subtotal}$`;
      ps[1].innerHTML = `Shipping: ${shipping}$`;
      ps[2].innerHTML = `Total: ${total}$`;
    }
  }
}