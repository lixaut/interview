# css3 新特性



### 1、transition（过渡）

语法：

```css
transition: css 属性, 花费时间, 效果曲线, 延迟时间;
```

栗子：

```css
transition: all, 1s, linear, .5s;
```



### 2、animation（动画）

语法：

```css
animation: 动画名, 时间, 曲线, 延迟, 次数, 方向;
```

栗子：

```css
animation: aniName, 1s, linear, 1s, infinite, alternate;
```

定义动画：

```css
@keyframes aniName {
    0% {
        transform: rotate(180deg);
        opacity: 0;
    }
    100% {
        transform: rotate(0deg);
        opacity: 1;
    }
}
```



### 3、transform（状态转换）

语法：

```css
transform: 转换函数1 转换函数2 ...;
```

常用转换函数

移动：

```css
translate(30px, 20px);
translateX(30px);
translateY(20px);
```

旋转：

```css
rotate(45deg);
rotate(-45deg);
```

缩放：

```css
scale(2, 0.5);
scaleX(2);
scaleY(0.5);
```

倾斜：

```css
skew(30deg, 20deg);
skewX(30deg);
skewY(20deg);
```



### 4、选择器

几个常用的 css3 选择器

```css
p:first-child;
p:last-child;
p:nth-child(2);
p:nth-last-child(3);
p::before;
p::after;
```

### 5、box-shadow（阴影）

一个元素可同时设置几个不同的阴影，inset 为内阴影，outset 为外阴影

语法：

```css
box-shadow: x偏移量, y偏移量, 模糊半径, 扩散半径, 颜色;
```

栗子：

```css
box-shadow: 
	inset 0 -3px 3px rgba(0, 0, 0, 0.1),
	0 0 0 2px rgba(255, 255, 255),
	3px 3px 1px rgba(0, 0, 0, 0.3);
```



### 6、border（边框）

边框图片：

```css
border-image: url(border.png);
border-image-width: 1; 
border-image-slice: 30; /* 将图片划分 30 个区域*/
border-image-repeat: round; /* 平铺图像 */
border-image-outset: 0;  /* 边框图像可超出边框盒的大小 */
```

边框圆角：

```css
border-radius: 左上, 右上, 右下, 左下;
```



### 7、文字

单行文本超出省略号：

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

多行文本超出省略号：

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```



### 8、颜色

语法：

```css
color: rgba(12, 34, 45, .5)
```



### 9、渐变

对角线性渐变：

```css
background: linear-gradient(to right bottom, red, green)
```



### 10、弹性布局



### 11、栅格布局



### 12、盒模型定义

标准盒模型：元素的 width、height 包含 border 和 padding

```css
box-sizing: border-box;
```

IE 盒模型：元素的 width、height 不包含 border 和 padding

```css
box-sizing: content-box;
```



### 13、媒体查询

根据不同的媒体屏幕尺寸，指定特定的样式

```css
@media screen and (max-width: 960px) and (min-width: 500px) {
    body: {
        font-size: 12px;
    }
}

@media screen, print and (max-width: 960px) and (min-width: 500px) {
    body: {
        font-size: 12px;
    }
}
```



