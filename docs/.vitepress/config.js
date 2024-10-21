// .vitepress/config.js

const base = "/blog/";
export default {
  base,
  // 站点级选项
  title: "millet的博客",
  description: "是millet用来写博客的地方",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
  ],
  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      {
        text: "大前端",
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },
          { text: "vue", link: "/bigFrontEnd/vue/" },
            { text: "vsCode", link: "/bigFrontEnd/vsCode/" },
        ],
      },
      { text: "关于", link: "/about" },
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
      "/bigFrontEnd/vue/": {
        text: "vue",
        items: [
          { text: "vue1", link: "/bigFrontEnd/vue/vue1" },
          { text: "vue2", link: "/bigFrontEnd/vue/vue2" },
        ],
      },
      "/bigFrontEnd/vsCode/": {
        text: "vsCode",
        items: [
          { text: "vscode1", link: "/bigFrontEnd/vsCode/vscode1" },
        ],
      },
    },
  },
};
