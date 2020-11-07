---
sidebarDepth: 3
---
# 你用 webpack 做过什么优化吗？

webpack 打包速度慢、打包体积大的问题

## webpack 构建优化
### 1. 分析打包速度
`speed-measure-webpack-plugin`

### 2. 分析影响打包速度环节
打包就是从入口文件开始将所有的依赖模块打包到一个文件中的过程。

常见影响构建速度的地方有哪些呢？

1. 开始打包，我们需要获取所有的依赖模块。

    - 搜索所有的依赖项需要占用一定的时间。
    
    - **我们需要优化的第一个时间就是搜索时间。**
    
2. 解析所有的依赖模块（解析成浏览器可运行的代码）
    
    - webpack 根据我们配置的 loader 解析相应的文件。日常开发中我们需要使用 loader 对 js ，css ，图片，字体等文件做转换操作，并且转换的文件数据量也是非常大。由于 js 单线程的特性使得这些转换操作不能并发处理文件，而是需要一个个文件进行处理。
    
    - **我们需要优化的第二个时间就是解析时间。**
    
3. 将所有的依赖模块打包到一个文件

    - 将所有解析完成的代码，打包到一个文件中，为了使浏览器加载的包更新（减小白屏时间），所以 webpack 会对代码进行优化。
    
    - JS 压缩是发布编译的最后阶段，通常 webpack 需要卡好一会，这是因为压缩  JS 需要先将代码解析成 AST 语法树，然后需要根据复杂地规则去分析和处理 AST，最后将 AST 还原成  JS，这个过程涉及到大量计算，因此比较耗时，打包就容易卡住。
    
    - **我们需要优化的第三个时间就是压缩时间。**

4. 二次打包

    - 当更改项目中一个小小的文件时，我们需要重新打包，所有的文件都必须要重新打包，需要花费同初次打包相同的时间，但项目中大部分文件都没有变更，尤其是第三方库。

    - **我们需要优化的第四个时间就是二次打包时间。**

### 优化解析时间 - 开启多进程打包

1. thread-loader（webpack4 官方推荐）
thread 线

    - 把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker【worker pool】 池里运行
    
    - 一个 worker 就是一个 nodeJS 进程【node.js process】
    
    - 请仅在耗时的 loader 上使用
    
### 合理利用缓存（缩短连续构建时间，增加初始构建时间）

1. cache-loader

仅仅需要在一些性能开销较大的 loader 之前添加此 loader，以将结果缓存到磁盘里，显著提升二次构建速度。

2. HardSourceWebpackPlugin

- 第一次构建将花费正常的时间

- 第二次构建将显着加快（大概提升90%的构建速度）。

### 优化压缩时间

webpack4 默认内置使用 terser-webpack-plugin 插件压缩优化代码，而该插件使用 terser 来缩小 JavaScript 。

terser: 用于 ES6+ 的 JavaScript 解析器、mangler/compressor（压缩器）工具包。

terser 启动多进程，可以显著加快构建速度

### 优化搜索时间- 缩小文件搜索范围 减小不必要的编译工作
webpack 打包时，会从配置的 entry 触发，解析入口文件的导入语句，再递归的解析，在遇到导入语句时 webpack 会做两件事情：

- 根据导入语句去寻找对应的要导入的文件。例如 `require('react')` 导入语句对应的文件是 `./node_modules/react/react.js`，`require('./util')` 对应的文件是 `./util.js`。

- 根据找到的要导入文件的后缀，使用配置中的 `Loader` 去处理文件。例如使用 `ES6` 开发的 `JavaScript` 文件需要使用 `babel-loader` 去处理。

1.  `resolve.alias`
`resolve.alias` 配置项通过别名来把原导入路径映射成一个新的导入路径，减少耗时的递归解析操作。

2. 优化 `module.noParse` 配置

`module.noParse` 配置项可以让 `Webpack` 忽略对部分没采用模块化的文件的递归解析处理，这样做的好处是能提高构建性能。
 原因是一些库，例如 `jQuery` 、`ChartJS`， 它们庞大又没有采用模块化标准，让 `Webpack` 去解析这些文件耗时又没有意义。

3. `externals`

排除打包时的依赖项，不纳入打包范围内，例如你项目中使用了 jquery ，并且你在 html 中引入了它，那么在打包时就不需要再把它打包进去：

## 首屏
### 1. CDN 加速
优化用户体验不光要压缩代码文件，还要提高网络的传输速度，通过 CDN 可以实现。

> CDN：内容分发网络，通过把资源部署到世界各地，用户在访问时按照就近原则从离用户最近的服务器获取资源，从而加速资源的获取速度。 

### 2. 使用 Tree Shaking
Tree Shaking 可以用来剔除 JavaScript 中用不上的死代码。

Tree Shaking的作用就是,通过程序流分析找出你代码中无用的代码并剔除。
Tree Shaking依赖es6的module模块的静态特性,通过分析剔除无用代码。

这是因为 ES6 模块化语法是静态的（`import x from './util';` ：导入导出的都是静态的字符串），

webpack 可以简单地分析出哪些被 `import` 或 `export` 了，如果采用 ES5 （ `require(x+y)` ），webpack 则无法分析出具体哪些可以剔除。

> 目前的 Tree Shaking 还有些的局限性，经实验发现：
  
>  1. 不会对entry入口文件做 Tree Shaking。
>  2. 不会对异步分割出去的代码做 Tree Shaking。

坑 1: Babel 转译,我们已经提到用Tree Shaking的时候必须用 es6 的module,如果用 common.js 那种动态module,Tree Shaking就失效了,但是 Babel 默认状态下是启用 common.js 的,所以需要我们手动关闭.

坑 2: 第三方库不可控,我们已经知道Tree Shaking的程序分析依赖 ESM,但是市面上很多库为了兼容性依然只暴露出了ES5 版本的代码,这导致Tree Shaking对很多第三方库是无效的,所以我们要尽量依赖有 ESM 的库,比如之前有一个 ESM 版的 `lodash(lodash-es)`, 我们就可以这样引用了`import { dobounce } from 'lodash-es'`

### 3. 提取公共代码

#### 为什么要提取公共代码？

很多页面都包含大量的公共部分、基础库。

如果不提取：

- 相同的资源被重复加载，浪费用户的流量与服务器的成本

- 每个页面需要加载的资源过大，页面首屏加载过慢，影响用户体验

所以我们需要提取公共代码，单独打包。
当用户加载多页面应用时，第一次访问的时候，公共代码将会被浏览器缓存起来。
当加载其它页面时，用户不需要再重复加载公共模块，直接从缓存中获取即可。

#### 怎么提取？
**1. 使用 `DllPlugin` 来提取基础模块库，预构建依赖包**
 
**2. 使用 `SplitChunksPlugin`（webpack4以上） 对公共模块打包**

### 4. 按需加载
针对单页面应用首屏加载过慢，我们也可以采用懒加载、按需加载的方式控制首屏加载文件大小。

- 将网站划分为几个大的功能模块
- 每一块为一个 chunk，除首页 chunk 直接加载外，按需加载其余的 chunk
- 对于依赖代码量特别大的功能，也可以进行按需加载

我们知道在 ES6 中，我们使用 import 、export 静态的加载、导出文件，这里以ES6 import() 为例，更多可查看 [Module Methods](https://webpack.js.org/api/module-methods/#import)。

#### 路由组件的懒加载

结合 Vue 的 [异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6) 和 Webpack 的[代码分割](https://www.webpackjs.com/guides/code-splitting/)功能，轻松实现路由组件的懒加载。如：
```js
 () => import(/* webpackChunkName: 'page-main' */'./page/main')
```

## webpack vs rollup
