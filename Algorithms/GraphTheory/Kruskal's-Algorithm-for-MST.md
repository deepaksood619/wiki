# Kruskal's Algorithm for MST

Created: 2018-02-19 10:37:00 +0500

Modified: 2018-05-22 19:29:34 +0500

---

![Kruskal's algorithm demo Consider edges in ascending order of weight. • Add next edge to tree T unless doing so would create a cycle. -7 0.16 17 0.19 -2 0.26 -7 0.28 1-3 1-5 0.32 -7 0.35 1-2 -7 -4 -2 0.40 3-6 0.52 6-0 -4 0.93 3 5 7 2 4 a minimum spanning tree 3 7 5 6 2- o 5 2 4- 4 6 6 0.29 0.34 0.36 0.37 0.38 0.58 ](media/Kruskal's-Algorithm-for-MST-image1.png)



![Kruskal's algorithm: correctness proof Proposition. [Kruskal 1956] Kruskal's algorithm computes the MST. Pf. • • • • Kruskal's algorithm is a special case of the greedy MST algorithm. Suppose Kruskal's algorithm colors the edge e black. Cut = set of vertices connected to v in tree T. No crossing edge is black. No crossing edge has lower weight. Why? add edge to tree 1 3 5 7 2 0 4 6 ](media/Kruskal's-Algorithm-for-MST-image2.png)



![Kruskal's algorithm: implementation challenge Challenge. Would adding edge to tree T create a cycle? If not, add it. How difficult? •1 • run DFS from v, check if w is reachable (T has at most V- I edges) log V log* V use the union-find data structure ! 5 4 add edge to tree 3 2 6 4 adding edge to tree would create a cycle 6 ](media/Kruskal's-Algorithm-for-MST-image3.png)



![Kruskal's algorithm: implementation challenge Challenge. Would adding edge to tree T create a cycle? If not, add it. Efficient solution. Use the union-find data structure. • Maintain a set for each connected component in T. • If v and w are in same set, then adding would create a cycle. • To add to T, merge sets containing v and w. w Case 1: adding v---w creates a cycle Case 2: add v---w to T and merge sets containing v and w ](media/Kruskal's-Algorithm-for-MST-image4.png)



![Kruskal's algorithm: Java implementation public class Kruska1MST private Queue<Edge> mst = new Queue<Edge>() ; public Kruska1MST(EdgeWei ghtedGraph G) Mi nPQ<Edge> pq = new Mi ; for (Edge e : G. edges()) pq. insert(e) ; UF uf = new while (!pq.isEmpty() && mst.size() < G. vo-l) Edge e = pq . delMi n ( ) ; int v = e. either(), w = e. other(v); if (!uf. connected(v, w)) uf.union(v, w); mst. enqueue(e) ; public edges() { return mst; build priority queue greedily add edges to MST edge v---w does not create cycle merge sets add edge to MST ](media/Kruskal's-Algorithm-for-MST-image5.png)



We use priority Queue to have edges in order



![Kruskal's algorithm: running time Proposition. Kruskal's algorithm computes MST in time proportional to E log E (in the worst case). operation build pq delete-min union connected frequency time per op E log E log E log* Vt log* Vt t amortized bound using weighted quick union with path compression Remark. recall: log* V s 5 in this universe If edges are already sorted, order of growth is E log* V. ](media/Kruskal's-Algorithm-for-MST-image6.png)








