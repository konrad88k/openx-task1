## Task description

Create a data structure which is able to represent the following model<br>
(assume that node values
are integers).

![example-tree](https://user-images.githubusercontent.com/105243490/232854988-4051f3b8-6f97-411e-bdad-9d2ffbd975f6.png)

Taking above data structure, implement features which allow:

1. Calculating the number of nodes that do not have any children.<br>
   For the example given above, there are 5 leafs (nodes without child),<br>
   i.e .: 2, 5, 1, 2, 5

2. Calculating the largest number of edges in a path from the root node<br>
   to a leaf node (node without child). For the example given above<br>
   the largest number of edges between root node and leaf is 4 for the path:<br>
   5 → 7 → 0 → 8 → 5

3. Checking if two instances of above data structures are equivalent to each other.<br>
   Let us assume that two independent instances of the structure described above<br>
   are equivalent if each node (starting from the root) in both of them has the same<br>
   value and children.

A desirable part of a given solution is also a set of tests to verify its correctness.

## Setup

To run this project, install it locally using npm:

```
$ cd ../project
$ npm install
$ npm run start
```

To run test, type: `npm run test`

To build project inside of `project/build` folder, type: `npm run build`
