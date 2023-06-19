import { TreeNode } from './0.二叉搜索树BSTree'

export default class AVLTreeNode<T> extends TreeNode<T> {
  // 保证获取到的left/right节点的类型是AVLTreeNode
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  // 获取每个节点的高度
  private getHeight() : number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return Math.max(leftHeight, rightHeight) + 1
  }

  // 权重: 平衡因子
  private getBalanceFactor() : number {
    const leftHeight = this.left ? this.left.getHeight(): 0
    const rightHeight = this.right ? this.right.getHeight(): 0

    return leftHeight - rightHeight
  }

  // 判断当前节点是否平衡
  get isBalanced() : boolean {
    const factor = this.getBalanceFactor()
    return factor >= -1 && factor <= 1
  }

  // 获取更高子节点
  public get higherChild() : AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    if (leftHeight > rightHeight) return this.left
    if (leftHeight < rightHeight) return this.right
    return this.isLeft ? this.left : this.right
  }

  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1. 选择当前节点的左节点作为旋转轴心pivot
    const pivot = this.left!
    // 2. pivot的父节点指向this(root)当前节点的父节点
    pivot.parent = this.parent

    // 3. this(root)当前节点的左节点, 指向pivot的右节点
    this.left = pivot.right
    // 4.如果右节点有值, 那么右节点的父节点指向this节点
    if (pivot.right) {
      pivot.right.parent = this
    }

    // 5.pivot的右节点指向this
    pivot.right = this
    // 6.this节点的父节点指向pivot
    this.parent = pivot

    // 7. 判断是否有父节点, 父节点的left/right指向pivot
    if(!pivot.parent) { 
      // pivot直接作为tree的根
      return pivot
    } else if(isLeft) {
      // pivot作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) { 
      // pivot作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot
  }

  leftRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    const pivot = this.right!
    pivot.parent = this.parent

    this.right = pivot.left
    if(pivot.left) {
      pivot.left.parent = this
    }

    pivot.left = this
    this.parent = pivot

    if(!pivot.parent) {
      return pivot
    } else if(isLeft) {
      pivot.parent.left = pivot
    } else if(isRight) {
      pivot.parent.right = pivot
    }

    return pivot
  }
}

