---
sidebarDepth: 3
---

https://static.xiedaimala.com/xdml/file/3ac7c224-c23d-491f-84b5-4fabfbeab9b8/2019-9-26-11-15-16.pdf

# 异步组件
当一个函数返回一个对象时，我们称之他为工厂函数(factory function)

## `Promise` 异步组件
```js
Vue.component(
  'async-webpack-example',
  // 该 `import` 函数返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```

通过以上代码分析，我们对 Vue 的异步组件的实现有了深入的了解，
知道了 3 种异步组件的实现方式，并且看到高级异步组件的实现是非常巧妙的，
它实现了 loading、resolve、reject、timeout 4 种状态。

异步组件实现的本质是 2 次渲染。
- 除了 0 delay 的高级异步组件第一次直接渲染成 loading 组件外
- 其它都是第一次渲染生成一个注释节点，当异步获取组件成功后，再通过 `forceRender` 强制重新渲染，这样就能正确渲染出我们异步加载的组件了。

