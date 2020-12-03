---
sidebarDepth: 3
---
# interface vs type

## 共同点
1. 都可以描述一个对象或者函数
2. 都允许拓展

## 不同点
type 可以 
1. type 可以声明基本类型别名，联合类型，元组等类型
```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```

2. type 语句中还可以使用 typeof 获取实例的 类型进行赋值

## interface 可以 
interface 能够声明合并
但是 type 类型文字的类型别名不能。

```js
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```
