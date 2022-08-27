
class Father {
    say() {
        return '我是爸爸'
    }
}

class Son extends Father {
    say() {
        console.log(super.say() + '的儿子')
    }
}

var son = new Son()
son.say() 