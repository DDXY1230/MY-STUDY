// 冒泡排序
// 会比较所有的相邻的元素,最好会得到一个最大的数
let arg1 = [4, 2, 7, 44, 77, 34, 75, 23, 11, 5, 7, 38]
Array.prototype.bubbleSort = function () {
  console.log(this)
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 -i; j++) {
      console.log(this[j], this[j + 1]) //获取所有的相邻元素
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }

}
arg1.bubbleSort()
console.log(arg1)
//----------------------------------------------------