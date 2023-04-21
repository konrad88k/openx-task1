"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = exports.Node = void 0;
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
exports.Node = Node;
class Tree {
  constructor() {
    this.root = null;
  }

  // Insert single Node with given value.
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

  // Insert Nodes given in array.
  insertArray(array) {
    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }

  // [P.1] Search all Tree nodes
  // (if searchLeafsMode is true --> returns only leafs).
  depthFirstSearch(searchLeafsMode) {
    let results = [];
    function traverse(node) {
      if (node === null) return undefined;
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

  // [P.2] Find longest path from given node to bottom.
  longestPath(node) {
    if (node === null) {
      let output = [];
      return output;
    }
    let right = this.longestPath(node.right);
    let left = this.longestPath(node.left);
    if (right.length < left.length) {
      left.unshift(node.value);
    } else {
      right.unshift(node.value);
    }
    return left.length > right.length ? left : right;
  }

  // Print longestPath output as string with arrows instead of an array.
  pathPrint(node) {
    let output = this.longestPath(node);
    let path = output[0];
    for (let i = 1; i < output.length; i++) {
      path = path + " -> " + output[i];
    }
    return path;
  }

  // Calculate height of given node.
  height(node) {
    if (node === null) {
      return undefined;
    }
    return this.longestPath(node).length - 1;
  }

  // [P.3] Compare two instances of Tree.
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
exports.Tree = Tree;