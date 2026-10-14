const accordionItems = [...document.querySelectorAll(".accordion__item")];

function setAccordionItem(item, shouldOpen) {
  const button = item.querySelector(".accordion__trigger");
  const panel = item.querySelector(".accordion__panel");
  item.dataset.open = String(shouldOpen);
  button.setAttribute("aria-expanded", String(shouldOpen));
  panel.hidden = !shouldOpen;
}

accordionItems.forEach((item) => {
  item.querySelector(".accordion__trigger").addEventListener("click", () => {
    const shouldOpen = item.dataset.open !== "true";
    accordionItems.forEach((other) => setAccordionItem(other, false));
    setAccordionItem(item, shouldOpen);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Открыть меню");
    mainNav.classList.remove("is-open");
  });
});

if (
  typeof WOW === "function" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  new WOW({
    animateClass: "animate__animated",
    offset: 80,
    mobile: true,
  }).init();
}
