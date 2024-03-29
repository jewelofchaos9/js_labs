var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insertNode = function (node, insertingNode) {
        if (insertingNode.value < node.value) {
            if (node.left === null) {
                node.left = insertingNode;
            }
            else {
                this.insertNode(node.left, insertingNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = insertingNode;
            }
            else {
                this.insertNode(node.right, insertingNode);
            }
        }
    };
    BinaryTree.prototype.insert = function (value) {
        var node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    };
    BinaryTree.prototype.searchNode = function (node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.right, value);
        }
        else {
            return node;
        }
    };
    BinaryTree.prototype.search = function (value) {
        return this.searchNode(this.root, value);
    };
    BinaryTree.prototype.findMinimalNode = function (node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    };
    BinaryTree.prototype.removeNode = function (node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return null;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var minRightNode = this.findMinimalNode(node.right);
            node.value = minRightNode.value;
            node.right = this.removeNode(node.right, minRightNode.value);
            return node;
        }
    };
    BinaryTree.prototype.remove = function (value) {
        this.root = this.removeNode(this.root, value);
    };
    BinaryTree.prototype.calculateHeight = function (node) {
        if (node === null) {
            return 0;
        }
        return Math.max(this.calculateHeight(node.left), this.calculateHeight(node.right)) + 1;
    };
    BinaryTree.prototype.getHeight = function () {
        return this.calculateHeight(this.root);
    };
    BinaryTree.prototype.updateNode = function (value_old, value_new) {
        this.remove(value_old);
        this.insert(value_new);
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
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
