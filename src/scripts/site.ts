// Small progressive enhancements. Without JS every phone, anchor and list stays usable.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Header: "Зателефонувати" call panel (mobile) */
const callToggle = document.querySelector<HTMLButtonElement>("[data-call-toggle]");
const callPanel = document.querySelector<HTMLElement>("[data-call-panel]");
const setCall = (open: boolean) => {
  if (!callToggle || !callPanel) return;
  callToggle.setAttribute("aria-expanded", String(open));
  callPanel.hidden = !open;
};
callToggle?.addEventListener("click", () => setCall(callToggle.getAttribute("aria-expanded") !== "true"));

/* Full-screen menu: Esc, close button, closes after an anchor */
const menu = document.querySelector<HTMLElement>("[data-menu]");
const menuOpen = document.querySelector<HTMLButtonElement>("[data-menu-open]");
const menuClose = menu?.querySelector<HTMLButtonElement>("[data-menu-close]");
let lastFocus: HTMLElement | null = null;
const focusables = () =>
  Array.from(menu?.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]') ?? []).filter((el) => el.offsetParent !== null);
const openMenu = () => {
  if (!menu) return;
  setCall(false);
  lastFocus = document.activeElement as HTMLElement;
  menu.hidden = false;
  document.documentElement.style.overflow = "hidden";
  menuOpen?.setAttribute("aria-expanded", "true");
  menuClose?.focus();
};
const closeMenu = (restore = true) => {
  if (!menu || menu.hidden) return;
  menu.hidden = true;
  document.documentElement.style.overflow = "";
  menuOpen?.setAttribute("aria-expanded", "false");
  if (restore) lastFocus?.focus();
};
menuOpen?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", () => closeMenu());
menu?.querySelectorAll("[data-menu-link]").forEach((a) => a.addEventListener("click", () => closeMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (menu && !menu.hidden) closeMenu();
    else if (callToggle?.getAttribute("aria-expanded") === "true") { setCall(false); callToggle.focus(); }
  }
  if (e.key === "Tab" && menu && !menu.hidden) {
    const f = focusables();
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.matchMedia("(min-width: 1180px)").addEventListener("change", (m) => { if (m.matches) closeMenu(false); });
window.matchMedia("(min-width: 768px)").addEventListener("change", (m) => { if (m.matches) setCall(false); });

/* Doctors index: photo frame follows hover/focus of a name (desktop) */
const frame = document.querySelector<HTMLElement>("[data-dr-frame]");
if (frame) {
  const shots = Array.from(frame.querySelectorAll<HTMLElement>("[data-dr-shot]"));
  const caption = frame.querySelector<HTMLElement>("[data-dr-caption]");
  const show = (key: string, label: string) => {
    shots.forEach((s) => s.classList.toggle("is-active", s.dataset.drShot === key));
    if (caption) caption.textContent = label;
  };
  document.querySelectorAll<HTMLElement>("[data-dr]").forEach((row) => {
    const key = row.dataset.dr ?? "";
    const label = row.dataset.drLabel ?? "";
    row.addEventListener("mouseenter", () => show(key, label));
    row.addEventListener("focusin", () => show(key, label));
  });
}

/* Effect 5: fixed call bar (phones) after the first screen, hidden over the footer */
const bar = document.querySelector<HTMLElement>("[data-callbar]");
const hero = document.querySelector<HTMLElement>("[data-hero-doors]");
const footer = document.getElementById("kontakty");
if (bar && hero && "IntersectionObserver" in window) {
  let heroVisible = true; // true while the hero clinic buttons are on screen or still below it
  let footerVisible = false;
  const update = () => {
    const shown = !heroVisible && !footerVisible;
    bar.classList.toggle("is-shown", shown);
    bar.inert = !shown;
  };
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting || e.boundingClientRect.top > 0; update(); }).observe(hero);
  if (footer) new IntersectionObserver(([e]) => { footerVisible = e.isIntersecting; update(); }).observe(footer);
  update();
} else bar?.classList.add("is-shown");

export { reduce };
