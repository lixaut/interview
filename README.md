**面试题**
- [1.页面导入样式时，使用link和@import有什么区别？](#1页面导入样式时使用link和import有什么区别)
- [2. 双飞翼布局与圣杯布局](#2-双飞翼布局与圣杯布局)
- [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值](#用递归算法实现数组长度为5且元素的随机数在2-32间不重复的值)
- [对调两个变量的多种方法](#对调两个变量的多种方法)

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