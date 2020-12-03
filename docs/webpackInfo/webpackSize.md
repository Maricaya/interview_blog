---
sidebarDepth: 3
---
# webpack 体积优化

1. 合理划分代码职责，适当使用按需加载方案；
2. 善用 webpack-bundle-analyzer 插件，帮助分析 Webpack 打包后的模块依赖关系；
3. 设置合理的 SplitChunks 分组；
4. 对于一些 UI 组件库，例如 AntDesign、ElementUI 等，可以使用bable-plugin-import这类工具进行优化；
5. 使用 lodash、momentjs 这类库，不要一股脑引入，要按需引入，momentjs 可以用 date-fns 库来代替；
6. 合理使用 hash 占位符，防止 hash 重复出现，导致文件名变化从而 HTTP 缓存过期；
7. 合理使用 polyfill，防止多余的代码；
8. 使用 ES6 语法，尽量不使用具有副作用的代码，以加强 Tree-Shaking 的效果；
9. 使用 Webpack 的 Scope Hoisting（作用域提升）功能。

> Tips：其实 webpack 4 中，在 production 模式下已经根据大多数项目的优化经验做了通用的配置，类似 Tree-Shaking、Scope Hoisting 都是默认开启的，而且最新版本的 Webpack 使用的压缩工具就是 terser-webpack-plugin。

## 什么是 Scope Hoisting
作用域提升（Scope Hoisting）是指 webpack 通过 ES6 语法的静态分析，分析出模块之间的依赖关系，尽可能地把模块放到同一个函数中。下面通过代码示例来理解：

```js
// utils.js
export default 'Hello, Webpack';
// entry.js
import str from './util.js';
console.log(str);
```

普通打包后，utils.js的内容和entry.js会分开，例如下面代码：

```js
(function(module, __webpack_exports__, __webpack_require__) {
    var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);
    console.log(__WEBPACK_IMPORTED_MODULE_0__util_js__['a']);
},
    function(module, __webpack_exports__, __webpack_require__) {
        __webpack_exports__['a'] = 'Hello, Webpack';
    });
```

通过配置 webpack 4 的optimization.concatenateModules=true：

```js
// webpack.config.js
module.exports = {
    optimization: {
        concatenateModules: true
    }
};
```

这样就开启了 Scope Hoisting，这时候打包变成了：

```js
(function(module, __webpack_exports__, __webpack_require__) {
    var util = 'Hello, Webpack';
    console.log(util);
});
```

我们发现utils.js内容和entry.js的内容合并在一起了！所以通过 `Scope Hoisting` 的功能可以让 Webpack 打包出来的代码文件更小、运行的更快。

## 合理使用 `splitChunks`
在使用 `splitChunks` 主要是为了合理的划分资源大小，提高缓存命中率，从而降低资源的加载时间，在划分合理性
上一定要注意把握力度，太细不能充分利用 `HTTP Cache`，太粗又会导致加载速度慢，这个度不好笼统的来定义，
但是一般来说可以按照下面三个原则来拆分代码：

1. 变更频次；
2. 页面 Router；
3. 动静分离。

### 变更频次
代码按照变更频次来使用 `splitChunks` 进行拆分，即将这些不经常修改的通用框架和库放到一起作为 `common` 代码，
然后把业务代码按照页面间公共部分和私有部分进行拆分

### 页面 `Router`
不经常变动的框架和库代码拆分完之后，剩下的是业务代码，业务代码可以根据不同的页面之间公共代码拆分到一
起，这样可以保证访问一个页面就可以将框架代码和公共代码缓存到浏览器中，再访问第二个页面就不会增加框架
代码和公共代码页面请求了。
    
### 动静分离
动静分离指的是页面内使用频次不高或者需要动态异步加载（使用 `import()` 或者 `require.ensure()` ）的模块代码
可以单独拆分到各自的 `chunks`，这样保证了页面首屏展现速度，还记得之前介绍过的一个 `Case` 是页面的播放器代
码不经常用吗，那就是根据这个原则来拆分代码的。
    
另外类似 `Vue`、`React` 这类单页应用，页面 `Router` 之间的代码也是可以异步加载的，整个页面第一个入口就将大
框架和当前页面的代码加载进来了，等点击跳到二级页面的时候只需要动态加载对应 `Router` 的代码即可。
