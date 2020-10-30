module.exports = {
  title: 'blog',
  description: '系统性学习，打造完善的知识体系',
  base: '/docs/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebarDepth: 2,
    nav: [
      {text: '文章目录', link: '/'},
      // {text: 'github', link: 'https://github.com/ConardLi'},
    ],
    sidebar: {
      '/': [
        '',
        {
          title: 'JS 基础',
          children: [
            'jsBasis/deepClone',
            'jsBasis/throttle',
            'jsBasis/chain',
            'jsBasis/extend'
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
          title: '函数式编程',
          children: [
            'functional/currify'
          ]
        },
        {
          title: 'Vue',
          children: [
            'vueBasis/template',
            'vueBasis/model',
            'vueBasis/router',
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
