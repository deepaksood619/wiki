# Maximum Flow and Minimum Cut

Created: 2018-03-20 22:07:52 +0500

Modified: 2021-06-16 19:48:11 +0500

---

1.  Introduction to Maxflow

2.  Ford-Fulkerson Algorithm using the shortest augmenting path rule

3.  Maxflow-Mincut Theorem (bipartite matching & baseball elimination)

4.  Running Time Analysis

5.  Java Implementation

6.  Maxflow Applications



**Mincut problem**

Input: An edge-weighted digraph, source vertex s, and target vertext t

![01 01 91 sı 01 sı Aıpeclw ](media/Maximum-Flow-and-Minimum-Cut-image1.jpg){width="3.4583333333333335in" height="2.3541666666666665in"}



Def. A st-cut (cut) is a partition of the vertices into two disjoint sets, with s in one set A and t in the other set B

Def. Its capacity is the sum of the capacities of the edges from A to B

![10 15 capaclty ](media/Maximum-Flow-and-Minimum-Cut-image2.jpg){width="5.0in" height="2.3645833333333335in"}



![8 don't count edges from B to A capacity 10 = 10+8+16=34 ](media/Maximum-Flow-and-Minimum-Cut-image3.png){width="5.604166666666667in" height="1.90625in"}



![Minimum st-cut (mincut) problem. 10 8 Find a cut of minimum capacity. 10 capacity = 10+8+10=28 ](media/Maximum-Flow-and-Minimum-Cut-image4.png){width="5.604166666666667in" height="2.8854166666666665in"}



**Maxflow problem**

Input: An edge-weighted digraph, source vertex s, and target vertext t

![capacity 15 ](media/Maximum-Flow-and-Minimum-Cut-image5.jpg){width="3.53125in" height="2.5833333333333335in"}



Def. An st-flow (flow) is an assignment of values to the edges such that:
-   Capacity constraint: 0 <= edge's flow <= edge's capacity
-   Local equilibrium: inflow = outflow at every vertex (except s and t)



![flow 5/5 capacity 0/15 5/8 0/15 10/16 inflow at v = 5+5+0 = 10 outflow at v = 10+0 = 10 ](media/Maximum-Flow-and-Minimum-Cut-image6.jpg){width="5.0in" height="2.7083333333333335in"}



Def. The value of a flow is the inflow at t. (We assume no edge points to s from t)

![Val Lle 5 + 1 0 + 1 0 2 5 1 0 / 1 6 ](media/Maximum-Flow-and-Minimum-Cut-image7.jpg){width="5.0in" height="2.0104166666666665in"}



Maximum st-flow (maxflow) problem. Find a flow of maximum value

![8? = OI +01 +8 = anłeA 01/01 91/ El 8/8 6/8 ](media/Maximum-Flow-and-Minimum-Cut-image8.jpg){width="5.0in" height="2.0104166666666665in"}



**Summary**

Input: A weighted digraph, source vertex s, and target vertext t

Mincut problem: Find a cut of minimum capacity

Maxflow problem: Find a flow of maximum value

![10 value of flow = 28 10 capacity of cut 28 ](media/Maximum-Flow-and-Minimum-Cut-image9.jpg){width="5.0in" height="1.7291666666666667in"}

Fact: These two problems are dual



![In the flow network below, how many distinct augmenting paths are there with respect to the given flow f? 2/2 Correct 6/6 The two augmenting paths are s ---+ 2 -+ 1 ---+ 3 -+ t (with bottleneck capacity 2) and s -+ 2 ---+ 4 -+ I ---+ 3 -+ t (with bottleneck capacity 1). ](media/Maximum-Flow-and-Minimum-Cut-image10.png){width="5.0in" height="2.2604166666666665in"}



![Ford-Fulkerson algorithm Initialization. Start with 0 flow. initialization 0/4 s 0/5 flow capacity 0/9 0/8 0/15 0/10 ](media/Maximum-Flow-and-Minimum-Cut-image11.png){width="6.354166666666667in" height="4.90625in"}

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 1st augmenting path s 0/4 bottle 10 O/ 10 ](media/Maximum-Flow-and-Minimum-Cut-image12.png){width="6.354166666666667in" height="4.90625in"}

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 2nd augmenting path s 0/4 ](media/Maximum-Flow-and-Minimum-Cut-image13.png){width="6.354166666666667in" height="4.90625in"}

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 3rd augmenting path ](media/Maximum-Flow-and-Minimum-Cut-image14.png){width="6.354166666666667in" height="4.90625in"}

![Idea: increase flow along augmenting paths Augmenting path. Find an undirected path from s to t such t • Can increase flow on forward edges (not full). • Can decrease flow on backward edge (not empty). 4th augmenting path ](media/Maximum-Flow-and-Minimum-Cut-image15.png){width="6.354166666666667in" height="4.90625in"}

![Idea: increase flow along augmenting paths Termination. All paths from s to t are blocked by either a • Full forward edge. • Empty backward edge. no more augmenting paths 0/4 8/8 0/15 10/10--- ](media/Maximum-Flow-and-Minimum-Cut-image16.png){width="6.354166666666667in" height="4.90625in"}

![Ford-Fulkerson algorithm Ford-Fulkerson algorithm Start with O flow. While there exists an augmenting path: find an augmenting path - compute bottleneck capacity - increase flow on that path by bottleneck capacity Questions. • How to compute a mincut? • How to find an augmenting path? ](media/Maximum-Flow-and-Minimum-Cut-image17.png){width="6.354166666666667in" height="4.90625in"}



![Relationship between flows and cuts Def. The net flow across a cut (A, B) is the sum of the flows o from A to B minus the sum of the flows on its edges from frc Flow-value lemma. Let f be any flow and let (A, B) be any cu flow across (A, B) equals the value off. net flow across cut = 5+10+10= 25 +0) 0/4 O 5/5 5/9 5/8 10/10 ](media/Maximum-Flow-and-Minimum-Cut-image18.png){width="6.354166666666667in" height="4.90625in"}

![Relationship between flows and cuts Def. The net flow across a cut (A, B) is the sum of the flows o from A to B minus the sum of the flows on its edges from frc Flow-value lemma. Let f be any flow and let (A, B) be any cu flow across (A, B) equals the value off. net flow across cut = 10+5+10= 25 0/4 5/5 5/9 5/8 10/10---+ ](media/Maximum-Flow-and-Minimum-Cut-image19.png){width="6.354166666666667in" height="4.90625in"}

![Relationship between flows and cuts Def. The net flow across a cut (A, B) is the sum of the flows o from A to B minus the sum of the flows on its edges from frc Flow-value lemma. Let f be any flow and let (A, B) be any cu flow across (A, B) equals the value off. net flow across cut 0/4 5/5 = 10 0) ---(5 +5+0+0) = edges from 5/8 10/10 ](media/Maximum-Flow-and-Minimum-Cut-image20.png){width="6.354166666666667in" height="4.90625in"}

![Relationship between flows and cuts Def. The net flow across a cut (A, B) is the sum of the flows o from A to B minus the sum of the flows on its edges from frc Flow-value lemma. Let f be any flow and let (A, B) be any cu flow across (A, B) equals the value off. Pf. By induction on the size of B. • Base case: B = {t}. • Induction step: remains true by local equilibrium when r any vertex from A to B. Corollary. Outflow from s = inflow to t = value of flow. ](media/Maximum-Flow-and-Minimum-Cut-image21.png){width="6.354166666666667in" height="4.90625in"}

![Relationship between flows and cuts Weak duality. Letf be any flow and let (A, B) be any cut. Then, the value of the flow the capacity of the cut. Pf. Value of flow f = net flow across cut (A, B) capacity of flow-value lemma flow bounded by capacity 10 ](media/Maximum-Flow-and-Minimum-Cut-image22.png){width="6.354166666666667in" height="4.90625in"}

![Maxfiow-mincut theorem Augmenting path theorem. A flow fis a maxflow iff no augm Maxflow-mincut theorem. Value of the maxflow = capacity oi Pf. The following three conditions are equivalent for any flov i. There exists a cut whose capacity equals the value of the ii. f is a maxflow. iii. There is no augmenting path with respect to f. [i*ii] • Suppose that (A, B) is a cut with capacity equal to the vall • Then, the value of any flow f' capacity of (A, B) = vall • Thus, fis a maxflow. weak duality by assumptio ](media/Maximum-Flow-and-Minimum-Cut-image23.png){width="6.354166666666667in" height="4.90625in"}

![Maxfiow-mincut theorem Augmenting path theorem. A flow fis a maxflow iff no augm Maxflow-mincut theorem. Value of the maxflow = capacity oi Pf. The following three conditions are equivalent for any flov i. There exists a cut whose capacity equals the value of the ii. f is a maxflow. iii. There is no augmenting path with respect to f. [ ii iii] We prove contrapositive: • Suppose that there is an augmenting path with respect • Can improve flow f by sending flow along this path. • Thus, f is not a maxflow. ](media/Maximum-Flow-and-Minimum-Cut-image24.png){width="6.354166666666667in" height="4.90625in"}

![Maxfiow-mincut theorem Augmenting path theorem. A flow fis a maxflow iff no augm Maxflow-mincut theorem. Value of the maxflow = capacity oi Pf. The following three conditions are equivalent for any flov i. There exists a cut whose capacity equals the value of the ii. f is a maxflow. iii. There is no augmenting path with respect to f. Suppose that there is no augmenting path with respect to f. • Let (A, B) be a cut where A is the set of vertices connectec undirected path with no full forward or empty backward ](media/Maximum-Flow-and-Minimum-Cut-image25.png){width="6.354166666666667in" height="4.90625in"}

![Computing a mincut from a maxfiow To compute mincut (A, B) from maxflowf: • By augmenting path theorem, no augmenting paths with • Compute A = set of vertices connected to s by an undire( with no full forward or empty backward edges. 0/4 5/5 8/9 8/8 0/15 10/10 0/15 ](media/Maximum-Flow-and-Minimum-Cut-image26.png){width="6.354166666666667in" height="4.90625in"}



![Ford-Fulkerson algorithm Ford-Fulkerson algorithm Start with O flow. While there exists an augmenting path: find an augmenting path - compute bottleneck capacity - increase flow on that path by bottleneck capacity Questions. • How to compute a mincut? Easy. s/ • How to find an augmenting path? BFS works well. ](media/Maximum-Flow-and-Minimum-Cut-image27.png){width="6.354166666666667in" height="4.90625in"}

![Ford-Fulkerson algorithm with integer capacities Important special case. Edge capacities are integers betweer flow on each edge is an integer Invariant. The flow is integer-valued throughout Ford-Fulker Pf. [by induction] • Bottleneck capacity is an integer. • Flow on an edge increases/decreases by bottleneck capa Proposition. Number of augmentations the value of the rm Pf. Each augmentation increases the value by at least 1. important for some applications (stay tuned) ](media/Maximum-Flow-and-Minimum-Cut-image28.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. initialize with O flow s 0 flow 0 capacity ](media/Maximum-Flow-and-Minimum-Cut-image29.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 1st iteration ](media/Maximum-Flow-and-Minimum-Cut-image30.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 2nd iteration s -4- ](media/Maximum-Flow-and-Minimum-Cut-image31.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 3rd iteration ](media/Maximum-Flow-and-Minimum-Cut-image32.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 4th iteration s -4- ](media/Maximum-Flow-and-Minimum-Cut-image33.png){width="6.354166666666667in" height="4.90625in"}



![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 199th iteration ](media/Maximum-Flow-and-Minimum-Cut-image34.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. 200th iteration s -4- ](media/Maximum-Flow-and-Minimum-Cut-image35.png){width="6.354166666666667in" height="4.90625in"}

![Bad case for Ford-Fulkerson Bad news. Even when edge capacities are integers, number paths could be equal to the value of the maxflow. can be exponential in input size Good news. This case is easily avoided. [use shortest/fattes s ](media/Maximum-Flow-and-Minimum-Cut-image36.png){width="6.354166666666667in" height="4.90625in"}

![How to choose augmenting paths? FF performance depends on choice of augmenting paths. augmenting path shortest path fattest path random path DFS path number of paths E In(E U) implemen queue (I priority q randomizec stack (C digraph with V vertices, E edges, and integer capacities between 1 al ](media/Maximum-Flow-and-Minimum-Cut-image37.png){width="6.354166666666667in" height="4.90625in"}



![Flow network representation Flow edge data type. Associate flow fe and capacity ce with flow fe capacity ce Flow network data type. Need to process edge e Include e in both v and w's adjacency lists. Residual capacity. • Forward edge: residual capacity = ce -f. • Backward edge: residual capacity =fe. = in ei ](media/Maximum-Flow-and-Minimum-Cut-image38.png){width="6.354166666666667in" height="4.90625in"}

![Flow network representation Residual network. A useful view of a flow network. original network 4/5 residual network 4/4 9/9 0/8 0/15 4/10 15 ](media/Maximum-Flow-and-Minimum-Cut-image39.png){width="6.354166666666667in" height="4.90625in"}

![Flow edge API public class FlowEdge int w, double capaci ty) int int int doubl e doubl e doubl e voi d Stri ng FlowEdge(int v, from() to C) other(int v) capaci ty() residualCapaci tyTo(int v) addResi dual FlowTo(int v, double toStri ng() del ta) create af10) vertex this ed vertex this other e capacity flow in t residual capt add delta fl string repl ](media/Maximum-Flow-and-Minimum-Cut-image40.png){width="6.354166666666667in" height="4.90625in"}

![Flow edge: Java implementation public class FlowEdge private final int v, w; private fi nal double capacity; private double flow; // from and to // capacity // flow public FlowEdge(int v, int w, double capacity) this. v this. w thi s . capaci ty = capacity; public public public public public if int from() int to() double capacity() double flow() return return return return w; capaci ty ; fl ow ; int other(int vertex) (vertex == v) return w; ](media/Maximum-Flow-and-Minimum-Cut-image41.png){width="6.354166666666667in" height="4.90625in"}

![Flow edge: Java implementation public double residualCapaci tyTo(int vertex) if (vertex ---= v) return flow; else if (vertex w) return capacity - flow; else throw new IllegalArgumentException() ; public void addResidua1 FlowTo(int vertex, double del ta) if (vertex v) flow = delta; else if (vertex w) flow delta; else throw new IllegalArgumentException() ; ](media/Maximum-Flow-and-Minimum-Cut-image42.png){width="6.354166666666667in" height="4.90625in"}

![Flow network API public class FlowNetwork voi d Ite rabl e<F1 owEdge> Ite rabl e<F1 owEdge> int int Stri ng Fl owNetwork(int V) Fl owNetwork(In in) addEdge(F10wEdge e) adj(int v) edges C) vo toStri ng ( ) create an empty flow netwo construct flow network add flow edge e to this o forward and backward all edges in thisflov number of vert number of eco string represent ](media/Maximum-Flow-and-Minimum-Cut-image43.png){width="6.354166666666667in" height="4.90625in"}

![Flow network: Java implementation public class FlowNetwork private final int V; private adj ; public FlowNetwork(int V) this. V = V; adj --- (Bag<F10wEdge>[]) new Bag [V] ; for (int v = 0; v < V; v++) adj [v] = new ; public void addEdge(F1 owEdge e) int v = e. from(); int w = e.to(); adj [v] . add(e) ; same as but adja owEdc add forv ](media/Maximum-Flow-and-Minimum-Cut-image44.png){width="6.354166666666667in" height="4.90625in"}

![Flow network: adjacency-lists representation Maintain vertex-indexed array of FlowEdge lists (use Bag abstr 2.0 02 3.0 3.0 1.0 1.0 1.0 2.0 3.0 tinyFN . txt 6 8 o 1 1 3 1 4 2 3 2 4 3 5 4 5 adj C] 1 2 3 4 5 references to the Fl owEdge 0b Bac objei ](media/Maximum-Flow-and-Minimum-Cut-image45.png){width="6.354166666666667in" height="4.90625in"}

![Ford-Fulkerson: Java implementation public class FordFu1kerson private boolean[] marked; private FlowEdge[] edgeTo; private double value; // true if s->V path in residual n // last edge on s->V path // value of flow public FordFu1 kerson(F10wNetwork G, int s, int t) value --- 0.0; while (hasAugmenti ngPath(G, s, t)) double bottle = Double. POSITIVE_INFINITY; compul bottlen for (int v = t; v != s; v = edgeTo[v] . other(v)) bottle = Math.min(bottle, edgeTo [v] . residual Capacity T for (int v = t; v != s; v = edgeTo[v] . other(v)) edgeTo[v] .addResi dual Fl owTo(v, bottle) ; value bottle; private boolean hasAugmentingPath(F1 owNetwork G, * See next slide. int s, augmen int t) ](media/Maximum-Flow-and-Minimum-Cut-image46.png){width="6.354166666666667in" height="4.90625in"}

![Finding a shortest augmenting path (cf. breadth-first sea private bool ean hasAugmenti ngPath(F10wNetwork G, int s, int t) edgeTo = new ; marked = new boolean CG.V()]; = new Queue<lnteger>() ; Queue<lnteger> queue queue . enqueue(s) ; marked [s] = true; while (!queue.isEmpty()) int v = queue. dequeue(); for (FlowEdge e : G. adj (v)) int w = e. other(v); found path from s to v in the residual networl if (e. residual CapacityTo(w) > 0 && ! marked [w]) edgeTo [w] marked [w] = true; queue . enqueue (w) ; save last edge on path to mar k w ; add w to the queue ](media/Maximum-Flow-and-Minimum-Cut-image47.png){width="6.354166666666667in" height="4.90625in"}



**Create a Residual Graph for finding Augmenting Paths**

The maximum amount of flow that we can push through the network does go through the path and find the minimum of either the unused capacity in some forward edge or the available flow in some backward edge. So once we have the bottleneck capacity, then we just go back through the path again and addResidualFlow to every edge in that path.



![Suppose that e is an edge returned by G.adj (v), with w = e.other(v) and e.residua1Capacity(w) > 0. Which of the following must be true? e = v -+ w is a forward edge that is not full. e = v -+ w is a backward edge that is not empty. e = v -+ w is either a forward edge that is not full or a backward edge that is not empty. Correct e = v -+ w is an edge in the residual graph, which means that either it is a forward edge that is not full or a backward edge that is not empty. None of the above. ](media/Maximum-Flow-and-Minimum-Cut-image48.png){width="5.875in" height="1.9583333333333333in"}



![Maxflow and mincut applications Maxflow/mincut is a widely applicable problem-solving mod Data mining. Open-pit mining. • Bipartite matching. Network reliability. Baseball elimination. Image segmentation. Network connectivity. • Distributed computing. Security of statistical data. • Egalitarian stable matching. liver and hepatic vasct ](media/Maximum-Flow-and-Minimum-Cut-image49.png){width="6.354166666666667in" height="4.90625in"}



![Bipartite matching problem N students apply for N jobs. Each gets several offers. Is there a way to match all students to jobs? bipart 2 Bol 3 Cal 4 Da ](media/Maximum-Flow-and-Minimum-Cut-image50.png){width="6.354166666666667in" height="4.90625in"}

![Bipartite matching problem Given a bipartite graph, find a perfect matching. perfect matching (solution) bipartite graph Alice Bob Carol Dave Eliza Google Adobe Facebook Yahoo Amazon 2 3 4 6 7 8 9 bipart 2 Bol 3 Cal 4 Da ](media/Maximum-Flow-and-Minimum-Cut-image51.png){width="6.354166666666667in" height="4.90625in"}

![Network flow formulation of bipartite matching • Create s, t, one vertex for each student, and one vertex fi • Add edge from s to each student (capacity l). • Add edge from each job to t (capacity l). • Add edge from student to each job offered (infinite capac s 2 3 4 flow network 6 7 9 bipart 2 3 4 Bol Cal Da ](media/Maximum-Flow-and-Minimum-Cut-image52.png){width="6.354166666666667in" height="4.90625in"}

![Network flow formulation of bipartite matching I-I correspondence between perfect matchings in bipartite c integer-valued maxflows of value N. bipart s 2 3 4 flow network 6 7 8 9 2 3 4 Bol Cal Da ](media/Maximum-Flow-and-Minimum-Cut-image53.png){width="6.354166666666667in" height="4.90625in"}

![What the mincut tells us Goal. When no perfect matching, explain why. 6 O 3 O ](media/Maximum-Flow-and-Minimum-Cut-image54.png){width="6.354166666666667in" height="4.90625in"}

![What the mincut tells us Mincut. Consider mincut (A, B). • Let S students on s side of cut. • Let T = companies on s side of cut. • Fact: ISI > IT I; students in Scan be matched only to cot 6 3 ](media/Maximum-Flow-and-Minimum-Cut-image55.png){width="6.354166666666667in" height="4.90625in"}



![Suppose that you run the Ford-Fulkerson algorithm (using the shortest augmenting path heuristic) to solve a bipartite matching problem with n students and n companies. How many augmenting paths are needed in the worst case? n Correct For general networks, the shortest augmenting path heuristic requires EV augmenting paths to find a maxflow in a network with V vertices and E edges. However, in the bipartite matching reduction, all edge capacities are 1 and the value of the maximum flow is at most n. Thus, at most n augmenting paths are needed (since each augmenting path delivers 1 unit of flow to t). We note that a more refined version of the shortest augmenting path heuristic leads to an overall running time of EN/'V for the bipartite matching problem. 1 2 ](media/Maximum-Flow-and-Minimum-Cut-image56.png){width="6.010416666666667in" height="2.3333333333333335in"}



![Baseball elimination problem Q. Which teams have a chance of finishing the season with t 3 team Atlanta Philly New York Montreal wins 83 80 78 77 losses to play ATL 71 79 78 82 PHI Montreal is mathematically eliminated. • Montreal finishes with 80 wins. ](media/Maximum-Flow-and-Minimum-Cut-image57.png){width="6.354166666666667in" height="4.90625in"}

![Baseball elimination problem Q. Which teams have a chance of finishing the season with t 3 team Atlanta Philly New York Montreal wins 83 80 78 77 losses to play ATL 71 79 78 82 PHI Philadelphia is mathematically eliminated. • Philadelphia finishes with 83 wins. ](media/Maximum-Flow-and-Minimum-Cut-image58.png){width="6.354166666666667in" height="4.90625in"}

![•рэ)ршшцэ S! ИОЛЭО (9661 'ОЕ lsn6nv) а а а 98 и 99 [9 [9 69 и S08 AAN hqd 03 sassol sulM озиојош u0lS08 ЭЈОШ!МР8 МЭГ•4 ШРЭ) ЧИМ UOSPas јо ээирчэ Р элрч БШРЭ) •О euqqojd иоуоиуцэ lloqaso€ ](media/Maximum-Flow-and-Minimum-Cut-image59.png){width="6.354166666666667in" height="4.90625in"}

![games left between I and 2 s Baseball elimination problem: maxfiow formulation Intuition. Remaining games flow from s to t. 0-1 0-2 0-3 1-3 2-3 1 3 team vertices (each team other than 4) tearr this m ---w, ](media/Maximum-Flow-and-Minimum-Cut-image60.png){width="6.354166666666667in" height="4.90625in"}



![How many vertices and edges, respectively, are there in the flow network that is constructed to determine whether one team is mathematically eliminated from a baseball league containing n teams? Give the orders of growth. 2 n and n 2 n and n Correct 2 games vertices, 1 source, and 1 sink. In the worst case, there are 2 ( There are n --- I team vertices, edges from game vertices to team vertices (2 for 2 each game vertex), (n 21 edges pointing from the source, and n --- I edges pointing to the sink. n n 3 and n 4 and n ](media/Maximum-Flow-and-Minimum-Cut-image61.png){width="5.96875in" height="2.3020833333333335in"}



![Maximum flow algorithms: theory (Yet another) holy grail for theoretical computer scientists. year 1951 1955 1970 1970 1977 1978 1983 1985 method simplex augmenting path shortest augmenting path fattest augmenting path blocking flow blocking flow dynamic trees capacity scaling worst case E2 U e log E log(EU) E 5/2 E 7/3 log E e log U dif For Dinitz, Dinitz, SIC ](media/Maximum-Flow-and-Minimum-Cut-image62.png){width="6.354166666666667in" height="4.90625in"}

![Maximum flow algorithms: practice Warning. Worst-case order-of-growth is generally not useful or comparing maxflow algorithm performance in practice. Push-relabel method with gap relabeling: E Best in practice. On Implementing Push-Relabel Method for the Maximum Flow Problem Boris V. Cherkasskyl and Andrew V. Goldberg2 Central Institute for Economics and Mathematics, Krasikova St. 32, 117418, Moscow, Russia cher@cemi.msk.su 2 Computer Science Department, Stanford University Stanford, CA 94305, USA goldberg@cs.stanford.edu ELSEVIER Eurosran Journal of OFrational Research 97 ( 19 Theory and Methodo Computational investigations of ma Ravindra K. Ahuja a, Murali Kodialam , Ajay ](media/Maximum-Flow-and-Minimum-Cut-image63.png){width="6.354166666666667in" height="4.90625in"}



**Summary**

Mincut problem: Find. an st-cut of minimum capacity

Maxflow problem: Find an st-flow of maximum value

Duality: Value of the maxflow = capacity of mincut



Proven successful approaches
-   Ford-Fulkerson (various augmenting-path strategies)
-   Preflow-push (various versions)



Open research challenges
-   Practice: solve real-world maxflow/mincut problems in linear time
-   Theory: prove it for worst-case inputs































































