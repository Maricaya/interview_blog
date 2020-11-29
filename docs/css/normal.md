---
sidebarDepth: 3
---
# 一些常考题
https://zzzmj.github.io/demo/two-column-layout/index.html

## 左固定，右自适应
1. 左盒子 左浮动（绝对定位、固定定位、） ，右盒子 margin-left

2. 左右盒子都浮动，右盒子  calc(100% - 120px)
   左右盒子绝对定位/固定定位，右盒子 left: 120px 且宽度 calc

3. 左盒子 float + 右盒子 BFC
　BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:

　　【1】可以阻止元素被浮动元素覆盖
    
所以左盒子浮动，右盒子 BFC 即可触发
    - 右盒子
        -  overflow: hidden/scroll/auto (只要不是 visible 就触发 BFC)
        - display: block;

## 居中

## 动画 css vs js