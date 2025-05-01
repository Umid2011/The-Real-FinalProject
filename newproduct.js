function buscet(){
    window.location.href = "./bascet.html"
}
let input = document.getElementById("imageUrl");
let preview = document.getElementById("previewImage");

function showImagePreview() {
    let img = document.createElement("img");
    img.src = input.value;
    img.width = 200;
    img.height = 200;
    preview.appendChild(img);   
}
input.addEventListener("input", showImagePreview);
  function saveProduct() {
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let imageUrl = document.getElementById("imageUrl").value;
    if (!brand || !model || !category || !description || !price || !imageUrl) {
        alert("try again");
        return;
    }
    let product = {
        id: Date.now(),
        brand,
        model,
        category,
        description,
        price,
        imageUrl,
        rating: Math.floor(Math.random() * 5) + 1 
    };
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Successful!");
    window.location.href = "./productsale.html";
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