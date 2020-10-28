---
sidebarDepth: 3
---
# 继承
// https://juejin.im/post/6844904116552990727#heading-16
## ES5 继承
```js
// 父类
function Parent() {
  this.name = '写代码像蔡徐抻'
}
// 父类的原型方法
Parent.prototype.getName = function() {
  return this.name
}
```

### 1. 原型链继承
 原型链继承的原理很简单，直接让子类的原型对象指向父类实例，
 
  当子类实例找不到对应的属性和方法时，就会往它的原型对象，也就是父类实例上找，从而实现对父类的属性和方法的继承
```js
// 子类
function Child() {}
// 让子类的原型对象指向父类实例, 这样一来在Child实例中找不到的属性和方法就会到原型对象(父类实例)上寻找
Child.prototype = new Parent()
Child.prototype.constructor = Child
// 根据原型链的规则, 顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要

// 然后Child实例就能访问到父类及其原型上的name属性和getName()方法
```

 缺点：
 - 由于所有Child实例原型都指向同一个Parent实例,
   因此对某个Child实例的父类引用类型变量修改会影响所有的Child实例
 - 在创建子类实例时无法向父类构造传参, 即没有实现super()的功能




###  构造函数继承
 构造函数继承，即在子类的构造函数中执行父类的构造函数，并为其绑定子类的this，让父类的构造函数把成员属性和方法都挂到子类的this上去，这样既能避免实例之间共享一个原型实例，又能向父类构造方法传参
 ```js

function Child2() {
  Parent.call(this, 'zhang san')   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}
//测试
const child1 = new Child2()
const child2 = new Child2()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhang san']
child2.getName()                  // 报错,找不到getName(), 构造函数继承的方式继承不到父类**原型**上的属性和方法
```

###  组合式继承

 既然原型链继承和构造函数继承各有互补的优缺点, 那么我们为什么不组合起来使用呢, 所以就有了综合二者的组合式继承
 缺点：
 - 每次创建子类实例都执行了两次构造函数(Parent.call()和new Parent())，虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，这并不优雅
```js
function Child3() {
  // 构造函数继承
  Parent.call(this, 'zhangsan')
}
//原型链继承
Child3.prototype = new Parent()
Child3.prototype.constructor = Child3

```

###  寄生组合
```js
function Child4() {
  // 构造函数继承
  Parent.call(this, 'zhangsan')
}
//原型链继承
// Child.prototype = new Parent()
// 但这种方式存在一个问题，由于子类原型和父类原型指向同一个对象，我们对子类原型的操作会影响到父类原型，例如给Child.prototype增加一个getName()方法，那么会导致Parent.prototype也增加或被覆盖一个getName()方法，为了解决这个问题，我们给Parent.prototype做一个浅拷贝
//
Child4.prototype = Object.create(Parent.prototype)  //将`指向父类实例`改为`指向父类原型`e  //将`指向父类实例`改为`指向父类原型`
Child4.prototype.constructor = Child4
```


## es6 继承
// https://github.com/Maricaya/binary-tree/blob/master/%E5%AE%9E%E7%8E%B0%E7%B1%BB/combination%26inheritance.js
```js
class Child5 extends Parent {
  constructor(name) {
    super()
  }
  sayHi(){}
}
// =============================================
// 组合
// 优化代码
class EventEmitter{

}
let Child6 = new Parent('frank')
mixin(Child6, new EventEmitter())
// 这里是最简化的 mixin，实际情况会更复杂
function mixin(to, from) {
  for(let key in from) {
    to[key] = from[key]
  }
}
```

