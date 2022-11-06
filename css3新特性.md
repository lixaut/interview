# css3 新特性



### # transition（过渡）

语法：

```css
transition: css 属性, 花费时间, 效果曲线, 延迟时间;
```

栗子：

```css
transition: all, 1s, linear, .5s;
```



### # animation（动画）

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



### # transform（状态转换）

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



### # 选择器

几个常用的 css3 选择器

```css
p:first-child;
p:last-child;
p:nth-child(2);
p:nth-last-child(3);
p::before;
p::after;
```

### # box-shadow（阴影）

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



### # border（边框）

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



