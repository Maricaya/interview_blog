---
sidebarDepth: 3
---
# vue 模板到真实 DOM 渲染的过程

 https://juejin.im/post/6844903940786487309#heading-8

## 从 template 开始
```html
<div id="app">
  {{ message }}
</div>
```

相当于我们编写如下 render 函数：
```js
render = function (createElement) {
  return createElement('div', {
     attrs: {
        id: 'app'
      },
  }, this.message)
}
```

## 编译
中间有一个环节是把模板编译成 render 函数，这个过程我们把它称作编译。
编译过程首先就是对模板做解析，生成 AST

#### parse：
目标是把 template 模板字符串转换成 AST 树，它是一种用 JavaScript 对象的形式来描述整个模板。

AST 元素节点总共有 3 种类型，
普通元素、表达式、纯文本。

当 AST 树构造完毕，下一步就是 optimize 优化这颗树。

#### optimize：
为什么要有优化过程，因为我们知道 Vue 是数据驱动，是响应式的，
但是我们的模板并不是所有数据都是响应式的，也有很多数据是首次渲染后就永远不会变化的，
那么这部分数据生成的 DOM 也不会变化，我们可以在 patch 的过程跳过对他们的比对。

#### codegen：
编译的最后一步就是把优化后的 AST 树转换成可执行的代码
 render

#### VNode
 最终是通过执行 createElement 方法并返回 vNode，它是一个虚拟 Node。

 Vue 2.0 相比 Vue 1.0 最大的升级就是利用了 Virtual DOM。因此在分析 createElement 的实现前，我们先了解一下 Virtual DOM 的概念。

所谓渲染器，简单地说就是将 Virtual DOM 渲染成特定平台下真实 DOM 的工具(就是一个函数，通常叫 render)，渲染器的工作流程分为两个阶段：mount 和 patch，如果旧的 VNode 存在，则会使用新的 VNode 与旧的 VNode 进行对比，试图以最小地资源开销完成 DOM 的更新，这个过程就叫 patch，或“打补丁”。如果旧的 VNode 不存在，则直接将新的 VNode 挂载成全新的 DOM，这个过程叫做 mount。

 Virtual DOM 除了它的数据结构的定义，
 映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。

 patch：VNode
 html/svg 标签，组件，纯文本，Fragment，PORTAL
  组件、普通标签（检查 vnode.tag), 纯文本节点

把 VNode 渲染成真实的 DOM

- 初次调用渲染器渲染某个 VNode 时：
由于没有旧的 VNode 存在，所以会调用 mount 函数挂载全新的 VNode ，
这个小节我们就探讨一下渲染器的 mount 函数是如何把 VNode 渲染成真实 DOM 的，以及其中一些核心的关键点。

- patch dom diff
# DOM diff 可能的大概逻辑
## Tree diff
- 将新旧两棵树逐层对比，找出哪些节点需要更
- 如果节点是组件就看 Component diff
- 如果节点是标签就看 Element diff
## Component diff
- 如果节点是组件，就先看组件类型
- 类型不同直接替换（删除旧的）
- 类型相同则只更新属性
- 然后深入组件做 Tree diff（递归）
## Element diff
- 如果节点是原生标签，则看标签名
- 标签名不同直接替换，相同则只更新属性
- 然后进入标签后代做 Tree diff（递归）

# DOM diff 的缺点
- 同级节点对比存在 bug
会出现识别错误的问题

https://www.zhihu.com/question/61064119/answer/766607894?utm_source=wechat_session&utm_medium=social&s_r=0

原因：
默认拿 index 作 key

# 关于 DOM 的谣言
## DOM 操作慢？虚拟 DOM 快
起源：2010 年出版的「高性能 JavaScript」
这本书里有一个观点，DOM 操作很慢，但是它没有给出任何数据，也没有对比。

这句话类似于：刘翔矮（对比与姚明）

实际上，DOM 操作只是比 JS 原生 API 操作（比如数组操作）慢。

任何基于 DOM 的库（vue、react）都不可能在操作 dom 时比 dom 快

## 为什么会有这样的谣言？
因为在某些情况下，虚拟 DOM 快。

### 减少 DOM 操作
- 减少 DOM 操作的次数
虚拟 DOM 可以将多次操作合并为一次操作。
比如你添加 1000 个 div，是一个一个添加的。
	虚拟 DOM 会优化为一次添加 1000 个。

- 减少 DOM 操作的范围
虚拟 DOM 借助 DOM diff 可以把多余地操作省掉。
比如你添加了 1000 个节点，其中 990 个是原有节点，只有 10 个是新增的。
虚拟 DOM 只会添加 10 个。

### 跨平台
虚拟 DOM 不仅可以变成 DOM，还可以变成小程序、ios 应用、Android 应用。
因为虚拟 DOM 本质上只是一个 js 对象。

## vue3 优化
vue3的优化：https://zhuanlan.zhihu.com/p/150732926
1、跳过静态内容，只对比动态内容。
2、vue3
        vdom 新增字段 PatchFlags，记录哪些是动态节点，以及为什么它是动态的


## 手写 template 
```js
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) { // 判断模板里是否有模板字符串
    const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
    template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
    return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
console.log(render(template, data)); // 我是姓名，年龄18，性别undefined
```
### 手写 createElement 函数（待确认）
```js
function createElement(type, config, children) {
  const props = {};

  for (let propName in config) {
    // 如果对象本身存在该属性值，就copy
    if (Object.prototype.hasOwnProperty.call(config, propName)) {
      props[propName] = config[propName];
    }
  }
  props.children = children
  return props
}

export default {
  createElement,
}
```
