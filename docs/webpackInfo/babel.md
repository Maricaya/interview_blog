---
sidebarDepth: 3
---
# AST、Babel、依赖

[地址](https://github.com/Maricaya/my-babel-demo)

## 先从 babel 说起
把es6 代码转换成 es5代码
## 原理
1. parse 把代码 code 变成 AST
2. traverse 遍历 AST 进行修改
3. generate 把 AST 变成 code2
即 code -- 1 --> AST -- 2 --> ast2 -- 3 --> code

### 代码示例
手动把 let 变成 var
```ts
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"

// 1. parse 代码转换为 AST
const code = `let a = 'let'; let b = 2`
const ast = parse(code, { sourceType: 'module' })

// 2. traverse 遍历
traverse(ast, {
  enter: item => {
    if (item.node.type === 'VariableDeclaration') {
      if (item.node.kind === 'let') {
        item.node.kind = 'var'
      }
    }
  }
})
// 3. generate
const result = generate(ast, {}, code)
console.log(result.code)
```
### 为什么必须要用 AST，为什么不用正则来替换
- 你很难用正则表达式来替换，正则很容易把 `let a = 'let'` 变成 `var a = 'var'`
- 你需要识别每个单词的意思，才能做到只修改用于声明变量的 let
- 而 AST 能明确告诉你每个 let 的意思

### 能不能自动把代码转为 ES5
可以，使用 `@babel/core` 和 `@babel/preset-env` 即可
```ts
import { parse } from '@babel/parser'
import * as babel from '@babel/core'

const code = `let a = 'let';let b = 2;const c = 3;`
const ast = parse(code, { sourceType: 'module' })
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})
console.log(result.code)

```

### 不对，代码不应该是单独的文件吗？
我们来改造一下代码
```ts
import { parse } from '@babel/parser'
import * as babel from '@babel/core'
import * as fs from 'fs'

const code = fs.readFileSync('./test.js').toString()
const ast = parse(code, { sourceType: 'module' })
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})
fs.writeFileSync('./test.es5.js', result.code)
```
思考题：如何把 `./test.js` 变成任意文件呢 

## 分析 index.js 的依赖
### project1 & deps_1.ts
- project1 有 3 个 JS 文件 `index.js/a.js/b.js`

- 依赖关系是 index -> a/b

运行 `deps_1.ts` 得到结果
```shell script
$ yarn ts deps_1.ts     
yarn run v1.22.4
$ node -r ts-node/register deps_1.ts
{
  'index.js': {
    deps: [ 'a.js', 'b.js' ],
    code: '\n' +
      "import a from './a.js'\n" +
      "import b from './b.js'\n" +
      'console.log(a.value + b.value)\n'
  }
}
```

#### 代码思路
1. 调用 collectCodeAndDeps('index.js')
2. 先把 depRelation['index.js'] 初始化为 { deps: [], code: 'index 的源码' }
3. 然后把 index.js 源码 code 变成 ast
4. 遍历 ast，看看 import 了哪些依赖，依赖了 a.js 和 b.js
5. 把 a.js 和 b.js 写到 depRelation['index.js'].deps 里
6. 最终得到的 depRelation 就收集了 index.js 的依赖

#### 启发：用哈希表来存储文件的依赖关系
*哈希表是数据结构中的术语，在 js 中一个对象就可以看作一个哈希表。
这是计数排序的基本操作

## 递归地分析嵌套依赖
### 三层依赖关系
- index -> a -> dir/a2 -> dir/dir_in_dir/a3
- index -> b -> dir/b2 -> dir/dir_in_dir/b3
- 文件在 project_2 

### 思路
- collectCodeAndDeps 太长了，改为 collect
- 调用 collect('index.js')
- 发现依赖 './a.js' 于是调用 collect('dir/a2.js')
- 发现依赖 './dir_in_dir/a3.js' 于是调用 collect('dir/dir_in_dir/a3.js)
- 没有更多依赖，a.js 这条线就结束，发现下一个依赖 './b.js'
- 依次类推，其实就是递归

### 启发：用递归来获取嵌套依赖
递归存在 call stack 溢出的风险，比如嵌套层数超过 20000 时，程序直接崩溃

## 静态分析循环依赖
再复杂一点：循环依赖 (project_3)
### 依赖关系
- index -> a -> b
- index -> b -> a

#### 求值
- a.value = b.value + 1
- b.value = a.value + 1

### 试着运行下代码
- 报错：调用栈 溢出了
- 为什么：过程 a -> b -> a -> b -> a -> b -> a ... 把调用栈撑满了

### 你是说「不能循环依赖」吗？
并不是这样，我们需要一些小技巧

### 避免重复进入同一循环
```ts
function collectCodeAndDeps(filepath: string) {
  const key = getProjectPath(filepath) // 文件的项目路径，如 index.js
  if(Object.keys(depRelation).includes(key)){
    console.warn(`duplicated dependency: ${key}`) // 注意，重复依赖不一定是循环依赖
    return
  }
// ...
}
```
- 一旦发现这个 key 已经在 keys 里了，就 return
- 这样分析过程就不是 a -> b -> a -> b -> ... , 而是 a -> b -> return
- 注意我们只需要**分析依赖**，不需要**执行代码**，所以这样分析是可行的
- 由于我们的分析不需要执行代码，所以叫做**静态分析**
- 但如果我们**执行代码**，就会发现还是出现了循环

如果执行，还是会报错的
> 分析是分析，执行是执行

## 结论
- 模块间可以循环依赖
    -   a依赖b，b依赖a
    -   a依赖b，b依赖c，c依赖a

- 但不能有逻辑绿皮的拍卖会
    -   a.value = b.value+1
    -   b.value = a.value+1
    -   这种就不行
    
- 那你能不能写一个没有逻辑漏洞的循环依赖？
    -   当然可以，继续看吧（project_5)
    -   有的循环依赖是有问题的，有的循环依赖是没有问题的
    -   所有最好别用循环依赖，以防万一

# 总结
- AST 相关
    1. parse 把代码 code 变成 AST
    2. traverse 遍历 AST 进行修改
    3. generate 把 AST 变成 code2

- 工具
    1. babel 可以把高级代码翻译为 ES5
    2. @babel/parse
    3. @babel/traverse
    4. @babel/generate
    4. @babel/core 包含前三者
    4. @babel/preset-env 内置很多规则则
    
- 代码技巧
    1. 使用哈希表来存储数据
    2. 通过检测 key 来避免重复

- 循环依赖
    1. 有的循环依赖可以正常执行
    2. 有的循环依赖不可以
    3. 但都可以做静态分析
    
    ## babel 和 babel ployfill 的关系
       1、先来理解下 babel 到底是做什么的？
       
       简单来讲，babel解决语法层面的问题。用于将ES6+的高级语法转为ES5。
       
       2、babel polyfill 又是做什么的？
       
       如果要解决API层面的问题，需要使用垫片。比如常见的有babel-polyfill、babel-runtime 和 babel-plugin-transform-runtime。
       
     
