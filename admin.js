/* ============================================================
   LUXURY SCENTS — Admin Panel JS  (admin.js)
   Handles: login gate, add/edit/delete products, localStorage
   ============================================================ */

'use strict';

/* ─── CONFIG ─────────────────────────────────────────────── */
// ⚠️  Change this password before going live!
const ADMIN_PASSWORD = "admin2025";
const SESSION_KEY    = "ls_admin_auth";
const STORAGE_KEY    = "ls_extra_products";

/* ─── AUTH ───────────────────────────────────────────────── */
function login() {
  const pw  = document.getElementById("passwordInput").value;
  const err = document.getElementById("loginError");

  if (pw === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    showAdmin();
  } else {
    err.textContent = "Incorrect password. Please try again.";
    document.getElementById("passwordInput").value = "";
    document.getElementById("passwordInput").focus();
  }
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  document.getElementById("adminApp").style.display  = "none";
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("passwordInput").value = "";
  document.getElementById("loginError").textContent = "";
}

function showAdmin() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("adminApp").style.display    = "block";
  renderAdminProducts();
}

// Auto-restore session on page load
document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    showAdmin();
  }
  // Allow Enter key on password field
  document.getElementById("passwordInput")
    .addEventListener("keydown", e => { if (e.key === "Enter") login(); });
});

/* ─── STORAGE HELPERS ────────────────────────────────────── */
function getProducts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveProducts(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function formatPrice(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}

/* ─── ADD PRODUCT ────────────────────────────────────────── */
function addProduct() {
  const name     = document.getElementById("pName").value.trim();
  const brand    = document.getElementById("pBrand").value.trim();
  const category = document.getElementById("pCategory").value;
  const price    = document.getElementById("pPrice").value.trim();
  const img1     = document.getElementById("pImage").value.trim();
  const img2     = document.getElementById("pImage2").value.trim();
  const img3     = document.getElementById("pImage3").value.trim();
  const desc     = document.getElementById("pDesc").value.trim();
  const notes    = document.getElementById("pNotes").value.trim();
  const badge    = document.getElementById("pBadge").value.trim();
  const msg      = document.getElementById("formMsg");

  // Validation
  if (!name) {
    showFormMsg("Product name is required.", "error"); return;
  }
  if (!price || isNaN(Number(price)) || Number(price) <= 0) {
    showFormMsg("Please enter a valid price.", "error"); return;
  }
  if (!img1) {
    showFormMsg("At least one image URL is required.", "error"); return;
  }

  // Build images array (filter out empty entries)
  const images = [img1, img2, img3].filter(Boolean);

  const newProduct = {
    id:          "custom_" + Date.now(),
    name,
    brand:       brand || "Custom",
    category,
    price:       Number(price),
    description: desc || "Premium luxury fragrance.",
    notes:       notes ? notes.split(",").map(n => n.trim()).filter(Boolean) : [],
    images,
    badge:       badge || null
  };

  const products = getProducts();
  products.push(newProduct);
  saveProducts(products);

  showFormMsg(`"${name}" added successfully!`, "success");
  clearAddForm();
  renderAdminProducts();
}

function clearAddForm() {
  ["pName","pBrand","pPrice","pImage","pImage2","pImage3","pDesc","pNotes","pBadge"]
    .forEach(id => { document.getElementById(id).value = ""; });
  document.getElementById("pCategory").value = "asad";
}

function showFormMsg(text, type) {
  const el = document.getElementById("formMsg");
  el.textContent = text;
  el.className = `form-msg ${type}`;
  if (type === "success") {
    setTimeout(() => { el.textContent = ""; el.className = "form-msg"; }, 3500);
  }
}

/* ─── DELETE PRODUCT ─────────────────────────────────────── */
function deleteProduct(id) {
  if (!confirm("Are you sure you want to delete this product?")) return;
  const updated = getProducts().filter(p => p.id !== id);
  saveProducts(updated);
  renderAdminProducts();
}

/* ─── EDIT PRODUCT ───────────────────────────────────────── */
let editingId = null;

function openEditModal(id) {
  const products = getProducts();
  const p = products.find(p => p.id === id);
  if (!p) return;

  editingId = id;

  document.getElementById("editName").value     = p.name;
  document.getElementById("editBrand").value    = p.brand;
  document.getElementById("editCategory").value = p.category;
  document.getElementById("editPrice").value    = p.price;
  document.getElementById("editImage1").value   = p.images[0] || "";
  document.getElementById("editImage2").value   = p.images[1] || "";
  document.getElementById("editImage3").value   = p.images[2] || "";
  document.getElementById("editDesc").value     = p.description;
  document.getElementById("editNotes").value    = (p.notes || []).join(", ");
  document.getElementById("editBadge").value    = p.badge || "";

  document.getElementById("editModalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeEditModal() {
  document.getElementById("editModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  editingId = null;
}

function saveEdit() {
  if (!editingId) return;

  const name     = document.getElementById("editName").value.trim();
  const brand    = document.getElementById("editBrand").value.trim();
  const category = document.getElementById("editCategory").value;
  const price    = document.getElementById("editPrice").value.trim();
  const img1     = document.getElementById("editImage1").value.trim();
  const img2     = document.getElementById("editImage2").value.trim();
  const img3     = document.getElementById("editImage3").value.trim();
  const desc     = document.getElementById("editDesc").value.trim();
  const notes    = document.getElementById("editNotes").value.trim();
  const badge    = document.getElementById("editBadge").value.trim();

  if (!name || !price || !img1) {
    alert("Name, price, and at least one image are required.");
    return;
  }

  const images = [img1, img2, img3].filter(Boolean);
  const products = getProducts().map(p => {
    if (p.id !== editingId) return p;
    return {
      ...p,
      name,
      brand:       brand || p.brand,
      category,
      price:       Number(price),
      description: desc || p.description,
      notes:       notes ? notes.split(",").map(n => n.trim()).filter(Boolean) : [],
      images,
      badge:       badge || null
    };
  });

  saveProducts(products);
  closeEditModal();
  renderAdminProducts();
}

/* ─── RENDER PRODUCT LIST ────────────────────────────────── */
function renderAdminProducts() {
  const products = getProducts();
  const list     = document.getElementById("adminProductList");
  const countEl  = document.getElementById("productCount");

  countEl.textContent = `${products.length} custom product${products.length !== 1 ? "s" : ""}`;

  if (products.length === 0) {
    list.innerHTML = `
      <div class="admin-empty-state">
        <p>No custom products added yet.</p>
        <p>Products added here appear on the storefront alongside the default catalogue.</p>
      </div>`;
    return;
  }

  list.innerHTML = products.map(p => {
    const thumb = p.images && p.images[0]
      ? `<img class="admin-product-img" src="${p.images[0]}" alt="${p.name}"
             onerror="this.style.display='none'">`
      : `<div class="admin-product-img-placeholder">🧴</div>`;

    const badge = p.badge
      ? `<span style="font-size:10px;padding:2px 8px;background:var(--gold);color:var(--black);
                      border-radius:2px;font-weight:600;letter-spacing:0.08em;">${p.badge}</span>`
      : "";

    return `
      <div class="admin-product-item">
        ${thumb}
        <div class="admin-product-info">
          <p class="admin-product-name">${p.name} ${badge}</p>
          <p class="admin-product-meta">${p.brand} · ${p.category} · ${p.images.length} photo${p.images.length !== 1 ? "s" : ""}</p>
        </div>
        <p class="admin-product-price">${formatPrice(p.price)}</p>
        <div class="admin-product-actions">
          <button class="edit-btn"   onclick="openEditModal('${p.id}')">Edit</button>
          <button class="delete-btn" onclick="deleteProduct('${p.id}')">Delete</button>
        </div>
      </div>`;
  }).join("");
}
