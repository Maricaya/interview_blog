---
sidebarDepth: 3
---
# BFC
**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。**

## 触发 BFC
只要元素满足下面任一条件即可触发 BFC 特性：

-   body 根元素
-   浮动元素：float 除 none 以外的值
-   绝对定位元素：position (absolute、fixed)
-   display 为 inline-block、table-cells、flex
-   overflow 除了 visible 以外的值 (hidden、auto、scroll)

## BFC 特性及应用
### 1.同一个 BFC 下外边距会发生折叠
如果要避免，放在不同的 BFC 容器中。

### 2. BFC 可以包含浮动的元素（也就是 BFC 可以清除浮动）

### 3. BFC 可以阻止元素被浮动元素覆盖
