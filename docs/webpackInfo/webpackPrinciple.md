---
sidebarDepth: 3
---

# webpack 原理

## 怎样才能运行 import / export
- 不同浏览器功能不同
    - 现代浏览器可以通过 `<script type=module>` 来支持 import export
    
    - IE 8~15 不支持 import export，
    
- 兼容策略
    - 激进的兼容策略：把代码全放在 `<script type=module>` 里
    
    - 缺点：不被 IE 8~15 支持；而且会导致**文件请求过多**。
    
    - **平稳的兼容策略**：把 关键字**转译**为普通代码，并把所有文件打包成一个文件。
        - 为什么不叫编译呢？
    
           - 一般来说，编译是指把语言从高级的编译为低级的，或者是从C语言编向汇编。
    
           - 这块只是翻译为不同的代码形式，所以叫转译更加准确。
    
    - 缺点：需要写复杂的代码来完成这件事情，

## 解决第一个问题：怎么把 `import / export` 转成函数
`@babel/core` 已经帮我们做了

我们运行 `bundler_1.ts`，`a.js` 的变化 
- import 关键字不见了
- 变成了 require()
- export 关键字不见了
- 变成了 exports['default']

## a.js 变成 ES5 之后的代码
```js
"use strict";
Object.defineProperty(exports, "__esModule", {value: true}); // 疑惑 1
exports["default"] = void 0;                                 // 疑惑 2
var _b = _interopRequireDefault(require("./b.js"));          // 细节 1
function _interopRequireDefault(obj) {                       // 细节 1
  return obj && obj.__esModule ? obj : { "default": obj };   // 细节 1
}
var a = {
  value: 'a',  
  getB: function getB() {
    return _b["default"].value + ' from a.js';               // 细节 1
  }
};
var _default = a;                                            // 细节 2
exports["default"] = _default;                               // 细节 2
```

### 疑惑1： `Object.defineProperty(exports, "__esModule", {value: true});`
这是在做啥？
- 给当前模块添加 `__esModule: true` 属性，方便跟 `CommonJS` 模块区分开

- 那为什么不直接用 `exports.__esModule = true` 非要装个逼？

- 我看了下 [源码](https://github.com/babel/babel/blob/e498bee10f0123bb208baa228ce6417542a2c3c4/packages/babel-helper-module-transforms/src/index.js#L215) ，发现是可以通过选项来切换的

- 所以两种区别不大，上面写法功能更强，exports.__esModule 兼容性更好

### 疑惑2：exports["default"] = void 0;
这是在做啥？
- void 0 等价于 undefined，老 JSer 的常见过时技巧

- 这句话是为了强制清空 `exports['default']` 的值

- 为什么要清空？我也不知道，我感觉没有必要，可能有些特殊情况我没想到吧

### 转译的细节 1:`import b from './b.js'` 变成了,`var _b = _interopRequireDefault(require("./b.js"));`  `b.value` 变成了 `_b['default'].value`
- 解释 `_interopRequireDefault(module)` :`_` 下划线前缀是为了避免与其他变量重名
- 该函数的意图是给模块添加 'default'
- 为什么要加 default：CommonJS 模块没有默认导出，加上方便兼容
- 内部实现：return m && m.__esModule ? m : { "default": m }
- 其他 _interop 开头的函数大多都是为了兼容旧代码

### 转译的细节2：`export default a` 变成了:`var _default = a; exports["default"] = _default;` 简化一下就是 `exports["default"] = a`

`const x = 'x'; export {x}` 会变成
`var x = 'x'; exports.x = x`
解释
- 这个 `_default` 中间变量有什么意义我也没看出来，也许后面有用
- 其他部分都挺好理解的

## 总结
`import` 关键字会变成 `require` 函数，`export` 关键字会变成 `exports` 对象

- 本质：`ESModule` 语法变成了 `CommonJS` 规则

- 但目前我们不知道 `require` 函数怎么写，先不管，假设 `require` 已经写好了

## 把多个文件打包成一个

### 打包成一个什么样的文件
肯定**包含**了所有模块，然后能**执行**所有模块

```js
var depRelation = [ 
  {key: 'index.js', deps: ['a.js', 'b.js'], code: function() {} },
  {key: 'a.js', deps: ['b.js'], code: function() {} },
  {key: 'b.js', deps: ['a.js'], code: function() {} }
] // 为什么把 depRelation 从对象改为数组？
// 因为数组的第一项就是入口，而对象没有第一项的概念
execute(depRelation[0].key) // 执行入口文件
function execute(key){
  var item = depRelation.find(i => i.key === key)
  item.code('???') // 执行 item 的代码，因此 code 最好是个函数，方便执行
  // 但是目前还不知道要传什么参数给 code 
  // 代码待完善
}
```

现在有三个问题还没解决

1. `depRelation` 是对象，需要变成一个数组
2. `code` 是字符串，需要变成一个函数
3. `execute` 函数待完善

### 1. 把 `depRelation` 改为一个数组
代码在 `bundler_2.ts`
```js
depRelation[key] = { deps: [], code: es5Code }
// 改为了
const item = { key, deps: [], code: es5Code }
depRelation.push(item)
```
想知道所有的改动？把 bundler_1.ts 与 bundler_2.ts 对比即可

### 2. 把 code 由字符串改为函数
1. 步骤
在 code 字符串外面包一个 `function(require, module, exports){ ... } *`（这是 CommonJS 2 的规定）
把 code 写到文件里，引号不会出现在文件中

2. 举例
```js
code = `
  var b = require('./b.js')
  exports.default = 'a'
`
```

```js
code2 = ` function(require, module, exports){
   ${code}
 }`  // 注意此时 code2 还是字符串

// 然后把 `{code: ${code2}}` 写入最终文件里
// 最终文件里的 code 就是函数了
```

### 完善 execute 函数 （主体思路）
```js
const modules = {} // modules 用于缓存所有模块 function execute(key) { 
  if (modules[key]) { return modules[key] }
  var item = depRelation.find(i => i.key === key)
  var require = (path) => {
    return execute(pathToKey(path))
  }
  modules[key] = { __esModule: true } // modules['a.js']
  var module = { exports: modules[key] }
  item.code(require, module, module.exports) 
  return modules.exports
}
```

## 最终文件主要内容
```js
var depRelation = [ 
  {key: 'index.js', deps: ['a.js', 'b.js'], code: function... },
  {key: 'a.js', deps: ['b.js'], code: function... },
  {key: 'b.js', deps: ['a.js'], code: function... }
] 
var modules = {} // modules 用于缓存所有模块
execute(depRelation[0].key)
function execute(key){
  var require = ...
  var module = ...
  item.code(require, module, module.exports)
  ...
}
// 详见 dist.js
```

## 怎么得到最终文件呢？
答案很简单：拼凑出字符串，然后写入文件
```js
var dist = ""; 
dist += content; 
writeFileSync('dist.js', dist)
```
