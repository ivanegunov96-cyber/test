/* ============================================================
   FloridaRust — index.js
   Загружается: cdn.jsdelivr.net/gh/ivanegunov96-cyber/test@main/index.js
   База: Claude Design. Архитектура: официальная документация gamestores.
   ============================================================ */

// ── КОНФИГ ───────────────────────────────────────────────────
const shopConfig = {
  logoSrc:  'https://i.imgur.com/Z7pHkTx.png',
  telegram: 'https://t.me/',                              // ← ваш Telegram
  discord:  'https://discord.gg/',                        // ← ваш Discord
  vk:       'https://vk.com/',                            // ← ваш ВКонтакте
  server: {
    name: 'FLORIDA x2',
    ip:   '0.0.0.0:28015',                                // ← IP сервера
  },
  saleBanner: '🔥 &nbsp; SUMMER SALE — СКИДКА 30% НА ВСЕ ПРИВИЛЕГИИ &nbsp; 🔥',
  banners: [
    'https://files.facepunch.com/paddy/20241204/dec2024_heroposter_01.jpg',
    'https://files.facepunch.com/paddy/20241104/gesturepack_hero_01.jpg',
    'https://files.facepunch.com/paddy/20240905/rust_202409_ttk_heroimage.jpg',
  ],
  depositTiers: [
    { amount: 300,  bonus: 5  },
    { amount: 600,  bonus: 10 },
    { amount: 1500, bonus: 15 },
    { amount: 3000, bonus: 20 },
  ],
  balanceProblemText: 'Проблемы с пополнением? Напишите нам в <a href="https://t.me/" target="_blank">Telegram</a>',
  faq: [
    {
      q: 'Как купить привилегию?',
      a: 'Выберите нужный товар, нажмите «Купить», укажите Steam ID (формат: 76561198xxxxxxxxx) и оплатите удобным способом. Товар выдаётся автоматически в течение 1–5 минут.',
    },
    {
      q: 'Где найти Steam ID?',
      a: 'Зайдите в Steam → ваш профиль → скопируйте ссылку. Или используйте сайт steamid.io — вставьте ссылку профиля, он покажет ваш SteamID64.',
    },
    {
      q: 'Что делать, если товар не пришёл?',
      a: 'Убедитесь, что вы находитесь на нужном сервере. Если прошло более 15 минут — напишите в Discord или ВКонтакте, приложите скриншот оплаты.',
    },
    {
      q: 'Действуют ли привилегии после вайпа?',
      a: 'Привилегии (группы) сохраняются после вайпа. Предметы из китов — нет, они выдаются заново каждый вайп согласно условиям.',
    },
    {
      q: 'Как активировать промокод?',
      a: 'Введите промокод при пополнении баланса в соответствующее поле. Промокоды действуют только на пополнение, а не на прямую покупку.',
    },
  ],
};

// ── ГЛОБАЛЬНЫЕ НАСТРОЙКИ ПЛАТФОРМЫ ───────────────────────────
window.productsGrid             = 5;
window.currency                 = '₽';
window.defaultPaymentAmount     = 150;
window.zeroToFree               = true;
window.oldDesignDropdownProduct = true;
window.hideServerSelector       = true;
window.dispatchEvent(new CustomEvent('setCustomConfig'));

// ── ИНЖЕКТ CSS ────────────────────────────────────────────────
(function injectCSS() {
  if (document.getElementById('fr-styles')) return;
  const style = document.createElement('style');
  style.id = 'fr-styles';
  style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --accent:        #e07830;
  --accent-hover:  #f0922e;
  --accent-dim:    rgba(224,120,48,0.12);
  --accent-glow:   rgba(224,120,48,0.18);
  --bg:            #0d0d0d;
  --bg-700:        #161616;
  --bg-800:        #1e1e1e;
  --bg-900:        #111111;
  --border:        rgba(255,255,255,0.06);
  --border-accent: rgba(224,120,48,0.25);
  --text:          #f0ece4;
  --text-muted:    rgba(240,236,228,0.5);
  --green:         #3dd68c;
  --radius:        12px;
  --radius-sm:     8px;
  --font-head:     'Rajdhani', sans-serif;
  --font-body:     'Inter', sans-serif;
  --sidebar-w:     290px;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  background-color: var(--bg) !important;
  background-image: url('') !important;
  background-size: cover !important;
  background-position: center top !important;
  background-attachment: fixed !important;
  font-family: var(--font-body), sans-serif !important;
  -webkit-font-smoothing: antialiased;
}
body::-webkit-scrollbar { width: 4px; }
body::-webkit-scrollbar-track { background: #0d0d0d; }
body::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

@keyframes fr-pulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
@keyframes fr-fadein  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes fr-ripple  { to{transform:scale(2.8);opacity:0} }
@keyframes fr-shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

/* ── СКРЫВАЕМ ЛИШНЕЕ ── */
.LangSwitcher-module__btn,
.container.bannerContainer,
.boxHeader.Shop-module__header,
.MonitoringWidget-module__updateBtn,
.boxHeader.MonitoringWidget-module__header,
[data-widgettype="monitoring"] .boxFooter,
.MonitoringServer-module__btns,
.productModalProductAvailability,
.RouletteContent-module__triangle.RouletteContent-module__bottom,
.productModalContainsTitle,
.TotalSum-module__label,
.CountSelector-module__label,
.ProfileNav-module__header.boxHeader,
.ProfileContent-module__header.boxHeader,
.BasketContent-module__header.boxHeader,
.HistoryContent-module__header.boxHeader,
.Product-module__oldPrice { display: none !important; }

/* ── ШАПКА ── */
.Header-module__wrapper {
  margin: 0 !important;
  padding: 0 40px !important;
  height: 68px !important;
  display: flex !important;
  align-items: center !important;
  background: rgba(13,13,13,0.96) !important;
  backdrop-filter: blur(24px) !important;
  border-bottom: 1px solid var(--border-accent) !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 100 !important;
  box-shadow: 0 2px 40px rgba(0,0,0,0.4) !important;
}
.Header-module__logoWrapper,
.Header-module__logoImage {
  height: 42px !important; width: auto !important;
  filter: drop-shadow(0 0 10px var(--accent-glow)) !important;
  transition: filter .3s !important;
}
.Header-module__logoImage:hover { filter: drop-shadow(0 0 18px rgba(224,120,48,0.5)) !important; }
.HeaderNav-module__link,
.SupportLink-module__link,
.HeaderNav-module__linkk {
  font-size: 12px !important; font-weight: 500 !important;
  letter-spacing: 1.5px !important; text-transform: uppercase !important;
  color: var(--text-muted) !important; opacity: 1 !important;
  transition: color .2s !important;
  display: flex !important; align-items: center !important; gap: 6px !important;
}
.HeaderNav-module__link:hover,
.SupportLink-module__link:hover { color: var(--accent) !important; }
.PlayerMenu-module__loginLink {
  background: var(--accent) !important; color: #fff !important;
  font-size: 12px !important; font-weight: 600 !important;
  letter-spacing: 1.5px !important; text-transform: uppercase !important;
  padding: 9px 22px !important; border-radius: var(--radius-sm) !important;
  border: none !important;
  transition: background .2s, box-shadow .2s, transform .2s !important;
}
.PlayerMenu-module__loginLink:hover {
  background: var(--accent-hover) !important;
  box-shadow: 0 4px 20px var(--accent-glow) !important;
  transform: translateY(-2px) !important;
}
.PlayerBalance-module__btn {
  background: var(--bg-800) !important; border: 1px solid var(--border) !important;
  color: var(--text) !important; font-size: 13px !important;
  border-radius: var(--radius-sm) !important;
  transition: border-color .2s, box-shadow .2s !important;
}
.PlayerBalance-module__btn:hover {
  border-color: var(--border-accent) !important;
  box-shadow: 0 0 14px var(--accent-dim) !important;
}
.PlayerMenu-module__avatar {
  border-radius: 50% !important; width: 40px !important; height: 40px !important;
  border: 2px solid var(--border-accent) !important;
  transition: border-color .2s, transform .2s !important; overflow: hidden !important;
}
.PlayerMenu-module__avatar:hover { border-color: var(--accent) !important; transform: scale(1.08) !important; }
.PlayerMenu-module__wrapper { column-gap: 14px !important; }

/* ── СЕЙЛ-БАННЕР ── */
#fr-sale-banner {
  background: linear-gradient(90deg, rgba(224,120,48,0.06), rgba(224,120,48,0.16), rgba(224,120,48,0.06));
  border-bottom: 1px solid rgba(224,120,48,0.2);
  text-align: center; padding: 10px 16px;
  font-family: var(--font-head); font-size: 13px; font-weight: 600;
  letter-spacing: 2px; color: var(--accent); text-transform: uppercase;
  position: relative; overflow: hidden;
}
#fr-sale-banner::after {
  content: ''; position: absolute; top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
  animation: fr-shimmer 3s linear infinite; background-size: 200% 100%;
}

/* ── ДВУХКОЛОНОЧНЫЙ МАКЕТ ── */
#fr-layout {
  display: flex; gap: 20px;
  width: 100%; margin: 24px 0 0; padding: 0;
  align-items: flex-start;
}
#fr-sidebar {
  width: var(--sidebar-w); flex-shrink: 0;
  display: flex; flex-direction: column; gap: 10px;
  position: sticky; top: 90px;
}
#fr-content { flex: 1; min-width: 0; }
.Shop-module__wrapper { margin: 0 !important; padding: 0 !important; }
.Shop-module__wrapper > .boxBody { padding: 0 !important; }

/* ── КАРТОЧКА СЕРВЕРА ── */
.fr-server-card {
  background: var(--bg-700); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px; transition: border-color .2s;
}
.fr-server-card:hover { border-color: var(--border-accent); }
.fr-server-head {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;
}
.fr-server-name {
  font-family: var(--font-head); font-size: 15px; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase; color: var(--text);
}
.fr-server-badge {
  background: rgba(61,214,140,0.12); color: var(--green);
  font-size: 11px; font-weight: 600; padding: 3px 10px;
  border-radius: 20px; border: 1px solid rgba(61,214,140,0.25);
}
.fr-server-body { display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.fr-server-circle {
  width: 74px; height: 74px; border-radius: 50%;
  border: 3px solid var(--accent);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  flex-shrink: 0; gap: 1px;
  box-shadow: 0 0 22px var(--accent-glow);
}
.fr-circle-top { font-family: var(--font-head); font-size: 20px; font-weight: 700; color: var(--accent); line-height: 1; }
.fr-circle-mid { font-size: 9px; color: var(--text-muted); letter-spacing: 1px; text-transform: uppercase; line-height: 1; margin: 1px 0; }
.fr-circle-bot { font-family: var(--font-head); font-size: 14px; font-weight: 600; color: var(--text-muted); line-height: 1; }
.fr-server-btn {
  display: block; width: 100%; background: var(--accent); color: #fff !important;
  border: none; border-radius: var(--radius-sm); padding: 10px;
  font-family: var(--font-head); font-size: 13px; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase; text-align: center;
  text-decoration: none; cursor: pointer;
  transition: background .2s, box-shadow .2s;
}
.fr-server-btn:hover { background: var(--accent-hover); box-shadow: 0 4px 18px var(--accent-glow); }

/* ── САЙДБАР-БЛОКИ ── */
.fr-sidebar-block {
  background: var(--bg-700); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px; transition: border-color .2s;
}
.fr-sidebar-block:hover { border-color: var(--border-accent); }
.fr-sidebar-block__title {
  font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px;
}
.fr-bonus-table { width: 100%; border-collapse: collapse; }
.fr-bonus-table tr { border-bottom: 1px solid var(--border); }
.fr-bonus-table tr:last-child { border-bottom: none; }
.fr-bonus-table td { padding: 7px 4px; font-size: 12px; color: var(--text-muted); }
.fr-bonus-table td:last-child {
  text-align: right; font-family: var(--font-head);
  font-size: 15px; font-weight: 700; color: var(--accent);
}
.fr-social-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 10px 12px; margin-bottom: 8px;
  background: var(--bg-800); border: 1px solid var(--border);
  border-radius: var(--radius-sm); color: var(--text) !important;
  text-decoration: none; font-size: 13px; font-weight: 500;
  transition: border-color .2s, background .2s;
}
.fr-social-btn:last-child { margin-bottom: 0; }
.fr-social-btn:hover { border-color: var(--border-accent); background: #252525; }

/* ── БАННЕР-СЛАЙДЕР ── */
#fr-swiper-wrap {
  border-radius: var(--radius); overflow: hidden; margin-bottom: 20px;
}
#fr-swiper-wrap .swiper { border-radius: var(--radius); width: 100%; }
#fr-swiper-wrap .swiper-slide { height: 300px; background: #000; }
#fr-swiper-wrap .swiper-slide img { width: 100%; height: 100%; object-fit: cover; }
#fr-swiper-wrap .swiper-button-next,
#fr-swiper-wrap .swiper-button-prev {
  color: var(--accent) !important; background: rgba(0,0,0,0.4) !important;
  width: 40px !important; height: 40px !important; border-radius: 50% !important;
}
#fr-swiper-wrap .swiper-button-next:after,
#fr-swiper-wrap .swiper-button-prev:after { font-size: 14px !important; font-weight: 700 !important; }
#fr-swiper-wrap .swiper-pagination-bullet-active { background: var(--accent) !important; }

/* ── КАТЕГОРИИ + ПОИСК ── */
.Categories-module__categoriesBlock {
  display: flex !important; align-items: center !important;
  gap: 12px !important; margin-bottom: 16px !important;
}
.Categories-module__categories {
  display: flex !important; flex-wrap: wrap !important;
  gap: 8px !important; justify-content: flex-start !important; margin: 0 !important;
}
.Categories-module__category {
  background: transparent !important; border: 1px solid var(--border) !important;
  color: var(--text-muted) !important; font-size: 11px !important; font-weight: 500 !important;
  letter-spacing: .5px !important; padding: 5px 14px !important;
  border-radius: 20px !important; display: flex !important; align-items: center !important;
  gap: 6px !important; transition: all .2s !important;
}
.Categories-module__category:hover { border-color: var(--border-accent) !important; color: var(--accent) !important; }
.Categories-module__category.Categories-module__active {
  background: var(--accent) !important; border-color: var(--accent) !important; color: #fff !important;
}
.Search-module__wrapper {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; height: 40px !important;
  transition: border-color .2s !important;
}
.Search-module__wrapper:focus-within { border-color: var(--border-accent) !important; }
.Search-module__iconWrapper { background: transparent !important; color: var(--text-muted) !important; }

/* ── ТОВАРЫ ── */
.Shop-module__wrapper .boxBody { background: transparent !important; padding: 0 0 20px !important; }
.Shop-module__wrapper .boxFooter { background: transparent !important; }
.Products-module__wrapper { margin-top: 20px !important; gap: 16px !important; }
.Product-module__wrapper {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius) !important; min-height: 220px !important;
  display: flex !important; align-items: center !important; justify-content: center !important;
  position: relative !important; overflow: hidden !important; background-image: none !important;
  transition: border-color .25s, transform .25s, box-shadow .25s !important;
  animation: fr-fadein .4s ease both !important;
}
.Product-module__wrapper:hover {
  transform: translateY(-5px) !important; border-color: var(--border-accent) !important;
  box-shadow: 0 12px 40px rgba(224,120,48,0.1) !important;
}
.Product-module__name {
  font-family: var(--font-head) !important; font-size: 14px !important; font-weight: 700 !important;
  letter-spacing: 1px !important; text-transform: uppercase !important; color: #fff !important;
  background: linear-gradient(to right, #e07830 0%, #f0922e 100%) !important;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.5) !important;
  padding: 8px 12px !important; min-height: 36px !important;
  display: flex !important; align-items: center !important; justify-content: center !important;
  text-align: center !important;
}
.Product-module__price {
  background: var(--bg-800) !important; border-radius: 4px !important;
  margin: 6px 8px !important; padding: 5px 10px !important;
}
.Product-module__wrapper:hover .Product-module__price { background: #252525 !important; }
.Product-module__price .span__price {
  display: flex !important; align-items: baseline !important;
  gap: 6px !important; justify-content: center !important;
  font-family: var(--font-head) !important; font-size: 18px !important;
  font-weight: 700 !important; color: var(--accent) !important; transition: color .2s !important;
}
.Product-module__wrapper:hover .Product-module__price .span__price { color: #fff !important; }
.Product-module__discount {
  position: absolute !important; top: 8px !important; right: 8px !important;
  background: var(--accent) !important; color: #fff !important;
  font-size: 10px !important; font-weight: 700 !important;
  padding: 3px 8px !important; border-radius: 4px !important;
  text-transform: uppercase !important; margin: 0 !important;
  background-image: none !important; z-index: 2 !important;
}
.Product-module__count {
  position: absolute !important; bottom: 38px !important; right: 8px !important;
  background: rgba(224,120,48,0.88) !important; color: #fff !important;
  font-family: var(--font-head) !important; font-size: 11px !important; font-weight: 700 !important;
  padding: 2px 8px !important; border-radius: 4px !important; z-index: 2 !important;
  letter-spacing: .5px !important;
}
.Product-module__price {
  background: rgba(224,120,48,0.07) !important;
  border: 1px solid rgba(224,120,48,0.18) !important;
  border-radius: 6px !important; margin: 4px 8px 6px !important;
  padding: 5px 10px !important;
}

/* ── МОДАЛКИ ── */
.customModalPosition,
.ModalLayout-module__positionWrapper {
  background: rgba(0,0,0,0.82) !important; backdrop-filter: blur(14px) !important;
  align-items: center !important; justify-content: center !important;
}
.ModalLayout-module__modal {
  background: var(--bg-900) !important;
  border: 1px solid var(--border-accent) !important;
  border-radius: 18px !important;
  box-shadow: 0 0 0 1px rgba(224,120,48,0.08), 0 32px 80px rgba(0,0,0,0.75) !important;
}
.customModalContent .boxHeader,
.ProductModal-module__header,
.PlayerBalanceModal-module__header {
  background: linear-gradient(135deg, #1a1a1a 0%, #1e1a17 100%) !important;
  border-bottom: 1px solid var(--border-accent) !important;
  font-family: var(--font-head) !important; font-size: 20px !important;
  font-weight: 700 !important; letter-spacing: 2px !important;
  text-transform: uppercase !important; color: var(--text) !important;
  border-radius: var(--radius) var(--radius) 0 0 !important; justify-content: center !important;
}
.ModalLayout-module__modal .boxBody,
.customModalContent .boxBody { background: var(--bg-900) !important; padding: 24px !important; }
.ItemContent-module__footer,
.PlayerBalanceModal-module__footer,
.RouletteContent-module__footer,
.KitContent-module__footer,
.customModalContent .boxFooter {
  background: #161616 !important; border-top: 1px solid var(--border-accent) !important;
  border-radius: 0 0 var(--radius) var(--radius) !important; padding: 16px !important;
}
.productModalDescription {
  background: rgba(255,255,255,0.02) !important; border-radius: var(--radius-sm) !important;
  color: var(--text-muted) !important; font-size: 14px !important;
  line-height: 1.7 !important; margin: 20px 0 !important;
  border: 1px solid var(--border) !important; padding: 14px !important;
}
.productModalImg { filter: drop-shadow(0 4px 20px rgba(224,120,48,0.25)) !important; }
/* Количество и цена в модалке */
.CountSelector-module__inputWrapper {
  background: rgba(224,120,48,0.06) !important;
  border: 1px solid rgba(224,120,48,0.22) !important; border-radius: var(--radius-sm) !important;
}
.CountSelector-module__changeCountBtn {
  background: rgba(224,120,48,0.12) !important; border: none !important;
  color: var(--accent) !important; font-weight: 700 !important; transition: background .2s !important;
}
.CountSelector-module__changeCountBtn:hover { background: var(--accent) !important; color: #fff !important; }
.TotalSum-module__inputWrapper {
  background: rgba(224,120,48,0.06) !important;
  border: 1px solid rgba(224,120,48,0.22) !important; border-radius: var(--radius-sm) !important;
}
.TotalSum-module__currency {
  color: var(--accent) !important; font-family: var(--font-head) !important;
  font-weight: 700 !important; padding: 0 10px !important;
}
.productModalPrice, [class*="productModalPrice"] {
  font-family: var(--font-head) !important; font-size: 22px !important;
  font-weight: 700 !important; color: var(--accent) !important;
}

/* ── ПОПОЛНЕНИЕ ── */
.PlayerBalanceModal-module__inputWrapper {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; height: 46px !important; transition: border-color .2s !important;
}
.PlayerBalanceModal-module__inputWrapper:focus-within { border-color: var(--border-accent) !important; }
.PlayerBalanceModal-module__currency {
  background: var(--bg-800) !important; color: var(--accent) !important;
  font-family: var(--font-head) !important; font-weight: 700 !important;
  padding: 0 12px !important; height: 100% !important;
}
.PlayerBalanceModal-module__label { display: none !important; }
.Button-module__btn.Button-module__accent {
  background: var(--accent) !important; color: #fff !important;
  font-weight: 600 !important; letter-spacing: 1px !important;
  border-radius: var(--radius-sm) !important; border: none !important;
  transition: background .2s, box-shadow .2s !important;
}
.Button-module__btn.Button-module__accent:hover {
  background: var(--accent-hover) !important; box-shadow: 0 4px 20px var(--accent-glow) !important;
}
.Button-module__btn.Button-module__gray {
  background: var(--bg-800) !important; border: 1px solid var(--border) !important;
  color: var(--text-muted) !important; border-radius: var(--radius-sm) !important;
  transition: border-color .2s !important;
}
.Button-module__btn.Button-module__gray:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
.Button-module__customBtn {
  background: var(--accent) !important; border-color: var(--accent) !important;
  color: #fff !important; border-radius: var(--radius-sm) !important;
  font-weight: 600 !important; letter-spacing: 1px !important; transition: all .2s !important;
}
.Button-module__customBtn:hover {
  background: var(--accent-hover) !important; border-color: var(--accent-hover) !important;
  box-shadow: 0 4px 20px var(--accent-glow) !important;
}
.TotalSum-module__inputWrapper,
.CountSelector-module__inputWrapper {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important;
}
.CountSelector-module__changeCountBtn {
  background: var(--bg-800) !important; border: none !important; transition: background .2s !important;
}
.CountSelector-module__changeCountBtn:hover { background: var(--accent) !important; color: #fff !important; }

/* Бонус в модалке пополнения */
.fr-balance-problem {
  background: rgba(224,120,48,0.06); border: 1px solid rgba(224,120,48,0.15);
  border-radius: var(--radius-sm); padding: 8px 12px; font-size: 12px;
  color: var(--text-muted); margin-bottom: 14px; text-align: center; line-height: 1.6;
}
.fr-balance-problem a { color: var(--accent); }
.fr-deposit-bonus {
  background: var(--bg-800); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 14px; margin-top: 14px;
}
.fr-deposit-bonus__title {
  font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;
}
.fr-deposit-bonus__tiers { display: flex; gap: 6px; margin-bottom: 10px; }
.fr-deposit-bonus__tier {
  flex: 1; background: var(--bg-700); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 8px 4px; text-align: center; transition: all .2s;
}
.fr-deposit-bonus__tier--active { border-color: var(--accent); background: rgba(224,120,48,0.08); }
.fr-deposit-bonus__tier-pct { font-family: var(--font-head); font-size: 17px; font-weight: 700; color: var(--accent); line-height: 1; }
.fr-deposit-bonus__tier-amt { font-size: 10px; color: var(--text-muted); margin-top: 2px; }
.fr-deposit-bonus__result {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 10px; border-top: 1px solid var(--border);
  font-size: 12px; color: var(--text-muted);
}
.fr-deposit-bonus__result-val { font-family: var(--font-head); font-size: 18px; font-weight: 700; color: var(--text); }
.fr-deposit-bonus__result-bonus { color: var(--accent); font-weight: 600; font-size: 13px; }

/* ── МОНИТОРИНГ ── */
.MonitoringWidget-module__body.boxBody { background: transparent !important; padding: 0 !important; }
.MonitoringServer-module__wrapper {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; padding: 14px 16px !important;
  max-height: 80px !important; transition: border-color .2s !important;
}
.MonitoringServer-module__wrapper:hover { border-color: var(--border-accent) !important; }
.MonitoringServer-module__progressBarWrapper {
  background: #1a1a1a !important; border-radius: 20px !important;
  height: 20px !important; background-image: none !important; animation: none !important;
}
.MonitoringServer-module__progressBarAnim {
  background: linear-gradient(90deg, var(--accent), var(--accent-hover)) !important;
  border-radius: 20px !important; box-shadow: 0 0 10px var(--accent-glow) !important; animation: none !important;
}

/* ── ПРОФИЛЬ / ИСТОРИЯ / КОРЗИНА ── */
.ProfileNav-module__body.boxBody {
  background: transparent !important; padding: 0 !important; display: flex !important; gap: 6px !important;
}
.ProfileNav-module__navItem {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; color: var(--text-muted) !important;
  padding: 10px 16px !important; gap: 10px !important; transition: all .2s !important; opacity: 1 !important;
}
.ProfileNav-module__navItem:hover,
.ProfileNav-module__active { border-color: var(--border-accent) !important; color: var(--accent) !important; opacity: 1 !important; }
.ProfileContent-module__body.boxBody,
.BasketContent-module__wrapper .boxBody,
.HistoryContent-module__wrapper .boxBody { background: var(--bg-700) !important; border-radius: var(--radius) !important; }
.ProfileContent-module__box { background: var(--bg-800) !important; border-radius: var(--radius-sm) !important; }
.ProfileContent-module__input {
  background: var(--bg-800) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; color: var(--text) !important; transition: border-color .2s !important;
}
.ProfileContent-module__input:focus { border-color: var(--border-accent) !important; }
.BasketSearch-module__wrapper, .HistorySearch-module__wrapper {
  background: var(--bg-800) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important;
}
.BasketTable-module__tableHeader, .HistoryTable-module__tableHeader {
  background: var(--bg-800) !important; border-radius: var(--radius-sm) !important;
  color: var(--text-muted) !important; font-size: 12px !important; letter-spacing: 1px !important;
}
.BasketTable-module__tableLine:nth-child(2n-1),
.HistoryTable-module__tableLine:nth-child(2n-1) { background: var(--bg-800) !important; border-radius: var(--radius-sm) !important; }
.Pagination-module__page:hover, .Pagination-module__page.Pagination-module__active { color: var(--accent) !important; }

/* ── DROPDOWN / КИТ / РУЛЕТКА ── */
.Selector-module__dropDownCurrentItem, .dropDownCurrentItem {
  background: var(--bg-800) !important; border-radius: var(--radius-sm) !important; color: var(--text) !important;
}
.Selector-module__dropDownList, .dropDownList {
  background: var(--bg-800) !important; border: 1px solid var(--border) !important; border-radius: var(--radius-sm) !important;
}
.Selector-module__dropDownItem:hover, .Selector-module__dropDownItem.Selector-module__active,
.dropDownItem:hover, .dropDownItem.active { background: var(--bg-700) !important; color: var(--accent) !important; }
.KitContent-module__containsItem {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; height: 220px !important; transition: border-color .2s !important;
}
.KitContent-module__containsItem:hover { border-color: var(--border-accent) !important; }
.ProductItemSelector-module__item {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; transition: all .2s !important;
}
.ProductItemSelector-module__item.ProductItemSelector-module__active,
.ProductItemSelector-module__item:hover { border-color: var(--accent) !important; }
.RouletteContent-module__lineWrapper { background: var(--bg-900) !important; }
.RouletteContent-module__rouletteItemImg { background: var(--bg-700) !important; border-radius: var(--radius) !important; }

/* ── ЗАГРУЗЧИК ── */
.gs-loader { background: rgba(13,13,13,0.92) !important; backdrop-filter: blur(8px) !important; }
.gs-loader__spinner {
  border: none !important; width: 56px !important; height: 56px !important;
  border-radius: 50% !important; background: var(--accent) !important;
  background-image: none !important; animation: fr-pulse 1s ease-in-out infinite !important;
  box-shadow: 0 0 30px var(--accent-glow) !important; margin-top: 0 !important;
}

/* ── ФУТЕР ── */
.DesktopCopyright-module__wrapper {
  background: rgba(13,13,13,0.7) !important; border-radius: 0 var(--radius) 0 0 !important;
  font-size: 11px !important;
}
.DesktopCopyright-module__text, .DesktopCopyright-module__link { color: var(--text-muted) !important; }
.DesktopCopyright-module__link:hover { color: var(--accent) !important; }
.MobileCopyright-module__wrapper { background: var(--bg-700) !important; border-radius: var(--radius) !important; margin-top: 24px !important; }
.MobileCopyright-module__link { color: var(--accent) !important; }
.ShopFooter-module__link { color: var(--accent) !important; }

/* ── МОБ. МЕНЮ ── */
.PlayerMenuMobile-module__profileLink, .PlayerMenuMobile-module__loginLink {
  background: var(--bg-700) !important; border-radius: var(--radius-sm) !important;
  border: 1px solid var(--border) !important; color: var(--text) !important;
}
.boxBody.PlayerMenuMobile-module__body { background: var(--bg-900) !important; }

/* ── ВИДЖЕТЫ ── */
.Header-module__wrapper, .Shop-module__wrapper .boxBody,
.MonitoringWidget-module__body.boxBody, .Shop-module__wrapper .boxFooter,
.ProfileNav-module__wrapper .boxFooter, .ProfileNav-module__body.boxBody { background-color: transparent !important; }
.Widgets-module__widgetWrapper .boxBody {
  background: var(--bg-700) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius) !important; padding: 16px !important;
  transition: border-color .2s, transform .2s !important;
}
.Widgets-module__widgetWrapper .boxBody:hover {
  border-color: var(--border-accent) !important; transform: translateY(-2px) !important;
}

/* ── КОНТЕЙНЕР / ТИПОГРАФИКА ── */
.container { max-width: 1380px !important; }
h1, h2, h3 {
  font-family: var(--font-head) !important; font-weight: 700 !important;
  text-transform: uppercase !important; letter-spacing: 2px !important; color: var(--text) !important;
}

/* ── АДАПТИВ ── */
@media (max-width: 900px) {
  #fr-layout { flex-direction: column; }
  #fr-sidebar { width: 100%; position: static; }
}
@media (max-width: 600px) {
  .Header-module__wrapper { padding: 0 16px !important; }
  #fr-layout { padding: 0 10px; }
  .container.swiperContainer { display: none !important; }
}
  `;
  document.head.appendChild(style);
})();

// ── ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ───────────────────────────────────

window.openModal  = id => { const el = document.getElementById(id); if (el) el.classList.add('active'); };
window.closeModal = id => { const el = document.getElementById(id); if (el) el.classList.remove('active'); };

function initParticles() {
  if (document.getElementById('fr-particles')) return;
  const canvas = document.createElement('canvas');
  canvas.id = 'fr-particles';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.28;';
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  const N = 65;
  const pts = Array.from({ length: N }, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-.5)*.32, vy: (Math.random()-.5)*.32,
    r: Math.random()*1.5+.4, o: Math.random()*.5+.1,
  }));
  (function draw() {
    ctx.clearRect(0,0,W,H);
    for (const p of pts) {
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W; if(p.x>W)p.x=0;
      if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(224,120,48,${p.o})`; ctx.fill();
    }
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<115){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(224,120,48,${.065*(1-d/115)})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  })();
}

function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.Button-module__btn,.PlayerMenu-module__loginLink,.PlayerBalance-module__btn,.fr-server-btn');
    if (!btn) return;
    const r = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;position:absolute;border-radius:50%;background:rgba(255,255,255,0.18);transform:scale(0);pointer-events:none;animation:fr-ripple 0.5s ease-out forwards;`;
    btn.style.position='relative'; btn.style.overflow='hidden';
    btn.appendChild(r); setTimeout(()=>r.remove(), 600);
  });
}

function initCardAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.opacity='0'; el.style.transform='translateY(18px)';
      setTimeout(()=>{ el.style.transition='opacity .4s ease,transform .4s ease'; el.style.opacity='1'; el.style.transform='translateY(0)'; }, idx*55);
      obs.unobserve(el);
    });
  }, { threshold: 0.08 });
  const observe = () => document.querySelectorAll('.Product-module__wrapper').forEach(el=>obs.observe(el));
  observe();
  const root = document.querySelector('.Products-module__wrapper, main, #app');
  if (root) new MutationObserver(observe).observe(root, { childList:true, subtree:true });
}

function addFaqModal() {
  if (document.getElementById('faqModal')) return;
  const items = shopConfig.faq.map((f, i) => `
    <div style="border-bottom:1px solid rgba(255,255,255,0.06);overflow:hidden;">
      <button onclick="(function(btn){var a=btn.parentElement.querySelector('.fr-faq-ans'),ic=btn.querySelector('.fr-faq-ico'),op=a.style.display==='block';a.style.display=op?'none':'block';ic.style.transform=op?'rotate(0deg)':'rotate(45deg)';})(this)"
        style="width:100%;background:transparent;border:none;color:#f0ece4;display:flex;align-items:center;justify-content:space-between;padding:18px 0;cursor:pointer;font-size:14px;font-weight:500;text-align:left;gap:12px;">
        <span style="display:flex;align-items:center;gap:12px;">
          <span style="font-family:Rajdhani,sans-serif;font-size:17px;font-weight:700;color:#e07830;">${String(i+1).padStart(2,'0')}</span>
          ${f.q}
        </span>
        <span class="fr-faq-ico" style="font-size:20px;color:#e07830;flex-shrink:0;transition:transform .3s;line-height:1;">＋</span>
      </button>
      <div class="fr-faq-ans" style="display:none;padding:0 0 18px 30px;font-size:13px;color:rgba(240,236,228,0.55);line-height:1.8;">${f.a}</div>
    </div>`).join('');

  document.querySelector('main')?.insertAdjacentHTML('beforeend', `
    <div role="presentation" onmousedown="closeModal('faqModal')" id="faqModal" class="customModalWrapper">
      <div class="customModalOverflow"><div class="customModalPosition">
        <div role="presentation" onmousedown="event.stopPropagation()" class="customModalContent" style="max-width:640px;width:100%;">
          <div class="boxHeader">Как купить</div>
          <div class="boxBody" style="padding:8px 24px 0;">${items}</div>
          <div class="boxFooter">
            <button onclick="closeModal('faqModal')" type="button" class="btn Button-module__btn Button-module__gray">Закрыть</button>
          </div>
        </div>
      </div></div>
    </div>`);
}

function buildLayout() {
  if (document.getElementById('fr-layout')) return null;
  const sidebar = document.createElement('div'); sidebar.id = 'fr-sidebar';
  const content = document.createElement('div'); content.id = 'fr-content';
  const layout  = document.createElement('div'); layout.id  = 'fr-layout';
  layout.appendChild(sidebar); layout.appendChild(content);
  const shop = document.querySelector('.Shop-module__wrapper');
  if (shop) {
    const parent = shop.parentNode;
    content.appendChild(shop);
    parent.insertBefore(layout, parent.firstChild);
  } else {
    document.querySelector('main')?.insertBefore(layout, document.querySelector('main').firstChild);
  }
  return { sidebar, content };
}

function injectServerCard(sidebar, serverData) {
  if (!sidebar) return;
  const existing = sidebar.querySelector('.fr-server-card');
  const s = shopConfig.server;
  if (existing && serverData) {
    const top = existing.querySelector('.fr-circle-top');
    const bot = existing.querySelector('.fr-circle-bot');
    if (top) top.textContent = serverData.online ?? '—';
    if (bot) bot.textContent = serverData.maxOnline ?? '—';
    return;
  }
  if (existing) return;
  const online = serverData?.online ?? '—', maxOnline = serverData?.maxOnline ?? '—';
  const card = document.createElement('div');
  card.className = 'fr-server-card';
  card.innerHTML = `
    <div class="fr-server-head">
      <span class="fr-server-name">${s.name}</span>
      <span class="fr-server-badge">Онлайн</span>
    </div>
    <div class="fr-server-body">
      <div class="fr-server-circle">
        <span class="fr-circle-top">${online}</span>
        <span class="fr-circle-mid">из</span>
        <span class="fr-circle-bot">${maxOnline}</span>
      </div>
    </div>
    <button class="fr-server-btn" onclick="navigator.clipboard.writeText('${s.ip}').then(()=>{this.textContent='Скопировано!';setTimeout(()=>this.textContent='Скопировать IP',2000)})">Скопировать IP</button>
  `;
  sidebar.appendChild(card);
}

function injectSidebarExtras(sidebar) {
  if (!sidebar || sidebar.querySelector('.fr-bonus-block')) return;

  const bonusBlock = document.createElement('div');
  bonusBlock.className = 'fr-sidebar-block fr-bonus-block';
  bonusBlock.innerHTML = `
    <div class="fr-sidebar-block__title">Бонус при пополнении</div>
    <table class="fr-bonus-table">
      ${shopConfig.depositTiers.map(t=>`<tr><td>от ${t.amount} ₽</td><td>+${t.bonus}%</td></tr>`).join('')}
    </table>`;
  sidebar.appendChild(bonusBlock);

  const socialBlock = document.createElement('div');
  socialBlock.className = 'fr-sidebar-block';
  socialBlock.innerHTML = `
    <div class="fr-sidebar-block__title">Сообщество</div>
    <a href="${shopConfig.telegram}" target="_blank" class="fr-social-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8c-.12.56-.46.7-.93.44l-2.6-1.92-1.25 1.2c-.14.14-.26.26-.53.26l.19-2.66 4.84-4.37c.21-.19-.05-.29-.32-.1L7.6 14.04l-2.57-.8c-.56-.17-.57-.56.12-.83l10.03-3.87c.47-.17.88.11.46.26z" fill="#2CA5E0"/></svg>
      Telegram
    </a>
    <a href="${shopConfig.discord}" target="_blank" class="fr-social-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" fill="#5865F2"/></svg>
      Discord
    </a>
    <a href="${shopConfig.vk}" target="_blank" class="fr-social-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13.162 18.994c.609 0 .858-.406.851-.902-.031-1.649.745-2.505 1.986-1.302 1.437 1.393 1.739 2.204 3.446 2.204h2.265c.786 0 1.29-.295 1.04-.886-.484-1.144-3.22-3.877-3.48-4.233-.44-.586-.309-.804 0-1.338l.031-.05c.459-.711 2.822-4.066 3.103-5.038.148-.495-.015-.77-.792-.77h-2.265c-.642 0-.987.338-1.175.707-.175.34-1.43 3.055-2.394 4.492-.45.682-.84.955-1.176.955-.261 0-.588-.275-.588-.963V8.51c0-.682-.23-.994-.838-.994H9.83c-.463 0-.73.338-.73.682 0 .62.959.765 1.057 2.504v3.826c0 .868-.164 1.021-.503 1.021-.914 0-3.163-3.065-4.484-6.558C4.93 8.278 4.602 8 3.95 8H1.684C.956 8 .8 8.338.8 8.707c0 .682 1 4.087 4.658 8.583 2.438 3.065 5.87 4.704 8.984 4.704h1.72v-3z" fill="#4A76A8"/></svg>
      ВКонтакте
    </a>`;
  sidebar.appendChild(socialBlock);
}

function injectSwiper(content) {
  if (!content || content.querySelector('#fr-swiper-wrap')) return;
  const wrap = document.createElement('div');
  wrap.id = 'fr-swiper-wrap'; wrap.style.opacity='0'; wrap.style.transition='opacity .5s';
  wrap.innerHTML = `
    <div class="swiper fr-swiper">
      <div class="swiper-wrapper">
        ${shopConfig.banners.map(src=>`<div class="swiper-slide"><img src="${src}" alt="banner"></div>`).join('')}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>`;
  content.insertBefore(wrap, content.firstChild);
  function startSwiper() {
    new Swiper('.fr-swiper', {
      loop: true, autoplay: { delay: 12000, disableOnInteraction: false },
      navigation: { nextEl: '#fr-swiper-wrap .swiper-button-next', prevEl: '#fr-swiper-wrap .swiper-button-prev' },
      pagination: { el: '#fr-swiper-wrap .swiper-pagination', clickable: true },
    });
    setTimeout(()=>{ wrap.style.opacity='1'; }, 150);
  }
  if (window.Swiper) { startSwiper(); }
  else {
    if (!document.querySelector('link[href*="swiper"]')) {
      const css = document.createElement('link'); css.rel='stylesheet';
      css.href='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(css);
    }
    const js = document.createElement('script');
    js.src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    js.onload = startSwiper; document.head.appendChild(js);
  }
}

function injectDepositBonus(modal) {
  if (!modal || modal.querySelector('.fr-deposit-bonus')) return;
  const form = modal.querySelector('form'); if (!form) return;
  if (!modal.querySelector('.fr-balance-problem')) {
    const prob = document.createElement('div');
    prob.className = 'fr-balance-problem'; prob.innerHTML = shopConfig.balanceProblemText;
    form.parentNode.insertBefore(prob, form);
  }
  const block = document.createElement('div'); block.className = 'fr-deposit-bonus';
  block.innerHTML = `
    <div class="fr-deposit-bonus__title">Бонус при пополнении</div>
    <div class="fr-deposit-bonus__tiers">
      ${shopConfig.depositTiers.map(t=>`
        <div class="fr-deposit-bonus__tier" data-amount="${t.amount}" data-bonus="${t.bonus}">
          <div class="fr-deposit-bonus__tier-pct">+${t.bonus}%</div>
          <div class="fr-deposit-bonus__tier-amt">от ${t.amount}₽</div>
        </div>`).join('')}
    </div>
    <div class="fr-deposit-bonus__result">
      <span>Итого:</span>
      <span><span class="fr-deposit-bonus__result-val">0 ₽</span><span class="fr-deposit-bonus__result-bonus"></span></span>
    </div>`;
  form.parentNode.insertBefore(block, form.nextSibling);
  const input = modal.querySelector('input[type="number"],input[name="amount"]');
  if (input) {
    const update = () => {
      const amount = parseInt(input.value)||0;
      const active = shopConfig.depositTiers.slice().reverse().find(t=>amount>=t.amount);
      const bonus  = active ? Math.round(amount*active.bonus/100) : 0;
      modal.querySelectorAll('.fr-deposit-bonus__tier').forEach(el=>{
        el.classList.toggle('fr-deposit-bonus__tier--active', !!(active&&+el.dataset.amount===active.amount));
      });
      const val=modal.querySelector('.fr-deposit-bonus__result-val'), bon=modal.querySelector('.fr-deposit-bonus__result-bonus');
      if(val) val.textContent=(amount+bonus)+' ₽';
      if(bon){ bon.textContent=bonus>0?`+${bonus} ₽`:''; bon.style.display=bonus>0?'inline':'none'; }
    };
    input.addEventListener('input', update); update();
  }
}

// ── ГЛАВНАЯ ФУНКЦИЯ (по документации — один main()) ───────────
function main() {
  window.dispatchEvent(new CustomEvent('initState'));
  window.dispatchEvent(new CustomEvent('initComponentsManager'));
  window.dispatchEvent(new CustomEvent('initEventsManager'));

  // HEADER
  window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
    // Логотип
    const logoW = document.querySelector('.Header-module__logoWrapper');
    if (logoW) {
      const img = document.createElement('img');
      img.src = shopConfig.logoSrc; img.alt = 'FloridaRust';
      img.className = 'Header-module__logoImage';
      img.style.cssText = 'height:42px;width:auto;';
      logoW.replaceWith(img);
    }
    // Кнопка входа
    const loginBtn = document.querySelector('.PlayerMenu-module__loginLink');
    if (loginBtn) loginBtn.textContent = 'Войти';
    // Nav-ссылки
    const nav = document.querySelector('.Header-module__nav, .HeaderNav-module__nav');
    if (nav) {
      [
        { label: 'FAQ',       action: "openModal('faqModal')", href: '#'              },
        { label: 'Discord',   href: shopConfig.discord                                },
        { label: 'ВКонтакте', href: shopConfig.vk                                    },
      ].forEach(({ label, action, href }) => {
        const a = document.createElement('a');
        a.className = 'HeaderNav-module__link'; a.textContent = label;
        a.href = href || '#'; a.target = href && href !== '#' ? '_blank' : '';
        if (action) a.setAttribute('onclick', action);
        nav.appendChild(a);
      });
    }
    // Онлайн-бадж
    const playerMenu = document.querySelector('.PlayerMenu-module__wrapper');
    if (playerMenu && !document.getElementById('fr-online')) {
      const badge = document.createElement('div'); badge.id = 'fr-online';
      badge.style.cssText = 'display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:5px 12px;border-radius:20px;font-size:12px;white-space:nowrap;';
      badge.innerHTML = `
        <span style="width:7px;height:7px;border-radius:50%;background:#3dd68c;display:inline-block;animation:fr-pulse 2s infinite;flex-shrink:0;"></span>
        <span id="fr-online-n" style="color:#3dd68c;font-weight:600;">...</span>
        <span style="color:rgba(240,236,228,0.4);">онлайн</span>`;
      playerMenu.insertBefore(badge, playerMenu.firstChild);
    }
    // Скрыть "МАГАЗИН" из нативного nav
    document.querySelectorAll('.HeaderNav-module__link, .HeaderNav-module__linkk, .SupportLink-module__link').forEach(a => {
      if (/^магазин$/i.test(a.textContent.trim())) a.style.display = 'none';
    });
    // Мобильный nav
    const mobileNav = document.querySelector('.PlayerMenuMobile-module__nav');
    if (mobileNav) {
      const a = document.createElement('a'); a.className='HeaderNav-module__link';
      a.textContent='FAQ'; a.href='#'; a.setAttribute('onclick',"openModal('faqModal')");
      mobileNav.appendChild(a);
    }
  });

  // SHOP PAGE
  window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', () => {
    // Сейл-баннер
    if (!document.getElementById('fr-sale-banner')) {
      const header = document.querySelector('.Header-module__wrapper');
      if (header) {
        const banner = document.createElement('div'); banner.id='fr-sale-banner';
        banner.innerHTML = shopConfig.saleBanner;
        header.insertAdjacentElement('afterend', banner);
      }
    }
    // Лейаут
    const els     = buildLayout();
    const sidebar = els ? els.sidebar : document.getElementById('fr-sidebar');
    const content = els ? els.content : document.getElementById('fr-content');
    injectServerCard(sidebar, null);
    injectSidebarExtras(sidebar);
    injectSwiper(content);
    addFaqModal();
    initCardAnimations();
  });

  // BALANCE MODAL
  window.componentsManager.addListener('BALANCE_MODAL', 'DID_MOUNT', () => {
    const modal = document.querySelector('.PlayerBalanceModal-module__wrapper, .PlayerBalance-module__modal, [class*="BalanceModal"]');
    if (modal) injectDepositBonus(modal);
  });

  // МОНИТОРИНГ — реальные данные с платформы
  window.eventsManager.addListener('MONITORING_LOADED', (data) => {
    if (!data) return;
    const servers = Array.isArray(data) ? data : (data.servers || [data]);
    const srv = servers[0]; if (!srv) return;
    const serverData = {
      online:    srv.online    ?? srv.players    ?? '—',
      maxOnline: srv.maxOnline ?? srv.maxPlayers ?? '—',
      joining:   srv.joining   ?? 0,
    };
    injectServerCard(document.getElementById('fr-sidebar'), serverData);
    const badge = document.getElementById('fr-online-n');
    if (badge) badge.textContent = serverData.online;
  });

  window.eventsManager.addListener('MONITORING_UPDATED', (data) => {
    if (!data) return;
    const servers = Array.isArray(data) ? data : (data.servers || [data]);
    const srv = servers[0]; if (!srv) return;
    const online    = srv.online    ?? srv.players    ?? '—';
    const maxOnline = srv.maxOnline ?? srv.maxPlayers ?? '—';
    const top   = document.querySelector('.fr-circle-top');
    const bot   = document.querySelector('.fr-circle-bot');
    const badge = document.getElementById('fr-online-n');
    if (top)   top.textContent  = online;
    if (bot)   bot.textContent  = maxOnline;
    if (badge) badge.textContent = online;
  });

  // PLAYER_LOADED
  window.eventsManager.addListener('PLAYER_LOADED', () => {
    const player = window.getState?.()?.player?.player;
    if (!player) return;
    const profileLink = document.querySelector('.PlayerMenu-module__profileLink');
    if (profileLink && !document.querySelector('.fr-avatar')) {
      const avatar = document.createElement('div'); avatar.className='fr-avatar';
      avatar.innerHTML = `<a href="/profile"><img src="${player.avatar}" alt="${player.username}" style="width:40px;height:40px;border-radius:50%;border:2px solid rgba(224,120,48,0.4);object-fit:cover;display:block;"></a>`;
      profileLink.insertAdjacentElement('beforebegin', avatar);
      profileLink.style.display = 'none';
    }
  });

  window.componentsManager.load();
  window.eventsManager.load();
}

// ── ЗАПУСК ────────────────────────────────────────────────────
(function earlyInit() {
  initParticles();
  initRipple();
})();

if (window.isAppReady) { main(); }
else { window.addEventListener('appReady', main); }
