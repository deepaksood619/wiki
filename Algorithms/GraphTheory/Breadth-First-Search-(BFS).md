# Breadth First Search (BFS)

Created: 2018-02-05 19:28:44 +0500

Modified: 2019-09-06 22:22:53 +0500

---

BFS "is an algorithm for traversing or searching tree data structure. It starts at the tree root and explores the neighbor nodes first, before moving to the next level neighbors." --- [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)



**Breadth-First Search(BFS)**

BFS algorithm traverses the tree level by level and depth by depth.

![](media/Breadth-First-Search-(BFS)-image1.png){width="5.0in" height="2.8125in"}

Here is an example that helps to better explain this algorithm:

![](media/Breadth-First-Search-(BFS)-image2.png){width="5.0in" height="2.8125in"}

So we traverse level by level. In this example, the result is 1--2--5--3--4--6--7.
-   Level/Depth 0: only node with value 1
-   Level/Depth 1: nodes with values 2 and 5
-   Level/Depth 2: nodes with values 3, 4, 6, and 7

Now let's code it.

| def bfs(self): |                                    |
|----------------|-------------------------------------|
|               | queue = Queue()                     |
|               | queue.put(self)                     |
|               | while not queue.empty():            |
|               | current_node = queue.get()          |
|               | print(current_node.value)           |
|               | if current_node.left_child:         |
|               | queue.put(current_node.left_child)  |
|               | if current_node.right_child:        |
|               | queue.put(current_node.right_child) |



To implement a BFS algorithm, we use the queue data structure to help.

![](media/Breadth-First-Search-(BFS)-image3.png){width="5.0in" height="5.5625in"}

1.  First add the root node into the queue with the put method.

2.  Iterate while the queue is not empty.

3.  Get the first node in the queue, and then print its value.

4.  Add both left and right children into the queue (if the current nodehas children).

5.  Done. We will print the value of each node, level by level, with our queuehelper.





Other Way -

Can color the vertices of the graph using 3 color, white, gray and black
-   White - Initialized / Undiscovered Vetex
-   Gray - Initially discovered
-   Black - Completely Explored

This means that once a vetex is colored black, it has no white vertices adjacent to it.





![Breadth-first search demo Repeat until queue is empty: • Remove vertex v from queue. • Add to queue all unmarked vertices adjacent to v and mark them. v edgeTo[] distTo[l ](media/Breadth-First-Search-(BFS)-image4.png){width="5.0in" height="2.8958333333333335in"}



![Depth-first search. Put unvisited vertices on a stack. Breadth-first search. Put unvisited vertices on a queue. Shortest path. Find path from s to t that uses fewest number of edges. BFS (from source vertex s) Put s onto a FIFO queue, and mark s as visited. Repeat until the queue is empty: - remove the least recently added vertex v - add each of v's unvisited neighbors to the queue, and mark them as visited. Intuition. BFS examines vertices in increasing distance from s. ](media/Breadth-First-Search-(BFS)-image5.png){width="5.0in" height="3.4479166666666665in"}



Properties -

1.  BFS computes shortest paths (fewest number of edges) from s to all other vertices in a graph in time proportional to E + V.



![public class BreadthFi rstPaths pri vate bool ean[] marked; private int[] edgeTo; private void bfs(Graph G, int s) = new Queue<lnteger>() ; Queue<lnteger> q q. enqueue(s) ; marked[s] = true; while (!q.isEmpty()) int v = q. dequeue(); for (int w : G.adj if (!marked[w]) q . enqueue(w) ; marked [w] = true; edgeTo[w] = v; ](media/Breadth-First-Search-(BFS)-image6.png){width="5.0in" height="5.447916666666667in"}






