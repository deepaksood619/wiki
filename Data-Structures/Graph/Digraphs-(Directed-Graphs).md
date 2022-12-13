# Digraphs (Directed Graphs)

Created: 2018-02-10 19:50:27 +0500

Modified: 2018-05-22 19:28:12 +0500

---

![Digraph. directed path Set of vertices connected pairwise by directed edges. from O to 2 3 5 vertex of outdegree 4 and indegree 2 6 2 4 8 9 11 7 10 directed cycle 12 ](media/Digraphs-(Directed-Graphs)-image1.png)
1.  Path

2.  Shortest path

3.  Topological Sorting (can you draw a digraph so that all edges point upwards)

4.  Strong Connectivity

5.  Transitive closure (For which vertices v and w is there a path from v to w)

6.  PageRank
![Adjacency-lists digraph representation Maintain vertex-indexed array of lists. O O 11 O 10 12 adj [ ] 10 11 12 11 12 10 12 ](media/Digraphs-(Directed-Graphs)-image2.png)
![Digraph-processing summary: single-source reachability in a digraph topological sort in a DAG strong components in a digraph algorithms of the day 10 11 11 12 DFS DFS Kosaraju-Sharir DFS (twice) ](media/Digraphs-(Directed-Graphs)-image3.png)
![Digraph applications digraph transportation web food web Word Net scheduling financial cell phone infectious disease game citation object graph inheritance hierarchy control flow vertex street intersection web page species synset task bank person person board position journal article object class code block directed edge one-way street hyperlink predator-prey relationship hypernym precedence constraint transaction placed call infection legal move citation pointer inherits from jump ](media/Digraphs-(Directed-Graphs)-image4.png)
**Digraph Search**

1.  Reachability - Find all vertices reachable from s along a directed path. (Use DFS)

![Reachability application: program control-flow analysis Every program is a digraph. • Vertex = basic block of instructions (straight-line program). • Edge = jump. Dead-code elimination. Find (and remove) unreachable code. Infinite-loop detection. Determine whether exit is unreachable. n t2t3t4t10 t' t20tsst'0t11 t' t2t3'4t10 t' t2t3'4t10 t3ror' t3taro,l to: t2ert t2t3t4 t2t3t4 t' Qt3tSt10t11 t1t2t3tsnot11 t1t2t3t10t11 t' t2t3t4 t3t10 t3t10 t1t2t3tst10t11 t2t3tSt10t11 ](media/Digraphs-(Directed-Graphs)-image5.png)
![Reachability application: mark-sweep garbage collector Every data structure is a digraph. • Vertex = object. Edge = reference. Roots. Objects known to be directly accessible by program (e.g., stack). Reachable objects. Objects indirectly accessible by program (starting at a root and following a chain of pointers). ](media/Digraphs-(Directed-Graphs)-image6.png)
![Reachability application: mark-sweep garbage collector Mark-sweep algorithm. [McCarthy, 1 960] • Mark: mark all reachable objects. • Sweep: if object is unmarked, it is garbage (so add to free list). Memory cost. Uses I extra mark bit per object (plus DFS stack). ](media/Digraphs-(Directed-Graphs)-image7.png)
2.  ![Multiple-source shortest paths Multiple-source shortest paths. Given a digraph and a set of source vertices, find shortest path from any vertex in the set to each other vertex. Ex. s = {1, 7, 10}. • Shortest path to 4 is 7-+6---4. • Shortest path to 5 is • Shortest path to 12 is 10-+12. 2 3 4 5 9 11 10 12 Q. How to implement multi-source shortest paths algorithm? A. Use BFS, but initialize by enqueuing all source vertices. ](media/Digraphs-(Directed-Graphs)-image8.png)
![](media/Digraphs-(Directed-Graphs)-image9.png)
**Edge-Weighted Graph API**

We use adjacency-list representation for representing a weighted graph, where each edge has a weight associated with it
**See also**
-   Topological Sort
