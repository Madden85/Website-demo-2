/* =========================================================
   APP.JS — FUNCTION WEBSITE
   Biasanya tak perlu edit file ini.
   Semua info customer tukar dekat app2.js sahaja.
========================================================= */

(function () {
  const DATA = window.SITE_DATA || {};
  let activeCategory = "Semua";

  const fallbackImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

  function $(id) {
    return document.getElementById(id);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function phoneNumber() {
    return String(DATA.business?.whatsapp || "").replace(/\D/g, "");
  }

  function waLink(message) {
    const phone = phoneNumber();
    const text = encodeURIComponent(message || DATA.orderMessage?.general || "Hi, saya berminat nak order.");
    return phone ? `https://wa.me/${phone}?text=${text}` : "#";
  }

  function setText(id, value) {
    const el = $(id);
    if (el) el.textContent = value || "";
  }

  function setHref(id, href) {
    const el = $(id);
    if (el) el.href = href || "#";
  }

  function applyTheme() {
    const theme = DATA.theme || {};
    const root = document.documentElement;
    if (theme.primaryColor) root.style.setProperty("--primary", theme.primaryColor);
    if (theme.secondaryColor) root.style.setProperty("--secondary", theme.secondaryColor);
    if (theme.backgroundColor) root.style.setProperty("--bg", theme.backgroundColor);
    if (theme.cardColor) root.style.setProperty("--card", theme.cardColor);
    if (theme.textColor) root.style.setProperty("--text", theme.textColor);
    if (theme.buttonTextColor) root.style.setProperty("--button-text", theme.buttonTextColor);
  }

  function renderBusiness() {
    const business = DATA.business || {};
    const promo = DATA.promo || {};
    const generalLink = waLink(DATA.orderMessage?.general);

    document.title = business.name ? `${business.name} | Mini Website` : "Mini Website Seller";

    setText("logoText", business.logoText || initials(business.name));
    setText("footerLogoText", business.logoText || initials(business.name));
    setText("navBusinessName", business.name || "Mini Website Seller");
    setText("footerBusinessName", business.name || "Mini Website Seller");
    setText("navTagline", business.tagline || "Produk, harga & WhatsApp order");
    setText("footerTagline", business.tagline || "Produk, harga & WhatsApp order");

    setText("heroBadge", promo.active ? `🔥 ${promo.badge || "Promo Hari Ini"}` : "✨ Mini Website Seller");
    setText("heroTitle", business.name || "Mini Website Seller");
    setText("heroDesc", business.shortDescription || business.tagline || "Customer boleh tengok produk, harga, promo dan terus WhatsApp untuk order.");
    setText("heroInfoName", business.name || "Nama Bisnes");
    setText("heroInfoMeta", [business.location, business.operatingHours].filter(Boolean).join(" • "));

    const heroImage = $("heroImage");
    if (heroImage) {
      heroImage.src = business.heroImage || fallbackImage;
      heroImage.alt = `Gambar utama ${business.name || "bisnes"}`;
    }

    ["navWhatsapp", "heroWhatsapp", "floatingWhatsapp"].forEach(id => setHref(id, generalLink));
  }

  function initials(name) {
    if (!name) return "MW";
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 3)
      .map(word => word[0])
      .join("")
      .toUpperCase();
  }

  function renderPromo() {
    const promo = DATA.promo || {};
    const section = $("promoSection");
    if (!section) return;

    if (!promo.active) {
      section.style.display = "none";
      return;
    }

    section.style.display = "block";
    setText("promoBadge", promo.badge || "Promo");
    setText("promoTitle", promo.title || "Promo Terkini");
    setText("promoText", promo.text || "");
    const message = `${promo.buttonText || "Hi, saya nak order promo"}\n\n${promo.title || "Promo"}\n${promo.text || ""}`;
    setHref("promoWhatsapp", waLink(message));
    setText("promoWhatsapp", promo.buttonText || "Order Promo");
  }

  function categories() {
    const products = DATA.products || [];
    const cats = products.map(p => p.category || "Lain-lain");
    return ["Semua", ...Array.from(new Set(cats))];
  }

  function renderFilters() {
    const target = $("categoryFilters");
    if (!target) return;
    const cats = categories();
    target.innerHTML = cats.map(cat => `
      <button class="filter-btn ${cat === activeCategory ? "active" : ""}" data-category="${escapeHTML(cat)}">
        ${escapeHTML(cat)}
      </button>
    `).join("");

    target.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.category || "Semua";
        renderFilters();
        renderProducts();
      });
    });
  }

  function renderProducts() {
    const target = $("productGrid");
    if (!target) return;

    const products = (DATA.products || []).filter(item => activeCategory === "Semua" || (item.category || "Lain-lain") === activeCategory);

    if (!products.length) {
      target.innerHTML = `<div class="empty">Tiada produk untuk kategori ini.</div>`;
      return;
    }

    target.innerHTML = products.map((item) => {
      const message = `${DATA.orderMessage?.productPrefix || "Hi, saya nak order"} ${item.name} ${item.price || ""}`.trim();
      const image = item.image || fallbackImage;
      const disabled = item.available === false;
      return `
        <article class="product-card">
          <div class="product-img-wrap">
            <img src="${escapeHTML(image)}" alt="${escapeHTML(item.name)}" loading="lazy" onerror="this.src='${fallbackImage}'" />
            ${item.badge ? `<div class="product-badge">${escapeHTML(item.badge)}</div>` : ""}
            ${disabled ? `<div class="sold-out">HABIS STOK</div>` : ""}
          </div>
          <div class="product-body">
            <div class="product-top">
              <div>
                <div class="category">${escapeHTML(item.category || "Produk")}</div>
                <h4>${escapeHTML(item.name)}</h4>
              </div>
              <div class="price">
                ${item.oldPrice ? `<span class="old-price">${escapeHTML(item.oldPrice)}</span>` : ""}
                ${escapeHTML(item.price || "")}
              </div>
            </div>
            <p>${escapeHTML(item.desc || "")}</p>
            <div class="product-actions">
              <a class="btn ${disabled ? "disabled" : ""}" href="${disabled ? "#" : waLink(message)}" target="_blank" rel="noopener">
                ${disabled ? "Habis Stok" : "Order WhatsApp"}
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderInfo() {
    const target = $("infoGrid");
    if (!target) return;
    const business = DATA.business || {};
    const items = [
      { icon: "📍", title: "Lokasi", text: business.location || "Tulis lokasi bisnes di app2.js" },
      { icon: "⏰", title: "Waktu Operasi", text: business.operatingHours || "Tulis waktu operasi di app2.js" },
      { icon: "🛵", title: "Delivery / Pickup", text: business.deliveryArea || "Tulis area delivery di app2.js" }
    ];

    target.innerHTML = items.map(item => `
      <div class="info-card">
        <div class="icon">${item.icon}</div>
        <strong>${escapeHTML(item.title)}</strong>
        <span>${escapeHTML(item.text)}</span>
      </div>
    `).join("");
  }

  function renderTestimonials() {
    const target = $("testimonialGrid");
    if (!target) return;
    const testimonials = DATA.testimonials || [];
    if (!testimonials.length) {
      target.innerHTML = `<div class="empty">Belum ada testimoni.</div>`;
      return;
    }
    target.innerHTML = testimonials.map(item => `
      <div class="testi-card">
        <p>“${escapeHTML(item.text)}”</p>
        <strong>— ${escapeHTML(item.name)}</strong>
      </div>
    `).join("");
  }

  function renderFaq() {
    const target = $("faqList");
    if (!target) return;
    const faq = DATA.faq || [];
    if (!faq.length) {
      target.innerHTML = `<div class="empty">Belum ada FAQ.</div>`;
      return;
    }
    target.innerHTML = faq.map(item => `
      <div class="faq-card">
        <strong>${escapeHTML(item.question)}</strong>
        <p>${escapeHTML(item.answer)}</p>
      </div>
    `).join("");
  }

  function renderSocials() {
    const target = $("socialLinks");
    if (!target) return;
    const social = DATA.social || {};
    const links = [
      { label: "TikTok", url: social.tiktok },
      { label: "Instagram", url: social.instagram },
      { label: "Facebook", url: social.facebook },
      { label: "Shopee", url: social.shopee }
    ].filter(item => item.url);

    target.innerHTML = links.map(item => `
      <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">${escapeHTML(item.label)}</a>
    `).join("");
  }

  function init() {
    applyTheme();
    renderBusiness();
    renderPromo();
    renderFilters();
    renderProducts();
    renderInfo();
    renderTestimonials();
    renderFaq();
    renderSocials();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
