// Smooth scrolling itself is handled by CSS (scroll-behavior + scroll-padding-top).
// This only highlights the section currently in view in the header menu.
const menuLinks = document.querySelectorAll("#menu a[href^='#']");
const sectionLinks = new Map();

menuLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section && link.getAttribute("href") !== "#top") {
    sectionLinks.set(section, link);
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = sectionLinks.get(entry.target);
        if (!link) return;
        link.classList.toggle("current", entry.isIntersecting);
        if (entry.isIntersecting) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sectionLinks.forEach((_, section) => observer.observe(section));
}
