import Node from '../types/Node'

import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  // 插入数据
  insert(value: T) {
    // 1. 根据传入value创建Node(TreeNode)节点
    const newNode = new TreeNode(value)

    // 2. 判断当前是否已经有根节点
    if(!this.root) {
      // 当前树为空
      this.root = newNode
    } else {
      // 树中已经有其他值
      this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if(newNode.value < node.value) {
      // 去左边继续查找空白位置
      if(node.left === null ) {
        // node节点的左边已经是空白
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      // 去右边继续查找空白位置
      if( node.right === null ) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOderTraverseNode(this.root)
  }

  private preOderTraverseNode(node: TreeNode<T> | null) {
    if(node) {
      console.log(node.value)
      this.preOderTraverseNode(node.left)
      this.preOderTraverseNode(node.right)
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if(node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null ) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  // 层次遍历
  levelOrderTraverse() {
    // 1. 如果没有根节点，不需要遍历
    if (!this.root) return

    // 2. 创建队列结构
    const queue: TreeNode<T>[] = []
    queue.push(this.root)
    
    // 3. 遍历队列中所有的节点
    while(queue.length) {
      // 3.1 访问节点的过程
      const current = queue.shift()!
      console.log(current.value)

      // 将左节点放入到队列
      if(current.left) {
        queue.push(current.left)
      }

      // 将右节点放入到队列
      if(current.right) {
        queue.push(current.right)
      }
    }
  }

  // 获取最值
  getMaxValue() : T | null {
    let current = this.root
    while(current && current.right) {
      current = current.right
    }
    return current?.value ?? null
  }

  getMinValue() : T | null {
    let current = this.root
    while(current && current.left) {
      current = current.left
    }
    return current?.value ?? null
  }
}

const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(5)
bst.insert(13)
bst.insert(12)
bst.insert(9)
bst.insert(8)

bst.print()
// bst.preOrderTraverse()
// console.log('----------')
// bst.inOrderTraverse()
// console.log('----------')
// bst.postOrderTraverse()
// bst.levelOrderTraverse()
console.log(bst.getMaxValue())
console.log(bst.getMinValue())
export {}
