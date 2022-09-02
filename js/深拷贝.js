// 深拷贝
function deepCopy(newObj, oldObj) {
    for (var key in oldObj) {
        // 判断属性属于哪种数据类型
        var item = oldObj[key]
        // 判断属性是否属于数组
        if (item instanceof Array) {
            newObj[key] = []
            deepCopy(newObj[key], item)
        } else if (item instanceof Object) {
            // 判断属性是否属于对象
            newObj[key] = {}
            deepCopy(newObj[key], item)
        } else {
            // 属于简单类型的数据
            newObj[k] = item
        }
    }
}


/*
    1. 数组也属于对象，所以先判断数组，再判断对象
    2. instanceof 判断复杂数据类型
*/
