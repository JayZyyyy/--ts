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
}

const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)

bst.print()

export {}
