# Bellman Ford Algorithm

Created: 2018-03-19 08:38:58 +0500

Modified: 2018-05-22 20:14:26 +0500

---

![Shortest paths with negative weights: failed attempts Dijkstra. Doesn't work with negative edge weights. 2 3 -9 Dijkstra selects vertex 3 immediately after 0. 6 But shortest path from 0 to 3 is 2 Re-weighting. Conclusion. Add a constant to every edge weight doesn't work. 13 Adding 9 to each edge weight changes the shortest path from to 0---3. 3 15 2 Need a different algorithm. ](media/Bellman-Ford-Algorithm-image1.png)



![Negative cycles Def. A negative cycle is a directed cycle whose sum of edge weights is 0.35 -0.66 37 0.28 0.28 0.32 0.38 0.26 0.39 0.29 0.34 0.40 0.52 0.58 0.93 negative. Proposition. digraph 4 5 4 5 7 2 3 6 s 5 4 1 3 7 2 0 6 negative cycle (-0.66 + 0.37 + 0.28) shortest path from O to 6 A SPT exists iff no negative cycles. assuming all vertices reachable from s ](media/Bellman-Ford-Algorithm-image2.png)



Negative Cycles should not exists in the graph while calculating shortest paths, because if negative cycle exists between the source and destination, than path can be reduced to as low as possible just by cycling through the negative cycle.





![Bellman-Ford algorithm Bellman-Ford algorithm Initialize distTo[s] = O and distTo[v] = for all other vertices. Repeat V times: - Relax each edge. for (int --- for (int v = 0; v < G.V(); v++) for (Di rectedEdge e : G. adj (v)) rel ax(e) ; pass i (relax each edge) ](media/Bellman-Ford-Algorithm-image3.png)



![Bellman-Ford algorithm demo Repeat V times: relax all E edges. v 0.0 5.0 14.0 17.0 9.0 13.0 4---5 25.0 8.0 shortest-paths tree from vertex s di stT0 C] edge To C] ](media/Bellman-Ford-Algorithm-image4.png)



![Bellman-Ford algorithm: analysis Bellman-Ford algorithm Initialize distTo[s] = O and distTo[v] = 00 for all other vertices. Repeat V times: - Relax each edge. Proposition. Dynamic programming algorithm computes SPT in any edge- weighted digraph with no negative cycles in time proportional to Ex V. Pf idea. After pass i, found shortest path containing at most i edges. ](media/Bellman-Ford-Algorithm-image5.png)



![Bellman-Ford algorithm: practical improvement Observation. If distTo[v] does not change during pass i, no need to relax any edge pointing from v in pass i+l. FIFO implementation. Maintain queue of vertices whose distTo[] changed. be careful to keep at most one copy of each vertex on queue (why?) Overall effect. • The running time is still proportional to Ex Vin worst case. • But much faster than that in practice. ](media/Bellman-Ford-Algorithm-image6.png)



![Single source shortest-paths implementation: cost summary algorithm topological sort Dijkstra (binary heap) Bellman-Ford Bellman-Ford (queue-based) restriction no directed cycles no negative weights no negative cycles typical case worst case extra space E log V EV E log V EV EV Remark l. Remark 2. Remark 3. Directed cycles make the problem harder. Negative weights make the problem harder. Negative cycles makes the problem intractable. ](media/Bellman-Ford-Algorithm-image7.png)



![Finding a negative cycle Negative cycle. Add two method to the API for SP. 0.35 -o. 66 0.37 0.28 0.28 0.32 0.38 0.26 0.39 0.29 0.34 0.40 0.52 0.58 0.93 bool ean Iterable <Di rectedEdge> digraph 4 5 4->7 5->7 7->5 5->1 7->3 1->3 3 6 hasNegati veCyc1e ( ) negati veCyc1 e ( ) is there a negative cycle? negative cycle reachablefrom s s 5 4 1 3 7 2 6 negative cycle (-0.66 + 0.37 + 0.28) ](media/Bellman-Ford-Algorithm-image8.png)



![Finding a negative cycle Observation. If there is a negative cycle, Bellman-Ford gets stuck in loop, updating distTo[] and edgeTo[] entries of vertices in the cycle. 2 6 1 3 5 4 edgeTO [v] Proposition. If any vertex v is updated in phase v, there exists a negative cycle (and can trace back edgeTo[v] entries to find it). In practice. Check for negative cycles more frequently. ](media/Bellman-Ford-Algorithm-image9.png)











