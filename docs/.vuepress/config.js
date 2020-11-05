module.exports = {
  title: 'blog',
  description: '系统性学习，打造完善的知识体系',
  base: '/interview_blog/',
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
          title: 'vue3 UI',
          children: [
            'vue3/new',
            'vue3/intro',
            'vue3/big'
          ]
        },
        {
          title: 'JS 基础',
          children: [
            'jsBasis/chain',
            'jsBasis/extend',
            'jsBasis/deepClone',
            'jsBasis/throttle',
            'jsBasis/promise',
            'jsBasis/cros',
            'jsBasis/module'
          ]
        },
        {
          title: 'TypeScript',
          children: [
            'typescript/T',
          ]
        },
        {
          title: 'ajax & jsonp',
          children: [
            'ajax/ajax',
          ]
        },
        {
          title: 'webpack',
          children: [
            'webpackInfo/compile',
            'webpackInfo/myWebpack'
          ]
        },
        {
          title: 'http',
          children: [
            'http/cache'
          ]
        },
        {
          title: '浏览器原理',
          children: [
            'chrome/gc'
          ]
        },
        {
          title: '安全',
          children: [
            'safe/csrf'
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
        },
        {
          title: 'CSS',
          children: [
            'css/bfc',
            'css/flex'
          ]
        },
        {
          title: 'react',
          children: [
            'forReact/fiber'
          ]
        },
      ]
    }
  },
  markdown: {
    lineNumbers: true // 显示代码块行号
  }
};
