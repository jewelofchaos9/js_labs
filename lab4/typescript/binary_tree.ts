class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  
  public constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  public constructor() {
    this.root = null;
  }

  private insertNode(node: TreeNode<T>, insertingNode: TreeNode<T>) : void {
    if (insertingNode.value < node.value) {
      if(node.left === null) {
        node.left = insertingNode;
      } else {
        this.insertNode(node.left, insertingNode);
      }
    } else {

      if(node.right === null) {
        node.right= insertingNode;
      } else {
        this.insertNode(node.right, insertingNode);
      }
    }
  }

  public insert(value: T) : void {
    const node = new TreeNode(value);

    if(this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  private searchNode(node: TreeNode<T> | null, value: T) : TreeNode<T> | null {
    if(node === null) {
      return null;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if ( value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }

  public search(value: T) : TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  private findMinimalNode(node: TreeNode<T>) : TreeNode<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  private removeNode(node: TreeNode<T> | null, value: T) : TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return null;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let minRightNode = this.findMinimalNode(node.right);
      node.value = minRightNode.value;
      node.right = this.removeNode(node.right, minRightNode.value);
      return node;
    }
  }

  public remove(value: T) : void {
    this.root = this.removeNode(this.root ,value);
  }

  private calculateHeight(node: TreeNode<T> | null) : number {
    if (node === null) {
      return 0;
    }

    return Math.max(
      this.calculateHeight(node.left),
      this.calculateHeight(node.right)
    ) + 1;
  }

  public getHeight(): number {
    return this.calculateHeight(this.root);
  }

  public updateNode(value_old: T, value_new: T) : void {
    this.remove(value_old);
    this.insert(value_new);
  }
}

const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.search(7));
console.log(tree.search(1337));
tree.remove(7);
console.log(tree.search(7));
tree.insert(7);
console.log(tree.search(7));

tree.updateNode(7, 1234);
console.log(tree.search(1234));
console.log(tree.search(10));
