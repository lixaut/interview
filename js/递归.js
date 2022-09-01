
// 递归求阶乘
function fn(n) {
    if(n == 1) {
        return 1
    }
    return n * fn(n - 1)
}

console.log(fn(5))

// 求斐波那契数列（兔子序列）
// 1 1 2 3 5 8 13 ...
function fn(n) {
    if(n == 1 || n == 2) {
        return 1
    }
    return fn(n - 1) + fn(n - 2)
}