function random() {
    return Math.floor(Math.random() * 100)
}
const arr = []
for (var i = 0; i < 10; i++) {
    arr.push(random())
}

console.log('排序前：', arr)

function bubbleSort(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            let temp
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
const arr1 = bubbleSort(arr)

console.log('排序后：', arr1)