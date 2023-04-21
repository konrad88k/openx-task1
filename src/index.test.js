import { Node, Tree } from './index.js';

describe("Node class instance", () => {

    let newNode;

    beforeEach(() => {
        newNode = new Node();
    });

    it("is an object", () => {
        expect(typeof newNode).toBe('object');
    });
    describe("when initialized, should", () => {
        it("have 'value' property equals given argument.", () => {
            newNode = new Node(1);
            expect(newNode.value).toBe(1);
        });
        it("have 'left' property equals 'null'.", () => {
            newNode = new Node(1);
            expect(newNode.left).toBe(null);
        });
        it("have 'right' property equals 'null'.", () => {
            newNode = new Node(1);
            expect(newNode.right).toBe(null);
        });
    });
});

describe("Tree class instance", () => {

    let myTree;
    let comparedTree;

    beforeEach(() => {
        myTree = new Tree();
        comparedTree = new Tree();
    });

    it("is an object", () => {
        expect(typeof myTree).toBe('object');
    });
    describe("can use methods:", () => {
        it("insert", () => {
            expect(typeof myTree.insert).toBe('function');
        });
        it("insertArray", () => {
            expect(typeof myTree.insertArray).toBe('function');
        });
        it("depthFirstSearch", () => {
            expect(typeof myTree.depthFirstSearch).toBe('function');
        });
        it("longestPath", () => {
            expect(typeof myTree.longestPath).toBe('function');
        });
        it("pathPrint", () => {
            expect(typeof myTree.longestPath).toBe('function');
        });
        it("height", () => {
            expect(typeof myTree.height).toBe('function');
        });
        it("compareTo", () => {
            expect(typeof myTree.compareTo).toBe('function');
        });
    });
    describe("when initialized, should", () => {
        it("have 'root' property equals 'null'.", () => {
            expect(myTree.root).toBe(null);
        });
        it("return an object when add single Node to structure.", () => {
            myTree.insert(1);
            expect(typeof myTree).toBe('object');
        });
        it("return an object when add array of Nodes to structure.", () => {
            myTree.insertArray([0, 1, 2]);
            expect(typeof myTree).toBe('object');
        });
        it("return an array when using DFS method", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            expect(Array.isArray(myTree.depthFirstSearch(false))).toBe(true);
        });
        it("properly search all nodes (run without any argument given).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            console.log("depthFirstSearch():", myTree.depthFirstSearch());
            let result = [2, 3, 5, 5, 1, 7, 2, 0, 8, 5];
            expect(myTree.depthFirstSearch()).toEqual(expect.arrayContaining(result));
        });
        it("properly search all nodes (run with 'false' argument given).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let result = [2, 3, 5, 5, 1, 7, 2, 0, 8, 5];
            console.log("depthFirstSearch(false):", myTree.depthFirstSearch(false));
            expect(myTree.depthFirstSearch(false)).toEqual(expect.arrayContaining(result));
        });
        it("properly search all nodes without any children (run with 'true' argument given).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let result = [2, 5, 1, 2, 5];
            console.log("depthFirstSearch(true):", myTree.depthFirstSearch(true));
            expect(myTree.depthFirstSearch(true)).toEqual(expect.arrayContaining(result));
        });
        it("properly define longest path from bottom to given node (returns an array).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let result = [5, 8, 0, 7, 5];
            console.log("longestPath(myTree.root):", myTree.longestPath(myTree.root));
            expect(myTree.longestPath(myTree.root)).toEqual(result);
        });
        it("properly print longest path from given node to bottom (returns string with arrows).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let result = '5 -> 7 -> 0 -> 8 -> 5';
            console.log("pathPrint(myTree.root):", myTree.pathPrint(myTree.root));
            expect(myTree.pathPrint(myTree.root)).toEqual(result);
        });
        it("properly define height of a given node.", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            console.log("height(myTree.root):", myTree.height(myTree.root));
            expect(myTree.height(myTree.root)).toEqual(4);
        });
        it("return 'true' when using 'compareTo' with same structure given.", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            comparedTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            console.log("[1] compareTo(comparedTree):", myTree.compareTo(comparedTree));
            expect(myTree.compareTo(comparedTree)).toBe(true);
        });
        it("return 'false' when using 'compareTo' with different structure given (different values, same length).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            comparedTree.insertArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            console.log("[2] compareTo(comparedTree):", myTree.compareTo(comparedTree));
            expect(myTree.compareTo(comparedTree)).toBe(false);
        });
        it("return 'false' when using 'compareTo' with different structure given (similar structure with one more node).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            comparedTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2, 1]);
            console.log("[3] compareTo(comparedTree):", myTree.compareTo(comparedTree));
            expect(myTree.compareTo(comparedTree)).toBe(false);
        });

    });
});