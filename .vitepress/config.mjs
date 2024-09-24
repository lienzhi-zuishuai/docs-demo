import { defineConfig } from 'vitepress'

import { set_sidebar } from "C:/Users/Administrator/Desktop/vitepress/.vitepress/utils/auto_sidebar.mjs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的厉害的文档项目",
  description: "A VitePress Site",
  themeConfig: {
    
    sidebar:false,
    aside:"left",
    outlineTitle:"你还哦", 
    logo:'/logo.png',
    nav: [
      { text: '家', items: [
        {text:'首页',link:'/'},
        {text:'markdown事例',link:'/markdown-examples'}
      ]},
      { text: '事例', link: '/markdown-examples' },
      {text:"自动生成侧边栏1",link:"/front-end/react/"},
      {text:"自动生成侧边栏",link:"/backend/react/"},
      {text:"两边栏演示",link:"/两边栏演示"}

    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // markdown是轻量级的标记语言，#
    //  sidebar: { "/front-end/react/": set_sidebar("/front-end/react/"), 
    //  "/backend/react/": set_sidebar("/backend/react/"), 
    // },//是指侧边栏

    socialLinks: [
      { icon: 'github', link: 'https://baidu.com' }
    ],
    footer:{
      copyright:"Copyright@ 2023 Enzhi Li"
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
     // 设置搜索框的样式
    
})
