---
sidebarDepth: 3
---
# 移动端适配
em，rem，meta，

##  rem 如何设置
rem 是相对于根元素 html 的 font-size 来做计算。通常在页面初始化时加载时通过对
`document.documentElement.style.fontSize` 设置来实现。

下面我们将 750px 下，1rem 代表的像素值用 baseFont 表示，则在 baseFont = 75 的情况下，是分成 10 等份的。因此可以将上面的公式通用话一些：

```js
const _baseFontSize = baseFontSize || 75;

document.documentElement.style.fontSize = document.documentElement.clientWidth / ( 750 / _baseFontSize ) + 'px';
```

同时为了书写方便可以直接通过 px 布局，然后在打包时利用 pxtorem 库转化为基于 rem 的布局

## 1px 问题
```js
const dpr = window.devicePixelRatio
const meta = document.createElement('meta')
meta.setAttribute('name', 'viewport')
meta.setAttribute('content', `initial-scale=${1 / dpr}, user-scalable=no`)
document.head.appendChild(meta)
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
```


```js
var versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
// 要求从小到大排序，注意'1.45'比'1.5'大
function sortVersion(versions) {
  // TODO
}
// => ['1.5','1.45.0','3.3.3.3.3.3','6']
```

```js
function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒
```