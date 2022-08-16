var arr = [3, 10, 4, 30, 100, 2]

var asc = arr.sort(function(x, y) {
    return x - y
})

var desc = arr.sort(function(x, y) {
    return y - x
})
