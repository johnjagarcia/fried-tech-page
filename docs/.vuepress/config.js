module.exports = {
  title: "Fried Tech S.A.",
  description: "Fried Tech Web Site",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Nuestro equipo", link: "/team/" }
    ],
    lastUpdated: 'Última actualización'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

