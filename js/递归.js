function fn(n) {
    if(n == 1) {
        return 1
    }
    return n * fn(n - 1)
}

console.log(fn(5))