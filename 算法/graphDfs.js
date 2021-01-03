const graph = require('./graph')
const visited = new Set() // 用来记录哪些节点访问过了
const dfs = (n) => {
  console.log(n)
  visited.add(n) // 说明这个节点已经访问过了
  graph[n].forEach(c => {
    if (!visited.has(c)) {
      dfs(c)
    }
  })
}
// dfs(2)
// 广度优先遍历
const visited2 = new Set()
visited2.add(2)
const q = [2]
while (q.length) {
  const n = q.shift()
  console.log(n)
  graph[n].forEach(c => {
    if (!visited2.has(c)) {
      q.push(c)
      visited2.add(c)
    }
  })
}