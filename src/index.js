export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor() {
        this.root = null;
    }

    // Insert single Node with given value.
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (temp.right === null) {
                temp.right = newNode;
                return this;
            } else if (temp.left === null) {
                temp.left = newNode;
                return this;
            } else if (this.height(temp.right) - this.height(temp.left) < 2) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
    }

    // Insert Nodes given in array.
    insertArray(array) {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    }

    // [#1] Search all Tree nodes with DFS method (InOrder)
    // Search only leaf nodes (without any children) when argument is set on 'true'.
    depthFirstSearch(onlyLeaves = false) {
        let results = [];
        function traverse(node) {
            if (node === null) return undefined;
            if (node.left || node.left === 0) traverse(node.left);
            if (onlyLeaves) {
                if (node.left === null && node.right === null) results.push(node.value);
            } else {
                results.push(node.value);
            }
            if (node.right || node.right === 0) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    // [#2] Find longest path from given node to bottom.
    longestPath(node) {
        if (node === null) {
            let output = [];
            return output;
        }
        let right = this.longestPath(node.right);
        let left = this.longestPath(node.left);
        if (right.length < left.length) {
            left.push(node.value)
        } else {
            right.push(node.value)
        }
        return (left.length > right.length ? left : right);
    }

    // Print longestPath output as string with arrows instead of an array.
    // Print values starting from last element of given array.
    pathPrint(node) {
        let output = this.longestPath(node);
        let path = output[output.length - 1];
        for (let i = output.length - 2; i >= 0; i--) {
            path = path + " -> " + output[i];
        }
        return path;
    }

    // Calculate height of a given node.
    height(node) {
        if (node === null) {
            return undefined;
        }
        return this.longestPath(node).length - 1;
    }

    // [#3] Compare two instances of Tree.
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