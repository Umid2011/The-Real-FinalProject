function func(){
    window.location.href = "./login.html"
}
function fun1(){
    window.location.href = "./tovar.html"
}
function func2(){
    window.location.href = "./user.html"
}
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
  function setupCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart');
    const cards = document.querySelectorAll('.product-card');
  
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const card = cards[index];
        const img = card.querySelector('img').src;
        const name = card.querySelector('p:nth-of-type(1)').textContent;
        const price = card.querySelector('.price').textContent;
  
        const product = { img, name, price, quantity: 1 };
        let itemExists = false;
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith('custom')) {
            const existing = JSON.parse(localStorage.getItem(key));
            if (existing.name === product.name && existing.price === product.price) {
              itemExists = true;
              break;
            }
          }
        }
        if (itemExists) {
          alert(`${product.name} уже в корзине!`);
        } else {
          const key = 'custom ' + Date.now();
          localStorage.setItem(key, JSON.stringify(product));
          alert(`${product.name} добавлен в корзину!`);
          updateCart();
        }
      });
    });
  }
  function setupProductClick() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const img = card.querySelector('img');
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        showImageModal(img.src);
      });
    });
  }
  function updateCart() {
    const container = document.getElementById('cart-container');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('custom')) {
        const item = JSON.parse(localStorage.getItem(key));
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
          <img src="${item.img}" class="cart-img" alt="">
          <div class="cart-info">
            <p class="cart-name">${item.name}</p>
            <p class="cart-price">${item.price}</p>
          </div>
        `;
        container.appendChild(div);
      }
    }
  }
    setupCartButtons();
    setupProductClick();
    updateCart();
  