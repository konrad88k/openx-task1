class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root && this.root !== 0) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (!temp.right && temp.right !== 0) {
                temp.right = newNode;
                return this;
            } else if (!temp.left && temp.left !== 0) {
                temp.left = newNode;
                return this;
            } else {
                temp = temp.right;
            }
        }
    }

    insertArray(array) {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    }

    // 1. Search nodes without children.
    leafSearch() {
        //return 'number'
    }

    // 2. Find longest path.
    longestPath(node) {
        if (node == null) {
            let output = [];
            return output;
        }

        let right = this.longestPath(node.right);
        let left = this.longestPath(node.left);

        if (right.length < left.length) {
            left.unshift(node.value)
        } else {
            right.unshift(node.value)
        }

        return (left.length > right.length ? left : right);
    }

    pathPrint(node) {
        let output = this.longestPath(node);
        let path = output[0];
        for (let i = 1; i < output.length; i++) {
            path = path + " -> " + output[i];
        }
        return path;
    }

    height(node) {
        if (node === null) {
            return undefined;
        }
        return this.longestPath(node).length - 1;
    }

    // 3. Compare two instances of structure.
    compareTree(treeA, treeB) {
        //return 'boolean'
    }
}

const myTree = new Tree;
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
myTree.insertArray(numArray);

console.dir(myTree); // print myTree
console.log("Longest path:", myTree.pathPrint(myTree.root)); // print longest path with arrows (edges)
console.log("Height of tree:", myTree.height(myTree.root)); // height of tree