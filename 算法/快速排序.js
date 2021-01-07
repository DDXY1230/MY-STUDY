// 快速排序
Array.prototype.quickSort = function() {
  const rec = (arr) => {
    if(arr.length === 1 || arr.length === 0) {return arr}
    const left = []
    const right = []
    const mid = arr[0]
    for (let i =1;i<arr.length; i+=1){
      if(arr[i] < mid) {
        left.push(arr[i])
      }else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(this)
  return res
}

let arr = [4,66,3,6,78,4,3,55,99,6,6,3,5,2]
let arr_ = arr.quickSort()
console.log(arr)
console.log(arr_)