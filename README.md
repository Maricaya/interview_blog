https://juejin.im/post/6881431951702491143
# vue3 UI 轮子项目亮点
- 组建库用的技术栈
    - vue3 的新技术
- 三种模块方式
- 按需加载功能
    - babel-import-plugin
- 自定义主题色功能
- tsconfig的配置
- 代码格式规范
- 版本号管理
- 泛型

# react 项目
- fiber
- 函数组件和类组件
    - 闭包陷阱

# node SSR 项目
- 项目启动
- SSR 对性能优化的提升在哪里
- SSR 优缺点
- SSR 性能优化，node 中间层细节处理

# 排课项目
- 虚拟列表，固定高度和非固定高度
- webpack 优化

面试可能的问题
# js 基础
- 原型链 new this 闭包
- 实现一个 Symbol
- 异步
    - 手写 promise/promise.all/promise.race
        - 并发限制的异步调度器，保证同时最多两个任务
        - 解决 Promise 在 forEach 是并行，改成串行
    - async await 原理
        - async await 和 promise 的区别
- 防抖/节流
- 继承
- 对象的拷贝
- 函数柯里化
- 实现 eventbus
    - 发布订阅模式 和 观察者模式的区别

# 工程化
webpack 优化
- loader plugin
- 描述 webpack 的构建过程

# 网络
- 缓存
- 跨域
    - 原因
    - 解决方案
- http1 vs http2
- 封装简易 axios
```js
fetch({
   url: 'xxx',
   method: 'GET | POST | JSONP',
   params: {},
   timeout: 1000
}).then().catch()
```
    - jsonp
# 浏览器

# 框架篇
- vue 
  - 
  - render 函数简易实现

# 安全性相关
- xss
- crsf
- sql 注入

