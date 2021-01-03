// set求交集的方法
let set1 = new Set([1, 2, 3, 4, 5])
let set2 = new Set([4, 5, 6, 7, 8])
let set3 = new Set([...set1].filter(i => set2.has(i))) //求两个set的交集
let set3 = new Set([...set1].filter(i => !set2.has(i))) //求两个set的非交集/差集
console.log('=====-===========')
for (let item of set1) console.log(item)
for (let item of set1.values()) console.log(item)
for (let item of set1.keys()) console.log(item)
for (let item of set1.entries()) console.log(item) // key 和 value果然是一样的
// 将set转素组的方法,两种方法
let arr1 = [...set1]
let arr2 = Array.from(set1)
//集合是一种无序且唯一的数据结构

// 遍历json的方式
const json = {
  a: {b: {c: 1}},
  d: [1,2]
}
const ddffss = (n, path) => {
  console.log(n, path)
  Object.keys(n).forEach(k => {
    ddffss(n[k], path.concat(k));
  })
}
ddffss(json, [])

