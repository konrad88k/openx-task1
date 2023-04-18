# openx-task1

Create a data structure which is able to represent the following model (assume that node values
are integers).

![example-tree](https://user-images.githubusercontent.com/105243490/232854988-4051f3b8-6f97-411e-bdad-9d2ffbd975f6.png)

Taking above data structure, implement features which allow:

1. Calculating the number of nodes that do not have any children.
For the example given above, there are 5 leafs (nodes without child),
i.e .: 2, 5, 1, 2, 5

2. Calculating the largest number of edges in a path from the root node
to a leaf node (node without child). For the example given above
the largest number of edges between root node and leaf is 4 for the path:
5 → 7 → 0 → 8 → 5

3. Checking if two instances of above data structures are equivalent to each other.
Let us assume that two independent instances of the structure described above
are equivalent if each node (starting from the root) in both of them has the same
value and children.

A desirable part of a given solution is also a set of tests to verify its correctness.
