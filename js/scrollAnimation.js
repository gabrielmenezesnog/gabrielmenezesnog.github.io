function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowStarPoint = window.innerHeight * 0.6;

  if (sections.length) {
    function animateScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowStarPoint;
        if (sectionTop < 0) {
          item.classList.add("activate");
        }
      });
    }

    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}

initScrollAnimation();