// ── All products data ──────────────────────────────────────────────────────
const PRODUCTS = [
  { id:1,  name:'Aloe Vera Gentle Face Wash',     cat:'skincare', catLabel:'Skin Care', price:299, old:399, rating:4.8, reviews:1240, emoji:'🧴', bg:'linear-gradient(135deg,#eaf7df,#c8efaa)', badge:'Best Seller', badgeClass:'badge-best', featured:true  },
  { id:2,  name:'Rose Hip Vitamin C Serum',        cat:'skincare', catLabel:'Skin Care', price:549, old:699, rating:4.7, reviews:890,  emoji:'🌹', bg:'linear-gradient(135deg,#fce4ec,#f8bbd0)', badge:'New',         badgeClass:'badge-new',  featured:true  },
  { id:3,  name:'Coconut Argan Hair Oil',          cat:'haircare', catLabel:'Hair Care', price:349, old:449, rating:4.9, reviews:2100, emoji:'🥥', bg:'linear-gradient(135deg,#fff8e1,#ffe082)', badge:'20% Off',      badgeClass:'badge-sale', featured:true  },
  { id:4,  name:'Neem Tulsi Face Pack',            cat:'skincare', catLabel:'Skin Care', price:199, old:249, rating:4.6, reviews:670,  emoji:'🌿', bg:'linear-gradient(135deg,#e8f5e9,#c8e6c9)', badge:'New',         badgeClass:'badge-new',  featured:true  },
  { id:5,  name:'Tea Tree Anti-Dandruff Shampoo',  cat:'haircare', catLabel:'Hair Care', price:399, old:499, rating:4.8, reviews:1560, emoji:'🫧', bg:'linear-gradient(135deg,#e3f2fd,#bbdefb)', badge:'Best Seller', badgeClass:'badge-best', featured:true  },
  { id:6,  name:'Lavender Aroma Diffuser',         cat:'home',     catLabel:'Home',      price:449, old:599, rating:4.7, reviews:430,  emoji:'🕯️', bg:'linear-gradient(135deg,#ede7f6,#d1c4e9)', badge:'25% Off',     badgeClass:'badge-sale', featured:true  },
  { id:7,  name:'Green Tea Brightening Toner',     cat:'skincare', catLabel:'Skin Care', price:279, old:349, rating:4.7, reviews:320,  emoji:'🍵', bg:'linear-gradient(135deg,#fbe9e7,#ffccbc)', badge:'New',         badgeClass:'badge-new',  featured:false },
  { id:8,  name:'Bhringraj Hair Growth Serum',     cat:'haircare', catLabel:'Hair Care', price:499, old:649, rating:4.8, reviews:780,  emoji:'🌾', bg:'linear-gradient(135deg,#f9fbe7,#f0f4c3)', badge:'Best Seller', badgeClass:'badge-best', featured:false },
  { id:9,  name:'Neem Lemon Floor Cleaner',        cat:'home',     catLabel:'Home',      price:179, old:209, rating:4.5, reviews:210,  emoji:'🧼', bg:'linear-gradient(135deg,#e0f7fa,#b2ebf2)', badge:'15% Off',     badgeClass:'badge-sale', featured:false },
  { id:10, name:'Rose Water Hydrating Mist',       cat:'skincare', catLabel:'Skin Care', price:249, old:299, rating:4.8, reviews:540,  emoji:'🌸', bg:'linear-gradient(135deg,#fce4ec,#f8bbd0)', badge:'New',         badgeClass:'badge-new',  featured:false },
  { id:11, name:'Charcoal Detox Face Scrub',       cat:'skincare', catLabel:'Skin Care', price:319, old:399, rating:4.6, reviews:480,  emoji:'🖤', bg:'linear-gradient(135deg,#eceff1,#cfd8dc)', badge:'Best Seller', badgeClass:'badge-best', featured:false },
  { id:12, name:'Onion Black Seed Hair Mask',      cat:'haircare', catLabel:'Hair Care', price:429, old:549, rating:4.7, reviews:620,  emoji:'🧅', bg:'linear-gradient(135deg,#fff3e0,#ffe0b2)', badge:'20% Off',     badgeClass:'badge-sale', featured:false },
  { id:13, name:'Eucalyptus Room Spray',           cat:'home',     catLabel:'Home',      price:299, old:379, rating:4.6, reviews:180,  emoji:'🌲', bg:'linear-gradient(135deg,#e8f5e9,#c8e6c9)', badge:'New',         badgeClass:'badge-new',  featured:false },
  { id:14, name:'Kumkumadi Brightening Oil',       cat:'skincare', catLabel:'Skin Care', price:699, old:899, rating:4.9, reviews:1100, emoji:'✨', bg:'linear-gradient(135deg,#fff8e1,#ffe082)', badge:'Best Seller', badgeClass:'badge-best', featured:false },
  { id:15, name:'Amla Shikakai Shampoo Bar',       cat:'haircare', catLabel:'Hair Care', price:199, old:249, rating:4.5, reviews:390,  emoji:'🍋', bg:'linear-gradient(135deg,#f9fbe7,#f0f4c3)', badge:'Eco Pick',    badgeClass:'badge-new',  featured:false },
];

// ── Render a single product card ───────────────────────────────────────────
function renderProductCard(p) {
  const discount = p.old > p.price ? Math.round((1 - p.price/p.old)*100) : 0;
  const starsHtml = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  return `
    <div class="product-card reveal" data-cat="${p.cat}" data-price="${p.price}" data-rating="${p.rating}">
      <div class="product-img" style="background:${p.bg}">
        ${p.emoji}
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.catLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${starsHtml}</span>
          <span class="rating-val">${p.rating}</span>
          <span class="rating-cnt">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-footer">
          <div>
            <span class="price">₹${p.price}</span>
            ${p.old > p.price ? `<span class="price-old">₹${p.old}</span>` : ''}
          </div>
          <button class="add-btn" onclick="addToCart(${p.id},'${p.name.replace(/'/g,"\\'")}',${p.price},'${p.emoji}')">+</button>
        </div>
      </div>
    </div>`;
}
