// 广度优先遍历
const bfs = (root) => {
  const q = [root]
  while(q.length > 0) {
    const n = q.shift()//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
    console.log(n.val)
    n.children.forEach(child => {
      q.push(child)
    })
  }
}