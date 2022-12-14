# Strong Components

Created: 2018-05-22 19:03:42 +0500

Modified: 2018-05-22 19:04:01 +0500

---

![Def. Vertices v and w are strongly connected if there is both a directed path from v to w and a directed path from w to v. Key property. Strong connectivity is an equivalence relation: • v is strongly connected to v. • If v is strongly connected to w, then w is strongly connected to v. • If v is strongly connected to w and w to x, then v is strongly connected to x. Def. A strong component is a maximal subset of strongly-connected vertices. 0 1 3 5 2 4 9 11 10 12 ](media/Strong-Components-image1.png){width="5.0in" height="3.46875in"}



![Connected components vs. strongly-connected components v and w are connected if there is a path between v and w 000 v and w are strongly connected if there is both a directed path from v to w and a directed path from w to v 1 3 5 2 4 1 9 11 10 12 3 5 2 4 9 11 10 12 3 connected components connected component id (easy to compute with DFS) 0 1 2 3 4 5 6 7 8 910 11 12 public int connected(int v, int w) { return cc [v] constant-time client connectivity query 5 strongly-connected components strongly-connected component id (how to compute?) 0 1 2 3 4 5 6 7 8 91011 12 public int stronglyConnected(int v, int w) { return s cc [v] scc[w] ; constant-time client strong-connectivity query ](media/Strong-Components-image2.png){width="5.0in" height="3.6770833333333335in"}



![Kosaraiu-Sharir algorithm: intuition Reverse graph. Strong components in G are same as in GR. Kernel DAG. Contract each strong component into a single vertex. how to compute? Idea. • Compute topological order (reverse postorder) in kernel DAG. • Run DFS, considering vertices in reverse topological order. 1 3 5 OEO 9 11 O 10 12 first vertex is a sink (has no edges pointing from it) 2 4 1 5 9 10 00 11 12 4 digraph G and its strong components kernel DAG of G (in reverse topological order) ](media/Strong-Components-image3.png){width="5.0in" height="3.8854166666666665in"}



![DFS in original digraph G 2 3 4 5 Kosaraiu-Sharir algorithm Simple (but mysterious) algorithm for computing strong components. • Phase l: run DFS on GR to compute reverse postorder. • Phase 2: run DFS on G, considering vertices in order given by first DFS. ONO 9 11 O 10 12 dfs (1) 1 done O dfs (O) dfs(5) dfs (4) dfs(3) check 5 dfs(2) check check 2 done 3 done check 2 4 done 5 done check 1 O done check 4 check 3 10 9 12 11 check unmarked vertices in the Order 10245 3 11 9 12 10678 8 dfs (6) 6 7 dfs (7) check 6 check 9 7 done check 8 3 dfs (11) check 4 dfs(12) dfs (9) check 11 dfs(10) check 12 10 done 9 done 12 done 11 done check 12 check 10 6 check 9 check 4 dfs (8) check 8 done check O done ](media/Strong-Components-image4.png){width="5.0in" height="3.71875in"}



![Kosaraiu-Sharir algorithm Proposition. Kosaraju-Sharir algorithm computes the strong components of a digraph in time proportional to E + V. • Running time: bottleneck is running DFS twice (and computing GR). • Correctness: tricky, see textbook (2nd printing). • Implementation: easy! ](media/Strong-Components-image5.png){width="5.0in" height="2.03125in"}



![Strong components in a digraph (with two DFSs) public cl ass KosarajuShari rSCC private bool ean marked C] ; private int C] id; private int count; public KosarajuShari rSCC(Di graph G) marked = new boolean [G.V()] ; id = new DepthFirstOrder dfs = new DepthFi rstOrder(G. reverse()) ; for (int v : dfs. reversePost()) if ( ! marked dfs(G, v); count-H- ; private void dfs(Digraph G, marked [v] = true; = count; for (int w : G.adj(v)) if (!marked[w]) dfs (G, w); int v) public bool ean stronglyConnected(int v, { return id [v] id[w] ; int w) ](media/Strong-Components-image6.png){width="5.0in" height="4.552083333333333in"}








