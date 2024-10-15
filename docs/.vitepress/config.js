// docs/.vitepress/config.js
const base = "/souvyp/"
export default {
  // 站点级选项
  title: "是柠新呀的博客", // 网站标题
  description: "是柠新呀用来写博客的地方", // 网站描述
 head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `/favicon.ico` }],
  ],
  themeConfig: {
    // 主题级选项
    nav: [
      { text: '关于', link: '/about' },
      {
        text: '大前端',
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },
        ]
      }
    ],
     sidebar: {
      "/bigFrontEnd/html/": {
        text: "html",
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "html1", link: "/bigFrontEnd/html/html1" },
          { text: "html2", link: "bigFrontEnd/html/html2" },
        ],
      },
      "/bigFrontEnd/css/": {
        text: "css",
        items: [
          { text: "css1", link: "/bigFrontEnd/css/css1" },
          { text: "css2", link: "/bigFrontEnd/css/css2" },
        ],
      },
      "/bigFrontEnd/js/": {
        text: "js",
        items: [
          { text: "js1", link: "/bigFrontEnd/js/js1" },
          { text: "js2", link: "/bigFrontEnd/js/js2" },
        ],
      },
    },
     docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
  },
};

