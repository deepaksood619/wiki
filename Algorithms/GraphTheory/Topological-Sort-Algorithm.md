# Topological Sort Algorithm

Created: 2018-03-12 22:34:02 +0500

Modified: 2018-05-22 19:25:10 +0500

---

**Acyclic Edge Weighted Digraphs**

It is easier to find shortest paths in an edge-weighted digraph that has no directed cycles than general digraph.



The topological sort algorithm compute the shortest-paths tree in an edge-weighted DAG in time proportional to O(E+V). It process the V vertices in topological order and relaxes each of the E edges exactly once.



![Acyclic shortest paths demo • Consider vertices in topological order. • Relax all edges pointing from that vertex. 5.0 9.0 8.0 12 12.0 15.0 4.0 3.0 11.0 9.0 4.0 13 20.0 5.0 20 1.0 13.0 an edge-weighted DAG 6.0 7.0 ](media/Topological-Sort-Algorithm-image1.png)



![Acyclic shortest paths demo • Consider vertices in topological order. • Relax all edges pointing from that vertex. o 1475236 di st To C] edgeTo C] v 0.0 14.0 17.0 9.0 13.0 25.0 8.0 shortest-paths tree from vertex s ](media/Topological-Sort-Algorithm-image2.png)



![Shortest paths in edge-weighted DAGs Proposition. Topological sort algorithm computes SPT in any edge- weighted DAC in time proportional to E + V. edge weights can be negative! • Each edge e = is relaxed exactly once (when v is relaxed), leaving dist To [w] distTo[v] + e.weight(). Inequality holds until algorithm terminates because: distTo[w] cannot increase di stTo[] values are monotone decreasing distTo[v] will not change because of topological order, no edge pointing to v will be relaxed after v is relaxed Thus, upon termination, shortest-paths optimality conditions hold. ](media/Topological-Sort-Algorithm-image3.png)



![public class AcyclicSP private Di rectedEdgeC] edgeTo; private doubleC] dist To; public AcyclicSP(EdgeWeightedDigraph G, edgeTo = new Di rectedEdgeCG.V()] ; dist To = new doubleCG.V()] ; for (int v = 0; v < G.V(); v++) int s) di st To C v] = Double. POSITIVE_INFINITY•, di st To [s] Topological topologi cal = new Topological (G) ; for (int v : topological . order()) for (Di rectedEdge e . G. adj (v)) rel ax(e) ; topological order ](media/Topological-Sort-Algorithm-image4.png)



**Precedence Scheduling**

Goal: Given a set of tasks to be completed with precedence constraints, in which order should we schedule the tasks?



Digraph model: vertex = task; edge = precedence constraint



Topological Sort can only work with DAG (Directed Acyclic Graph)

Topological sort: Redraw DAG so all edges point upwards.



Using DFS we can solve topological sort easily
-   Run depth-first search
-   Return vertices in reverse postorder
-   ![Depth-first search order public cl ass DepthFi rst0rder _pri vate bool ean []marked• pri vate Stack<lnteger> reversePost; public DepthFi rst0rder(Digraph G) = new Stack<lnteger>() ; reversePost marked = new boolean [G.V()] ; for (int v = 0; v < G.V(); v++) if (!marked[v]) dfs(G, v); private void dfs(Digraph G, int v) marked [v] = true; for (int w : G. adj if (!marked[w]) dfs(G, reversePost. push (v) ; public Iterabl reversePost() { return reversePost; returns all vertices in "reverse DFS postorder" ](media/Topological-Sort-Algorithm-image5.png)



![Topological sort in a DAG: correctness proof Proposition. Reverse DFS postorder of a DAG is a topological order. Pf. Consider any edge When dfs(v) is called: • Case l: dfs(w) has already been called and returned. Thus, w was done before v. • Case 2: dfs(w) has not yet been called. dfs(w) will get called directly or indirectly by dfs(v) and will finish before dfs(v). Thus, w will be done before v. • Case 3: dfs(w) has already been called, but has not yet returned. Can't happen in a DAG: function call stack contains path from w to v, so would complete a cycle. dfs(O) dfs(l) dfs(4) 4 done 1 done dfs(2) 2 done dfs(5) check 2 5 done 0 done check 1 check 2 v = 3 dfs(3) check 2 check 4 case I case 2 all vertices pointing from 3 are done before 3 is done, so they appear after 3 in topological order check 5 dfs(6) check 0 check 4 6 done 3 done check 4 check 5 check 6 done ](media/Topological-Sort-Algorithm-image6.png)



![Directed cycle detection Proposition. A digraph has a topological order iff no directed cycle. • If directed cycle, topological order impossible. • If no directed cycle, DFS-based algorithm finds a topological order. 1 3 5 2 4 9 11 10 12 a digraph with a directed cycle ](media/Topological-Sort-Algorithm-image7.png)









