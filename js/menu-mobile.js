const nav = document.getElementById("nav");
const buttonMobile = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");

function setMenu(open) {
  nav.classList.toggle("active", open);
  document.body.style.overflow = open ? "hidden" : "";
  buttonMobile.setAttribute("aria-expanded", open);
  window.dispatchEvent(new CustomEvent("menuchange", { detail: { open } }));
}

buttonMobile.addEventListener("click", () => {
  setMenu(!nav.classList.contains("active"));
});

// close after choosing a section, on Escape, or when growing to the desktop layout
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("active")) {
    setMenu(false);
    buttonMobile.focus();
  }
});

window.matchMedia("(min-width: 801px)").addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});
