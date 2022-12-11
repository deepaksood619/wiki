# Adjacency List

Created: 2018-02-08 17:28:40 +0500

Modified: 2018-02-08 17:29:22 +0500

---

![Adiacency-list graph representation Maintain vertex-indexed array of lists. 11 adj C] 10 10 11 12 12 Bag objects representations of the same edge 10 12 12 ](media/Adjacency-List-image1.png){width="5.0in" height="4.114583333333333in"}



![Adiacency-list graph representation: public class Graph private final int V; private Bag<lnteger>[] adj ; public Graph(int V) this. V = V; Java implementation adj = C]) new Bag [V] ; for (int v = 0; v < V; v++) adj [v] = new Bag<lnteger>() ; public void addEdge(int v, int w) adj [v] . add (w) ; adj [w] . add (v) ; public Iterabl {L return adj [v] ; adj (int v) adjacency lists ( using Bag data type ) create empty graph with V vertices add edge v-w (parallel edges and self-loops allowed) iterator for vertices adjacent to v ](media/Adjacency-List-image2.png){width="5.0in" height="3.9583333333333335in"}




