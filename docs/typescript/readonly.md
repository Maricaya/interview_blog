---
sidebarDepth: 3
---
# const vs readonly
一个const变量不能被重新分配，就像一个readonly属性。

本质上，定义属性时，可以使用它readonly来防止重新分配。这实际上只是一个编译时检查。

定义const变量（并const在输出中保留要使用的最新JavaScript版本）时，也会在运行时进行检查。

因此，它们实际上都在做相同的事情，但一个是变量，另一个是属性。