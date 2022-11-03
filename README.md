
## # ES6 新特性

* 类
* Promise
* Let & const
* 模块化
* 箭头函数
* 结构赋值
* 模板字符串
* 延展操作符
* 对象属性简写
* 函数参数默认值

## # 阻止冒泡

```js
// w3c
e.stopPropagation()

// IE
e.cancelBubble = true
```
## # 取消默认事件

```js
// w3c
e.preventDefault()

// IE
e.returnValue = false
```

## # 动画

```css
/* 动画曲线 linear ease-in-out ease-out ease-in */
animation-timing-function: ease;

/* 动画名称 配合关键帧使用 */
animation-name: aniName;

/* 动画时间 */
animation-duration: 1s;

/* 动画次数 */
animation-iteration-count: infinite;

/* 动画方向 normal reverse alternate */
animation-direction: alternate;

/* 关键帧定义 */
@keyframes aniName {
  from {
    width: 200px;
    height: 200px;
  }
  to {
    width: 400px;
    height: 100px;
  }
}
```

## # 数组遍历方法

* `map()`
* `filter()`
* `forEach()`
* `sort()`
* `some()`
* `every()`
* `reduce()`
* `reduceRight()`
* `find()`
* `findIndex()`

## # `for in` 和 `for of` 的区别

遍历数组的时候，`for in` 遍历的是数组的索引（ `index` ），`for of` 遍历的是数组元素值（ `value` ）

`for in` 遍历数组所有可枚举属性，包括原型，`for of` 只遍历数组内部的元素

`for in` 遍历对象的 `key` 或数组、字符串的下标

`for of` 遍历对象 `value` 或数组、字符串的值

## # hash 和 history 有什么区别？

hash 在路由跳转的时候，url 后面会携带 # 关键字，而服务端会忽略 # 后面的内容，所以在使用 hash 模式时，给服务器发请求时，并不会重新刷新页面。

history 在路由跳转的时候，url 和正常的 url 一样，给服务器发送请求的时候，携带参数的 url 会导致服务端重新渲染页面，可能会导致 404，解决方法就是在服务端设置，如果没有相对应的静态资源，就返回页面本身。

## # 深拷贝和浅拷贝的区别？

对象属性是引用型数据类型的时候，如果是**浅拷贝**，源对象的改变会影响新对象，如果是**深拷贝**，源对象的改变不会影响新对象。

### 浅拷贝实现方式

1. Object.assign()
2. 函数库 lodash 的 _.clone 方法
3. 展开操作符
4. Array.prototype.concat()
5. Array.prototype.slice()

### 深拷贝的实现方式

1. JSON.parse(JSON.stringify()) 该方法不适用于**函数**和**正则**
2. 函数库 lodash 的 _.cloneDeep 方法
3. jQuery.extend() 方法 `$.extend(true, {}, obj)`
4. 手写递归方法

## # 箭头函数和普通函数的区别？

1. 如果函数不需要返回值，且只有一句话，可以给这个语句前面加一个 void 关键字，常用来调用一个函数
2. 没有自己的 this ，只会在自己作用域上一层继承 this
3. 继承来的 this 指向永远不变
4. call() apply() bind() 等方法不能改变 this 的指向
5. 不能作为构造函数
6. 没有自己的 arguments
7. 没有 prototype

## # new 操作符做了什么事情？

1. 创建一个新对象
2. 将对象的原型设置为函数的 prototype 对象
3. 让函数的 this 指向这个对象
4. 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，返回这个引用类型的对象

## # 什么是闭包？闭包的作用是什么？

闭包：一个可以访问另一个函数内部变量的函数

作用：由于局部变量无法共享和长久的保存，而全局变量可能造成变量污染，闭包就是实现一种机制既可以长久保存变量，又不会造成全局污染

## # Set 和 Map

Set 和 Map 数据结构都是 ES6 语法

Set 对象存储任何类型的唯一值，无论是原始值还是对象引用

Map 对象保存键值对，并且可以记住键的原始插入顺序，任何类型都可作为一个键或一个值

**共有的属性和方法**

* size 属性，返回该对象值的个数
* clear() 移除所有元素
* delete() 移除一个元素，返回布尔值是否移除成功
* entries() 返回一个迭代器 `{ key => value, key => value }` （Set 中 key 和 value 相等）
* forEach()
* has() 返回一个布尔
* keys() 返回新迭代器中所有元素的值
* values() 返回新迭代器中所有元素的值

**Set 独有方法**

* add() 尾部添加一个元素

**Map 独有方法**

* get() 返回指定键关联的值
* set() 设置指定键关联的值

**Map 和 Object 的区别**

| | Map | Object |
| :--: | :--: | :--: |
| 原型 | 只包含显式插入的键 | 可能与原型链上的键冲突 |
| 键类型 | 任意类型 | String、Symbol |
| 键顺序 | 插入的顺序 | 顺序复杂 |
| 属性个数 | Size 属性 | 手动计算 |
| 迭代 | 可迭代 entries() | 不可，通过 for of 实现 |
| 性能 | 频繁增删有优化 | 无忧化 |

## # vue 响应式原理是什么？

## # vue 的数据双向绑定原理是什么？