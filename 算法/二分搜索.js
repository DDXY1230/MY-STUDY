//二分法搜索O(logn)
Array.prototype.binarySearch = function(item) {
  let low = 0
  let high = this.length -1
  while(low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = this[mid]
    if(element < item) {
      low = mid + 1
    }else if(element > item) {
      high = mid -1
    }else {
      return mid
    }
  }
  return -1
}
const res = [1,2,3,5,6,7,8,11].binarySearch(2)
console.log(res)