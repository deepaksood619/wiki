# Ford-Fulkerson Algorithm

Created: 2018-03-21 19:45:24 +0500

Modified: 2018-05-21 22:57:20 +0500

---

# Maximum Flow (Max-Flow Min-Cut Theorem)

**Network Flow**

Flow network is a directed graph G=(V,E) such that each

edge has a non-negative capacity c(u,v)≥0.



Two distinguished vertices exist in G namely :
-   Source (denoted by s) : In-degree of this vertex is 0.
-   Sink (denoted by t) : Out-degree of this vertex is 0.



Flow in a network is an integer-valued function f defined

On the edges of G satisfying 0≤f(u,v)≤c(u,v), for every

Edge (u,v) in E.


-   Each edge (u,v) has a non-negative capacity c(u,v).
-   If (u,v) is not in E assume c(u,v)=0.
-   We have source s and sink t.
-   Assume that every vertex v in V is on some path from s to t.



Following is an illustration of a network flow:



![monton Saskatoon 20 Vancouver s 12 14 Winnipeg Calgary Regina ](media/Ford-Fulkerson-Algorithm-image1.png)



c(s,v1)=16

c(v1,s)=0

c(v2,s)=0 ...



**Condition for Network Flow**

For each edge (u,v) in E, the flow f(u,v) is a real valued function

that must satisfy following 3 conditions :
-   Capacity Constraint :**∀**u,v **∈**V, f(u,v) **≤**c(u,v)
-   Skew Symmetry : **∀**u,v **∈**V, f(u,v)= -f(v,u)
-   Flow Conservation: **∀**u **∈**V -- {s,t} Σ f(s,v)=0

**v∈V**

Skew symmetry condition implies that f(u,u)=0.



The value of a flow is given by :



![I f Ef(s, v) t) ](media/Ford-Fulkerson-Algorithm-image2.png)



The flow into the node is same as flow going out from the node and

thus the flow is conserved. Also the total amount of flow from source

s = total amount of flow into the sink t.




-   Create a Residual Graph for finding Augmenting Paths



The maximum amount of flow that we can push through the network does go through the path and find the minimum of either the unused capacity in some forward edge or the available flow in some backward edge. So once we have the bottleneck capacity, then we just go back through the path again and addResidualFlow to every edge in that path.



# Ford Fulkerson Algorithm
-   Try to improve the flow, until we reach the maximum value of the flow



![Ford-Fulkerson algorithm Initialization. Start with 0 flow. initialization 0/4 s 0/5 flow capacity 0/9 0/8 0/15 0/10 ](media/Ford-Fulkerson-Algorithm-image3.png)

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 1st augmenting path s 0/4 bottle 10 O/ 10 ](media/Ford-Fulkerson-Algorithm-image4.png)

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 2nd augmenting path s 0/4 ](media/Ford-Fulkerson-Algorithm-image5.png)

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 3rd augmenting path ](media/Ford-Fulkerson-Algorithm-image6.png)

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 4th augmenting path ](media/Ford-Fulkerson-Algorithm-image7.png)

![Idea: increase flow along augmenting paths Termination. All paths from s to t are blocked by either a • Full forward edge. • Empty backward edge. no more augmenting paths 0/4 8/8 0/15 10/10--- ](media/Ford-Fulkerson-Algorithm-image8.png)

![Ford-Fulkerson algorithm Ford-Fulkerson algorithm Start with O flow. While there exists an augmenting path: find an augmenting path - compute bottleneck capacity - increase flow on that path by bottleneck capacity Questions. • How to compute a mincut? • How to find an augmenting path? ](media/Ford-Fulkerson-Algorithm-image9.png)



![Ford-Fulkerson algorithm Ford-Fulkerson algorithm Start with O flow. While there exists an augmenting path: find an augmenting path - compute bottleneck capacity - increase flow on that path by bottleneck capacity Questions. • How to compute a mincut? Easy. s/ • How to find an augmenting path? BFS works well. ](media/Ford-Fulkerson-Algorithm-image10.png)



![Ford-Fulkerson algorithm with integer capacities Important special case. Edge capacities are integers betweer flow on each edge is an integer Invariant. The flow is integer-valued throughout Ford-Fulker Pf. [by induction] • Bottleneck capacity is an integer. • Flow on an edge increases/decreases by bottleneck capa Proposition. Number of augmentations the value of the rm Pf. Each augmentation increases the value by at least 1. important for some applications (stay tuned) ](media/Ford-Fulkerson-Algorithm-image11.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. initialize with O flow s 0 flow 0 capacity ](media/Ford-Fulkerson-Algorithm-image12.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 1st iteration ](media/Ford-Fulkerson-Algorithm-image13.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 2nd iteration s -4- ](media/Ford-Fulkerson-Algorithm-image14.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 3rd iteration ](media/Ford-Fulkerson-Algorithm-image15.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 4th iteration s -4- ](media/Ford-Fulkerson-Algorithm-image16.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 199th iteration ](media/Ford-Fulkerson-Algorithm-image17.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 200th iteration s -4- ](media/Ford-Fulkerson-Algorithm-image18.png)

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. can be exponential in input size Good news. This case is easily avoided. [use shortest/fattes s ](media/Ford-Fulkerson-Algorithm-image19.png)

![How to choose augmenting paths? FF performance depends on choice of augmenting paths. augmenting path shortest path fattest path random path DFS path number of paths E In(E U) implemen queue (I priority q randomizec stack (C digraph with V vertices, E edges, and integer capacities between 1 al ](media/Ford-Fulkerson-Algorithm-image20.png)



![How to choose augmenting paths? FF performance depends on choice of augmenting paths. augmenting path shortest path fattest path random path DFS path number of paths E In(E U) implemen queue (I priority q randomizec stack (C digraph with V vertices, E edges, and integer capacities between 1 al ](media/Ford-Fulkerson-Algorithm-image20.png)

![Flow network representation Flow edge data type. Associate flow fe and capacity ce with flow fe capacity ce Flow network data type. Need to process edge e Include e in both v and w's adjacency lists. Residual capacity. • Forward edge: residual capacity = ce -f. • Backward edge: residual capacity =fe. = in ei ](media/Ford-Fulkerson-Algorithm-image21.png)

![Flow network representation Residual network. A useful view of a flow network. original network 4/5 residual network 4/4 9/9 0/8 0/15 4/10 15 ](media/Ford-Fulkerson-Algorithm-image22.png)

![Flow edge API public class FlowEdge int w, double capaci ty) int int int doubl e doubl e doubl e voi d Stri ng FlowEdge(int v, from() to C) other(int v) capaci ty() residualCapaci tyTo(int v) addResi dual FlowTo(int v, double toStri ng() del ta) create af10) vertex this ed vertex this other e capacity flow in t residual capt add delta fl string repl ](media/Ford-Fulkerson-Algorithm-image23.png)

![Flow edge: Java implementation public class FlowEdge private final int v, w; private fi nal double capacity; private double flow; // from and to // capacity // flow public FlowEdge(int v, int w, double capacity) this. v this. w thi s . capaci ty = capacity; public public public public public if int from() int to() double capacity() double flow() return return return return w; capaci ty ; fl ow ; int other(int vertex) (vertex == v) return w; ](media/Ford-Fulkerson-Algorithm-image24.png)

![Flow edge: Java implementation public double residualCapaci tyTo(int vertex) if (vertex ---= v) return flow; else if (vertex w) return capacity - flow; else throw new IllegalArgumentException() ; public void addResidua1 FlowTo(int vertex, double del ta) if (vertex v) flow = delta; else if (vertex w) flow delta; else throw new IllegalArgumentException() ; ](media/Ford-Fulkerson-Algorithm-image25.png)

![Flow network API public class FlowNetwork voi d Ite rabl e<F1 owEdge> Ite rabl e<F1 owEdge> int int Stri ng Fl owNetwork(int V) Fl owNetwork(In in) addEdge(F10wEdge e) adj(int v) edges C) vo toStri ng ( ) create an empty flow netwo construct flow network add flow edge e to this o forward and backward all edges in thisflov number of vert number of eco string represent ](media/Ford-Fulkerson-Algorithm-image26.png)

![Flow network: Java implementation public class FlowNetwork private final int V; private adj ; public FlowNetwork(int V) this. V = V; adj --- (Bag<F10wEdge>[]) new Bag [V] ; for (int v = 0; v < V; v++) adj [v] = new ; public void addEdge(F1 owEdge e) int v = e. from(); int w = e.to(); adj [v] . add(e) ; same as but adja owEdc add forv ](media/Ford-Fulkerson-Algorithm-image27.png)

![Flow network: adjacency-lists representation Maintain vertex-indexed array of FlowEdge lists (use Bag abstr 2.0 02 3.0 3.0 1.0 1.0 1.0 2.0 3.0 tinyFN . txt 6 8 o 1 1 3 1 4 2 3 2 4 3 5 4 5 adj C] 1 2 3 4 5 references to the Fl owEdge 0b Bac objei ](media/Ford-Fulkerson-Algorithm-image28.png)

![Ford-Fulkerson: Java implementation public class FordFu1kerson private boolean[] marked; private FlowEdge[] edgeTo; private double value; // true if s->V path in residual n // last edge on s->V path // value of flow public FordFu1 kerson(F10wNetwork G, int s, int t) value --- 0.0; while (hasAugmenti ngPath(G, s, t)) double bottle = Double. POSITIVE_INFINITY; compul bottlen for (int v = t; v != s; v = edgeTo[v] . other(v)) bottle = Math.min(bottle, edgeTo [v] . residual Capacity T for (int v = t; v != s; v = edgeTo[v] . other(v)) edgeTo[v] .addResi dual Fl owTo(v, bottle) ; value bottle; private boolean hasAugmentingPath(F1 owNetwork G, * See next slide. int s, augmen int t) ](media/Ford-Fulkerson-Algorithm-image29.png)

![Finding a shortest augmenting path (cf. breadth-first sea private bool ean hasAugmenti ngPath(F10wNetwork G, int s, int t) edgeTo = new ; marked = new boolean CG.V()]; = new Queue<lnteger>() ; Queue<lnteger> queue queue . enqueue(s) ; marked [s] = true; while (!queue.isEmpty()) int v = queue. dequeue(); for (FlowEdge e : G. adj (v)) int w = e. other(v); found path from s to v in the residual networl if (e. residual CapacityTo(w) > 0 && ! marked [w]) edgeTo [w] marked [w] = true; queue . enqueue (w) ; save last edge on path to mar k w ; add w to the queue ](media/Ford-Fulkerson-Algorithm-image30.png)



**See Also**

Edmonds - Karp Algorithm (fully defined version of Ford-Fulkerson Algorithm)






























