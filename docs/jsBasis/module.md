---
sidebarDepth: 3
---

# 模块化发展历程

**模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。**

## IIFE：使用自执行函数来编写模块化，特点：**在一个单独的函数作用域中执行代码，避免变量冲突**。
```js
(function(){
  return {
	data:[]
  }
})()
```

## AMD：`Asynchronous Module Definition`, 称为异步模块加载。使用 `requireJS` 来编写模块化。
- **依赖必须提前声明好**。
- 异步加载模块

```js
define('./index.js',function(code){
	// code 就是index.js 返回的内容
})
```

## CMD：`Common Module Definition`，通过模块加载规范。使用 `seaJS` 来编写模块化，特点：**支持动态引入依赖文件**。
- 模块使用时再声明。
- 模块加载是异步的，使用时才会加载执行。

```js
define(function(require, exports, module) {  
  var indexCode = require('./index.js');
});
```

## CommonJS：同步模块加载规范，`nodejs` 中自带的模块化。
- 模块同步加载，资源加载完再执行
- 服务器端：运行时同步加载
- 浏览器：模块加载是提前编译打包处理

```js
var fs = require('fs');
```

## UMD：`Universal Module Definition`，也就是通用模块标准。兼容 AMD，CommonJS 模块化语法。

webpack(require.ensure)：webpack 2.x 版本中的代码分割。

## ES Modules： ES6 引入的模块化，支持import 来引入另一个 js 。
- 浏览器、服务器通用
- 与 CommonJs 的区别
    - 输出值
      - ES6 输出值的引用
        - 模板是动态引用，不会缓存值，模块里面的变量绑定其所在的模块
      - common 输出值的拷贝
        - 模块可以多次加载，但在首次加载时会被缓存，以后直接读取缓存结果
    - 加载方式
      - common 运行时加载
        - 因为 CommonJS 加载的是一个对象，该对象只有在脚本运行完才会生成
      - es6 编译时输出接口
        - ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

## ESModule的优势
- 死代码检测和排除。我们可以用静态分析工具检测出哪些模块没有被调用过。比如，在引入工具类库时，工程中往往只用到了其中一部分组件或接口，但有可能会将其代码完整地加载进来。未被调用到的模块代码永远不会被执行，也就成为了死代码。通过静态分析可以在打包时去掉这些未曾使用过的模块，以减小打包资源体积。

- 模块变量类型检查。JavaScript属于动态类型语言，不会在代码执行前检查类型错误（比如对一个字符串类型的值进行函数调用）。ES6 Module的静态模块结构有助于确保模块之间传递的值或接口类型是正确的。

- 编译器优化。在CommonJS等动态模块系统中，无论采用哪种方式，本质上导入的都是一个对象，而ES6 Module支持直接导入变量，减少了引用层级，程序效率更高。
```js
import a from 'a';
```

