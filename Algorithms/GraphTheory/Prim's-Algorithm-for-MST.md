# Prim's Algorithm for MST

Created: 2018-02-22 23:39:31 +0500

Modified: 2018-05-21 22:51:16 +0500

---

## Properties

- For Undirected graph

![image](media/Prim's-Algorithm-for-MST-image1.png)

## Implementation

1. Lazy Implementation -

An edge that is absolute (i.e. cannot be added because it will create a cycle in the MST) is left in the priority queue.

2. Eager Implementation -

Only min weight edge with exactly one endpoint is added

Data Structure Used - Indexed Priority Queue, with decreaseKey API to decrease priority

![image](media/Prim's-Algorithm-for-MST-image1.png)

![image](media/Prim's-Algorithm-for-MST-image2.png)

![image](media/Prim's-Algorithm-for-MST-image3.png)

![image](media/Prim's-Algorithm-for-MST-image4.png)

![image](media/Prim's-Algorithm-for-MST-image5.png)

![image](media/Prim's-Algorithm-for-MST-image6.png)

![image](media/Prim's-Algorithm-for-MST-image7.png)

![image](media/Prim's-Algorithm-for-MST-image8.png)

![image](media/Prim's-Algorithm-for-MST-image9.png)

![image](media/Prim's-Algorithm-for-MST-image10.png)

## Applications

1. Euclidean MST

2. Clustering (single-link clustering algorithm)

3. Dendograms of cancers in humans
