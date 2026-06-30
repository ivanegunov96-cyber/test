/* ============================================================
   FloridaRust — index.js
   Загружается через: cdn.jsdelivr.net/gh/ivanegunov96-cyber/test@main/index.js
   ============================================================ */

// ── КОНФИГ ───────────────────────────────────────────────────
const shopConfig = {
  logoSrc:  'https://i.imgur.com/Z7pHkTx.png', // ← ваш логотип
  telegram: 'https://t.me/',                    // ← ваш Telegram
  discord:  'https://discord.gg/',              // ← ваш Discord
  vk:       'https://vk.com/',                  // ← ваш ВКонтакте
  server: {
    name: 'FLORIDA x2',
    ip:   '0.0.0.0:28015',                      // ← IP сервера
  },
  banners: [
    'https://placehold.co/1060x280/111111/e07830?text=FLORIDA+RUST',
    'https://placehold.co/1060x280/111111/ffffff?text=NEW+SEASON',
  ],
  depositTiers: [
    { amount: 500,  bonus: 10 },
    { amount: 1000, bonus: 15 },
    { amount: 2500, bonus: 20 },
    { amount: 5000, bonus: 25 },
  ],
  balanceProblem: 'Проблемы с пополнением? Напишите нам в <a href="https://t.me/" target="_blank">Telegram</a>',
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
  const css = `
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --accent:        #e07830;
  --accent-hover:  #f0922e;
  --accent-glow:   rgba(224,120,48,0.20);
  --accent-dim:    rgba(224,120,48,0.10);
  --bg:            #0d0d0d;
  --bg-card:       #161616;
  --bg-elem:       #1e1e1e;
  --bg-hover:      #252525;
  --border:        rgba(255,255,255,0.07);
  --border-accent: rgba(224,120,48,0.30);
  --text:          #f0ece4;
  --text-muted:    rgba(240,236,228,0.50);
  --green:         #3dd68c;
  --radius:        10px;
  --radius-sm:     6px;
  --font-head:     'Rajdhani', sans-serif;
  --font-body:     'Inter', sans-serif;
  --sidebar-w:     290px;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  background: var(--bg) !important;
  font-family: var(--font-body) !important;
  -webkit-font-smoothing: antialiased;
}
body::-webkit-scrollbar { width: 4px; }
body::-webkit-scrollbar-track { background: var(--bg); }
body::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

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
  padding: 0 32px !important;
  height: 64px !important;
  display: flex !important;
  align-items: center !important;
  background: rgba(13,13,13,0.97) !important;
  backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid var(--border-accent) !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 200 !important;
}
.Header-module__logoWrapper,
.Header-module__logoImage { height: 38px !important; width: auto !important; }
.HeaderNav-module__link,
.SupportLink-module__link {
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  color: var(--text-muted) !important;
  opacity: 1 !important;
  transition: color .2s !important;
}
.HeaderNav-module__link:hover,
.SupportLink-module__link:hover { color: var(--accent) !important; }
.PlayerMenu-module__loginLink {
  background: var(--accent) !important;
  color: #fff !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  letter-spacing: 1px !important;
  padding: 9px 20px !important;
  border-radius: var(--radius-sm) !important;
  border: none !important;
  transition: background .2s !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
.PlayerMenu-module__loginLink:hover { background: var(--accent-hover) !important; }
.PlayerBalance-module__btn {
  background: var(--bg-elem) !important;
  border: 1px solid var(--border) !important;
  color: var(--text) !important;
  font-size: 13px !important;
  border-radius: var(--radius-sm) !important;
  transition: border-color .2s !important;
}
.PlayerBalance-module__btn:hover { border-color: var(--border-accent) !important; }
.PlayerMenu-module__wrapper { column-gap: 12px !important; }
.PlayerMenu-module__avatar {
  width: 38px !important; height: 38px !important;
  border-radius: 50% !important;
  border: 2px solid var(--border-accent) !important;
}

/* ── ДВУХКОЛОНОЧНЫЙ МАКЕТ ── */
#fr-layout {
  display: flex;
  gap: 20px;
  max-width: 1380px;
  margin: 24px auto;
  padding: 0 20px;
  align-items: flex-start;
}
#fr-sidebar {
  width: var(--sidebar-w);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 84px;
}
#fr-content { flex: 1; min-width: 0; }

/* ── КАРТОЧКА СЕРВЕРА ── */
.fr-server-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  transition: border-color .2s;
}
.fr-server-card:hover { border-color: var(--border-accent); }
.fr-server-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.fr-server-name {
  font-family: var(--font-head);
  font-size: 15px; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase;
  color: var(--text);
}
.fr-server-badge {
  background: rgba(61,214,140,0.15);
  color: var(--green);
  font-size: 11px; font-weight: 600;
  padding: 3px 10px; border-radius: 20px;
  border: 1px solid rgba(61,214,140,0.3);
}
.fr-server-body {
  display: flex; align-items: center;
  gap: 14px; margin-bottom: 14px;
}
.fr-server-circle {
  width: 56px; height: 56px;
  border-radius: 50%;
  border: 3px solid var(--accent);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  font-family: var(--font-head);
  font-size: 20px; font-weight: 700;
  color: var(--accent);
  box-shadow: 0 0 18px var(--accent-glow);
}
.fr-server-stats { display: flex; flex-direction: column; gap: 4px; }
.fr-server-stat { font-size: 12px; color: var(--text-muted); }
.fr-server-stat span { color: var(--text); font-weight: 500; }
.fr-server-ip {
  font-size: 11px; color: var(--text-muted);
  margin-bottom: 12px; letter-spacing: .5px;
}
.fr-server-ip span { color: var(--accent); }
.fr-server-btn {
  display: block; width: 100%;
  background: var(--accent);
  color: #fff !important;
  border: none; border-radius: var(--radius-sm);
  padding: 10px;
  font-family: var(--font-head);
  font-size: 13px; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase;
  text-align: center; text-decoration: none;
  cursor: pointer;
  transition: background .2s, box-shadow .2s;
}
.fr-server-btn:hover {
  background: var(--accent-hover);
  box-shadow: 0 4px 18px var(--accent-glow);
}

/* ── САЙДБАР-БЛОКИ (бонусы, соцсети) ── */
.fr-sidebar-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  transition: border-color .2s;
}
.fr-sidebar-block:hover { border-color: var(--border-accent); }
.fr-sidebar-block__title {
  font-size: 10px; font-weight: 600;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--text-muted); margin-bottom: 12px;
}
/* Таблица бонусов */
.fr-bonus-table { width: 100%; border-collapse: collapse; }
.fr-bonus-table tr { border-bottom: 1px solid var(--border); }
.fr-bonus-table tr:last-child { border-bottom: none; }
.fr-bonus-table td {
  padding: 7px 4px; font-size: 12px; color: var(--text-muted);
}
.fr-bonus-table td:last-child {
  text-align: right;
  font-family: var(--font-head);
  font-size: 14px; font-weight: 700; color: var(--accent);
}
/* Соцсети */
.fr-social-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 10px 14px;
  background: var(--bg-elem);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text) !important;
  text-decoration: none;
  font-size: 13px; font-weight: 500;
  transition: border-color .2s, background .2s;
  margin-bottom: 8px;
}
.fr-social-btn:last-child { margin-bottom: 0; }
.fr-social-btn:hover {
  border-color: var(--border-accent);
  background: var(--bg-hover);
}
.fr-social-btn svg { flex-shrink: 0; }

/* ── СЛАЙДЕР ── */
#fr-swiper-wrap {
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 18px;
}
#fr-swiper-wrap .swiper { border-radius: var(--radius); }
#fr-swiper-wrap .swiper-slide { height: 280px; background: #000; }
#fr-swiper-wrap .swiper-slide img { width: 100%; height: 100%; object-fit: cover; }
#fr-swiper-wrap .swiper-button-next,
#fr-swiper-wrap .swiper-button-prev {
  color: #fff !important;
  background: rgba(0,0,0,0.5) !important;
  width: 36px !important; height: 36px !important;
  border-radius: 50% !important;
}
#fr-swiper-wrap .swiper-button-next:after,
#fr-swiper-wrap .swiper-button-prev:after { font-size: 12px !important; font-weight: 900 !important; }
#fr-swiper-wrap .swiper-pagination-bullet-active { background: var(--accent) !important; }

/* ── КАТЕГОРИИ ── */
.Categories-module__categoriesBlock {
  display: flex !important; align-items: center !important;
  gap: 8px !important; margin: 0 0 16px !important; flex-wrap: wrap !important;
}
.Categories-module__categories {
  display: flex !important; flex-wrap: wrap !important;
  gap: 6px !important; justify-content: flex-start !important; margin: 0 !important;
}
.Categories-module__category {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  color: var(--text-muted) !important;
  font-size: 12px !important; font-weight: 600 !important;
  letter-spacing: 1px !important; text-transform: uppercase !important;
  padding: 8px 18px !important; border-radius: 4px !important;
  transition: all .2s !important;
}
.Categories-module__category:hover {
  border-color: var(--border-accent) !important; color: var(--text) !important;
}
.Categories-module__category.Categories-module__active {
  background: var(--accent) !important;
  border-color: var(--accent) !important; color: #fff !important;
}
.Search-module__wrapper {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important;
  height: 38px !important; margin-left: auto !important;
}
.Search-module__iconWrapper { background: transparent !important; }

/* ── ТОВАРЫ ── */
.Shop-module__wrapper .boxBody { background: transparent !important; padding: 0 !important; }
.Shop-module__wrapper .boxFooter { background: transparent !important; }
.Products-module__wrapper { gap: 10px !important; margin-top: 0 !important; }
.Product-module__wrapper {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  border-radius: var(--radius) !important;
  min-height: 200px !important;
  position: relative !important; overflow: hidden !important;
  background-image: none !important;
  transition: border-color .2s, transform .2s, box-shadow .2s !important;
  cursor: pointer !important;
}
.Product-module__wrapper:hover {
  border-color: var(--border-accent) !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 8px 30px rgba(0,0,0,0.5) !important;
}
.Product-module__name {
  font-family: var(--font-head) !important;
  font-size: 12px !important; font-weight: 700 !important;
  letter-spacing: .5px !important; text-transform: uppercase !important;
  color: #fff !important;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%) !important;
  padding: 20px 8px 8px !important; width: 100% !important;
  text-align: left !important; box-shadow: none !important;
  min-height: unset !important; display: flex !important; align-items: flex-end !important;
}
.Product-module__price {
  background: transparent !important; border-radius: 0 !important;
  margin: 0 8px 8px !important; padding: 0 !important;
  display: flex !important; align-items: center !important; gap: 6px !important;
}
.Product-module__price .span__price {
  font-family: var(--font-head) !important;
  font-size: 18px !important; font-weight: 700 !important; color: #fff !important;
}
.Product-module__discount {
  position: static !important;
  background: var(--accent) !important; color: #fff !important;
  font-size: 10px !important; font-weight: 700 !important;
  padding: 2px 6px !important; border-radius: 3px !important;
  text-transform: uppercase !important; margin: 0 !important;
  background-image: none !important;
}

/* ── МОДАЛКИ ── */
.ModalLayout-module__positionWrapper { background: rgba(0,0,0,0.8) !important; backdrop-filter: blur(8px) !important; }
.ModalLayout-module__modal {
  background: #161616 !important;
  border: 1px solid var(--border-accent) !important;
  border-radius: 14px !important;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7) !important;
}
.ProductModal-module__header,
.PlayerBalanceModal-module__header {
  background: var(--bg-elem) !important;
  border-bottom: 1px solid var(--border) !important;
  font-family: var(--font-head) !important;
  font-size: 18px !important; font-weight: 700 !important;
  letter-spacing: 2px !important; text-transform: uppercase !important;
  color: var(--text) !important;
  border-radius: var(--radius) var(--radius) 0 0 !important;
  justify-content: center !important;
}
.ModalLayout-module__modal .boxBody { background: #161616 !important; padding: 20px !important; }
.ItemContent-module__footer,
.PlayerBalanceModal-module__footer {
  background: var(--bg-elem) !important;
  border-top: 1px solid var(--border) !important;
  border-radius: 0 0 var(--radius) var(--radius) !important;
}
.productModalImg { filter: drop-shadow(0 4px 20px rgba(224,120,48,0.25)) !important; }
.productModalDescription {
  background: var(--bg-elem) !important; border-radius: var(--radius-sm) !important;
  padding: 12px !important; color: var(--text-muted) !important;
  font-size: 13px !important; border: 1px solid var(--border) !important; margin: 16px 0 !important;
}

/* ── ПОПОЛНЕНИЕ ── */
.PlayerBalanceModal-module__inputWrapper {
  background: var(--bg-elem) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; height: 44px !important;
}
.PlayerBalanceModal-module__currency {
  background: var(--bg-hover) !important; color: var(--accent) !important;
  font-weight: 700 !important; padding: 0 12px !important; height: 100% !important;
}
.PlayerBalanceModal-module__label { display: none !important; }
.Button-module__btn.Button-module__accent {
  background: var(--accent) !important; color: #fff !important;
  border: none !important; border-radius: var(--radius-sm) !important;
  font-weight: 600 !important; transition: background .2s !important;
}
.Button-module__btn.Button-module__accent:hover { background: var(--accent-hover) !important; }
.Button-module__btn.Button-module__gray {
  background: var(--bg-elem) !important; border: 1px solid var(--border) !important;
  color: var(--text-muted) !important; border-radius: var(--radius-sm) !important;
}
.Button-module__btn.Button-module__gray:hover { border-color: var(--accent) !important; color: var(--accent) !important; }

/* Бонус в модалке пополнения */
.fr-balance-problem {
  background: rgba(224,120,48,0.06); border: 1px solid rgba(224,120,48,0.15);
  border-radius: var(--radius-sm); padding: 8px 12px;
  font-size: 12px; color: var(--text-muted); margin-bottom: 14px;
  text-align: center; line-height: 1.6;
}
.fr-balance-problem a { color: var(--accent); }
.fr-deposit-bonus {
  background: var(--bg-elem); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 14px; margin-top: 14px;
}
.fr-deposit-bonus__title {
  font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;
}
.fr-deposit-bonus__tiers { display: flex; gap: 6px; margin-bottom: 10px; }
.fr-deposit-bonus__tier {
  flex: 1; background: var(--bg-card); border: 1px solid var(--border);
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

/* ── ПРОФИЛЬ / ИСТОРИЯ / КОРЗИНА ── */
.ProfileNav-module__body.boxBody {
  background: transparent !important; padding: 0 !important;
  display: flex !important; gap: 6px !important;
}
.ProfileNav-module__navItem {
  background: var(--bg-card) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; color: var(--text-muted) !important;
  padding: 10px 14px !important; gap: 8px !important; transition: all .2s !important; opacity: 1 !important;
}
.ProfileNav-module__navItem:hover, .ProfileNav-module__active {
  border-color: var(--border-accent) !important; color: var(--accent) !important; opacity: 1 !important;
}
.ProfileContent-module__body.boxBody,
.BasketContent-module__wrapper .boxBody,
.HistoryContent-module__wrapper .boxBody { background: var(--bg-card) !important; border-radius: var(--radius) !important; }
.BasketTable-module__tableHeader, .HistoryTable-module__tableHeader { background: var(--bg-elem) !important; border-radius: var(--radius-sm) !important; }
.BasketTable-module__tableLine:nth-child(2n-1),
.HistoryTable-module__tableLine:nth-child(2n-1) { background: var(--bg-elem) !important; border-radius: var(--radius-sm) !important; }
.Pagination-module__page:hover, .Pagination-module__page.Pagination-module__active { color: var(--accent) !important; }

/* ── ДРОПДАУН / КИТ / РУЛЕТКА ── */
.Selector-module__dropDownCurrentItem { background: var(--bg-elem) !important; border-radius: var(--radius-sm) !important; color: var(--text) !important; }
.Selector-module__dropDownList { background: var(--bg-elem) !important; border: 1px solid var(--border) !important; border-radius: var(--radius-sm) !important; }
.Selector-module__dropDownItem:hover, .Selector-module__dropDownItem.Selector-module__active { background: var(--bg-hover) !important; color: var(--accent) !important; }
.KitContent-module__containsItem {
  background: var(--bg-card) !important; border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important; height: 200px !important; transition: border-color .2s !important;
}
.KitContent-module__containsItem:hover { border-color: var(--border-accent) !important; }
.RouletteContent-module__lineWrapper { background: #111 !important; }
.RouletteContent-module__rouletteItemImg { background: var(--bg-card) !important; border-radius: var(--radius) !important; }

/* ── ФУТЕР ── */
.DesktopCopyright-module__wrapper {
  background: rgba(13,13,13,0.7) !important;
  border-radius: 0 var(--radius) 0 0 !important; font-size: 10px !important;
}
.DesktopCopyright-module__link { color: var(--accent) !important; }
.MobileCopyright-module__wrapper { background: var(--bg-card) !important; border-radius: var(--radius) !important; margin-top: 20px !important; }
.MobileCopyright-module__link { color: var(--accent) !important; }

/* ── МОБ. МЕНЮ ── */
.boxBody.PlayerMenuMobile-module__body { background: #111 !important; }

/* ── АНИМАЦИИ ── */
@keyframes fr-pulse  { 0%,100%{opacity:1} 50%{opacity:.35} }
@keyframes fr-ripple { to{transform:scale(2.8);opacity:0} }
@keyframes fr-fadein { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

/* ── АДАПТИВ ── */
@media (max-width: 900px) {
  #fr-layout { flex-direction: column; }
  #fr-sidebar { width: 100%; position: static; }
}
@media (max-width: 600px) {
  .Header-module__wrapper { padding: 0 12px !important; }
  #fr-layout { padding: 0 10px; }
}
  `;
  const style = document.createElement('style');
  style.id = 'fr-styles';
  style.textContent = css;
  document.head.appendChild(style);
})();

// ── ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ───────────────────────────────────

function initParticles() {
  if (document.getElementById('fr-particles')) return;
  const canvas = document.createElement('canvas');
  canvas.id = 'fr-particles';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.18;';
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  const pts = Array.from({ length: 55 }, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-.5)*.28, vy: (Math.random()-.5)*.28,
    r: Math.random()*1.4+.3, o: Math.random()*.4+.1,
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
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.hypot(dx,dy);
      if(d<110){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(224,120,48,${.06*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  })();
}

function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.Button-module__btn,.PlayerMenu-module__loginLink,.PlayerBalance-module__btn,.fr-server-btn,.fr-social-btn');
    if (!btn) return;
    const r = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;position:absolute;border-radius:50%;background:rgba(255,255,255,0.15);transform:scale(0);pointer-events:none;animation:fr-ripple 0.5s ease-out forwards;`;
    btn.style.position = 'relative'; btn.style.overflow = 'hidden';
    btn.appendChild(r); setTimeout(() => r.remove(), 600);
  });
}

function initCardAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, idx) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.opacity = '0'; el.style.transform = 'translateY(14px)';
      setTimeout(() => {
        el.style.transition = 'opacity .35s ease, transform .35s ease';
        el.style.opacity = '1'; el.style.transform = 'translateY(0)';
      }, idx * 40);
      obs.unobserve(el);
    });
  }, { threshold: 0.05 });
  const observe = () => document.querySelectorAll('.Product-module__wrapper').forEach(el => obs.observe(el));
  observe();
  const root = document.querySelector('.Products-module__wrapper, #app');
  if (root) new MutationObserver(observe).observe(root, { childList: true, subtree: true });
}

function buildLayout() {
  if (document.getElementById('fr-layout')) return null;
  const sidebar = document.createElement('div');
  sidebar.id = 'fr-sidebar';
  const content = document.createElement('div');
  content.id = 'fr-content';
  const layout = document.createElement('div');
  layout.id = 'fr-layout';
  layout.appendChild(sidebar);
  layout.appendChild(content);
  const shop = document.querySelector('.Shop-module__wrapper');
  if (shop) {
    const parent = shop.parentNode;
    content.appendChild(shop);
    parent.insertBefore(layout, parent.firstChild);
  } else {
    const main = document.querySelector('main');
    if (main) main.insertBefore(layout, main.firstChild);
  }
  return { sidebar, content };
}

function injectServerCard(sidebar, serverData) {
  if (!sidebar) return;
  const existing = sidebar.querySelector('.fr-server-card');
  const s = shopConfig.server;
  if (existing && serverData) {
    const circle = existing.querySelector('.fr-server-circle');
    const stat   = existing.querySelector('.fr-stat-players');
    if (circle) circle.textContent = serverData.online ?? '—';
    if (stat)   stat.innerHTML = `<span>${serverData.online ?? '—'}</span> из <span>${serverData.maxOnline ?? '—'}</span>`;
    return;
  }
  if (existing) return;
  const online    = serverData?.online    ?? '—';
  const maxOnline = serverData?.maxOnline ?? '—';
  const joining   = serverData?.joining   ?? 0;
  const card = document.createElement('div');
  card.className = 'fr-server-card';
  card.innerHTML = `
    <div class="fr-server-head">
      <span class="fr-server-name">${s.name}</span>
      <span class="fr-server-badge">Онлайн</span>
    </div>
    <div class="fr-server-body">
      <div class="fr-server-circle">${online}</div>
      <div class="fr-server-stats">
        <div class="fr-server-stat">Игроков: <span class="fr-stat-players">${online} из ${maxOnline}</span></div>
        <div class="fr-server-stat">Подключаются: <span>${joining}</span></div>
      </div>
    </div>
    <div class="fr-server-ip">connect: <span>${s.ip}</span></div>
    <a class="fr-server-btn" href="steam://connect/${s.ip}">Подключиться</a>
  `;
  sidebar.appendChild(card);
}

function injectSidebarExtras(sidebar) {
  if (!sidebar || sidebar.querySelector('.fr-bonus-block')) return;

  // Бонусы при пополнении
  const bonusBlock = document.createElement('div');
  bonusBlock.className = 'fr-sidebar-block fr-bonus-block';
  bonusBlock.innerHTML = `
    <div class="fr-sidebar-block__title">Бонус при пополнении</div>
    <table class="fr-bonus-table">
      ${shopConfig.depositTiers.map(t => `
        <tr>
          <td>от ${t.amount} ₽</td>
          <td>+${t.bonus}%</td>
        </tr>`).join('')}
    </table>
  `;
  sidebar.appendChild(bonusBlock);

  // Соцсети
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
    </a>
  `;
  sidebar.appendChild(socialBlock);
}

function injectSwiper(content) {
  if (!content || content.querySelector('#fr-swiper-wrap')) return;
  const wrap = document.createElement('div');
  wrap.id = 'fr-swiper-wrap';
  wrap.style.opacity = '0'; wrap.style.transition = 'opacity .4s';
  wrap.innerHTML = `
    <div class="swiper fr-swiper">
      <div class="swiper-wrapper">
        ${shopConfig.banners.map(src => `<div class="swiper-slide"><img src="${src}" alt="banner"></div>`).join('')}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  `;
  content.insertBefore(wrap, content.firstChild);
  function startSwiper() {
    new Swiper('.fr-swiper', {
      loop: true,
      autoplay: { delay: 6000, disableOnInteraction: false },
      navigation: { nextEl: '#fr-swiper-wrap .swiper-button-next', prevEl: '#fr-swiper-wrap .swiper-button-prev' },
      pagination: { el: '#fr-swiper-wrap .swiper-pagination', clickable: true },
    });
    setTimeout(() => { wrap.style.opacity = '1'; }, 100);
  }
  if (window.Swiper) {
    startSwiper();
  } else {
    if (!document.querySelector('link[href*="swiper"]')) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(css);
    }
    const js = document.createElement('script');
    js.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    js.onload = startSwiper;
    document.head.appendChild(js);
  }
}

function injectDepositBonus(modal) {
  if (!modal || modal.querySelector('.fr-deposit-bonus')) return;
  const form = modal.querySelector('form');
  if (!form) return;
  if (!modal.querySelector('.fr-balance-problem')) {
    const prob = document.createElement('div');
    prob.className = 'fr-balance-problem';
    prob.innerHTML = shopConfig.balanceProblem;
    form.parentNode.insertBefore(prob, form);
  }
  const block = document.createElement('div');
  block.className = 'fr-deposit-bonus';
  block.innerHTML = `
    <div class="fr-deposit-bonus__title">Бонус при пополнении</div>
    <div class="fr-deposit-bonus__tiers">
      ${shopConfig.depositTiers.map(t => `
        <div class="fr-deposit-bonus__tier" data-amount="${t.amount}" data-bonus="${t.bonus}">
          <div class="fr-deposit-bonus__tier-pct">+${t.bonus}%</div>
          <div class="fr-deposit-bonus__tier-amt">от ${t.amount}₽</div>
        </div>`).join('')}
    </div>
    <div class="fr-deposit-bonus__result">
      <span>Итого:</span>
      <span>
        <span class="fr-deposit-bonus__result-val">0 ₽</span>
        <span class="fr-deposit-bonus__result-bonus"></span>
      </span>
    </div>
  `;
  form.parentNode.insertBefore(block, form.nextSibling);
  const input = modal.querySelector('input[type="number"], input[name="amount"]');
  if (input) {
    const update = () => {
      const amount = parseInt(input.value) || 0;
      const active = shopConfig.depositTiers.slice().reverse().find(t => amount >= t.amount);
      const bonus  = active ? Math.round(amount * active.bonus / 100) : 0;
      modal.querySelectorAll('.fr-deposit-bonus__tier').forEach(el => {
        el.classList.toggle('fr-deposit-bonus__tier--active', !!(active && +el.dataset.amount === active.amount));
      });
      const val = modal.querySelector('.fr-deposit-bonus__result-val');
      const bon = modal.querySelector('.fr-deposit-bonus__result-bonus');
      if (val) val.textContent = (amount + bonus) + ' ₽';
      if (bon) { bon.textContent = bonus > 0 ? `+${bonus} ₽` : ''; bon.style.display = bonus > 0 ? 'inline' : 'none'; }
    };
    input.addEventListener('input', update);
    update();
  }
}

// ── ГЛАВНАЯ ФУНКЦИЯ ───────────────────────────────────────────
function main() {
  window.dispatchEvent(new CustomEvent('initState'));
  window.dispatchEvent(new CustomEvent('initComponentsManager'));
  window.dispatchEvent(new CustomEvent('initEventsManager'));

  // HEADER
  window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
    const logoW = document.querySelector('.Header-module__logoWrapper');
    if (logoW) {
      const img = document.createElement('img');
      img.src = shopConfig.logoSrc;
      img.alt = 'Florida Rust';
      img.className = 'Header-module__logoImage';
      logoW.replaceWith(img);
    }
    const loginBtn = document.querySelector('.PlayerMenu-module__loginLink');
    if (loginBtn) loginBtn.textContent = 'Войти';

    const nav = document.querySelector('.Header-module__nav, .HeaderNav-module__nav');
    if (nav) {
      [
        { label: 'Telegram', href: shopConfig.telegram },
        { label: 'Discord',  href: shopConfig.discord  },
        { label: 'ВКонтакте', href: shopConfig.vk      },
      ].forEach(({ label, href }) => {
        const a = document.createElement('a');
        a.className = 'HeaderNav-module__link';
        a.textContent = label; a.href = href; a.target = '_blank';
        nav.appendChild(a);
      });
    }

    const playerMenu = document.querySelector('.PlayerMenu-module__wrapper');
    if (playerMenu && !document.getElementById('fr-online')) {
      const badge = document.createElement('div');
      badge.id = 'fr-online';
      badge.style.cssText = 'display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:5px 12px;border-radius:20px;font-size:12px;white-space:nowrap;';
      badge.innerHTML = `
        <span style="width:7px;height:7px;border-radius:50%;background:#3dd68c;display:inline-block;animation:fr-pulse 2s infinite;flex-shrink:0;"></span>
        <span id="fr-online-n" style="color:#3dd68c;font-weight:600;">...</span>
        <span style="color:rgba(240,236,228,0.4);">онлайн</span>
      `;
      playerMenu.insertBefore(badge, playerMenu.firstChild);
    }
  });

  // SHOP PAGE
  window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', () => {
    const els     = buildLayout();
    const sidebar = els ? els.sidebar : document.getElementById('fr-sidebar');
    const content = els ? els.content : document.getElementById('fr-content');
    injectServerCard(sidebar, null);
    injectSidebarExtras(sidebar);
    injectSwiper(content);
    initCardAnimations();
  });

  // BALANCE MODAL
  window.componentsManager.addListener('BALANCE_MODAL', 'DID_MOUNT', () => {
    const modal = document.querySelector(
      '.PlayerBalanceModal-module__wrapper, .PlayerBalance-module__modal, [class*="BalanceModal"]'
    );
    if (modal) injectDepositBonus(modal);
  });

  // МОНИТОРИНГ
  window.eventsManager.addListener('MONITORING_LOADED', (data) => {
    if (!data) return;
    const servers = Array.isArray(data) ? data : (data.servers || [data]);
    const srv = servers[0];
    if (!srv) return;
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
    const circle = document.querySelector('.fr-server-circle');
    const stat   = document.querySelector('.fr-stat-players');
    const badge  = document.getElementById('fr-online-n');
    if (circle) circle.textContent = online;
    if (stat)   stat.textContent = `${online} из ${maxOnline}`;
    if (badge)  badge.textContent = online;
  });

  // PLAYER_LOADED
  window.eventsManager.addListener('PLAYER_LOADED', () => {
    const state = window.getState?.();
    const player = state?.player?.player;
    if (!player) return;
    const profileLink = document.querySelector('.PlayerMenu-module__profileLink');
    if (profileLink && !document.querySelector('.fr-avatar')) {
      const avatar = document.createElement('div');
      avatar.className = 'fr-avatar';
      avatar.style.cssText = 'border-radius:50%;border:2px solid rgba(224,120,48,0.4);width:38px;height:38px;overflow:hidden;cursor:pointer;flex-shrink:0;';
      avatar.innerHTML = `<img src="${player.avatar}" style="width:100%;height:100%;object-fit:cover;" alt="${player.username}">`;
      avatar.onclick = () => window.location.href = '/profile';
      profileLink.insertAdjacentElement('beforebegin', avatar);
      profileLink.style.display = 'none';
    }
  });

  window.componentsManager.load();
  window.eventsManager.load();
}

// ── ЗАПУСК ────────────────────────────────────────────────────
(function earlyInit() {
  if (!document.getElementById('fr-kf')) {
    const s = document.createElement('style');
    s.id = 'fr-kf';
    s.textContent = `
      @keyframes fr-pulse  { 0%,100%{opacity:1} 50%{opacity:.35} }
      @keyframes fr-ripple { to{transform:scale(2.8);opacity:0} }
    `;
    document.head.appendChild(s);
  }
  initParticles();
  initRipple();
})();

if (window.isAppReady) { main(); }
else { window.addEventListener('appReady', main); }
