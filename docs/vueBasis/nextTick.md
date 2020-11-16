---
sidebarDepth: 3
---
# NextTick

## 什么时候会用到 Vue.nextTick()
因为 Vue DOM 更新是异步的。
修改数据时，视图不会立即更新，而是会监听数据变化，并缓存在

## 实现
宏任务、微任务。
宏任务耗费的时间是大于微任务的，所以在浏览器支持的情况下，先找到宏任务

先找宏任务、再找微任务
- micro task 有 MutationObsever 和 Promise.then。

- macro task 有 setTimeout、MessageChannel、postMessage、setImmediate

## Vue NextTick 实现

Promise > MutationObserver > setImmediate > setTimeout

而对于 micro task 的实现，则检测浏览器是否原生支持 Promise，不支持的话直接指向 macro task 的实现。
对于 macro task 的实现
    - 优先检测是否支持原生 setImmediate，这是一个高版本 IE 和 Edge 才支持的特性，
    - 不支持的话再去检测是否支持原生的 MessageChannel，
    - 如果也不支持的话就会降级为 setTimeout 0；
