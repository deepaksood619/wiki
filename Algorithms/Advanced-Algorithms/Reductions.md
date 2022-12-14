# Reductions

Created: 2018-04-19 00:00:46 +0500

Modified: 2018-12-23 22:47:34 +0500

---

In this lecture our goal is to develop ways to classify problems according to their computational requirements. We introduce the concept of reduction as a technique for studying the relationship among problems. People use reductions to design algorithms, establish lower bounds, and classify problems in terms of their computational requirements.



![Overview: introduction to advanced topics Main topics. [next 3 lectures] • Reduction: design algorithms, establish lower bounds, cl • Linear programming: the ultimate practical problem-solv • Intractability: problems beyond our reach. Shifting gears. • From individual problems to problem-solving models. • From linear/quadratic to polynomial/exponential scale. • From details of implementation to conceptual framework Goals. • Place algorithms we've studied in a larger context. ](media/Reductions-image1.png){width="6.40625in" height="4.947916666666667in"}



Desiderata - Something that is needed or wanted

![Bird's-eye view Desiderata. Classify problems according to computational re complexity linear linearithmic quadratic exponential order of growth N log N examples min, max, median Burrows-Wheeler transfo sorting, convex hul closest pair, farthest 7 7 ](media/Reductions-image2.png){width="6.40625in" height="4.947916666666667in"}

![Reduction Def. Problem X reduces to problem Y if you can use an algor solves Yto help solve X. instance I (of X) Cost of solving X = Algorithm for Y Algorithm for X solutior total cost of solving Y + cost of reducti ](media/Reductions-image3.png){width="6.40625in" height="4.947916666666667in"}

![Reduction Def. Problem X reduces to problem Y if you can use an algor solves Yto help solve X. instance I (of X) Algorithm for Y Algorithm for X solutior [finding the median reduces to sorting] Ex l. To find the median of N items: ](media/Reductions-image4.png){width="6.40625in" height="4.947916666666667in"}

![Reduction Def. Problem X reduces to problem Y if you can use an algor solves Yto help solve X. instance I (of X) Algorithm for Y Algorithm for X solutior Ex 2. [element distinctness reduces to sorting] To solve element distinctness on N items: ](media/Reductions-image5.png){width="6.40625in" height="4.947916666666667in"}



![In the maxflow lecture, we saw that, given a digraph with nonnegative edge weights and two vertices s and t, the finding a mincut reduces to finding a maxflow. What is the cost of the reduction as a function of the number of vertices V and the number of edges E? Correct Given a maxflow, we can compute a mincut by finding the set of vertices that are reachable from the source using either forward edges (that are not full) or backward edges (that are not empty). This can be done via breadth-first search or depth-first search in linear time. We note that there is no simple way to reduce finding maxflow to finding the mincut. v2E ](media/Reductions-image6.png){width="6.166666666666667in" height="3.7291666666666665in"}

# 

# Designing Algorithms

![Reduction: design algorithms Def. Problem X reduces to problem Y if you can use an algor solves Yto help solve X. Design algorithm. Given algorithm for Y, can also solve X. Ex. • 3-collinear reduces to sorting. [assignment] • Finding the median reduces to sorting. • Element distinctness reduces to sorting. • CPM reduces to topological sort. [shortest paths lecture] • Arbitrage reduces to shortest paths. [shortest paths lect • Burrows-Wheeler transform reduces to suffix sort. [assig ](media/Reductions-image7.png){width="6.40625in" height="4.947916666666667in"}

![Convex hull reduces to sorting Sorting. Given N distinct integers, rearrange them in ascend Convex hull. Given N points in the plane, identify the extren of the convex hull (in counterclockwise order). convex hull 1251432 2861534 3988818 4190745 8111033 13546464 89885444 43434213 34435312 sorting ](media/Reductions-image8.png){width="6.40625in" height="4.947916666666667in"}

![Graham scan algorithm Graham scan. • Choose point p with smallest (or largest) y-coordinate. Sort points by polar angle with p to get simple polygon. • Consider points in order, and discard those that would create a clockwise turn. ](media/Reductions-image9.png){width="6.40625in" height="4.947916666666667in"}

![Shortest paths on edge-weighted graphs and digraphs Proposition. Undirected shortest paths (with nonnegative we to directed shortest path. 10 12 Pf. Replace each undirected edge by two directed edges. 10 ](media/Reductions-image10.png){width="6.40625in" height="4.947916666666667in"}

![Shortest paths on edge-weighted graphs and digraphs Proposition. Undirected shortest paths (with nonnegative we to directed shortest path. 10 12 cost of shortest cost of reduction paths in digraph Cost of undirected shortest paths. E log V + E. ](media/Reductions-image11.png){width="6.40625in" height="4.947916666666667in"}

![Shortest paths with negative weights Reduction is invalid for edge-weighted graphs with Caveat. weights (even if no negative cycles). G) s 7 7 7 ---4 ---4 ---4 reduction creates negative cycles ](media/Reductions-image12.png){width="6.40625in" height="4.947916666666667in"}



SPT Scheduling - Shortest Processing Time Scheduling



![Linear-time reductions involving familiar problems finding the median SPT scheduling Note: See the text for referenc element distinctness sorting convex hull arbitrage parallel scheduling (precedence-constrained) network shortest paths in undirected graphs (no negative weights) bipartite matching ](media/Reductions-image13.png){width="6.40625in" height="4.947916666666667in"}



![Given an undirected graph with positive edge weights and two vertices s and t, the undirected mincut problem is to find a cut that separates s and t that has minimum capacity. How would you reduce finding a mincut in an undirected graph to finding a mincut in a directed graph? For each edge e in the directed graph with capacity c e, create one edge in the undirected graph with capacity c e. For each edge e in the undirected graph with capacity c e, create two antiparallel edges in the directed graph, each with capacity c e. Correct Replacing each undirected edge with two antiparallel edges works for the same reason that it does in the corresponding shortest path reduction---at most one of the two antiparallel edges will cross the cut from the s side to the t side. For each edge e in the undirected graph with capacity c e, create two antiparallel edges in the directed graph---one with capacity ce and on w• ity ---c e. None of the above. B i rd' s-•y• view ](media/Reductions-image14.png){width="6.25in" height="1.7604166666666667in"}



# Establishing Lower Bounds

![Bird's-eye view Goal. Prove that a problem requires a certain number of Ex. In decision tree model, any compare-based sorting algor requires Q(NlogN) compares in the worst case. yes no no yes abc yes yes bac no cab yes b ca no no c ba ](media/Reductions-image15.png){width="6.40625in" height="4.947916666666667in"}

![Linear-time reductions Def. Problem X linear-time reduces to problem Y if X can be • Linear number of standard computational steps. • Constant number of calls to Y. Ex. Almost all of the reductions we've seen so far. [Which or Establish lower bound: • If X takes Q(NlogN) steps, then so does Y. • If X takes Q(N2) steps, then so does Y. Mentality. ](media/Reductions-image16.png){width="6.40625in" height="4.947916666666667in"}

![Lower bound for convex hull Proposition. In quadratic decision tree model, any algorithm N integers requires Q(NlogN) steps. allows linear or quadratic t < -y or (Xj---Xi) (Xk---Xi)- Proposition. Sorting linear-time reduces to convex hull. Pf. [see next slide] 1251432 2861534 3988818 4190745 8111033 13546464 89885444 43434213 34435312 effic ](media/Reductions-image17.png){width="6.40625in" height="4.947916666666667in"}

![Sorting linear-time reduces to convex hull Proposition. Sorting linear-time reduces to convex hull. • Sorting instance: Xl,X2 XN. • Convex hull instance: (x2, x22) f(x) x2 (Xi,Xl ) x lovi efficier ](media/Reductions-image18.png){width="6.40625in" height="4.947916666666667in"}

![Establishing lower bounds: summary Establishing lower bounds through reduction is an important in guiding algorithm design efforts. Q. How to convince yourself no linear-time convex hull algo Al. [hard way] Long futile search for a linear-time algorithff A2. [easy way] Linear-time reduction from sorting. ](media/Reductions-image19.png){width="6.40625in" height="4.947916666666667in"}



![Given an array of n integers, the element distinctness problem is to determine whether any two integers in the array are equal. The element distinctness problem has a Q(n log n) lower bound in the quadratic decision tree model of computation. For which other problems below does a similar lower bound hold? Sorting an array of n integers. Finding the mode (integer that occurs most frequently) in an array of n integers. Finding the closest pair among an array of n integers, where the distance between two integers is the absolute value of their difference. All of the above. Correct • We have already seen that element distinctness linear-time reduces to sorting. • Element distinctness linear-time reduces to finding the mode because if the most frequent integer occurs more than once, then there is a duplicated integer. • Closest pair linear-time reduces to element distinctness because the distance between the closest pair is zero if and only if there is a duplicated integer. ](media/Reductions-image20.png){width="6.1875in" height="1.78125in"}

# 

# Classifying Problems

![Classifying problems: summary Desiderata. Problem with algorithm that matches lower bou Ex. Sorting and convex hull have complexity N log N. Desiderata'. Prove that two problems X and Y have the same • First, show that problem X linear-time reduces to Y. • Second, show that Y linear-time reduces to X. • Conclude that X and Y have the same complexity. even if we don't know what it sorting ](media/Reductions-image21.png){width="6.40625in" height="4.947916666666667in"}

![Caveat SORT. Given N distinct integers, rearrange them in ascending CONVEX HULL. Given N points in the plane, identify the extr of the convex hull (in counterclockwise order). Proposition. SORT linear-time reduces to CONVEX HULL. Proposition. CONVEX HULL linear-time reduces to SORT. Conclusion. SORT and CONVEX HULL have the same comple A possible real-world scenario. • System designer specs the APIs for project. we ](media/Reductions-image22.png){width="6.40625in" height="4.947916666666667in"}

![Integer arithmetic reductions Integer multiplication. Given two N-bit integers, compute thl Brute force. N2 bit operations. o o o o o I I o o o 1 o o 1 o o 0 o 1 o o I 0 o o ](media/Reductions-image23.png){width="6.40625in" height="4.947916666666667in"}

![Integer arithmetic reductions Integer multiplication. Given two N-bit integers, compute thl Brute force. N2 bit operations. problem integer multiplication integer division integer square integer square root arithmetic ax b a/ b, a mod b order of gro•vi integer arithmetic problems with the same complexity as integer multiplic ](media/Reductions-image24.png){width="6.40625in" height="4.947916666666667in"}

![History of complexity of integer multiplication year 7 1962 1963 1966 1971 2007 7 algorithm brute force Karatsuba-Ofman Toom-3, Toom-4 Toom-Cook Schönhage---Strassen Fürer 7 order of growtt N 1.585 N I .465 N 1.404 N log N log log N log N 2 log*N number of bit operations to multiply two N-bit integers ](media/Reductions-image25.png){width="6.40625in" height="4.947916666666667in"}

![Linear algebra reductions Matrix multiplication. Given two N-by-N matrices, compute t Brute force. N3 flops. column j row i 0.1 0.5 0.1 0.0 0.2 0.3 0.0 0.3 0.8 0.9 0.7 0.3 0.1 0.6 x 0.4 0.1 0.4 0.2 0.0 0.8 0.3 0.2 0.0 0.4 0.1 0.0 0.4 0.1 0.1 0.6 0.5 0.9 0.16 0.74 0.36 0.14 ](media/Reductions-image26.png){width="6.40625in" height="4.947916666666667in"}

![Linear algebra reductions Matrix multiplication. Given two N-by-N matrices, compute t Brute force. N3 flops. problem matrix multiplication matrix inversion determinant system of linear equations LU decomposition least squares linear algebra Ax B IAI Ax = b min llAx --- b112 order of g MM(N MM(N MM(N MM(N MM(N MM(N ](media/Reductions-image27.png){width="6.40625in" height="4.947916666666667in"}

![History of complexity of matrix multiplication year 7 969 1978 1 979 1981 1 982 982 1 986 1 989 algorithm brute force Strassen Pan Bini Schönhage Romani Coppersmith-Winograd Strassen Coppersmith-Winograd order of grow N 2.808 N 2.796 N 2 •780 N 2.522 N 2.517 N 2.496 N 2.479 N 2.376 ](media/Reductions-image28.png){width="6.40625in" height="4.947916666666667in"}

![Birds-eye view: review Desiderata. Classify problems according to computational re complexity linear linearithmic quadratic exponential order of growth N log N examples min, max, median Burrows-Wheeler transfo sorting, convex hul closest pair, farthest 7 7 ](media/Reductions-image29.png){width="6.40625in" height="4.947916666666667in"}

![Birds-eye view: revised Desiderata. Classify problems according to computational re complexity linear linearithmic MM(N) NP-complete order of growth N log N 7 7 probably not Nb examples min, max, median sorting, convex hul integer multiplicatio division, square root, matrix multiplication, A least square, determina SAT, IND-SET, ILP, . ](media/Reductions-image30.png){width="6.40625in" height="4.947916666666667in"}

![NPSPACE MaxSNPO СС mNC1 ОГР AVBPP czk о О о о о о о О О О F-TAPF соАМ QNC MAPOLYLOC рр PL RG РРР ELEMENTARY LFP РАСО у-р ИМА10Д АСТ SPARSE Ь-ВРР ВН szk NIQSZk ЕГР BPPpath пар DiffACO РКАтрмрДР9АСЕ PLF ВР ZPPPTAPE нкр ALOGTIME GCSL AUC-SPACE RevSPACEQ BPHSPACE СН POIylog coNPcc k-BWBP ВРРКТ Pr•omiseUP АхР РегтИР ЕЕ P-sampIabIe В РР вир, SAPTIME ВОР-ОВОО НеигВРР FPNP ](media/Reductions-image31.png){width="6.40625in" height="4.947916666666667in"}

![Summary Reductions are important in theory to: • Design algorithms. • Establish lower bounds. • Classify problems according to their computational requi Reductions are important in practice to: • Design algorithms. • Design reusable software modules. stacks, queues, priority queues, symbol tables, sets, g - sorting, regular expressions, Delaunay triangulation MST, shortest path, maxflow, linear programming • Determine difficulty of your problem and choose the rigy ](media/Reductions-image32.png){width="6.40625in" height="4.947916666666667in"}



![2.1416 2.0001 Suppose that you discover a n time algorithm for multiplying two n-by-n matrices and a n lower bound for computing the determinant of an n-by-n matrix. Which of the following can you infer? 21416 algorithm for solving a system of n linear equations and n unknowns. There exists an n There does not exist ann algorithm for multiplying two n-by-n matrices. There does not exist ann algorithm for finding the inverse of a n-by-n matrix. All of the above. Correct All of the problems discussed have the same asymptotic complexity. ](media/Reductions-image33.png){width="6.25in" height="1.6041666666666667in"}



































