module.exports = {
  title: 'blog',
  description: '系统性学习，打造完善的知识体系',
  base: '/blog/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebarDepth: 0,
    nav: [
      {text: '文章目录', link: '/'},
      // {text: 'github', link: 'https://github.com/ConardLi'},
    ],
    sidebar: {
      '/': [
        '',
        {
          // collapsable: true,
          title: '函数式编程',
          children: [
            'functional/currify'
          ]
        },
        {
          title: '原型链',
          children: [
            'prototype/chain',
            'prototype/extend'
          ]
        },
        {
          title: '异步',
          children: [
            'promise/ajax',
            'promise/promise',
          ]
        },
        {
          title: '设计模式',
          children: [
            'pattern/observer'
          ]
        },
        {
          title: 'Vue',
          children: [
            'vue/template',
            'vue/model',
            'vue/router',
          ]
        },
        {
          title: 'SSR',
          children: [
            'ssr/intro'
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true // 显示代码块行号
  }
};
