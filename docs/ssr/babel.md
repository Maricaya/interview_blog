---
sidebarDepth: 3
---
# babel

Babel 大概分为三大部分:

- 解析: 将代码(其实就是字符串)转换成 AST( 抽象语法树)

- 转换: 访问 AST 的节点进行变换操作生成新的 AST

- 生成: 以新的 AST 为基础生成代码