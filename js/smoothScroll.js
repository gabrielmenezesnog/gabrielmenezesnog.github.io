const link = document.querySelectorAll(".smoothScroll a[href^='#']");

function scrollToSection(event) {
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  if (href === "#projects" || href === "#academic") {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

link.forEach((item) => {
  item.addEventListener("click", scrollToSection);
});
