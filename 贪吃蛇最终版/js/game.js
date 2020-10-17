import Event from './event.js'
import Map from './map.js'
import Food from './food.js'
import Snake from './snake.js'

export default class Game extends Event {
    constructor(el, rect, isCon = false) {
        super()
        this.isCon = isCon
        this.map = new Map(el, rect)
        this.food = new Food(this.map.cells, this.map.rows)
        this.snake = new Snake()
        // this.map.setDate(this.snake.data)
        this.createFood()

        this.render()

        this.timer = 0
        this.interval = 200

        this.keyDown = this.keyDown.bind(this)
        this.grade = 0
        this.control()
    }
    init() {
        this.snake.data = [
            {x:6,y:4,color:'green'},
            {x:5,y:4,color:'white'},
            {x:4,y:4,color:'white'},
            {x:3,y:4,color:'white'},
            {x:2,y:4,color:'white'},
        ]
        this.start()
    }
    // 游戏开始
    start() {
        this.move()
    }
    // 随机创建食物
    createFood() {
        this.food.create()
        if (this.map.include(this.food.data)) {
            this.createFood
        }
    }
    // 在地图上渲染数据
    render() {
        this.map.clearData()
        this.map.setDate(this.snake.data)
        this.map.setDate(this.food.data)
        this.map.render()
    }
    // 暂停游戏
    stop() {
        clearInterval(this.timer)
    }
    // 是否吃到食物
    isEat() {
        return (this.snake.data[0].x === this.food.data.x) && (this.snake.data[0].y === this.food.data.y)
    }
    // 控制移动
    move() {
        this.stop()
        this.timer = setInterval(() => {
            this.snake.move()
            if (this.isEat()) {
                this.snake.eatFood()
                this.createFood()

                this.grade++
                this.changeGrade(this.grade)
                if (this.grade >= 20) {
                    // grade大于20 游戏胜利 结束
                    this.over(1)
                }

                this.interval *= .9

                this.stop()
                this.start()

            }
            if(this.isOver()) {
                this.over(0)
                return
            }
            console.log(this.snake.data)
            this.render()
        }, this.interval)
    }
    // 游戏结束
    over(overState = 0) {
        // 0 表示中途完挂了结束，1 表示胜利了结束
        if (overState) {
            this.dispatch('win')
        } else {
            this.dispatch('over')
        }
        this.stop()
    }
    // 判断是否结束
    isOver() {
        // 除了地图就立马结束
        if (this.snake.data[0].x < 0 ||
            this.snake.data[0].x > this.map.cells-1 ||
            this.snake.data[0].y < 0 ||
            this.snake.data[0].y > this.map.rows-1) {
            return true // 游戏撞墙结束
        }
        // 判断蛇撞到自己游戏也也结束
        for (let i = 1; i < this.snake.data.length; i++) {
            if (this.snake.data[0].x === this.snake.data[i].x &&
                this.snake.data[0].y === this.snake.data[i].y) {
                return true // 撞到自己游戏结束
            }
        }
        return false // 否则游戏不结束
    }
    // 改变分数
    changeGrade(grade) {
        this.dispatch('changegrade', grade)
    }
    keyDown(e) {
        let keyCode = e.keyCode
        switch (keyCode) {
            case 37:
                this.snake.changeDir('left')
                break
            case 38:
                this.snake.changeDir('top')
                break
            case 39:
                this.snake.changeDir('right')
                break
            case 40:
                this.snake.changeDir('bottom')
                break
        }
    }
    // 添加控制器
    control() {
        if (this.isCon) {
            console.log(this.isCon)
            this.toControl()
            return
        }
        window.addEventListener('keydown', this.keyDown)
    }
    toControl(fn) {
        window.removeEventListener('keydown', this.keyDown)
        fn.call(this)
    }
}