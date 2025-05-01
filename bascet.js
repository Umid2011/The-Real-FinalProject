function buscet(){
    window.location.href = "./bascet.html"
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
  let tbody = document.getElementsByClassName("addedElements")[0];
  let suball = 0;
  
  function well() {
    document.getElementById("cart-total").innerHTML = suball.toFixed(2);
    document.getElementById("cart-totala").innerHTML = suball.toFixed(2);
  }
  
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
  
    if (!key.search("custom")) {
      let objofElement = JSON.parse(localStorage.getItem(key));
      let quantity = objofElement.quantity || 0;
      let price = parseFloat(objofElement.price);
  
      let tr = document.createElement("tr");
  
      tr.innerHTML = `
        <td><img src="${objofElement.img}" alt=""></td>
        <td>${objofElement.name}</td>
        <td>${price}</td>
        <td><input type="number" class="inpp1" value="${quantity}" min="0"></td>
        <td class="sub">${(price * quantity).toFixed(2)}</td>
        <td><button onclick="func('${key}')">Delete</button></td>`;
  
      let input = tr.children[3].children[0];
      let sub = tr.children[4];
      suball += parseFloat(sub.innerText) || 0;
  
      input.addEventListener("input", function () {
        let quantity = input.value || 0;
        let itemTotal = (quantity * price).toFixed(2);
        sub.innerText = itemTotal;
  
        objofElement.quantity = quantity;
        localStorage.setItem(key, JSON.stringify(objofElement));
  
        suball = 0;
        let allSubs = document.getElementsByClassName("sub");
        for (let i = 0; i < allSubs.length; i++) {
          suball += parseFloat(allSubs[i].innerText);
        }
        well();
        localStorage.setItem("nz", suball.toFixed(2));
      });
  
      tbody.append(tr);
    }
  }
  
  updateTotalDisplay();
  localStorage.setItem("nz", suball.toFixed(2));
  
  function func(e) {
    localStorage.removeItem(e);
    window.location.reload();
  }
  
  function well2() {
    document.getElementById("wq").style.display = "none";
  }
  
  function well3() {
    window.location.href = "./payment.html";
  }