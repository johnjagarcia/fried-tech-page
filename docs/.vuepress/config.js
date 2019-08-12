module.exports = {
  title: "Fried Technologies",
  description: "Fried Technologies Site",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    logo: '/icons/blackhole.svg',
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
  }/*,

  locales: {
    '/': {
      lang: 'es-CO',
      title: 'VuePress',
      description: 'Página web de Fried Technologies'
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Fried Technologies Site'
    }
  } */
};

