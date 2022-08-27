class Star {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sing(song) {
        console.log(this.name + '唱' + song)
    }
}

var ldh = new Star('柳大华', 18)
var zxy = new Star('张学友', 20)

console.log(ldh)
console.log(zxy)

ldh.sing('冰雨')
zxy.sing('笨小孩')