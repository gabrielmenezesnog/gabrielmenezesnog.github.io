if (
  window.navigator.language === "pt" ||
  window.navigator.language === "pt-br"
) {
  // html lang
  const lang = document.querySelector('html[lang="en"]');
  lang.setAttribute("lang", "pt-br");

  // HTML title
  const title = document.querySelector("title");
  title.innerText = "Gabriel de Menezes - Portfólio";

  // Header nav
  const nav = document.querySelectorAll("li");
  nav.forEach((item) => {
    if (item.innerText === "top") {
      item.innerText = "topo da página";
    }
    if (item.innerText === "about me") {
      item.innerText = "Sobre mim";
    }
    if (item.innerText === "experience") {
      item.innerText = "experiência";
    }
    if (item.innerText === "projects") {
      item.innerText = "projetos";
    }
    if (item.innerText === "academic") {
      item.innerText = "formação";
    }
    if (item.innerText === "contact") {
      item.innerText = "contato";
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

    if (item.innerHTML === "Web Developer - UX/UI Designer") {
      item.innerText = "Desenvolvedor Web - UX/UI Designer";
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
      `<p class="s-text medium grey-71">I learned <span class="bold white">UX/UI Design</span> with <span class="yellow bold">Figma</span> , versioning with <span class="yellow bold">Git</span>/ <span class="yellow bold">Github</span> (via Linux) and code editing with VS Code.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Aprendi <span class="bold white">UX/UI Design</span> com <span class="yellow bold"> Figma</span>, versionamento com <span class="yellow bold">Git</span>/ <span class="yellow bold">Github</span> (via Linux) e edição de código pelo VS Code.</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">My first contact with programming was with the <span class="yellow bold">Java</span> language. I also have knowledge with <span class="yellow bold">json</span> (API's) and <span class="yellow bold">node.js</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">A primeira linguagem de programação que tive contato foi <span class="yellow bold">Java</span>. Também possuo conhecimento em <span class="yellow bold">json</span> (API's) e <span class="yellow bold">node.js</span>.</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium dark-yellow-text">My area of expertise. This is where most of my efforts are concentrated: <span class="dark-yellow bold">HTML</span>, <span class="dark-yellow bold">CSS</span> and <span class="dark-yellow bold">JavaScript</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium dark-yellow-text">Minha área de atuação. Aqui é onde as minhas melhores habilidades estão concentradas: <span class="dark-yellow bold">HTML</span>, <span class="dark-yellow bold">CSS</span> e <span class="dark-yellow bold">JavaScript</span>.</p>`;
    }
  });

  // about me
  const about = document.querySelectorAll(".about *");
  about.forEach((item) => {
    if (item.innerHTML === "A little about myself") {
      item.innerText = "Um pouco sobre mim";
    }
    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">My name is Gabriel de Menezes Nogueira, I'm Brazilian, I'm 20 years old and I really like creating websites and web design!</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71"> Meu nome é Gabriel de Menezes Nogueira, tenho 20 anos e sou apaixonado por UI Design e desenvolvimento web.</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">I've been in contact with back-end programming since 2017, in the Java language. But in January 2022 I started studying <span class="yellow bold">front-end</span> development, I fell in love with this branch and <span class="yellow bold">I love what I do</span>.</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Estive em contato com programação back-end desde 2017, com a linguagem Java. Mas em janeiro de 2022 iniciei meus estudos no desenvolvimento <span class="yellow bold">front-end</span>, me apaixonei pelo ramo e hoje em dia eu <span class="yellow bold">amo</span> o que faço!</p>`;
    }

    if (
      item.outerHTML ===
      `<p class="s-text medium grey-71">Influenced by a teacher, I always seek to develop <span class="yellow bold">accessible</span> and <span class="yellow bold">inclusive</span> products for all audiences so that they have the best possible experiences. Development is a continuous learning, I study every day and I will continue to do so for the rest of my days!</p>`
    ) {
      item.outerHTML = `<p class="s-text medium grey-71">Atento nas demandas do mercado, sempre busco criar produtos <span class="yellow bold">acessíveis</span> e <span class="yellow bold">inclusivos</span> para todos os públicos e para que tenham as melhores experiências possíveis. O desenvolvimento é um aprendizado contínuo, e por isso continuarei estudando e aprimorando todos os dias!</p>`;
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
      `<p class="s-text grey-71">Here I got my first jobs. I developed small projects as a <span class="yellow bold">freelancer</span> while studying web development. I did both <span class="bold white">junior UX/UI Design</span> and <span class="bold white">web developer</span> work.</p>`
    ) {
      item.outerHTML = `<p class="s-text grey-71">Aqui consegui meus primeiros trabalhos. Desenvolvi pequenos projetos como <span class="yellow bold">freelancer</span> enquanto estudava o início de desenvolvimento web. Fiz trabalhos como júnior em <span class="bold white">UX/UI Design</span> e <span class="bold white">desenvolvimento web</span>.</p>`;
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
      item.outerHTML = `<p class="s-text medium grey-71">Projeto criado para treinar alguns princípios de Rest API. É um site onde é possível encontrar descrições sobre vários tipos de cursos, bem como relatos de pessoas da área.</p>`;
    }
  });

  // academic education
  const academic = document.querySelectorAll(".academic-education *");
  const recentAcademicXp = document.querySelector(".recentXp");
  const courses = document.querySelectorAll(".courses *");
  const languages = document.querySelectorAll(".languages *");

  recentAcademicXp.outerHTML = `<p class="recentXp m-text medium grey-71">Minha mais recente realização acadêmica foi a conclusão do <span class="white bold">ensino médio 🎓 </span>integrado ao curso Técnico em Informática. Além disso, me mantenho <span class="yellow bold">atualizado</span> fazendo <span class="yellow bold">cursos intensivos</span> online</span>.</p>`;

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

    if (item.innerHTML === "Computer Technician") {
      item.innerText = "Técnico em Informática";
    }

    if (item.innerHTML === "Certificates") {
      item.innerText = "Certificados";
    }
  });

  courses.forEach((item) => {
    if (
      item.outerHTML === `<li>HTML, CSS and JavaScript <span>46h</span></li>`
    ) {
      item.outerHTML = `<li>HTML, CSS e JavaScript <span>46h</span></li>`;
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
      `<li><span class="white ">English</span>/ advanced</li>`
    ) {
      item.outerHTML = `<li><span class="white ">Inglês</span>/ avançado</li>`;
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
