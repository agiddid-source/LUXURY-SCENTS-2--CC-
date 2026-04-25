/* ============================================================
   LUXURY SCENTS — Storefront JS  (index.js)
   Handles: product rendering, modal, cart, checkout, contact
   ============================================================ */

'use strict';

const WHATSAPP = "2349154428230";

/* ─── PRODUCT CATALOGUE ─────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "Asad Bourbon",
    brand: "Asad",
    category: "asad",
    price: 25000,
    description: "Rich, warm bourbon accord with smooth oakwood base notes.",
    notes: ["Bourbon", "Oakwood", "Vanilla", "Musk"],
    images: [
      "Luxury-scents-thumbnails/Asad-Bourbon.jfif",
      "Luxury-scents-thumbnails/Bourbon (1).jfif",
      "Luxury-scents-thumbnails/Bourbon 3.jfif"
    ],
    badge: null
  },
  {
    id: 2,
    name: "Asad Elixir",
    brand: "Asad",
    category: "asad",
    price: 30000,
    description: "Intense oriental elixir — deeply seductive and long-lasting.",
    notes: ["Oud", "Amber", "Sandalwood", "Spice"],
    images: [
      "Luxury-scents-thumbnails/Asad-Elixir.jfif",
      "Luxury-scents-thumbnails/Asad Elixir 2.jfif",
      "Luxury-scents-thumbnails/Asad Elixir 3.jfif"
    ],
    badge: null
  },
  {
    id: 3,
    name: "Oud Mood",
    brand: "Lattafa",
    category: "lattafa",
    price: 18500,
    description: "Classic Arabian oud reimagined with a contemporary signature.",
    notes: ["Oud", "Rose", "Saffron", "Patchouli"],
    images: [
      "Luxury-scents-thumbnails/Oud_Mood.jfif",
      "Luxury-scents-thumbnails/Oud Mood 1.webp",
      "Luxury-scents-thumbnails/Oud Mood 2.jfif"
    ],
    badge: null
  },
  {
    id: 4,
    name: "Fahkar Gold",
    brand: "Fahkar",
    category: "fahkar",
    price: 40000,
    description: "Opulent gold edition — bold, commanding and unforgettable.",
    notes: ["Saffron", "Oud", "Amber", "Musk"],
    images: [
      "Luxury-scents-thumbnails/Fahkar Gold.jpg",
      "Luxury-scents-thumbnails/Fahkar Gold 1.jfif",
      "Luxury-scents-thumbnails/Fahkar Gold 2.jfif"
    ],
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "Fahkar Black",
    brand: "Fahkar",
    category: "fahkar",
    price: 30000,
    description: "Dark and mysterious — the perfect fragrance for evening wear.",
    notes: ["Black Oud", "Vetiver", "Cedar", "Leather"],
    images: [
      "Luxury-scents-thumbnails/Fahkarformen2.webp",
      "Luxury-scents-thumbnails/Fahkar Black 3.jfif",
      "Luxury-scents-thumbnails/Fahkar Black 4.jfif"
    ],
    badge: null
  },
  {
    id: 6,
    name: "Fahkar Silver",
    brand: "Fahkar",
    category: "fahkar",
    price: 30000,
    description: "Fresh and refined silver accord — timeless masculine elegance.",
    notes: ["Bergamot", "Iris", "Musk", "Cedarwood"],
    images: [
      "Luxury-scents-thumbnails/Fahkar Silver.jfif",
      "Luxury-scents-thumbnails/Fahkar Silver 2.jfif",
      "Luxury-scents-thumbnails/Fahkar Silver 3.jfif"
    ],
    badge: null
  },
  {
    id: 7,
    name: "Lattafa Khamrah",
    brand: "Lattafa",
    category: "lattafa",
    price: 45000,
    description: "An intoxicating masterpiece from the Lattafa house.",
    notes: ["Cognac", "Praline", "Oud", "Vanilla"],
    images: [
      "Luxury-scents-thumbnails/Lattafa Khamrah.webp",
      "Luxury-scents-thumbnails/Lattafa Khamrah 3.jfif",
      "Luxury-scents-thumbnails/Lattafa Khamrah 4.jfif"
    ],
    badge: "New In"
  },
  {
    id: 8,
    name: "Afnan 9pm EDP",
    brand: "Afnan",
    category: "afnan",
    price: 55000,
    description: "The night owl's signature — magnetic and irresistibly addictive.",
    notes: ["Cinnamon", "Apple", "Jasmine", "Vetiver"],
    images: [
      "Luxury-scents-thumbnails/Afnan 9pm EDP.avif",
      "Luxury-scents-thumbnails/AFNAN9PmForMenEDP100ML.webp",
      "Luxury-scents-thumbnails/Afnan 9pm EDP 1.avif"
    ],
    badge: null
  },
  {
    id: 9,
    name: "Afnan 9pm Elixir",
    brand: "Afnan",
    category: "afnan",
    price: 60000,
    description: "An elixir of pure seduction — rich, smoky and deeply lingering.",
    notes: ["Rum", "Tobacco", "Oud", "Sandalwood"],
    images: [
      "Luxury-scents-thumbnails/Afnan 9pm Elixir.jfif",
      "Luxury-scents-thumbnails/Afnan Elixir 1.avif",
      "Luxury-scents-thumbnails/Afnan 9pm Elixir 3.jfif"
    ],
    badge: null
  },
  {
    id: 10,
    name: "Afnan 9pm Rebel",
    brand: "Afnan",
    category: "afnan",
    price: 70000,
    description: "Bold rebellion in a bottle — for those who dare to stand out.",
    notes: ["Juniper", "Iris", "Ambroxan", "Musks"],
    images: [
      "Luxury-scents-thumbnails/Afnan 9pm Rebel.avif",
      "Luxury-scents-thumbnails/Afnan 9pm Rebel 1.avif",
      "Luxury-scents-thumbnails/Afnan 9pm Rebel 2.jfif"
    ],
    badge: "Premium"
  },
  {
    id: 11,
    name: "Lattafa Pride Vintage Radio",
    brand: "Lattafa",
    category: "lattafa",
    price: 75000,
    description: "Warm, sweet, and addictive — tuned to perfection.",
    notes: ["Plum", "Lavender", "Sandalwood", "Vanilla"],
    images: [
      "Luxury-scents-thumbnails/Lattafa Pride.webp",
      "Luxury-scents-thumbnails/Lattafa Pride.webp",
      "Luxury-scents-thumbnails/Lattafa Pride.webp"
    ],
    badge: "Premium"
  }
];

/* ─── HELPERS ────────────────────────────────────────────── */
function formatPrice(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}

function getAllProducts() {
  // Merge hardcoded + admin-added products
  const extra = JSON.parse(localStorage.getItem("ls_extra_products")) || [];
  return [...PRODUCTS, ...extra];
}

/* ─── NAVBAR ─────────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 40);
});

function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("hamburger");
  nav.classList.toggle("open");
  btn.classList.toggle("open");
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

/* ─── PRODUCT RENDERING ──────────────────────────────────── */
function renderProducts(filter = "all") {
  const all = getAllProducts();
  const list = filter === "all" ? all : all.filter(p => p.category === filter);
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  list.forEach(p => grid.appendChild(createCard(p)));
}

function createCard(p) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = p.id;

  const badgeHTML = p.badge
    ? `<span class="product-badge">${p.badge}</span>` : "";

  const noteTagsHTML = (p.notes || [])
    .map(n => `<span class="note-tag">${n}</span>`).join("");

  card.innerHTML = `
    <div class="product-img-wrap" onclick="openModal(${p.id})">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      ${badgeHTML}
      <div class="view-overlay"><span>View Photos</span></div>
    </div>
    <div class="product-info">
      <p class="product-brand">${p.brand}</p>
      <h3 class="product-name" onclick="openModal(${p.id})">${p.name}</h3>
      <p class="product-desc-short">${p.description}</p>
      <div class="product-note-tags">${noteTagsHTML}</div>
      <div class="product-footer">
        <div class="product-price">${formatPrice(p.price)}</div>
        <button class="add-to-cart-btn" id="card-btn-${p.id}"
                onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `;
  return card;
}

function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(category);
}

/* ─── PRODUCT MODAL ──────────────────────────────────────── */
let modalProduct   = null;
let modalImgIndex  = 0;

function openModal(productId) {
  const all = getAllProducts();
  modalProduct  = all.find(p => String(p.id) === String(productId));
  if (!modalProduct) return;
  modalImgIndex = 0;
  populateModal();
  document.getElementById("productModal").classList.add("open");
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("open");
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  modalProduct = null;
}

function populateModal() {
  const p = modalProduct;

  // Main image
  const mainImg = document.getElementById("modalMainImg");
  mainImg.src = p.images[modalImgIndex];
  mainImg.alt = p.name;
  mainImg.style.opacity = "1";

  // Counter
  document.getElementById("modalImgCount").textContent =
    `${modalImgIndex + 1} / ${p.images.length}`;

  // Text
  document.getElementById("modalProductBrand").textContent = p.brand;
  document.getElementById("modalProductName").textContent  = p.name;
  document.getElementById("modalProductDesc").textContent  = p.description;
  document.getElementById("modalProductPrice").textContent = formatPrice(p.price);

  // Badge
  const badge = document.getElementById("modalBadge");
  badge.textContent = p.badge || "";
  badge.style.display = p.badge ? "inline-block" : "none";

  // Note tags
  document.getElementById("modalNoteTags").innerHTML =
    (p.notes || []).map(n => `<span class="note-tag">${n}</span>`).join("");

  // Thumbnails
  document.getElementById("modalThumbs").innerHTML = p.images
    .map((src, i) => `
      <button class="modal-thumb ${i === 0 ? "active" : ""}"
              onclick="switchModalImg(${i})" aria-label="Photo ${i + 1}">
        <img src="${src}" alt="${p.name} photo ${i + 1}">
      </button>`)
    .join("");

  // Arrow nav visibility
  const show = p.images.length > 1;
  document.getElementById("modalPrev").style.display = show ? "flex" : "none";
  document.getElementById("modalNext").style.display = show ? "flex" : "none";

  // Add to cart button
  const btn = document.getElementById("modalCartBtn");
  btn.textContent = "Add to Cart";
  btn.classList.remove("added");
  btn.disabled = false;
  btn.onclick = () => addToCartFromModal(p.id);

  // WhatsApp enquiry
  const waMsg = `Hello! I'm interested in *${p.name}* (${formatPrice(p.price)}). Is it available?`;
  document.getElementById("modalWaBtn").href =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`;
}

function switchModalImg(index) {
  if (!modalProduct) return;
  modalImgIndex = index;

  const img = document.getElementById("modalMainImg");
  img.style.opacity = "0";
  setTimeout(() => {
    img.src = modalProduct.images[modalImgIndex];
    img.style.opacity = "1";
  }, 160);

  document.querySelectorAll(".modal-thumb").forEach((t, i) => {
    t.classList.toggle("active", i === modalImgIndex);
  });

  document.getElementById("modalImgCount").textContent =
    `${modalImgIndex + 1} / ${modalProduct.images.length}`;
}

function modalNavImg(dir) {
  if (!modalProduct) return;
  const total = modalProduct.images.length;
  switchModalImg((modalImgIndex + dir + total) % total);
}

function addToCartFromModal(productId) {
  addToCart(productId);
  const btn = document.getElementById("modalCartBtn");
  btn.textContent = "Added ✓";
  btn.classList.add("added");
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Add to Cart";
    btn.classList.remove("added");
    btn.disabled = false;
  }, 1800);
}

// Keyboard navigation for modal
document.addEventListener("keydown", e => {
  if (!modalProduct) return;
  if (e.key === "Escape")      closeProductModal();
  if (e.key === "ArrowLeft")   modalNavImg(-1);
  if (e.key === "ArrowRight")  modalNavImg(1);
});

/* ─── CART ───────────────────────────────────────────────── */
let cart = [];

function toggleCart() {
  const drawer  = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const isOpen  = drawer.classList.toggle("open");
  overlay.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function addToCart(productId) {
  const all = getAllProducts();
  const product = all.find(p => String(p.id) === String(productId));
  if (!product) return;

  cart.push({ ...product, cartId: Date.now() + Math.random() });
  updateCartUI();

  // Card button feedback
  const cardBtn = document.getElementById(`card-btn-${productId}`);
  if (cardBtn) {
    cardBtn.textContent = "Added ✓";
    cardBtn.classList.add("added");
    cardBtn.disabled = true;
    setTimeout(() => {
      cardBtn.textContent = "Add to Cart";
      cardBtn.classList.remove("added");
      cardBtn.disabled = false;
    }, 1800);
  }

  // Open cart drawer after brief delay
  setTimeout(() => {
    if (!document.getElementById("cartDrawer").classList.contains("open")) {
      toggleCart();
    }
  }, 350);
}

function removeFromCart(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  updateCartUI();
}

function updateCartUI() {
  const count      = cart.length;
  const cartCount  = document.getElementById("cartCount");
  const cartItems  = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");
  const cartTotal  = document.getElementById("cartTotal");

  // Badge
  cartCount.textContent = count;
  cartCount.classList.toggle("visible", count > 0);

  if (count === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty.</p>
        <p class="cart-empty-sub">Add a fragrance to begin.</p>
      </div>`;
    cartFooter.style.display = "none";
    return;
  }

  cartFooter.style.display = "block";

  cartItems.innerHTML = cart.map(item => {
    const thumb = item.images && item.images[0]
      ? `<img class="cart-item-thumb" src="${item.images[0]}" alt="${item.name}">`
      : `<div class="cart-item-thumb-placeholder">🧴</div>`;

    return `
      <div class="cart-item">
        ${thumb}
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${formatPrice(item.price)}</p>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${item.cartId})"
                aria-label="Remove ${item.name}">✕</button>
      </div>`;
  }).join("");

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  cartTotal.textContent = formatPrice(total);
}

function checkout() {
  if (cart.length === 0) return;

  let msg = "Hello! I'd like to order the following:\n\n";
  cart.forEach(item => {
    msg += `• ${item.name} — ${formatPrice(item.price)}\n`;
  });
  const total = cart.reduce((sum, i) => sum + Number(i.price), 0);
  msg += `\n*Total: ${formatPrice(total)}*\n\nPlease confirm availability and delivery details. Thank you!`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ─── CONTACT FORM ───────────────────────────────────────── */
function handleContact(e) {
  e.preventDefault();
  const name     = document.getElementById("cName").value.trim();
  const phone    = document.getElementById("cPhone").value.trim();
  const message  = document.getElementById("cMessage").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !phone) {
    feedback.textContent = "Please fill in your name and phone number.";
    feedback.className = "form-feedback error";
    return;
  }
  if (phone.replace(/\D/g, "").length < 10) {
    feedback.textContent = "Please enter a valid phone number (at least 10 digits).";
    feedback.className = "form-feedback error";
    return;
  }

  let waMsg = `Hello, my name is ${name} (${phone}).`;
  if (message) waMsg += `\n\n${message}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`, "_blank");

  feedback.textContent = "Message sent! We'll reply within 24 hours.";
  feedback.className = "form-feedback success";
  document.getElementById("contactForm").reset();
}

/* ─── INIT ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
