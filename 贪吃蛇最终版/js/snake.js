export default class Snake {
    constructor() {
        this.data = [
            {x:6,y:4,color:'green'},
            {x:5,y:4,color:'white'},
            {x:4,y:4,color:'white'},
            {x:3,y:4,color:'white'},
            {x:2,y:4,color:'white'},
        ]
        this.direction = 'right'
        this.lastData = null
    }
    move() {
        // 记录下最后一个元素
        let n = this.data.length - 1
        this.lastData = {
            x: this.data[n].x,
            y: this.data[n].y,
            color: this.data[n].color
        }
        console.log(this.data)
        // 让后面每一格走到前面一格的位置上
        for(let i = this.data.length - 1; i > 0;i--) {
            console.log(this.data[i], this.data[i-1])
            this.data[i].x = this.data[i-1].x
            this.data[i].y = this.data[i-1].y
        }
        console.log(this.data)
        
        // 根据方向移动蛇头
        switch(this.direction){
            case 'left':
                this.data[0].x--
                break
            case 'top':
                this.data[0].y--
                break
            case 'right':
                this.data[0].x++
                break
            case 'bottom':
                this.data[0].y++
                break
        }
    }
    changeDir(dir) {
        // 如果蛇本身现在在左右移动，那么我们只能修改上下移动，否则，反之
        if(this.direction === 'left' || this.direction === 'right'){
            if(dir === 'left' || dir === 'right'){
                return false //不能移动
            }
        }else {
            if(dir === 'top' || dir === 'bottom'){
                return false // 不能移动
            }
        }
        this.direction = dir
        return true // 可以修改方向
    }
    // 吃到食物应该长大一格
    eatFood() {
        this.data.push(this.lastData)
    }
}