function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  if (!sections.length) return;

  if (!("IntersectionObserver" in window)) {
    sections.forEach((item) => item.classList.add("activate"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("activate");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -15% 0px" }
  );

  sections.forEach((item) => observer.observe(item));
}

initScrollAnimation();
