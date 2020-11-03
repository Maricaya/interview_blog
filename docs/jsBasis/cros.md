---
sidebarDepth: 3
---
# 跨域问题

## 同源策略

## [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

- 每一次请求，浏览器必须先以 `OPTIONS` 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 点我）
    - 比如一些简单请求是不需要的 比如`get`请求，但也不是所有的 `get`请求都不会发`options`, Content-Type/Header 是特定的几种。

- 通过预检请求从而获知服务器端对跨源请求支持的 `HTTP` 方法。在确认服务器允许该跨源请求的情况下，再以实际的 `HTTP` 请求方法发送那个真正的请求。

## 代理
在 `dev` 开发模式下可以下使用 `webpack` 的 `proxy` 使用也是很方便。

在生产环境中需要使用 `nginx` 进行反向代理。

不管是 proxy 和 nginx 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。
