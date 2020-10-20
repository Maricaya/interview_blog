https://juejin.im/post/6881431951702491143
---
1. 每天2道算法题
2. webpack 编译优化/打包优化
3. vuex 原理
4. 封装 ajax 
webpack
    - tree shaking
    - https://juejin.im/post/6844903998634328072#heading-8
---
    

# vue3 UI 轮子项目亮点
- 组件库用的技术栈
    - vue3 的新技术
        - vite 插件
        - koa 的原理 vs express
    - setup
    - v-model
    - watchEffect
    - react hooks
- 三种模块方式
    - https://cn.vuejs.org/v2/guide/installation.html#%E6%9C%AF%E8%AF%AD
    - umd -> 
    - commonjs
    - es module
- 按需加载功能
https://juejin.im/post/6844904147049775118#heading-0
    - 怎么实现
        - input button
        - webpack(怎么配置)
    - babel-import-plugin(使用)
        - import {button} from 'ui'
    - dist/input/button.js / dist/input/button.css
- 自定义主题色功能
- tsconfig 的配置
- 代码格式规范
- 版本号管理
- 泛型

# react 项目
- fiber
- 函数组件和类组件
    - 闭包陷阱
- react hooks
    - promise封装setstate
    - redux基本组成和设计单向数据流

# node SSR 项目
- 自动部署
- nginx
- 项目启动
- SSR 对性能优化的提升在哪里
    - 优化页面的指标：如何定义首屏渲染时间，观察占用内存
- SSR 优缺点
- SSR 性能优化，node 中间层细节处理
    - express ctx 中间键代码实现

# 排课项目
- 虚拟列表，固定高度和非固定高度
- LocalStorage 和 vuex 之间联系（插件）辐射到相关问题
- webpack 优化 tree shaking
- crsf token
- travis ci 
- 测试
<!------------------------------------------------>
面试可能的问题
- html meta
# js 基础
- 原型链 new this 闭包
- 箭头函数
- bind/call/apply

- 异步
    - 手写 promise/promise.all/promise.race
        - 并发限制的异步调度器，保证同时最多两个任务
        - 解决 Promise 在 forEach 是并行，改成串行
    - async await 原理
        - async await 和 promise 的区别
- 防抖/节流
- 继承(优缺点)
    - prototype继承的实现
    - instance of 
- ES6
- 对象的拷贝
- 函数柯里化
    - 实现求和sum，支持sum(1), sum(1,2,3,4), sum(1)(2)(3),  console.log(sum(1)(2,3)(4)) = 10
    - taskSum(1000,()=>{console.log(1)}).task(1200,()=>{console.log(2)}).task(1300,()=>{console.log(3)})，这里等待1s，打印1，之后等待1.2s，打印2，之后打印1.3s，打印3
- 实现 eventbus
    - 发布订阅模式 和 观察者模式的区别
- 链式调用
    - chain = new Chain, chain.eat().sleep(5).eat().sleep(6).work()
- 判断数组的方式
- 千位加逗号（正则，非正则）
- 当前时间格式化处理

# TypeScript
- TS 的优点，和 vue2 结合有什么问题
- TS 的高级类型
- 泛型，作用，使用中要注意的点
- TypeScript 中的 interface 和 抽象类 的区别
- readonly 和 const 的区别

# 工程化
webpack 优化
- 必考：有哪些常见 loader 和 plugin，你用过哪些？
- 英语题：loader 和 plugin 的区别是什么？
- 打包优化 / 首页优化
- 必考：如何按需加载代码？
- 必考：如何提高构建速度？
    https://juejin.im/post/6844903651291447309
- 描述 webpack 的构建过程
- 打包原理
- wepack-dev-server 热更新功能实现原理
- 转义出的文件过大怎么办？
    https://juejin.im/post/6844904071736852487#heading-1

转义出的文件过大怎么办

# 框架篇
- vue 
  - 双向绑定原理（手写）
  - model -> view, view -> model
    v-model是v-bind和v-on的语法糖。
    v-bind即model=>view，当model数据发生变化，在setter中，去触发对应组件重新生成Vnode，对比新旧虚拟树，更新差异。
    v-on即view=>model,view操作后，触发事件，调用回调函数，在回调函数中更新model
  - 虚拟 dom/diff 算法
    - vue key对性能的影响
  - render （createElement）函数简易实现，template 怎么实现的
    - 2. 
    ```
    实现一个template 方法 template(str, data)   
        'my name is {{name}}, age is {{age }}'  
        { name: 'tom', age: 16 }
        my name is tom, age is 16
    ```
  - vue的生命周期及说明
  - vue router 实现原理
    - 按需加载
    - 路由监听的原理
  - vuex 原理
    - https://zhuanlan.zhihu.com/p/78981485
    - https://juejin.im/entry/6844903661793984526
  - Computed 和 watch 的区别
    - computed的缓存以及根据data属性响应的原理 (发布订阅模式)
  - NextTick 的作用及内部怎么实现（Promise.then、mutationObserve、/ settimeout）

# 网络
- 缓存
- 跨域
    - 原因
    - 解决方案
- http1 vs http2 vs https
    - http1 与 http2 的区别
    - 都说要减少 https 的请求，https 为什么慢 ？
- 封装简易 axios
https://juejin.im/post/6844903532752044040
```js
fetch({
   url: 'xxx',
   method: 'GET | POST | JSONP',
   params: {},
   timeout: 1000
}).then().catch()
```
    - jsonp
        - 防重名的jsonp
- DNS 解析
    dns查询的过程（迭代/递归）
- TCP 三次握手/四次挥手
    - tcp为什么是可靠的 

# 浏览器
- event loop vs （node 下的）
- 多线程环境 web worker
- V8垃圾回收机制
- 浏览器缓存
    - cookie
    - cookie在一级域名和二级域名的读取问题

# 安全性相关
- xss
- crsf
- sql 注入

# 算法题
二叉树的中序遍历、链表、排序、leetcode多刷
- 排序题
- 实现数据流形式的寻找第 k 大的数
- 合并两个有序链表
- 数组A，数字N，A中找到a,b使a+b=N
- 最长子序列
- 二叉树搜寻
- 给定一个数组，形如 [1, 1, 2 , 3, 3, 3, 3, 4, 6, 6]，给定一个数 n，例如 3，找出给定的数 n 在数组内出现的次数，要求时间复杂度小于 O(n)
- 手写代码二叉树深度为n的遍历，遍历有哪几种方式
- ['a','b'],['A','B'],['1','0']，输出['aA1','aA0','aB1','aB0','bA1','bA0','bB1','bB0']，算法的排列组合问题
- 从排好序的两个链表中，找到相同的节点，并输出链表

# css
- flex flex-s
- 实现梯形
- BFC 为什么形成，作用
- 回到顶部的动画js实现
- 字符串，得出最长的没有重复字符的子串长度
- css实现正方形div水平垂直居中
- 上中下三栏布局
