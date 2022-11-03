
# rem 屏幕适配

## > 基本使用语法

根据不同的页面宽度范围，相应的改变页面内容的大小，同一个布局，只改变大小

第一个关键字 `@media` 

第二个关键字 `screen` | `print` | `all` 需要查询的对象

第三个关键字 `and` | `not` | `only` 用于逻辑连接符

第四个是条件 `(min-width: 100px)` | `(max-width: 200px)`

```css
@media screen and (max-width: 499px) {
  html {
    font-size: 16px;
  }
}

@media screen and (min-width: 500px) and (max-width: 600px) {
  html {
    font-size: 32px;
  }
}

@media screen and (min-width: 601px) {
  html {
    font-size: 48px;
  }
}
```

## > 引入资源

在适配场景较多的时候，根据不同的媒体使用不同的样式表，引入不同的 css 样式文件，改变布局的适配

```html
<link 
  rel="stylesheet" 
  href="style500.css" 
  media="screen and (min-width: 500px)"
>

<link 
  rel="stylesheet" 
  href="style800.css" 
  media="screen and (min-width: 800px)"
>
```

## > 适配方案

元素大小取值方法：
```js
// 屏幕宽度：dw
// 页面元素值：px
// 划分份数：N

font-size = dw / N

rem = px / font-size
```

### 方案一

* scss
* 媒体查询
* rem

_common.scss 文件：
```css
// 设置默认的大小（必须写在最上面！！！）
html {
  font-size: 50px;
}
// 设置常见的屏幕尺寸，修改里面的 html 文字大小
// 定义的划分份数 15
$no: 15;

// 320
@media screen and (min-width: 320px) {
  html {
    font-size: 320px / $no;
  }
}
// 360
@media screen and (min-width: 360px) {
  html {
    font-size: 360px / $no;
  }
}
// 375
@media screen and (min-width: 375px) {
  html {
    font-size: 375px / $no;
  }
}
// 384
@media screen and (min-width: 384px) {
  html {
    font-size: 384px / $no;
  }
}
// 400
@media screen and (min-width: 400px) {
  html {
    font-size: 400px / $no;
  }
}
// 414
@media screen and (min-width: 414px) {
  html {
    font-size: 414px / $no;
  }
}
// 424
@media screen and (min-width: 424px) {
  html {
    font-size: 424px / $no;
  }
}
// 480
@media screen and (min-width: 480px) {
  html {
    font-size: 480px / $no;
  }
}
// 540
@media screen and (min-width: 540px) {
  html {
    font-size: 540px / $no;
  }
}
// 720
@media screen and (min-width: 720px) {
  html {
    font-size: 720px / $no;
  }
}
// 750
@media screen and (min-width: 750px) {
  html {
    font-size: 750px / $no;
  }
}
```
index.scss 文件：
```css
// 首页的样式 less 文件
@use 'common';
$baseFont: 50;

body {
  min-width: 320px;
  width: 15rem;
  margin: 0 auto;
  background-color: #f2f2f2;
}

.search-content {
  width: 15rem;
  height: 88rem / $baseFont;
  background-color: #ffc001;
}
```

### 方案二

* lib-flexible.js
* rem

**设置视口标签：**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,
user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
```

**引入 lib-flexible.js 文件**

然后，`html` 元素的 `font-size` 会根据 `lib-flexible.js` 文件自动计算，默认是 10 等份，设计稿的的宽度为 `750px`，`rem` 的值就是 `75px`

index.css 文件：
```css
body {
  min-width: 320px;
  max-width: 750px;
  width: 10rem;
}
```