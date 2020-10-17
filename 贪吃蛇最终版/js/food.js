// 提供食物的坐标和颜色
export default class Food {
    constructor(cells = 10, rows = 10, colors = ['blue', 'yellow', 'green', 'purple']) {
        this.cells = 10
        this.rows = 10
        this.colors = colors
        this.data = null
        this.create()
    }
    create() {
        let x = Math.floor(Math.random() * this.cells)
        let y = Math.floor(Math.random() * this.rows)
        let color = this.colors[parseInt(Math.random() * this.colors.length)]
        this.data = {
            x,
            y,
            color
        }
    }
}