import Tree from './index.js';

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
            expect(typeof myTree.pathPrint).toBe('function');
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
    });
    describe("when initialized, should", () => {
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
            let result = Array.isArray(myTree.depthFirstSearch(false));
            expect(result).toBe(true);
        });
        it("properly search all nodes (run without any argument given).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let array = [2, 3, 5, 5, 1, 7, 2, 0, 8, 5];
            let result = myTree.depthFirstSearch();
            let expectedResult = expect.arrayContaining(array);
            expect(result).toEqual(expectedResult);
        });
        it("properly search all nodes (run with 'false' argument given).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let array = [2, 3, 5, 5, 1, 7, 2, 0, 8, 5];
            let expectedResult = expect.arrayContaining(array)
            let result = myTree.depthFirstSearch(false);
            expect(result).toEqual(expectedResult);
        });
        it("properly search all nodes without any children (run with 'true' argument given).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let array = [2, 5, 1, 2, 5];
            let expectedResult = expect.arrayContaining(array);
            let result = myTree.depthFirstSearch(true);
            expect(result).toEqual(expectedResult);
        });
        it("properly define longest path from bottom to given node (returns an array).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let expectedResult = [5, 8, 0, 7, 5];
            let result = myTree.longestPath(myTree.root);
            expect(result).toEqual(expectedResult);
        });
        it("properly print longest path from given node to bottom (returns string with arrows).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let expectedResult = '5 -> 7 -> 0 -> 8 -> 5';
            let result = myTree.pathPrint(myTree.root);
            expect(result).toEqual(expectedResult);
        });
        it("properly define height of a given node.", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let result = myTree.height(myTree.root);
            expect(result).toEqual(4);
        });
        it("return 'true' when using 'compareTo' with same structure given.", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            comparedTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            let result = myTree.compareTo(comparedTree);
            expect(result).toBe(true);
        });
        it("return 'false' when using 'compareTo' with different structure given (different values, same length).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            comparedTree.insertArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            let result = myTree.compareTo(comparedTree);
            expect(result).toBe(false);
        });
        it("return 'false' when using 'compareTo' with different structure given (similar structure with one more node).", () => {
            myTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2]);
            comparedTree.insertArray([5, 7, 3, 0, 1, 8, 5, 2, 5, 2, 1]);
            let result = myTree.compareTo(comparedTree);
            expect(result).toBe(false);
        });
    });
});