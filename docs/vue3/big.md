---
sidebarDepth: 3
---
# 高性能渲染十万条数据
（两个都手写）
## 时间分片
[「前端进阶」高性能渲染十万条数据(时间分片)](https://juejin.im/post/6844903938894872589#heading-0)

- 如果列表很多的话，最后渲染完毕由于dom节点过多可能还会卡顿
    - setTimeout
    - requestAnimationFrame
    - DocumentFragment

## 虚拟列表
[虚拟列表](https://juejin.im/post/6844903982742110216#heading-3)
因为 DOM 元素的创建和渲染需要的时间成本很高，在大数据的情况下，完整渲染列表所需要的时间不可接收。其中一个解决思路就是在任何情况下只对「可见区域」进行渲染，可以达到极高的初次 渲染性能。

1. 计算当前可见区域起始数据的 startIndex

2. 计算当前可见区域结束数据的 endIndex

3. 计算当前可见区域的数据，并渲染到页面中

4. 计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset，并设置到列表上

### 高度不同
1. 创建了一个 total-list 的容器，直接对这个容器进行 translateY 偏移

2. 总高度始终固定，等于 列表项个数(itemCount) * 列表项最小高度(itemHeight)

3. 计算偏移量
    - 滚动，确定定位项和起止项
    - 渲染起止列表项
    - 列表项渲染完毕，计算并调整起始项偏移位置
    - 进行重渲染

① 确定定位项和起止项
```js
const itemCount = this.data.length
const scrollTopMax = scrollHeight - clientHeight
/** 进度条滚动百分比 */
const scrollPtg = scrollTop / scrollTopMax
/** 确定定位项 */
const itemIndex = Math.floor(scrollPtg * itemCount);
/** 可见列表项个数 = 可见容器高度 / 每个列表项高度 ，记得向上取整 */
const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight)
/** 确定起始项和结束项 */
const startIndex = Math.max(0, itemIndex - Math.ceil(scrollPtg * visibleCount))
const endIndex = Math.min(itemCount - 1, itemIndex + Math.ceil((1 - scrollPtg) * visibleCount))
```
② 渲染列表项
渲染 startIndex ~ endIndex 的列表项

③ 调整 offset
在列表项渲染完毕后，触发 update 回调

获取并统计 startIndex ~ itemIndex 列表项的实际总高度 s2iHeight

计算起始项偏移高度 startItemTop ,如下：
```js
const startItemTop = 定位项绝对高度(itemAbsoluteTop) - 起始项至定位项的高度(s2iHeight)
const itemAbsoluteTop = scrollTop + 定位项相对视口高度(itemRelativeTop)
const itemRelativeTop = 滚动过的视口高度(scrollPtg * clientHeight) - 定位项偏移高度(itemOffsetPtg * itemHeight)
```
