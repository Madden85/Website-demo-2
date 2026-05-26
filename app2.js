/* =========================================================
   APP2.JS — TEMPAT EDIT INFO CUSTOMER
   Tukar bahagian ini sahaja bila ada customer baru.
   Lepas edit, save file dan upload semula ke Netlify.
========================================================= */

window.SITE_DATA = {
  business: {
    name: "Zarra Perfume",
    tagline: "Perfume viral, wangi tahan lama",
    shortDescription: "Pilihan perfume harian untuk lelaki dan wanita. Bau premium, harga mampu milik, sesuai untuk kerja, dating dan hadiah.",
    logoText: "ZP",
    whatsapp: "60123456789", // Format Malaysia: 60 + nombor tanpa 0. Contoh: 60123456789
    location: "Kuala Lumpur, Malaysia",
    operatingHours: "Setiap hari, 10.00 pagi - 10.00 malam",
    deliveryArea: "Postage seluruh Malaysia & COD area terpilih",
    heroImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
  },

  theme: {
    primaryColor: "#be185d",
    secondaryColor: "#f59e0b",
    backgroundColor: "#fff7fb",
    cardColor: "#ffffff",
    textColor: "#1f2937",
    buttonTextColor: "#ffffff"
  },

  promo: {
    active: true,
    badge: "Promo Minggu Ini",
    title: "Combo Perfume Jimat",
    text: "Beli 2 botol perfume 35ml hanya RM29. Sesuai untuk couple, hadiah atau stok harian.",
    buttonText: "Order Promo Sekarang"
  },

  social: {
    tiktok: "https://www.tiktok.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    shopee: ""
  },

  products: [
    {
      name: "Vanilla Bloom 35ml",
      category: "Women",
      price: "RM15",
      oldPrice: "",
      desc: "Bau sweet vanilla, soft dan sesuai untuk daily use.",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80",
      badge: "Best Seller",
      available: true
    },
    {
      name: "Rose Luxe 35ml",
      category: "Women",
      price: "RM18",
      oldPrice: "RM22",
      desc: "Bau floral elegant, sesuai untuk kerja dan event.",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
      badge: "Popular",
      available: true
    },
    {
      name: "Oud Royale 35ml",
      category: "Men",
      price: "RM25",
      oldPrice: "RM29",
      desc: "Bau maskulin, premium dan tahan lama.",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80",
      badge: "Premium",
      available: true
    },
    {
      name: "Musk Elegance 35ml",
      category: "Men",
      price: "RM18",
      oldPrice: "",
      desc: "Bau clean musk, kemas dan tidak terlalu kuat.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
      badge: "Daily",
      available: true
    },
    {
      name: "Sweet Berry Mist 35ml",
      category: "Women",
      price: "RM15",
      oldPrice: "",
      desc: "Bau fruity manis, fresh dan ceria.",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?auto=format&fit=crop&w=900&q=80",
      badge: "New",
      available: true
    },
    {
      name: "Couple Set 2 Botol",
      category: "Set & Gift",
      price: "RM29",
      oldPrice: "RM35",
      desc: "Pilih mana-mana 2 perfume 35ml. Sesuai untuk hadiah.",
      image: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=900&q=80",
      badge: "Promo",
      available: true
    },
    {
      name: "Gift Box Perfume",
      category: "Set & Gift",
      price: "RM39",
      oldPrice: "RM49",
      desc: "Perfume siap dalam packaging hadiah. Sesuai untuk birthday dan anniversary.",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80",
      badge: "Gift",
      available: true
    },
    {
      name: "Travel Mini 10ml",
      category: "Mini Size",
      price: "RM8",
      oldPrice: "",
      desc: "Saiz kecil, mudah bawa dalam handbag atau kereta.",
      image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e8?auto=format&fit=crop&w=900&q=80",
      badge: "Pocket Size",
      available: false
    }
  ],

  testimonials: [
    {
      name: "Mira",
      text: "Vanilla Bloom memang sedap bau dia. Tak pening dan sesuai pakai hari-hari."
    },
    {
      name: "Hakim",
      text: "Oud Royale bau premium. Packaging pun kemas, sesuai buat hadiah."
    },
    {
      name: "Syafiqah",
      text: "Order combo 2 botol, penghantaran cepat dan seller reply laju."
    }
  ],

  faq: [
    {
      question: "Perfume ni tahan lama tak?",
      answer: "Ketahanan bergantung pada jenis kulit dan cara pakai. Untuk hasil lebih tahan, spray pada baju atau pulse point."
    },
    {
      question: "Boleh pilih bau sendiri untuk combo?",
      answer: "Boleh. Untuk combo, customer boleh pilih mana-mana 2 bau yang masih available."
    },
    {
      question: "Ada postage seluruh Malaysia?",
      answer: "Ya, kami boleh pos seluruh Malaysia. Caj postage ikut lokasi dan kuantiti order."
    }
  ],

  orderMessage: {
    general: "Hi, saya berminat nak order perfume dari Zarra Perfume. Boleh bagi info lanjut?",
    productPrefix: "Hi, saya nak order"
  }
};
