let products = JSON.parse(localStorage.getItem("products")) || [];

function checkLogin() {
  if (localStorage.getItem("isLogin") === "true") {
    showDashboard();
  } else {
    showLogin();
  }
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    localStorage.setItem("isLogin", "true");
    showDashboard();
  } else {
    alert("Lengkapi email dan password!");
  }
}

function logout() {
  localStorage.removeItem("isLogin");
  showLogin();
}

function showLogin() {
  document.getElementById("loginSection").style.display = "flex";
  document.getElementById("dashboard").style.display = "none";
}

function showDashboard() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  displayProducts();
}

/* === PRODUK === */
function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("description").value;

  if (!name || !price || !desc) {
    alert("Isi semua data produk!");
    return;
  }

  products.push({ name, price, desc });
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";

  displayProducts();
}

function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(p => {
    list.innerHTML += `
      <div class="product-card">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <strong>Rp ${p.price}</strong>
      </div>
    `;
  });
}
