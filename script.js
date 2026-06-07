// ==========================================
// 1. DÜNYANIN 10 MƏŞHUR TORTUNUN RESEPT BAZASI
// ==========================================
const recipes = {
  choco: {
    title: "🍫 Şokoladlı Nağıl",
    background: "linear-gradient(135deg, #4e2f12, #7c471b)",
    ingredients: [
      "3 ədəd yumurta",
      "1 stəkan şəkər",
      "1 stəkan un",
      "3 x.q. kakao",
      "200q kərə yağı"
    ],
    steps:
      "Yumurta və şəkəri ağarana qədər çalın. Unu və kakaonu əlavə edib qarışdırın. 180 dərəcədə 25 dəqiqə bişirin, soyuduqdan sonra şokolad tökün."
  },
  berry: {
    title: "🍓 Çiyələkli Arzular",
    background: "linear-gradient(135deg, #ff4757, #ff6b81)",
    ingredients: [
      "4 ədəd yumurta",
      "1 stəkan şəkər",
      "1.5 stəkan un",
      "500q təzə çiyələk",
      "300q qaymaq kremi"
    ],
    steps:
      "Biskviti bişirib iki yerə bölün. Qaymaqlı krem hazırlayın. Aralarına və üzərinə krem çəkərək təzə çiyələklərlə rəngbərəng dizayn edin."
  },
  rainbow: {
    title: "🌈 Göyqursağı Tortu",
    background: "linear-gradient(45deg, #ff2a54, #ffb500, #209cff, #a033ff)",
    ingredients: [
      "6 ədəd yumurta",
      "2 stəkan şəkər",
      "2.5 stəkan un",
      "Müxtəlif qida rəngləri",
      "600q labne kremi"
    ],
    steps:
      "Xəmiri hissələrə bölüb rəng qatın və ayrı-ayrı laylar bişirin. Ağ kremlə üst-üstə yığın. Kəsdikdə göyqursağı effekti verəcək!"
  },
  honey: {
    title: "🍯 Ballı Tort (Medovik)",
    background: "linear-gradient(135deg, #eccc68, #ffa502)",
    ingredients: [
      "2 x.q. bal",
      "1 stəkan şəkər",
      "100q kərə yağı",
      "3 stəkan un",
      "Bişmiş süd kremi"
    ],
    steps:
      "Bal, şəkər və yağı odda əridin, soda əlavə edib unla xəmir yoğurun. Nazik yayılmış 8 qat bişirin, aralarını qaymaqlı-ballı kremlə doldurun."
  },
  tiramisu: {
    title: "☕ Tiramisu",
    background: "linear-gradient(135deg, #747d8c, #2f3542)",
    ingredients: [
      "1 paket Savoyardi biskviti",
      "250q Maskarpone",
      "2 ədəd yumurta",
      "1 fincan tünd qəhvə",
      "Kakao tozu"
    ],
    steps:
      "Yumurta sarılarını şəkərlə çalın, maskarpone ilə qarışdırın. Biskvitləri qəhvədə isladıb formaya düzün, üzərinə krem çəkin və kakao səpin."
  },
  cheesecake: {
    title: "🍋 Limonlu Çizkeyk",
    background: "linear-gradient(135deg, #ffa502, #ffeaa7)",
    ingredients: [
      "300q yubiley biskviti",
      "150q kərə yağı",
      "500q kəsmik kremi",
      "1 ədəd limonun şirəsi"
    ],
    steps:
      "Biskviti əzib əridilmiş yağla qarışdırın, qəlibin dibinə sıxın. Kəsmik kremini limon şirəsi ilə çalın, biskvitin üzərinə töküb soyuducuda 4 saat saxlayın."
  },
  snickers: {
    title: "🥜 Snikers Tortu",
    background: "linear-gradient(135deg, #371a02, #d27d2d)",
    ingredients: [
      "Şokoladlı biskvit",
      "1 stəkan qovrulmuş araxis",
      "1 banka bişmiş qatılaşdırılmış süd",
      "Karamel sosu"
    ],
    steps:
      "Şokoladlı biskviti qatlara bölün. Aralarına bişmiş süd kremi çəkin, bol fıstıq və karamel töküb üst-üstə yığın. Üzərinə şokolad qlazuru çəkin."
  },
  napoleon: {
    title: "🥮 Napoleon Tortu",
    background: "linear-gradient(135deg, #f5cd79, #e67e22)",
    ingredients: [
      "400q un",
      "250q soyuq kərə yağı",
      "1 ədəd yumurta",
      "Klassik zavodskoy bişmiş krem"
    ],
    steps:
      "Yağla unu ovun, su və yumurta ilə soyuq xəmir yoğurun. Nazik qat qat yayıb bişirin. Hər qatı vanilli bişmiş kremlə bol-bol kremləyin."
  },
  bounty: {
    title: "🥥 Baunti Tortu",
    background: "linear-gradient(135deg, #00d2d3, #0a3d62)",
    ingredients: [
      "Kakaolu biskvit xəmiri",
      "200q kokos yonqarı",
      "100q şəkər",
      "100ml süd",
      "Tünd şokolad"
    ],
    steps:
      "Kakaolu biskvit bişirin. Süd, şəkər və yağda kokosu bişirib içlik hazırlayın. İçliyi biskvitin ortasına qoyun, üzərini şokolad qlazuru ilə örtün."
  },
  redvelvet: {
    title: "❤️ Qırmızı Məxmər",
    background: "linear-gradient(135deg, #b33939, #ff5252)",
    ingredients: [
      "2.5 stəkan un",
      "1 x.q. kakao",
      "Qırmızı qida rəngi",
      "400q qaymaqlı krem pendir"
    ],
    steps:
      "Xəmirə qırmızı rəng və bir az kakao qatıb zərif biskvit bişirin. Soyuduqdan sonra qatlara ayırın və ağ rəngli labne-pendir kremi ilə bəzəyin."
  }
};

// ==========================================
// 2. RESEPT PƏNCƏRƏSİNİN (MODAL) İDARƏSİ
// ==========================================
const modal = document.getElementById("recipe-modal");
const modalCard = document.getElementById("modal-card");
const modalTitle = document.getElementById("modal-title");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSteps = document.getElementById("modal-steps");
const closeModalBtn = document.getElementById("close-modal-btn");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cakeType = card.getAttribute("data-cake");
    const r = recipes[cakeType];
    if (r) {
      modalTitle.textContent = r.title;
      modalCard.style.background = r.background;
      modalIngredients.innerHTML = "";
      r.ingredients.forEach((ing) => {
        let li = document.createElement("li");
        li.textContent = ing;
        modalIngredients.appendChild(li);
      });
      modalSteps.textContent = r.steps;
      modal.classList.remove("hidden-modal");
    }
  });
});

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () =>
    modal.classList.add("hidden-modal")
  );
}
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden-modal");
});

// ==========================================
// 3. CANLI YAYIM FUNKSİYASI (KAMERA AÇMA)
// ==========================================
const startStreamBtn = document.getElementById("start-stream-btn");
const liveVideo = document.getElementById("live-video");
const liveIndicator = document.getElementById("live-indicator");

async function startLiveStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    liveVideo.srcObject = stream;
    startStreamBtn.textContent = "🛑 Yayımı Dayandır";
    startStreamBtn.classList.add("active");
    liveIndicator.classList.remove("hidden");
  } catch (error) {
    alert("Kameraya icazə verilmədi və ya kamera tapılmadı 🎈");
  }
}

if (startStreamBtn) {
  startStreamBtn.addEventListener("click", () => {
    if (liveVideo && liveVideo.srcObject) {
      liveVideo.srcObject.getTracks().forEach((track) => track.stop());
      liveVideo.srcObject = null;
      startStreamBtn.textContent = "🚀 Efiri Başlat";
      startStreamBtn.classList.remove("active");
      liveIndicator.classList.add("hidden");
    } else {
      startLiveStream();
    }
  });
}

// ==========================================
// 4. PROFİL QEYDİYYATI FUNKSİYASI
// ==========================================
const profileForm = document.getElementById("profile-form");
if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Təbriklər! 🎉 Rəngarəng tort profiliniz uğurla qeydə alındı!");
  });
}

// ==========================================
// 5. LOQO YARADICI MEXANİZMİ (YENİ LİMİTSİZ RƏNGLƏR)
// ==========================================
const logoTextInput = document.getElementById("logo-text-input");
const logoIconSelect = document.getElementById("logo-icon-select");
const generatedLogo = document.getElementById("generated-logo");
const logoPreviewIcon = document.getElementById("logo-preview-icon");
const logoPreviewText = document.getElementById("logo-preview-text");
const logoBgPicker = document.getElementById("logo-bg-picker");
const logoTextPicker = document.getElementById("logo-text-picker");

// Mətn yazıldıqca sağ tərəf anında canlı yenilənir
if (logoTextInput) {
  logoTextInput.addEventListener("input", () => {
    logoPreviewText.textContent = logoTextInput.value || "Mənim Şirin Dünyam";
  });
}

// İkon seçildikcə yenilənir
if (logoIconSelect) {
  logoIconSelect.addEventListener("change", () => {
    logoPreviewIcon.textContent = logoIconSelect.value;
  });
}

// Milyardlarla arxa fon rəngindən hansı seçilsə anında tətbiq olunur
if (logoBgPicker) {
  logoBgPicker.addEventListener("input", () => {
    generatedLogo.style.backgroundColor = logoBgPicker.value;
  });
}

// Milyardlarla yazı rəngindən hansı seçilsə anında mətndə dəyişir
if (logoTextPicker) {
  logoTextPicker.addEventListener("input", () => {
    logoPreviewText.style.color = logoTextPicker.value;
  });
}
