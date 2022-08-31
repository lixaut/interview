
// 闭包的应用 循环绑定点击事件
for (var i = 0; i < lis.length; i++) {
    // 利用for循环创建4个立即执行函数
    // 立即执行函数称为小闭包，里面的任何一个函数都可以使用其变量
    (function(i) {
        lis[i].onclick = function() {
            console.log(i)
        }
    })(i)
}

// 闭包应用：3秒之后打印li元素中的内容
for (var i = 0; i < lis.length; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(lis[i].innerHTML)
        }, 3000)
    })(i)
}

// 闭包应用：计算打车价格
// 起步价13（3公里内），之后每多一公里5元，有拥堵，多收10元拥堵费用
var car = (function() {
    // 起步价
    var start = 13
    // 总价
    var total = 0
    return {
        // 正常总价
        price: function(n) {
            if(n <= 3) {
                total = start
            } else {
                total = start + (n - 3) * 5
            }
            return total
        },
        // 拥堵之后的费用
        yd: function(flag) {
            return flag ? total + 10 : total
        }
    }
})()