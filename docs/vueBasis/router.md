---
sidebarDepth: 3
---
# 前端路由

https://juejin.im/post/6844903589123457031#heading-6
https://juejin.im/post/6854573222231605256#heading-9

## 为什么有 hash 和 history

前端路由的核心，就在于 —— **改变视图的同时不会向后端发出请求**。

## hash vs history
https://juejin.im/post/6844903552519766029

1. hash 
    -   它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
            
    -   hash的优势就是兼容性更好,在老版IE中都可以运行。
    
    -   问题在于url中一直存在 `#` 不够美观,而且hash路由更像是Hack而非标准,
            相信随着发展更加标准化的History API会逐步蚕食掉hash路由的市场。
        
2. history
    -   利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）
            
    -   这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。
            
    -   只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

## 原理
### hash 实现
hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，**改变 URL 中的 hash 部分不会引起页面刷新**

通过 `hashchange` 事件监听 URL 的变化，改变 URL 的方式只有这几种：

- 通过浏览器前进后退改变 URL

- 通过 `<a>` 标签改变 URL

- 通过 window.location 改变URL

### history 实现

history 提供了 pushState 和 replaceState 两个方法，**这两个方法改变 URL 的 path 部分不会引起页面刷新**

history 提供类似 hashchange 事件的 `popstate` 事件可供监听，但 popstate 事件有些不同：

- 通过浏览器前进后退改变 URL 时会触发 `popstate` 事件

- 但是，**通过 `pushState`/`replaceState`或 `<a>` 标签改变 URL 不会触发 `popstate` 事件。**

- **好在我们可以拦截 `pushState/replaceState` 的调用和 `<a>` 标签的点击事件来检测 URL 变化**

- 通过 `js` 调用 `history` 的 `back，go，forward` 方法课触发该事件

所以监听 URL 变化可以实现，只是没有 hashchange 那么方便。

## router 方法
VueRouter 类中的 onReady(), push() 等方法只是一个代理，
实际是调用的具体 history 对象的对应方法，在 init() 方法中初始化时，也是根据 history 对象具体的类别执行不同操作

## Q & A
### 有个问题：hash模式，也可以用history.go,back,forward来触发hashchange事件吗？

A：也是可以的。因为不管什么模式，浏览器为保存记录都会有一个栈。

### 为什么 history 需要后端配置 nginx？ 
当然啦，history 也不是样样都好。SPA 虽然在浏览器里游刃有余，但真要通过 URL 向后端发起 HTTP 请求时，两者的差异就来了。

尤其在用户手动输入 URL 后回车，或者刷新（重启）浏览器的时候。

1. `hash` 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.abc.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。

2. `history` 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id。如果后端缺少对 /book/id 的路由处理，将返回 404 错误。

**Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”**
