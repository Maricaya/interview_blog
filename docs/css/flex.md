---
sidebarDepth: 3
---
# 布局实现

## 垂直居中
-   设定行高（line-height）:行内元素

-   transform 
子元素：translateY、top、relative
```css
.use-transform div{
    position: relative;
    top:50%;
    transform: translateY(-50%);
}
```

-   绝对定位
    - 子绝父相
    - 将上下左右的数值都设为0，再搭配一个 margin:auto，就可以办到垂直居中，不过要特别注意的是，设定绝对定位的子元素，其父元素的 position 必须要指定为 relative
    
```css
.use-absolute{
    position: relative;
    width:200px;
    height:150px;
    border:1px solid #000;
}
.use-absolute div{
    position: absolute;
    width:100px;
    height:50px;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    background:#f60;
}
```

-   使用Flexbox
    - align-items: center
    
    
## 左中右结构
- 左右浮动

- 左右绝对定位

- flex
    中间 100%

## 两种盒模型
1. 有两种， IE 盒子模型、W3C 盒子模型；

2. 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；

3. 区 别： IE的content部分把 border 和 padding计算了进去;

### 切换
如果想要切换盒模型也很简单，这里需要借助css3的box-sizing属性

- box-sizing: content-box 是W3C盒子模型

- box-sizing: border-box 是IE盒子模型

## flex 常见属性
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。

- flex-direction: 属性决定主轴的方向（即项目的排列方向）。

- flex-wrap:
    默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

- flex-flow:
    flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

- justify-content: 属性定义了项目在主轴上的对齐方式。

- align-items:属性定义项目在交叉轴上如何对齐。

- align-content: 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

### 项目的属性
- order：属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

- flex-grow：属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

- flex-shrink：属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

- flex-basis：属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

- flex：flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

- align-self：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
