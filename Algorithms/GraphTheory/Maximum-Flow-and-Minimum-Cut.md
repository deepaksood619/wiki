# Maximum Flow and Minimum Cut

1. Introduction to Maxflow

2. Ford-Fulkerson Algorithm using the shortest augmenting path rule

3. Maxflow-Mincut Theorem (bipartite matching & baseball elimination)

4. Running Time Analysis

5. Java Implementation

6. Maxflow Applications

## Mincut problem

Input: An edge-weighted digraph, source vertex s, and target vertext t

![image](media/Maximum-Flow-and-Minimum-Cut-image1.jpg)

Def. A st-cut (cut) is a partition of the vertices into two disjoint sets, with s in one set A and t in the other set B

Def. Its capacity is the sum of the capacities of the edges from A to B

![image](media/Maximum-Flow-and-Minimum-Cut-image2.jpg)

![image](media/Maximum-Flow-and-Minimum-Cut-image3.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image4.png)

## Maxflow problem

Input: An edge-weighted digraph, source vertex s, and target vertext t

![capacity 15 ](media/Maximum-Flow-and-Minimum-Cut-image5.jpg)

Def. An st-flow (flow) is an assignment of values to the edges such that:

- Capacity constraint: 0 <= edge's flow <= edge's capacity
- Local equilibrium: inflow = outflow at every vertex (except s and t)

![image](media/Maximum-Flow-and-Minimum-Cut-image6.jpg)

Def. The value of a flow is the inflow at t. (We assume no edge points to s from t)

![image](media/Maximum-Flow-and-Minimum-Cut-image7.jpg)

Maximum st-flow (maxflow) problem. Find a flow of maximum value

![image](media/Maximum-Flow-and-Minimum-Cut-image8.jpg)

## Summary

Input: A weighted digraph, source vertex s, and target vertext t

Mincut problem: Find a cut of minimum capacity

Maxflow problem: Find a flow of maximum value

![image](media/Maximum-Flow-and-Minimum-Cut-image9.jpg)

Fact: These two problems are dual

![image](media/Maximum-Flow-and-Minimum-Cut-image10.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image11.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image12.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image13.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image14.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image15.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image16.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image17.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image18.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image19.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image20.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image21.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image22.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image23.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image24.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image25.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image26.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image27.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image28.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image29.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image30.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image31.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image32.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image33.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image34.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image35.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image36.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image37.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image38.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image39.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image40.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image41.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image42.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image43.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image44.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image45.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image46.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image47.png)

## Create a Residual Graph for finding Augmenting Paths

The maximum amount of flow that we can push through the network does go through the path and find the minimum of either the unused capacity in some forward edge or the available flow in some backward edge. So once we have the bottleneck capacity, then we just go back through the path again and addResidualFlow to every edge in that path.

![image](media/Maximum-Flow-and-Minimum-Cut-image48.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image49.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image50.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image51.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image52.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image53.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image54.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image55.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image56.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image57.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image58.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image59.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image60.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image61.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image62.png)

![image](media/Maximum-Flow-and-Minimum-Cut-image63.png)

## Summary

Mincut problem: Find. an st-cut of minimum capacity

Maxflow problem: Find an st-flow of maximum value

Duality: Value of the maxflow = capacity of mincut

Proven successful approaches

- Ford-Fulkerson (various augmenting-path strategies)
- Preflow-push (various versions)

Open research challenges

- Practice: solve real-world maxflow/mincut problems in linear time
- Theory: prove it for worst-case inputs
