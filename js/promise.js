// 产生随机布尔值
function randomBoolean() {
    function randomNum() {
        return Math.floor(Math.random() * 10)
    }
    return randomNum() >= randomNum()
}

const isPregnant = randomBoolean()

const promise = new Promise((resolve, reject) => {
    if(isPregnant) {
        resolve('孩子他爹')
    } else {
        reject('老公')
    }
})

promise
    .then(name => {
        console.log(`男人成为了${name}`)
    })
    .catch(name => {
        console.log(`男人成为了${name}`)
    })
    .finally(() => {
        console.log('他们最终结婚了！')
    })