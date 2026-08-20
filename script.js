const personas = [
  [
    ["⌕", "Scouting com foco", "Use filtros objetivos para reduzir ruído e chegar a perfis relevantes."],
    ["◎", "Perfis com contexto", "Avalie trajetória, vídeos e informações importantes antes do primeiro contato."],
    ["↗", "Captação mais ágil", "Organize sua descoberta e avance nas oportunidades com mais clareza."],
  ],
  [
    ["◎", "Rede organizada", "Acompanhe talentos e centralize contatos em um só ambiente."],
    ["⌕", "Novos perfis", "Descubra atletas alinhados ao seu trabalho e à sua estratégia."],
    ["↗", "Negociações que avançam", "Crie conexões com mais agilidade, contexto e proximidade."],
  ],
  [
    ["⌕", "Visão de campo", "Encontre perfis e oportunidades que combinam com sua experiência."],
    ["◎", "Conexões qualificadas", "Aproxime-se de atletas, clubes e projetos dentro do futebol."],
    ["↗", "Sua trajetória em movimento", "Mostre seu trabalho e abra espaço para a próxima oportunidade."],
  ],
];

const personaTabs = document.querySelectorAll(".persona-tabs button");
const benefits = document.querySelector(".pro-benefits");

function renderBenefits(items) {
  if (!benefits) return;

  benefits.replaceChildren(
    ...items.map(([icon, title, text]) => {
      const article = document.createElement("article");
      const symbol = document.createElement("span");
      const copy = document.createElement("div");
      const heading = document.createElement("b");
      const description = document.createElement("p");

      symbol.setAttribute("aria-hidden", "true");
      symbol.textContent = icon;
      heading.textContent = title;
      description.textContent = text;
      copy.append(heading, description);
      article.append(symbol, copy);
      return article;
    }),
  );
}

personaTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    personaTabs.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderBenefits(personas[index]);
  });
});
