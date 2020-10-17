export default class Map {
    constructor(el, rect = 10) {
        this.el = el
        this.rect = rect
        this.data = []
        this.cells = Math.ceil(Map.getStyle(el, 'width') / rect)
        this.rows = Math.ceil(Map.getStyle(el, 'height') / rect)
        // 设置下行内宽高
        Map.setStyle(el, 'width', this.cells * rect)
        Map.setStyle(el, 'height', this.rows * rect)
    }
    static getStyle(el, attr) {
        return parseFloat(getComputedStyle(el)[attr])
    }
    static setStyle(el, attr, val) {
        el.style[attr] = val + 'px'
    }
    setDate(newData) {
        this.data = this.data.concat(newData)
    }
    clearData() {
        //splice 改变原先数组，返回被删除的数据
        // 此处清空数据
        this.data.splice(0)
    }
    include({
        x,
        y
    }) {
        return !!this.data.find(i => (i.x === x && i.y === y))
    }
    render() {
        this.el.innerHTML = this.data.map(i => {
            return `<span style='position:absolute;left:${i.x * this.rect}px;top:${i.y * this.rect}px;width:${this.rect}px;height:${this.rect}px;background:${i.color};'></span>`
        }).join('')
    }
}