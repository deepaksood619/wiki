# Shortest Path Algorithms

Created: 2018-02-22 23:40:37 +0500

Modified: 2019-10-06 16:46:42 +0500

---

**Shortest path variants**

**Which vertices?**
-   Single Source : from one vertex s to every other vertex.
-   Source-sink : from one vertex s to another vertex t
-   All pairs : between all pairs of vertices



**Restrictions on edge weights?**
-   Nonnegative weights
-   Euclidean weights
-   Arbitrary weighs



**Cycles?**
-   No directed cycles
-   No "negative cycles"



**Concept -**

**Edge Relaxation**

Create SPT (Shortest Path Tree)

![Relax edge e di st To C v] di st To [w] • edge To [w] is length of shortest known path from s to v. is length of shortest known path from s to w. is last edge on shortest known path from s to w. • If e = gives shorter path to w through v, update both distToCw] and edgeToCw]. successfully relaxes s black edges are in edgeTo[] 3.1 W -7-:-2- 4.4 ](media/Shortest-Path-Algorithms-image1.png)



![private void relax (Di rectedEdge e) int v = e.from(), w = e.to(); i f (di stTo[w] > distTo[v] + e.weight()) di stTo [w] = distTo[v] + e.weight() ; edgeTo [w] = e ](media/Shortest-Path-Algorithms-image2.png)



Optimality Condition (there is no edge we missed)



![Generic shortest-paths algorithm Generic algorithm (to compute SPT from s) Initialize distTo[s] = O and distTo[v] = for all other vertices. Repeat until optimality conditions are satisfied: Relax any edge. Proposition. Generic algorithm computes SPT (if it exists) from s. Pf sketch. • Throughout algorithm, distToCv] is the length of a simple path from s to v (and edgeToCv] is last edge on path). • Each successful relaxation decreases distToCv] for some v. • The entry distToCv] can decrease at most a finite number of times. ](media/Shortest-Path-Algorithms-image3.png)





**Efficient implementations. How to choose which edge to relax?**

1.  Topological sort algorithm (no directed cycles)

2.  Dijkstra's algorithm (nonnegative weights)

3.  Bellman-Ford algorithm (no negative cycles)

4.  Ford - Fulkerson Algorithm (for maximum flow in a graph)

5.  Floyd-Warshall Algorithm (All pairs shortest path algorithm)



![Single source shortest-paths implementation: cost summary algorithm topological sort Dijkstra (binary heap) Bellman-Ford Bellman-Ford (queue-based) restriction no directed cycles no negative weights no negative cycles typical case worst case extra space E log V EV E log V EV EV Remark l. Remark 2. Remark 3. Directed cycles make the problem harder. Negative weights make the problem harder. Negative cycles makes the problem intractable. ](media/Shortest-Path-Algorithms-image4.png)



![Shortest paths summary Dijkstra's algorithm. • Nearly linear-time when weights are nonnegative. • Generalization encompasses DFS, BFS, and Prim. Acyclic edge-weighted digraphs. • Arise in applications. • Faster than Dijkstra's algorithm. • Negative weights are no problem. Negative weights and negative cycles. • Arise in applications. • If no negative cycles, can find shortest paths via Bellman-Ford. • If negative cycles, can find one via Bellman-Ford. Shortest-paths is a broadly useful problem-solving model. ](media/Shortest-Path-Algorithms-image5.png)



**Applications**
-   PERT / CPM (Program Evaluation and Review Technique / Critical Path Method)
-   Map routing
-   **Seam carving**
-   Robot navigation
-   Texture mapping
-   Typesetting in TeX
-   Urban traffic planning
-   Optimal pipelining of VLSI chip
-   Telemarketer operator scheduling
-   Routing of telecommunication messages
-   Network routing protocol (OSPF, BGP, RIP)
-   Exploiting arbitrage opportunities in currency exchange.
-   Optimal truck routing through given traffic congestion pattern.



**Advanced - Used in maps (precomputed)**

1.  Highway-node routing

2.  Contraction hierarchies



**Applications - Arbitrage Detection**

Arbitrage - the simultaneous buying and selling of securities, currency, or commodities in different markets or in derivative forms in order to take advantage of differing prices for the same asset. (Making money of the System)



![Negative cycle application: arbitrage detection Problem. Given table of exchange rates, is there an arbitrage opportunity? USD EUR GBP CHF CAD USD I .350 I .52] 0.943 0.995 EUR 0.741 1.126 0.698 0.732 CBP 0.657 0.888 0.620 0.650 CHF I .06] 1 .433 1.614 I .049 CAD 1.011 I .366 1.538 0.953 Ex. $1 ,OOO 741 Euros 1,012.206 Canadian dollars ---$1 ,007.14497. 1000 x 0.741 x 1.366 x 0.995 = 1007.14497 ](media/Shortest-Path-Algorithms-image6.png)



![Currency exchange graph. . Vertex = currency. Edge = transaction, with weight equal to exchange rate. • Find a directed cycle whose product of edge weights is > l. 0.741 1.366 .995 - 1.00714497 EUR 0.657 USD 1.0,19 CAD GBP 1.521 CHF Challenge. Express as a negative cycle detection problem. ](media/Shortest-Path-Algorithms-image7.png)



![Model as a negative cycle detection problem by taking logs. • Let weight of edge be -In (exchange rate from currency v to w). • Multiplication turns to addition; > I turns to < 0. • Find a directed cycle whose sum of edge weights is < 0 (negative cycle). = -.0071 -Inc. 741) .2998 - -In(1.366) . 3119 + -In(.995) .0050 USD . 4201 EUR eplace eac weight w with ---In(w) -.0478 GBP 4914 Remark. CAD CHF . 0481 Fastest algorithm is extraordinarily valuable! ](media/Shortest-Path-Algorithms-image8.png)










