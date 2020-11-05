---
sidebarDepth: 3
---
# 跨域问题

## 同源策略
协议/主机/端口

## [CORS 跨域资源共享](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

- 每一次请求，浏览器必须先以 `OPTIONS` 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 点我）
    - 比如一些简单请求是不需要的 比如`get`请求，但也不是所有的 `get`请求都不会发`options`, Content-Type/Header 是特定的几种。

- 通过预检请求从而获知服务器端对跨源请求支持的 `HTTP` 方法。在确认服务器允许该跨源请求的情况下，再以实际的 `HTTP` 请求方法发送那个真正的请求。

## 代理
在 `dev` 开发模式下可以下使用 `webpack` 的 `proxy` 使用也是很方便。

在生产环境中需要使用 `nginx` 进行反向代理。

不管是 proxy 和 nginx 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。

## [jsonp](https://maricaya.github.io/interview_blog/ajax/ajax.html#jsonp)

很简单，就是利用 `<script>` 标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。

- 当需要通讯时，本站脚本创建一个 `<script>` 元素，地址指向第三方的API网址，
    - 形如：     `<script src="http://www.example.net/api?param1=1&param2=2"></script>`
    - 并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。
          
- 第三方产生的响应为 json 数据的包装（故称之为jsonp，即json padding)
    -   形如：`callback({"name":"hax","gender":"Male"})`
    -   这样浏览器会调用 `callback` 函数，并传递解析后json对象作为参数。
   
## postMessage
