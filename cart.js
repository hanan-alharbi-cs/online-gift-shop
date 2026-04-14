let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    let count = cart.length;
    document.querySelectorAll(".nav-cart").forEach(el => {
        el.textContent = `السلة (${count})`;
    });
}
updateCartCount();

function addToCart(name, price, img) {
    cart.push({ name, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("تمت الإضافة إلى السلة");
}

function renderCart() {
    if (!document.getElementById("cart-items")) return;

    let container = document.getElementById("cart-items");
    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        let div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.img}" alt="">
            
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price} ر.س</div>
            </div>

            <button onclick="removeItem(${index})">حذف</button>
        `;

        container.appendChild(div);
    });

    document.getElementById("total").textContent = total;
}

renderCart();

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}
