---
sidebarDepth: 3
---

# 打包原理

## 什么是模块

由于前后端 JavaScript 分别搁置在 HTTP 的两端，它们扮演的角色不同，侧重点也不一样。
- 浏览器端的 JavaScript 需要经历从一个服务器端分发到多个客户端执行
- 而服务器端 JS 则是相同的代码需要多次执行。
- 前者的瓶颈在于宽带，后者的瓶颈则在于 CPU 等内存资源。
- 前者需要通过网络加载代码，后者则需要从磁盘中加载，两者的加载速度也不是在一个数量级上的。 

### 后端
所以前后端的模块定义不是一致的，其中服务器端的模块定义为：

- CJS（CommonJS）：旨在用于服务器端 JavaScript 的同步定义，Node 的模块系统实际上基于 CJS；

但 CommonJS 是以同步方式导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大，
但在浏览器端，如果在 UI 加载的过程中需要花费很多时间来等待脚本加载完成，这会造成用户体验的很大问题。 
鉴于网络的原因， CommonJS 为后端 JavaScript 制定的规范并不完全适合与前端的应用场景，下面来介绍 JavaScript 前端的规范。

### 前端
- AMD（异步模块定义）：被定义为用于浏览器中模块的异步模型，RequireJS 是 AMD 最受欢迎的实现；
- UMD（通用模块定义）：它本质上一段 JavaScript 代码，放置在库的顶部，可让任何加载程序、任何环境加载它们；
- ES2015（ES6）：定义了异步导入和导出模块的语义，会编译成 `require/exports` 来执行的，这也是我们现今最常用的模块定义；

## 打包解决了什么问题？

### 1. 模块化
- 在 HTML 引入时，我们需要注意这文件的引入顺序（如果顺序出错，项目就会报错），如果将其扩展到具有实际功能的可用的 web 项目中，那么可能需要引入几十个文件，依赖关系更是复杂。
- 所以，我们需要将每个依赖项模块化，让打包器帮助我们管理这些模块。

### 2. 捆绑
另外，当浏览器打开该网页时，每个 js 文件都需要一个单独的 http 请求，即 4 个往返请求，才能正确地启动你的项目。
我们知道浏览器加载模块很慢，即使是 HTTP/2 支持有效地加载许多小文件，但其性能都不如加载一个更加有效（即使不做任何优化）。
因此，最好将所有 4 个文件合并为1个：

这样只需要一次 http 请求即可。

**所以，模块化与捆绑是打包器需要实现的两个最主要功能。**

## 如何打包
### 1. 解析入口文件，获取所有的依赖项
`@babel/parser` 解析入口文件，获取 AST
### 2. 递归解析所有的依赖项，生成一个依赖关系图
### 3. 使用依赖图，返回一个可以在浏览器运行的 JavaScript 文件
### 4. 输出到 dist/bundle.js
