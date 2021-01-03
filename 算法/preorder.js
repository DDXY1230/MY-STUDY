let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null
    },
    right: {
      val: 2,
      right: {

      }
    }
  },
  right: {
    val: 4
  }
}
// 先序遍历
const preorder = (root) => {
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
// 中序遍历
const inorder = (root) => {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
// 后序遍历
const postorder = (root) => {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}
// 以上是递归版

// 以下是非递归版的先中后序遍历
// 先序遍历
const preorder2 = (root) => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}
// 中序遍历
const inorder = (root) => {
  if (!root) {
    return
  }
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}