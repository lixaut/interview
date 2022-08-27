class Father {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log(this.x + this.y)
    }
}

class Son extends Father {
    constructor(x, y) {
        super(x, y);
    }
}

var son = new Son(1, 2)
son.sum()
