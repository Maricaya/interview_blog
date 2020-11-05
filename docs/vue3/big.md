---
sidebarDepth: 3
---
# 高性能渲染十万条数据
（两个都手写）
## 时间分片
[「前端进阶」高性能渲染十万条数据(时间分片)](https://juejin.im/post/6844903938894872589#heading-0)

- 如果列表很多的话，最后渲染完毕由于dom节点过多可能还会卡顿

## 虚拟列表
[虚拟列表](https://juejin.im/post/6844903982742110216#heading-3)
因为 DOM 元素的创建和渲染需要的时间成本很高，在大数据的情况下，完整渲染列表所需要的时间不可接收。其中一个解决思路就是在任何情况下只对「可见区域」进行渲染，可以达到极高的初次 渲染性能。

1. 计算当前可见区域起始数据的 startIndex

2. 计算当前可见区域结束数据的 endIndex

3. 计算当前可见区域的数据，并渲染到页面中

4. 计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset，并设置到列表上