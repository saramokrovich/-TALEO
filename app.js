(function () {
  "use strict";

  var CFG = window.TALEO_CONFIG || {};
  var tg = window.Telegram && window.Telegram.WebApp;
  var inTelegram = !!(tg && tg.initData);

  // ---------- Texts ----------
  var T = {
    ru: {
      heroEyebrow: "TALEO · эксклюзивный дистрибьютор",
      heroLead: "Профессиональная фильтрующая загрузка для стабилизации воды без реагентов. Компания TALEO — официальный международный дистрибьютор BrizanMAG за пределами РФ.",
      ctaDealer: "Стать дилером",
      ctaProduct: "О продукте",
      stat1: "снижение коррозии",
      stat2: "лет на рынке",
      stat3: "лет срок службы",
      stat4: "химических реагентов",
      aboutTitle: "О компании",
      aboutText: "TALEO представляет на международном рынке продукцию ООО «Национальные Каталитические Системы» — российского производителя фильтрующих материалов с опытом более 20 лет. Мы ищем дилеров по всему миру и даём партнёрам эксклюзивные условия, техническую и маркетинговую поддержку.",
      casesTitle: "Проекты",
      visitSite: "Подробнее на сайте",
      productEyebrow: "Профессиональная фильтрация",
      productTitle: "Что такое BrizanMAG",
      productText: "Белый зернистый материал из селективно добытого природного гидроксида магния, прошедшего термическую модификацию. Не растворяется в воде, не выделяет вредных веществ, нетоксичен и радиационно безопасен. Производится в России.",
      appsTitle: "Применение",
      benefitsTitle: "Преимущества",
      specsTitle: "Характеристики",
      opsTitle: "Эксплуатация и поставка",
      dealerEyebrow: "Партнёрская программа",
      dealerTitle: "Станьте дилером BrizanMAG в своей стране",
      dealerText: "TALEO — эксклюзивный дистрибьютор BrizanMAG. Мы открыты для компаний из любой страны: водоподготовка, инжиниринг, оборудование, водоканалы и промышленность.",
      fCompany: "Компания *",
      fCountry: "Страна / регион *",
      fName: "Контактное лицо *",
      fEmail: "E-mail *",
      fPhone: "Телефон / WhatsApp",
      fRights: "Интересующий формат",
      rExclusive: "Эксклюзивные права на регион",
      rNonExclusive: "Неэксклюзивное дилерство",
      rUnsure: "Нужна консультация",
      fMessage: "Комментарий",
      fMessagePh: "Направление бизнеса, объёмы, вопросы…",
      submit: "Отправить заявку",
      submitHint: "Нажимая кнопку, вы соглашаетесь на обработку контактных данных для ответа на заявку.",
      errRequired: "Заполните обязательные поля, отмеченные *",
      errEmail: "Проверьте адрес e-mail",
      successTitle: "Заявка готова",
      successText: "Отправьте её в открывшемся чате или письмом. Менеджер TALEO свяжется с вами в ближайшее время.",
      copy: "Скопировать текст",
      copied: "Скопировано ✓",
      sendEmail: "Отправить на e-mail",
      tabHome: "Главная",
      tabProduct: "Продукт",
      tabDealer: "Дилерам",
      msgTitle: "Заявка на дилерство BrizanMAG",
      mCompany: "Компания", mCountry: "Страна/регион", mName: "Контакт", mEmail: "E-mail",
      mPhone: "Телефон", mRights: "Формат", mMessage: "Комментарий", mTg: "Telegram",
      apps: [
        ["💧", "Кондиционирование", "Обогащение маломинерализованной воды магнием без дозирующих комплексов"],
        ["⚗️", "Коррекция pH", "Повышение pH питьевой и сточной воды в скоростных процессах"],
        ["🫧", "Удаление CO₂", "Связывание агрессивной углекислоты"],
        ["🔩", "Fe и Mn", "Предварительная обработка воды для удаления железа и марганца"],
        ["🥛", "Молочная отрасль", "Раскисление при переработке молочной сыворотки"],
        ["🏭", "Водоканалы", "Городские станции водоподготовки и промышленность"]
      ],
      benefits: [
        "Без химических реагентов и дозирующих станций",
        "Снижение коррозии трубопроводов и оборудования до 35%",
        "Снижение эксплуатационных затрат на 15–20%",
        "Простая регенерация обратной промывкой за 6–8 минут",
        "Высокая механическая прочность, срок службы до 7 лет",
        "Экологически безопасен, нетоксичен, пожаро- и взрывобезопасен"
      ],
      specs: [
        ["MgO / Mg(OH)₂, не менее", "62 / 89,9 %"],
        ["CaO, не более", "3 %"],
        ["SiO₂, не более", "3 %"],
        ["Fe₂O₃, не более", "0,3 %"],
        ["Насыпная плотность", "≥ 1200 кг/м³"],
        ["Влажность, не более", "0,5 %"],
        ["Гранулометрический состав", "0,5–2,0 мм"]
      ],
      ops: [
        ["Скорость фильтрации", "5–15 м/ч"],
        ["Фильтроцикл", "12–72 ч"],
        ["Обратная промывка", "10–15 л/с·м²"],
        ["Упаковка", "мешки 20 кг, биг-бэги 500–1000 кг"],
        ["Срок хранения", "5 лет"],
        ["Транспорт", "любой вид, без доп. мер"]
      ],
      cases: [
        ["Водоканал Санкт-Петербурга", "с 2010 года", "Железо снижено с 2,27 до 0,1 мг/л, марганец с 0,58 до 0,03 мг/л."],
        ["ООО «Краснодар Водоканал»", "с 2014 года", "Очищено более 50,4 млн м³ воды."],
        ["Северодвинск", "артезианская вода", "Безреагентное удаление железа и марганца."]
      ],
      perks: [
        ["🌍", "Эксклюзив", "Права на страну или регион"],
        ["🛠️", "Техподдержка", "Расчёты и сопровождение"],
        ["📣", "Маркетинг", "Материалы и сертификаты"]
      ]
    },
    en: {
      heroEyebrow: "TALEO · exclusive distributor",
      heroLead: "Professional filter media for reagent-free water stabilization. TALEO is the official international distributor of BrizanMAG outside Russia.",
      ctaDealer: "Become a dealer",
      ctaProduct: "About the product",
      stat1: "less corrosion",
      stat2: "years on the market",
      stat3: "years service life",
      stat4: "chemical reagents",
      aboutTitle: "About us",
      aboutText: "TALEO represents National Catalytic Systems LLC, a Russian filter media manufacturer with more than 20 years of experience, on the international market. We are looking for dealers worldwide and offer partners exclusive terms plus technical and marketing support.",
      casesTitle: "Case studies",
      visitSite: "Learn more on our website",
      productEyebrow: "Professional filtration",
      productTitle: "What is BrizanMAG",
      productText: "A white granular material made from selectively mined natural magnesium hydroxide that has undergone thermal modification. Insoluble in water, releases no harmful substances, non-toxic and radiation-safe. Made in Russia.",
      appsTitle: "Applications",
      benefitsTitle: "Benefits",
      specsTitle: "Specifications",
      opsTitle: "Operation & supply",
      dealerEyebrow: "Partner program",
      dealerTitle: "Become a BrizanMAG dealer in your country",
      dealerText: "TALEO is the exclusive distributor of BrizanMAG. We welcome companies from any country: water treatment, engineering, equipment suppliers, utilities and industry.",
      fCompany: "Company *",
      fCountry: "Country / region *",
      fName: "Contact person *",
      fEmail: "E-mail *",
      fPhone: "Phone / WhatsApp",
      fRights: "Preferred format",
      rExclusive: "Exclusive regional rights",
      rNonExclusive: "Non-exclusive dealership",
      rUnsure: "I need a consultation",
      fMessage: "Message",
      fMessagePh: "Your business, expected volumes, questions…",
      submit: "Send application",
      submitHint: "By sending, you agree that we process your contact details to respond to your application.",
      errRequired: "Please fill in the required fields marked *",
      errEmail: "Please check your e-mail address",
      successTitle: "Application ready",
      successText: "Send it in the chat that opened or by e-mail. A TALEO manager will contact you shortly.",
      copy: "Copy text",
      copied: "Copied ✓",
      sendEmail: "Send by e-mail",
      tabHome: "Home",
      tabProduct: "Product",
      tabDealer: "Dealers",
      msgTitle: "BrizanMAG dealer application",
      mCompany: "Company", mCountry: "Country/region", mName: "Contact", mEmail: "E-mail",
      mPhone: "Phone", mRights: "Format", mMessage: "Message", mTg: "Telegram",
      apps: [
        ["💧", "Conditioning", "Enriching low-mineralised water with magnesium without dosing systems"],
        ["⚗️", "pH correction", "Raising pH of drinking water and wastewater in high-speed processes"],
        ["🫧", "CO₂ removal", "Binding aggressive carbon dioxide"],
        ["🔩", "Fe & Mn", "Pre-treatment of drinking water for iron and manganese removal"],
        ["🥛", "Dairy", "Deoxidising agent in whey processing"],
        ["🏭", "Utilities", "Municipal water treatment plants and industry"]
      ],
      benefits: [
        "No chemical reagents or dosing stations",
        "Up to 35% less corrosion of pipes and equipment",
        "15–20% lower operating costs",
        "Easy backwash regeneration in 6–8 minutes",
        "High mechanical strength, up to 7 years service life",
        "Environmentally safe, non-toxic, non-flammable, non-explosive"
      ],
      specs: [
        ["MgO / Mg(OH)₂, min", "62 / 89.9 %"],
        ["CaO, max", "3 %"],
        ["SiO₂, max", "3 %"],
        ["Fe₂O₃, max", "0.3 %"],
        ["Bulk density", "≥ 1200 kg/m³"],
        ["Moisture, max", "0.5 %"],
        ["Particle size", "0.5–2.0 mm"]
      ],
      ops: [
        ["Filtration rate", "5–15 m/h"],
        ["Filtration cycle", "12–72 h"],
        ["Backwash intensity", "10–15 l/s·m²"],
        ["Packaging", "20 kg bags, 500–1000 kg big bags"],
        ["Shelf life", "5 years"],
        ["Transport", "any mode, no extra measures"]
      ],
      cases: [
        ["St. Petersburg Vodokanal", "since 2010", "Iron reduced from 2.27 to 0.1 mg/L, manganese from 0.58 to 0.03 mg/L."],
        ["Krasnodar Vodokanal LLC", "since 2014", "Over 50.4 million m³ of water treated."],
        ["Severodvinsk", "artesian water", "Reagent-free removal of iron and manganese."]
      ],
      perks: [
        ["🌍", "Exclusivity", "Rights for a country or region"],
        ["🛠️", "Tech support", "Calculations and guidance"],
        ["📣", "Marketing", "Materials and certificates"]
      ]
    }
  };

  // ---------- Language ----------
  function detectLang() {
    if (CFG.defaultLang === "ru" || CFG.defaultLang === "en") return CFG.defaultLang;
    var code = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code) ||
      navigator.language || "en";
    return /^(ru|uk|be|kk|ky|uz|tg|hy|az)/i.test(code) ? "ru" : "en";
  }
  var lang = detectLang();
  try { var saved = localStorage.getItem("taleo_lang"); if (saved === "ru" || saved === "en") lang = saved; } catch (e) {}

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t[el.getAttribute("data-i18n")]; });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t[el.getAttribute("data-i18n-ph")]; });
    $("#langBtn").textContent = lang === "ru" ? "EN" : "RU";

    $("#apps").innerHTML = t.apps.map(function (a, i) {
      return '<div class="service' + (i === 1 ? " hl" : "") + '"><div class="ic">' + a[0] + "</div><h4>" + esc(a[1]) + "</h4><p>" + esc(a[2]) + "</p></div>";
    }).join("");
    $("#perks").innerHTML = t.perks.map(function (a, i) {
      return '<div class="service' + (i === 0 ? " hl" : "") + '"><div class="ic">' + a[0] + "</div><h4>" + esc(a[1]) + "</h4><p>" + esc(a[2]) + "</p></div>";
    }).join("");
    $("#benefits").innerHTML = t.benefits.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
    var rows = function (list) { return list.map(function (r) { return '<div class="spec"><span>' + esc(r[0]) + "</span><b>" + esc(r[1]) + "</b></div>"; }).join(""); };
    $("#specs").innerHTML = rows(t.specs);
    $("#ops").innerHTML = rows(t.ops);
    $("#cases").innerHTML = t.cases.map(function (c) {
      return '<div class="card"><h3>' + esc(c[0]) + "</h3><small>" + esc(c[1]) + "</small><p>" + esc(c[2]) + "</p></div>";
    }).join("");
    if (tg && tg.MainButton && current === "dealer" && !$("#dealerForm").hidden) tg.MainButton.setText(t.submit);
  }

  // ---------- Navigation ----------
  var current = "home";
  function go(page) {
    if (!document.getElementById("page-" + page)) page = "home";
    current = page;
    $$(".page").forEach(function (p) { p.classList.toggle("active", p.id === "page-" + page); });
    $$(".tabbar button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-go") === page); });
    window.scrollTo(0, 0);
    if (tg) {
      if (page === "home") tg.BackButton.hide(); else tg.BackButton.show();
      if (page === "dealer" && !$("#dealerForm").hidden) {
        tg.MainButton.setParams({ text: T[lang].submit, color: "#1f5bff", text_color: "#ffffff" });
        tg.MainButton.show();
      } else {
        tg.MainButton.hide();
      }
    }
    haptic("selection");
  }

  function haptic(kind) {
    if (!tg || !tg.HapticFeedback) return;
    try {
      if (kind === "selection") tg.HapticFeedback.selectionChanged();
      else tg.HapticFeedback.notificationOccurred(kind);
    } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-go]");
    if (!el) return;
    e.preventDefault();
    go(el.getAttribute("data-go"));
  });

  $("#langBtn").addEventListener("click", function () {
    lang = lang === "ru" ? "en" : "ru";
    try { localStorage.setItem("taleo_lang", lang); } catch (e) {}
    render();
  });

  // open external site inside Telegram's in-app browser
  $("#siteLink").href = CFG.siteUrl || "https://www.taleo.pro";
  $("#siteLink").addEventListener("click", function (e) {
    if (tg && tg.openLink && inTelegram) { e.preventDefault(); tg.openLink(this.href); }
  });

  // ---------- Dealer form ----------
  var form = $("#dealerForm");
  var lastMessage = "";

  function buildMessage(d) {
    var t = T[lang];
    var rightsText = form.querySelector('select[name="rights"] option[value="' + d.rights + '"]').textContent;
    var lines = [
      "🟦 " + t.msgTitle,
      "",
      t.mCompany + ": " + d.company,
      t.mCountry + ": " + d.country,
      t.mName + ": " + d.name,
      t.mEmail + ": " + d.email
    ];
    if (d.phone) lines.push(t.mPhone + ": " + d.phone);
    lines.push(t.mRights + ": " + rightsText);
    var u = tg && tg.initDataUnsafe && tg.initDataUnsafe.user;
    if (u && u.username) lines.push(t.mTg + ": @" + u.username);
    if (d.message) lines.push("", t.mMessage + ": " + d.message);
    return lines.join("\n");
  }

  function mailtoHref(text) {
    return "mailto:" + (CFG.email || "") + "?subject=" + encodeURIComponent(T[lang].msgTitle) + "&body=" + encodeURIComponent(text);
  }

  function submit() {
    var err = $("#formError");
    var fd = new FormData(form);
    var d = {};
    fd.forEach(function (v, k) { d[k] = String(v).trim(); });

    $$(".invalid", form).forEach(function (el) { el.classList.remove("invalid"); });
    var missing = ["company", "country", "name", "email"].filter(function (k) { return !d[k]; });
    missing.forEach(function (k) { form.elements[k].classList.add("invalid"); });
    if (missing.length) { err.textContent = T[lang].errRequired; err.hidden = false; haptic("error"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      form.elements.email.classList.add("invalid");
      err.textContent = T[lang].errEmail; err.hidden = false; haptic("error"); return;
    }
    err.hidden = true;

    lastMessage = buildMessage(d);
    $("#mailBtn").href = mailtoHref(lastMessage);

    form.hidden = true;
    $("#success").hidden = false;
    if (tg) tg.MainButton.hide();
    haptic("success");
    window.scrollTo(0, 0);

    var user = (CFG.telegramUsername || "").replace(/^@/, "").trim();
    if (user) {
      var link = "https://t.me/" + user + "?text=" + encodeURIComponent(lastMessage);
      if (tg && inTelegram && tg.openTelegramLink) tg.openTelegramLink(link);
      else window.open(link, "_blank");
    } else {
      window.location.href = mailtoHref(lastMessage);
    }
  }

  form.addEventListener("submit", function (e) { e.preventDefault(); submit(); });

  $("#copyBtn").addEventListener("click", function () {
    var btn = this;
    var done = function () { btn.textContent = T[lang].copied; setTimeout(function () { btn.textContent = T[lang].copy; }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lastMessage).then(done, function () { fallbackCopy(lastMessage); done(); });
    } else { fallbackCopy(lastMessage); done(); }
  });
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  // ---------- Telegram init ----------
  if (inTelegram) $("#submitBtn").hidden = true; // Telegram MainButton is used instead
  if (tg) {
    try {
      tg.ready();
      tg.expand();
      if (tg.setHeaderColor) tg.setHeaderColor("#050b2c");
      if (tg.setBackgroundColor) tg.setBackgroundColor("#050b2c");
      if (tg.setBottomBarColor) tg.setBottomBarColor("#050b2c");
      tg.BackButton.onClick(function () { go("home"); });
      tg.MainButton.onClick(submit);
    } catch (e) {}
  }

  render();
  // deep links: ?startapp=dealer (Telegram) or #dealer (web)
  var start = (tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param) || location.hash.replace("#", "");
  go(start || "home");
})();
