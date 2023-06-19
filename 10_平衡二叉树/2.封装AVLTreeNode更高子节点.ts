import { TreeNode } from './0.二叉搜索树BSTree'

class AVLTreeNode<T> extends TreeNode<T> {
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
}
