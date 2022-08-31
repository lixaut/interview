**面试题**
- [1.页面导入样式时，使用link和@import有什么区别？](#1页面导入样式时使用link和import有什么区别)
- [2. 双飞翼布局与圣杯布局](#2-双飞翼布局与圣杯布局)
- [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值](#用递归算法实现数组长度为5且元素的随机数在2-32间不重复的值)
- [对调两个变量的多种方法](#对调两个变量的多种方法)
- [运算符`==`和`===`](#运算符和)
- [组件通信的六种方式](#组件通信的六种方式)
- [事件event](#事件event)
- [类和类的继承](#类和类的继承)
- [函数的定义](#函数的定义)
- [函数的调用](#函数的调用)
- [this的指向](#this的指向)
- [改变this的指向](#改变this的指向)
- [严格模式](#严格模式)
- [高阶函数](#高阶函数)
- [闭包](#闭包)
- [](#)

## 1.页面导入样式时，使用link和@import有什么区别？

区别：
1. 从属关系：link是HTML标签，@import属于css提供的语法规则
2. 加载顺序：页面加载时，link会被同时加载，@import是在页面加载完成后，再加载
3. 兼容性：link是HTML标签，没有兼容性问题，@import不兼容ie5以下
4. DOM可控：link可通过js操作DOM插入标签改变样式

## 2. 双飞翼布局与圣杯布局

给main设置width: 100%，让它始终占满窗口，这样才有自适应的效果

为了形成在一行三栏布局，给三个方块都加上浮动`float: left`（注意清除浮动，因为浮动会导致父元素高度塌陷）

接着我们要把三个方块拉到一行，这里要利用负margin的技巧：

* left要放到main的左边，设置`margin-left: -100%`因为margin的百分比是相对与父元素的，所以需要整整一行的宽度才能补偿这个margin的值，所以left就能到main的左边

* 接着让right到main的右边，只需要设置margin-left的值为负的right的宽，比如`margin-left: -200px`正好使main重叠right的宽度，因为设置了浮动所以right就会到main的右边了

**圣杯布局（[code](html/圣杯布局.html)）：**

* 第一步：为三个元素的父元素加上padding属性，腾开位置

* 第二步：由于腾开位置后会产生空白，所以使用`position: relative`属性来移动左右两栏，这样就不会遮挡了

注意：不过这样布局有一个问题就是：有一个最小宽度，当页面小于最小宽度时布局就会乱掉。所以最好给body设置一个min-width。这个min-width肯定不能是试出来的，怎么计算呢？就是left-width * 2 + right-width，至于为什么，简单的说就是：“由于设置了相对定位，所以当left原来的位置和right的位置产生重叠时，由于浮动的原因一行放不下就会换行”。所以布局就被打乱了。使用双飞翼布局就可以避免这个问题

**双飞翼布局（[code](html/双飞翼布局.html)）：**

在main里面加上一个内容层。如果知道盒子模型，就知道我们是不能直接给main添加margin属性，因为我们已经设置了`width：100%`，再设置margin的话就会超过窗口的宽度，所以我们再创造一个内容层，将所有要显示的内容放到main-content中，给main-content设置margin就可以了

## 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

题目描述：

这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
a) 生成一个长度为5的空数组arr。
b) 生成一个（2－32）之间的随机整数rand。
c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
d) 最终输出一个长度为5，且内容不重复的数组arr。

```js
var arr = new Array(5);
var num = randomNumber();
var i = 0;
randomArr(arr,num);
function randomArr(arr,num) {
    if (arr.indexOf(num)< 0){
        arr[i] = num;
        i++;
    } else {
        num = randomNumber();
    }
    if (i>=arr.length){
        console.log(arr);
        return;
    }else{
        randomArr(arr,num)
    }
}
function randomNumber() {
    return Math.floor(Math.random()*31 + 2)
}
```

## 对调两个变量的多种方法

1. 临时变量法

```js
var a = 3, b = 5, c = b;
b = a;
a = c;
```

2. 加减法

```js
var a = 3, b = 5;
a = a + b;
b = a - b;
a = a - b
```

3. 数组法

```js
var a = 3, b = 5;
a = [a, b]
a = a[1]
b = a[0]
```

4. 对象法

```js
var a = 3, b = 5;
a = {a: b, b: a};
a = a.a;
b = a.b
```

5. 数组运算法

```js
var a = 3, b = 5;
a = [b, b = a][0]
```

6. 按位异或法

```js
var a = 3, b = 5;
a = a ^ b;
b = b ^ a;
a = a ^ b;
```

7. 解构赋值法

```js
var a = 3, b = 5;
[a, b] = [b, a];
```

## 运算符`==`和`===`

true：
```js
'' == 0;
'  ' == 0;
null = undefined;

```

false：
```js
null == 0;
undefined == '';
'false' == false;
NaN == NaN;
NaN == false;
NaN === false;
```

* null：表示空值，即此处没有值
* undefined：表示未声明的变量，没有赋值的变量，应该有值，还没有定义

## 组件通信的六种方式

1. props

适用场景：父子组件通信

注意事项：

如果父组件给子组件传递数据（函数），本质其实是子组件给父组件传递数据

如果父组件给子组件传递数据（非函数），本质就是父组件给子组件传递数据

2. 自定义事件

适用场景：子组件给父组件传递数据 `$on`和`$emit`

3. 全局事件总线`$bus`

适用场景：全能

```
Vue.prototype.$bus = this
```

4. 发布与订阅（pubsub-js）

适用场景：万能

5. Vuex

适用场景：万能

6. 插槽

    * 默认插槽
    * 具名插槽
    * 作用域插槽

适用场景：父子组件通信（一般结构）

## 事件event

事件分为**系统事件**和**自定义事件**：

原生DOM可以绑定系统事件

组件标签绑定的系统事件属于自定义事件，需要加上修饰符`.native`，将自定义事件变为系统事件

## 类和类的继承

1. 继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的

2. 继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法（就近原则）

3. 类没有变量提升，所以必须先定义类，才能通过类实例化对象

4. 类里面的共有属性和方法一定要使用this

5. constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者

## 函数的定义

1. 自定义函数（命名函数）

```js
function fn() {}
```

2. 函数表达式（匿名函数）

```js
var fun = function() {}
```

3. 利用`new Function('参数1', '参数2', '函数体')`

```js
var f = new Function('a', 'b', 'console.log(a + b)')
f(1, 2)
```

4. 所有函数都是 Function 的实例（对象）

```js
console.dir(f)
console.log(f instanceof Object)
```

## 函数的调用

1. 普通函数
```js
function fu() {}
```
2. 对象的方法
```js
var obj = {
    sayHi: function() {
        console.log('哈')
    }
}
```
3. 构造函数
```js
function Star() {}
new Star()
```
4. 绑定事件函数
```js
btn.onclick = function() {}
```
5. 定时器函数
```js
setInterval(function() {}, 1000)
```
6. 立即执行函数
```js
(function() {
    console.log('哈')
})()
```

## this的指向

this的指向，是当函数**调用**的时候确定的，调用方式的不同决定this的指向不同，一般指向调用者

| 调用方式 | this指向
|:-:|:-|
| 普通函数调用 | window
| 构造函数调用 | 实例对象 原型对象里面的方法也指向实例对象
| 对象方法调用 | 该方法所属对象
| 事件绑定函数 | 绑定事件对象
| 定时器函数 | window
| 立即执行函数 | window

## 改变this的指向

1. call方法

    * 可以调用函数
    * 可以改变函数内的this指向
    * 主要应用：实现继承

```js
fun.call(obj, params1, params2)
```

2. apply方法

    * 调用函数
    * 改变this的指向
    * 参数必须是数组(伪数组)
    * 主要应用：利用数学内置方法来处理数组

```js
fn.apply(obj, [])
var arr = [1, 2, 44, 22, 56]
Math.max.apply(Math, arr)
```

3. bind方法

    * 不会调用函数
    * 改变函数的this指向
    * 返回由原函数和指定参数改造后的函数
    * 应用：有的函数不需要立即调用，又想改变函数内部的this指向

```js
btn.onclick = function() {
    // this指向btn
    this.disabled = true  
    setTimeout(function() {
        // 定时器里面的this指向window
        this.disabled = false
    }.bind(this), 3000)
}
```

## 严格模式

1. 变量必须先声明再使用
2. 不能随意删除已经生命的变量
3. 全局作用域中的this是undefined
4. 如果构造函数不加new，this会报错
5. 定时器里面的this指向window
6. 函数里的参数不能重名
7. 不允许在非函数代码块中声明函数

## 高阶函数

接受函数作为参数或将函数作为返回值输出

## 闭包

闭包是指有权访问另一个函数作用域中变量的函数

闭包的主要作用：延伸了变量的作用范围

## 