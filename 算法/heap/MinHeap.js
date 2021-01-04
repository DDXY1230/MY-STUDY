//堆
class MinHeap{
  constructor() {
    this.heap = []

  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
  }
  shiftUp(index) {
    if(index == 0) {return;}
    const parentIndex = this.getParentIndex(index)
    if(this.heap[parentIndex] > this.heap[index]){
      this.swap(parentIndex,index)
      this.shiftUp()
    }
  }
  getParentIndex(i) {
    // return Math.floor((i - 1) / 2)//等同于以下
    return (i - 1) >> 1 // 除以2取商
  }
  swap(i1,i2) {
    let temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if(this.heap[leftIndex] < this.heap[index]){
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] < this.heap[index]){
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  getLeftIndex(i) {
    return i * 2 +1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)

//---------------------------
// 出现前n次的元素
var topKFrequent = function(nums, k) {
    // 统计每个元素出现的频率
    const map = new Map()
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1: 1)
    })
    let arg = Array.from(map)
    const list = Array.from(map).sort((a,b) => b[1] - a[1])
    return list.slice(0,k).map(n => n[0])
};