if (
  window.navigator.language === "pt" ||
  window.navigator.language === "pt-BR"
) {
  // html lang
  const lang = document.querySelector('html[lang="en"]');
  lang.setAttribute("lang", "pt-BR");

  // HTML title
  const title = document.querySelector("title");
  title.innerText = "Gabriel de Menezes - Portfólio";

  // HTML meta content
  const content = document.querySelector('meta[name="description"]');
  content.removeAttribute("content");
  content.setAttribute(
    `content`,
    `Portfólio de Gabriel Menezes - Desenvolvedor Front-End / Java`
  );

  // Header nav
  const nav = document.querySelectorAll("li");
  nav.forEach((item) => {
    if (item.outerHTML === `<li>top</li>`) {
      item.outerHTML = `<li>topo da página</li>`;
    }
    if (item.outerHTML === `<li>about me</li>`) {
      item.outerHTML = `<li>sobre mim</li>`;
    }
    if (item.outerHTML === `<li>experience</li>`) {
      item.outerHTML = `<li>experiência</li>`;
    }
    if (item.outerHTML === `<li>projects</li>`) {
      item.outerHTML = `<li>projetos</li>`;
    }
    if (item.outerHTML === `<li>academic</li>`) {
      item.outerHTML = `<li>formação</li>`;
    }
    if (item.outerHTML === `<li>contact</li>`) {
      item.outerHTML = `<li>contato</li>`;
    }
  });

  // introduction (main)
  const introduction = document.querySelectorAll(".introduction *");
  introduction.forEach((item) => {
    if (item.innerHTML === "welcome to my portfolio") {
      item.innerText = "bem-vindo(a) ao meu portfólio";
    }
    if (item.innerHTML === "I'm Gabriel de Menezes") {
      item.innerText = "Sou Gabriel de Menezes";
    }

    if (item.innerHTML === "Front-End Developer / Java") {
      item.innerText = "Desenvolvedor Front-End / Java";
    }

    if (item.innerHTML === "Colombo, Paraná - Brazil") {
      item.innerText = "Colombo, Paraná - Brasil";
    }

    if (item.innerHTML === "let's talk") {
      item.innerText = "contatar";
    }
    if (item.innerHTML === "my resume") {
      item.innerText = "currículo";
      item.setAttribute("href", "/resources/currículo.pdf");
    }
  });

  // skillbox
  const skills = document.querySelectorAll(".skills *");
  skills.forEach((item) => {
    if (item.innerHTML === "tools") {
      item.innerText = "ferramentas";
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71"><span class="bold grey-71"><span class="yellow bold">Jira / Kanban</span>, <span>React DevTools</span>, <span class="yellow bold">Flipper</span>, <span class="yellow bold">Figma</span> , <span>Git</span>/ <span>Github</span> , <span class="yellow bold">DBeaver</span> and <span>VSCode</span>.</span></p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71"><span class="bold grey-71"><span class="yellow bold">Jira / Kanban</span>, <span>React DevTools</span>, <span class="yellow bold">Flipper</span>, <span class="yellow bold">Figma</span> , <span>Git</span>/ <span>Github</span> , <span class="yellow bold">DBeaver</span> e <span>VSCode</span>.</span></p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">Java - <span class="yellow bold">Spring Boot</span>, <span class="yellow bold">SQL</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Java - <span class="yellow bold">Spring Boot</span>, <span class="yellow bold">SQL</span>.</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium dark-yellow-text"><span class="dark-yellow bold">React-Native</span>, <span class="dark-yellow bold">React-JS</span>, and <span class="dark-yellow bold">Vue-JS</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium dark-yellow-text"><span class="dark-yellow bold">React-Native</span>, <span class="dark-yellow bold">React-JS</span>, e <span class="dark-yellow bold">Vue-JS</span>.</p>`;
    }
  });

  // about me
  const about = document.querySelectorAll(".about *");
  about.forEach((item) => {
    if (item.innerHTML === "A little about myself") {
      item.innerText = "Sobre mim";
    }
    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">My name is Gabriel de Menezes Nogueira, I'm 22 years old, I'm from Colombo - Parnaná and I'm studying the 2nd period of the Systems Analysis and Development course at IFPR (Federal Institute of Paraná). I've been studying programming since I was 17, either on my own or at college. In my free time, I study creating projects and watching courses.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Meu nome é Gabriel de Menezes Nogueira, tenho 22 anos, sou de Colombo - Parnaná e estou cursando o 2° período do curso Análise e Desenvolvimento de Sistemas no IFPR (Instituto Federal do Paraná). Estudo sobre programação desde os 17 anos, seja por conta própria ou faculdade. No tempo livre, estudo criando projetos e vendo cursos.</p>`;
    }
  });

  // experience
  const experience = document.querySelectorAll(".experience *");
  experience.forEach((item) => {
    if (item.innerHTML === "Where i worked") {
      item.innerText = "Onde trabalhei";
    }

    if (
      item.outerHTML ===
      `<p class="s-text grey-71">I worked in the <span class="yellow bold">home office</span> modality with a team of 5 people developing the UniAstus application. My work was all focused on <span class="yellow bold">React-native</span>: I created the application design using <span class="yellow bold">Figma</span>, I did all the screens, navigations, interactions, <span class="yellow bold">redux and sagas</span>. Here I also learned concepts of agile methodologies, using <span class="yellow bold">Jira and Kanban</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text grey-71">Trabalhei na modalidade <span class="yellow bold">home office</span> em uma equipe de 5 pessoas desenvolvendo o aplicativo UniAstus. Meu trabalho foi totalmente focado em <span class="yellow bold">React-native</span>: criei o UI Design da aplicação utilizando o <span class="yellow bold">Figma</span>. Criei todas as telas, naveações, interações, <span class="yellow bold">redux e sagas</span>. Também aprendi e participei da utilização de metodoligias ágeis, usando <span class="yellow bold">Jira e Kanban</span>.</p>`;
    }

    if (item.innerHTML === "Next job") {
      item.innerText = "Próximo trabalho";
    }

    if (
      item.outerHTML ===
      `<p class="s-text grey-71">When I get a next job, I'll post it here.</p>`
    ) {
      item.outerHTML = `<p class="s-text grey-71">Quando entrar em outro emprego, o postarei aqui.</p>`;
    }
  });

  // projects
  const projects = document.querySelectorAll(".projects *");
  projects.forEach((item) => {
    if (item.innerHTML === "Things i created") {
      item.innerText = "Coisas que criei";
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">Created during Origamid's HTML and CSS course, it simulates an online shop for on-demand bicycles.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Projeto criado para treinar princípios do desenvolvimento web. Criado durante o curso de HTML, CSS da Origamid, é um site que simula uma loja online de venda de bicicletas feitas sob-demanda.</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">Site where you can find descriptions about various types of courses, as well as reports from people in the area in question.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Projeto criado para treinar Fetch API. É um site onde é possível encontrar descrições sobre vários tipos de cursos, bem como relatos de pessoas da área (em construção).</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">Project created to train JavaScript. Simulates an informative and protectionist website for some animal species.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Projeto criado para treinar JavaScript. Simula um website informativo e protecionista de algumas espécies de animais.</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">Personalized landing page for a client's sewing and clothing business.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Landing page personalizada para o negócio de costuras e confecções infantis de uma cliente.</p>`;
    }
  });

  // academic education
  const academic = document.querySelectorAll(".academic-education *");
  const recentAcademicXp = document.querySelector(".recentXp");
  const courses = document.querySelectorAll(".courses *");
  const languages = document.querySelectorAll(".languages *");

  if (
    recentAcademicXp.outerHTML ===
    `<p class="recentXp m-text medium grey-71">My most recent academic experience was the completion of high school 🎓 integrated into the Technical Computer course. In addition, I am studying higher in <span class="white bold">Technology in Systems Analysis and Development</span>.</p>`
  ) {
    recentAcademicXp.outerHTML =
      `<p class="recentXp m-text medium grey-71">Minha primeira experiência acadêmica relevante foi terminar o ensino médio integrado com um curso de Técnico em Informática. Ademais, estou cursando superior em <span class="white bold">Technologia em Análise e Desenvolvimento de Sistemas</span>.</p>`;
  }

  academic.forEach((item) => {
    if (item.innerHTML === "Academic Education") {
      item.innerText = "Formação";
    }

    if (
      item.outerHTML ===
      `<p class="xs-text grey-9c"><span class="yellow">HIGH SCHOOL</span> | 2017 - 2021</p>`
    ) {
      item.outerHTML = `<p class="xs-text grey-9c"><span class="yellow">ENSINO MÉDIO</span> | 2017 - 2021</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="xs-text grey-9c"><span class="yellow">COLLEGE</span> | 2023 - present</p>`
    ) {
      item.outerHTML = `<p class="xs-text grey-9c"><span class="yellow">FACULDADE</span> | 2023 - presente</p>`;
    }

    if (item.innerHTML === "Computer Technician") {
      item.innerText = "Técnico em Informática";
    }

    if (item.innerHTML === "Technology in Systems Analysis and Development") {
      item.innerText = "Technologia em Análise e Desenvolvimento de Sistemas";
    }

    if (item.innerHTML === "Certificates") {
      item.innerText = "Certificados";
    }
  });

  courses.forEach((item) => {
    if (item.outerHTML === `<li>HTML and CSS<span>46h</span></li>`) {
      item.outerHTML = `<li>HTML e CSS<span>46h</span></li>`;
    }

    if (item.outerHTML === `<li>Java - basic <span>40h</span></li>`) {
      item.outerHTML = `<li>Java - básico <span>40h</span></li>`;
    }

    if (item.outerHTML === `<li>Java - OOP <span>40h</span></li>`) {
      item.outerHTML = `<li>Java - POO <span>40h</span></li>`;
    }
  });

  languages.forEach((item) => {
    if (item.innerHTML === "Languages") {
      item.innerText = "Idiomas";
    }

    if (
      item.outerHTML ===
      `<li><span class="white ">Portuguese</span>/ native</li>`
    ) {
      item.outerHTML = `<li><span class="white ">Português</span>/ nativo</li>`;
    }

    if (
      item.outerHTML ===
      `<li><span class="white ">English</span>/ intermediate</li>`
    ) {
      item.outerHTML = `<li><span class="white ">Inglês</span>/ intermediário</li>`;
    }
  });

  //footer and mobile contact section
  const footer = document.querySelectorAll(".footer-text *");
  footer.forEach((item) => {
    if (
      item.outerHTML ===
      `<p>I am <span class="yellow bold">available</span> for new <span class="yellow bold">projects</span> and <span class="yellow bold">hires</span> at the moment. Contact me and we'll set up a conversation 👋</p>`
    ) {
      item.outerHTML = `<p>Estou <span class="yellow bold">disponível</span> para novos <span class="yellow bold">projetos</span> e <span class="yellow bold">contratações</span> no momento. Entre em contato comigo para que possamos marcar uma conversa 👋</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text">Design and development by <span class="white">Gabriel de Menezes</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text">Design e desenvolvimento por <span class="white">Gabriel de Menezes</span>.</p>`;
    }
  });
}
