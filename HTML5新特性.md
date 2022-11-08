# HTML5新增特性



1. 语义标签
2. 增强表单
3. 视频和音频
4. Canvas 绘图
5. SVG 绘图
6. 地理定位
7. 拖放 API
8. WebWorker
9. WebStorage
10. WebSocket



### 1、语义标签

```html
<header></header>

<footer></footer>

<nav></nav>

<section></section>

<article></article>

<aside></aside>

<detailes></detailes>

<summary></summary>

<dialog><dialog>
```



### 2、增强型表单

```html
  <!-- 选择颜色 -->
  <input type="color">

  <!-- 选择日期 -->
  <input type="date">

  <!-- 选择日期和时间 -->
  <input type="datetime-local">

  <!-- 选择月份 -->
  <input type="month">

  <!-- 数值输入 -->
  <input type="number">

  <!-- 进度条输入 -->
  <input type="range" min="1" max="10">

  <!-- 选择时间 -->
  <input type="time">

  <!-- 选择年份和第几周 -->
  <input type="week">
```



### 3、新增表单属性

* `placeholder` 默认提示文字

* `required` 输入不能为空

* `pattern` 用于验证输入的正则表达式

* `min max` 元素最小值与最大值

* `step` 数字间隔

* `autofocus` 自动获取焦点



### 4、视频和音频

视频
```html
  <video width="200px" height="100px" controls>
    <source src="" type="video/mp4">
  </video>
```
音频
```html
  <audio controls>
    <source src="audio.mp3" type="audio/mp3">
  </audio>
```



### 5、Canvas 绘图

```html
  <canvas 
    id="canvas" 
    width="1000px" 
    height="500px" 
    style="border: 1px solid #333"
  ></canvas>
```
```js
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.stroke()
  ...
```



### 6、地理定位

```js
// 获取设备当前位置
navigator.genlocation.getCurrentPosition(success[, error[, options]])

// 设备地理位置发生改变时调用
navigator.genlocation.watchPosition(success[, error[, options]])

// 清除位置监听 id = navigator.genlocation.watchPosition()
navigator.genlocation.clearWatch(id)
```



### 7、WebWorker

运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。



### 8、WebStorage

* `localStorage`

* `sessionStorage`

### 9、WebSocket

WebSocket是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。当你获取 Web Socket 连接后，你可以通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。

```html
<a href="javascript:WebSocketTest()">运行 WebSocket</a>
```

```js
  function WebSocketTest() {
    // 建立连接
    const ws = new WebSocket('url')

    // 连接成功的回调
    ws.onopen = () => {
      ws.send(data)
    }

    // 数据接受成功的回调
    ws.onmessage = (response) => {
      const data = response.data
    }

    // 连接关闭的回调
    ws.onclose = () => { ... }
  }
```