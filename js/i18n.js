// English is the default content in the HTML. Elements with data-pt* attributes
// hold their Brazilian Portuguese version, swapped in when the visitor prefers it.
const LANG_KEY = "portfolio-lang";
const toggle = document.getElementById("lang-toggle");

const attrs = [
  { data: "pt", apply: (el, value) => (el.innerHTML = value), read: (el) => el.innerHTML },
  { data: "ptLabel", apply: (el, value) => el.setAttribute("aria-label", value), read: (el) => el.getAttribute("aria-label") },
  { data: "ptAlt", apply: (el, value) => el.setAttribute("alt", value), read: (el) => el.getAttribute("alt") },
  { data: "ptHref", apply: (el, value) => el.setAttribute("href", value), read: (el) => el.getAttribute("href") },
];

const kebab = (name) => "data-" + name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());

// remember the English text once so the toggle can go back and forth
attrs.forEach(({ data, read }) => {
  document.querySelectorAll(`[${kebab(data)}]`).forEach((el) => {
    el.dataset[data + "En"] = read(el);
  });
});

function setLanguage(lang) {
  const pt = lang === "pt";
  attrs.forEach(({ data, apply }) => {
    document.querySelectorAll(`[${kebab(data)}]`).forEach((el) => {
      apply(el, pt ? el.dataset[data] : el.dataset[data + "En"]);
    });
  });

  document.documentElement.lang = pt ? "pt-BR" : "en";
  document.title = pt ? "Gabriel de Menezes - Portfólio" : "Gabriel de Menezes - Portfolio";
  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      "content",
      pt
        ? "Portfólio de Gabriel de Menezes Nogueira - Desenvolvedor Full Stack com 5 anos de experiência em React, React Native, Next.js, Node.js e AWS."
        : "Gabriel de Menezes Nogueira's online portfolio - Full Stack Developer with 5 years of experience in React, React Native, Next.js, Node.js and AWS."
    );

  // the button offers the *other* language
  toggle.textContent = pt ? "EN" : "PT";
  toggle.setAttribute("aria-label", pt ? "Switch to English" : "Mudar para português");
  toggle.dataset.lang = lang;

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* storage can be blocked; the preference just won't persist */
  }
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch (e) {
    /* ignore */
  }
  return (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en";
}

toggle.addEventListener("click", () => {
  setLanguage(toggle.dataset.lang === "pt" ? "en" : "pt");
});

toggle.dataset.lang = "en";
if (initialLanguage() === "pt") setLanguage("pt");
