---
sidebarDepth: 3
---
# 性能优化

window.performance

https://juejin.im/post/6844904153869713416#heading-16

## First Paint（FP）
从开始加载到浏览器首次绘制像素到屏幕上的时间，也就是页面在屏幕上首次发生视觉变化的时间。但此变化可能是简单的背景色更新或不引人注意的内容，它并不表示页面内容完整性，可能会报告没有任何可见的内容被绘制的时间。

|  用户体验核心指标 | 定义 | 衡量指标 |
|  ----  | ----  | ---- |
| 白屏时间 | 页面开始有内容的时间，在没有内容之前是白屏 | FP 或 FCP  | 
|首屏时间 | 可视区域内容已完全呈现的时间 | FSP|
|可交互时间| 用户第一次可以与页面交互的时间 | FCI |
|可流畅交互时间| 用户第一次可以持续与页面交互的时间 | TTI |

## 白屏时间 First Paint（FP）
从开始加载到浏览器首次绘制像素到屏幕上的时间，也就是页面在屏幕上首次发生视觉变化的时间。
但此变化可能是简单的背景色更新或不引人注意的内容，它并不表示页面内容完整性，可能会报告没有任何可见的内容被绘制的时间。

```js
function getFirstPaint() {
  let firstPaints = {};
  if (typeof performance.getEntriesByType === 'function') {
    let performanceEntries = performance.getEntriesByType('paint') || [];
    performanceEntries.forEach((entry) => {
      if (entry.name === 'first-paint') {
        firstPaints.firstPaint = entry.startTime;
      } else if (entry.name === 'first-contentful-paint') {
        firstPaints.firstContentfulPaint = entry.startTime;
      }
    });
  } else {
    if (chrome && chrome.loadTimes) {
      let loadTimes = window.chrome.loadTimes();
      let {firstPaintTime, startLoadTime} = loadTimes;
      firstPaints.firstPaint = (firstPaintTime - startLoadTime) * 1000;
    } else if (performance.timing && typeof performance.timing.msFirstPaint === 'number') {
      let {msFirstPaint, navigationStart} = performance.timing;
      firstPaints.firstPaint = msFirstPaint - navigationStart;
    }
  }
  return firstPaints;
}
```

## 可交互时间	用户第一次可以与页面交互的时间	FCI

