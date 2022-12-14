# Depth First Search (DFS)

Created: 2018-02-05 19:28:59 +0500

Modified: 2021-12-29 00:30:41 +0500

---

Time Complexity: O(V+E) where V is number of vertices in the graph and E is number of edges in the graph.



DFS "is an algorithm for traversing or searching tree data structure. One starts at the root and explores as far as possible along each branch before backtracking." --- [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)



DFS explores a path all the way to a leaf before backtracking and exploring another path. Let's take a look at an example with this type of traversal.



When we go deep to the leaf and backtrack, this is called DFS algorithm.



**DFS Traversal Types**

1.  **Pre-order [Root, Left, Right]**

2.  **In-order [Left, Root, Right]**

3.  **Post-order [Left, Right, Root]**



**Pre-order**

![](media/Depth-First-Search-(DFS)-image1.jpg){width="5.0in" height="2.25in"}



The result for this algorithm will be 1--2--3--4--5--6--7.



1.  Print the value of the node.

2.  Go to the left child and print it. This is if, and only if, it has a left child.

3.  Go to the right child and print it. This is if, and only if, it has a right child.



def pre_order(self):

print(self.value)



if self.left_child:

self.left_child.pre_order()



if self.right_child:

self.right_child.pre_order()



**In-order**

![](media/Depth-First-Search-(DFS)-image2.jpg){width="5.0in" height="2.2708333333333335in"}



The result of the in-order algorithm for this tree example is 3--2--4--1--6--5--7.

The left first, the middle second, and the right last.



def in_order(self):

if self.left_child:

self.left_child.in_order()



print(self.value)



if self.right_child:

self.right_child.in_order()



1.  Go to the left child and print it. This is if, and only if, it has a left child.

2.  Print the node's value

3.  Go to the right child and print it. This is if, and only if, it has a right child.



**Post-order**

![](media/Depth-First-Search-(DFS)-image3.jpg){width="5.0in" height="2.1875in"}



The result of the post order algorithm for this tree example is 3--4--2--6--7--5--1.



The left first, the right second, and the middle last.



def post_order(self):

if self.left_child:

self.left_child.post_order()



if self.right_child:

self.right_child.post_order()



print(self.value)



1.  Go to the left child and print it. This is if, and only if, it has a left child.

2.  Go to the right child and print it. This is if, and only if, it has a right child.

3.  Print the node's value



**Algorithm**

DFS(to visit a vertex v)
-   Mark v as visited
-   Recursively visit all unmarked vertices w adjacent to v



![public cl ass DepthFi rstPaths pri vate bool ean[] marked; pri vate int [ ] edgeTo; private int s • public DepthFi rstPaths(Graph G, dfs(G, s); marked [v] = true if v connected to s edgeTo [v] = previous vertex on path from s to v int s) initialize data structures find vertices connected to s pri vate void dfs(Graph G, int v) recursive DFS does the work marked [v] true; for (int w : G. adj (v)) if marked [w] ) dfs(G, w); edgeTo [w] ](media/Depth-First-Search-(DFS)-image4.png){width="5.0in" height="3.6875in"}



**Non-Recursive**

public void dfs(Graph G, int v) {

Stack<Integer> stack = new Stack<Integer>();

stack.push(v);

while(!stack.isEmpty()) {

v = stack.pop();

marked[v] = true;

for (int w : G.adj(v)) {

if (!marked[w])

stack.push(w);

}

}

}



**Properties**

1.  DFS marks all vertices connected to s in time proportional to the sum of their degrees.

2.  After DFS, we can find vertices connected to s in constant time and can find a path to s (if one exists) in time proportional to its length.



**Union-Find vs DFS**

The union-find algorithm is best suited for situations where the equivalence relationship is changing, i.e., there are "Union" operations which need to be performed on your set of partitions. Given a fixed undirected graph, you don't have the equivalence relationships changing at all - the edges are all fixed. OTOH, if you have a graph with new edges being added, DFS won't cut it. While DFS is asymptotically faster than union-find, in practice, the likely deciding factor would be the actual problem that you are trying to solve.



Static graph - DFS

Dynamic graph - Union-find



**Depth First Search**

Maze Graph

![Maze graph. • Vertex = intersection. • Edge = passage. c:] intersection passage Goal. Explore every intersection in the maze. ](media/Depth-First-Search-(DFS)-image5.png){width="5.0in" height="4.041666666666667in"}



![Trémaux maze exploration Algorithm. • Unroll a ball of string behind you. • Mark each visited intersection and each visited passage. • Retrace steps when no unvisited options. ](media/Depth-First-Search-(DFS)-image6.png){width="5.0in" height="3.7395833333333335in"}



![Depth-first search Goal. Systematically search through a graph. Idea. Mimic maze exploration. DFS (to visit a vertex v) Mark v as visited. Recursively visit all unmarked vertices w adjacent to v. Typical applications. • Find all vertices connected to a given source vertex. • Find a path between two vertices. ](media/Depth-First-Search-(DFS)-image7.png){width="5.0in" height="4.354166666666667in"}



![Design pattern for graph processing Design pattern. Decouple graph data type from graph processing. • Create a Graph object. • Pass the Graph to a graph-processing routine. • Query the graph-processing routine for information. public class Paths Paths (Graph G, int s) bool ean hasPathTo(int v) Iterabl e<lnteger> pathTo(int v) Paths paths --- new Paths (G, for (int v O; v < G.V(); if (paths . hasPathTo(v)) StdOut . pri ntl n (v) ; find paths in G from source s is there a path from s to v? path from s to v; null if no such path s); print all vertices connected to s ](media/Depth-First-Search-(DFS)-image8.png){width="5.0in" height="4.052083333333333in"}



![Depth-first search demo To visit a vertex v: • Mark vertex v as visited. • Recursively visit all unmarked vertices adjacent to v. v 10 11 12 vertices reachable from O marked [l edgeTo[v] ](media/Depth-First-Search-(DFS)-image9.png){width="5.0in" height="3.8958333333333335in"}



![public cl ass DepthFi rstPaths pri vate bool ean[] marked; pri vate int [ ] edgeTo; private int s • public DepthFi rstPaths(Graph G, dfs(G, s); marked [v] = true if v connected to s edgeTo [v] = previous vertex on path from s to v int s) initialize data structures find vertices connected to s pri vate void dfs(Graph G, int v) recursive DFS does the work marked [v] true; for (int w : G. adj (v)) if marked [w] ) dfs(G, w); edgeTo [w] ](media/Depth-First-Search-(DFS)-image4.png){width="5.0in" height="3.6875in"}



**Properties**

1.  DFS marks all vertices connected to s in time proportional to the sum of their degrees.

2.  After DFS, we can find vertices connected to s in constant time and can find a path to s (if one exists) in time proportional to its length.



**Example**

1.  Flood fill (Photoshop magic wand)









