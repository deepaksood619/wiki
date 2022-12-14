# Connected Components

Created: 2018-02-08 22:22:04 +0500

Modified: 2018-02-08 22:35:56 +0500

---

**Connected Components**

Definition: Vertices v and w are connected if there is a path between them.

Goal: Preprocess graph to answer queries of the form is v connected to w in constant time.

Union-find: Does not answer in constant time



![The relation "is connected to" is an equivalence relation: • Reflexive: v is connected to v. • Symmetric: if v is connected to w, then w is connected to v. • Transitive: if v connected to w and w connected to x, then v connected to x. Def. A connected component is a maximal set of connected vertices. Remark. 10 11 3 connected components 12 Given connected components, can answer queries in constant time. ](media/Connected-Components-image1.png)



![Goal. Partition vertices into connected components. Connected components Initialize all vertices v as unmarked. For each unmarked vertex v, run DFS to identify all tinyG.txt vertices discovered as part of the same component. 13 9 12 02 11 12 9 10 53 9 11 10 12 9 11 ](media/Connected-Components-image2.png)



![To visit a vertex v: • Mark vertex v as visited. • Recursively visit all unmarked vertices adjacent to v. v 10 11 12 done marked [l ](media/Connected-Components-image3.png)



![public class CC pri vate bool ean[] marked • private int[] id; private int count; public CC(Graph G) marked = new boolean [G.V() id = new ; for (int v = O; v < G.V(); v++) if dfs(G, v); count++ ; public int count() public int id(int v) pri vate void dfs(Graph G, id[v] = id of component containing v number of components run DFS from one vertex in each component see next slide int v) ](media/Connected-Components-image4.png)



![public int count() { return count; public int id(int v) { return i d [v] ; private void dfs(Graph G, marked[v] = true • id[v] = count; for (int w : G.adj(v)) if (!marked[w]) dfs (G, w) ; int v) number of components id of component containing v all vertices discovered in same call of dfs have same id ](media/Connected-Components-image5.png)



**Union-Find vs DFS**

The union-find algorithm is best suited for situations where the equivalence relationship is changing, i.e., there are "Union" operations which need to be performed on your set of partitions. Given a fixed undirected graph, you don't have the equivalence relationships changing at all - the edges are all fixed. OTOH, if you have a graph with new edges being added, DFS won't cut it. While DFS is asymptotically faster than union-find, in practice, the likely deciding factor would be the actual problem that you are trying to solve.

**Static graph - DFS**

**Dynamic graph - Union-find**





