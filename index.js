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
            } else if (this.height(temp.right) - this.height(temp.left) < 2) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
    }

    insertArray(array) {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    }

    // 1. Search nodes without children
    // (if searchLeafsMode is true --> returns only leafs).
    depthFirstSearch(searchLeafsMode) {
        let results = [];
        function traverse(node) {
            if (node.left || node.left === 0) traverse(node.left);
            if (searchLeafsMode) {
                if (!node.left && node.left !== 0 && !node.right && node.right !== 0) results.push(node.value);
            } else {
                results.push(node.value);
            }
            if (node.right || node.right === 0) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    // 2. Find longest path.
    longestPath(node) {
        if (node === null) {
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
    compareTo(otherTree) {
        let treeA = this.depthFirstSearch(false);
        let treeB = otherTree.depthFirstSearch(false);
        if (treeA.length !== treeB.length) return false;
        for (let i = 0; i < treeA.length; i++) {
            if (treeA[i] !== treeB[i]) return false;
        }
        return true;
    }
}

const myTree = new Tree;
myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);

const treeA = new Tree;
treeA.insertArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

const treeB = new Tree;
treeB.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2, 1]);

const treeC = new Tree;
treeC.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);

console.log(myTree); // print Tree
console.log("myTree, height:", myTree.height(myTree.root)); // height of tree
console.log("myTree, longest path:", myTree.pathPrint(myTree.root)); // print longest path with arrows (edges)
console.log("myTree, nodes:", myTree.depthFirstSearch(false)); // search all nodes 
console.log("myTree, leafs:", myTree.depthFirstSearch(true)); // search only leafs

console.log("Compare myTree with treeA:", myTree.compareTo(treeA));
console.log("Compare myTree with treeB:", myTree.compareTo(treeB));
console.log("Compare myTree with treeC:", myTree.compareTo(treeC));