# Kd-trees

Created: 2018-02-06 18:53:06 +0500

Modified: 2018-05-12 20:17:07 +0500

---

In[computer science](https://en.wikipedia.org/wiki/Computer_science), a***k*-d tree**(short for*k-dimensional[tree](https://en.wikipedia.org/wiki/Tree_data_structure)*) is a[space-partitioning](https://en.wikipedia.org/wiki/Space_partitioning)[data structure](https://en.wikipedia.org/wiki/Data_structure)for organizing[points](https://en.wikipedia.org/wiki/Point_(geometry))in a*k*-dimensional[space](https://en.wikipedia.org/wiki/Euclidean_space).*k*-d trees are a useful data structure for several applications, such as searches involving a multidimensional search key (e.g.[range searches](https://en.wikipedia.org/wiki/Range_search)and[nearest neighbor searches](https://en.wikipedia.org/wiki/Nearest_neighbor_search)).*k*-d trees are a special case of[binary space partitioning](https://en.wikipedia.org/wiki/Binary_space_partitioning)trees.
A non-leaf node in K-D tree divides the space into two parts, called as half-spaces.

Points to the left of this space are represented by the left subtree of that node and points to the right of the space are represented by the right subtree.
Extension of BSTs that allow us to do efficient processing of sets of points in space.
![2d orthogonal range search: grid implementation Grid implementation. • Divide space into M-by-M grid of squares. • Create list of points contained in each square. • Use 2d array to directly index relevant square. • Insert: add (x, y) to list for corresponding square. • Range search: examine only squares that intersect 2d range query. LB ](media/Kd-trees-image1.png)

Problem with Grid implementation - **Clustering**
-   Lists are too long, even though average length is short.
![2d tree construction Recursively partition plane into two halfplanes. 10 10 ](media/Kd-trees-image2.png)
![2d tree implementation Data structure. BST, but alternate using x- and y-coordinates as key. • Search gives rectangle containing point. • Insert further subdivides the plane. p points left of p 6 3 5 points right of p 2 p even levels 8 9 points below q 4 q 3 6 q points above q odd levels 2 7 7 10 4 10 8 9 ](media/Kd-trees-image3.png)
**Operations -**

a.  Range search in a 2d tree

b.  Nearest neighbor search in a 2d tree
![Kd tree Recursively partition k-dimensional space into 2 halfspaces. Kd tree. Implementation. BST, but cycle through dimensions ala 2d trees. level points whose ith coordinate is less than ps p i (mod k) points whose ith coordinate is greater than pk Efficient, simple data structure for processing k-dimensional data. • Widely used. • Adapts well to high-dimensional and clustered data. • Discovered by an undergrad in an algorithms class! Jon Bentley ](media/Kd-trees-image4.png)
**Applications of 2d trees -**
-   Classifying astronomical objects
-   Computer animation
-   Speeding up neural networks
-   Mining data
-   Image retrieval
**Flocking Boids Algorithm**

Boids: Three simple rules lead to complex emergent flocking behavior in birds:
-   Collision avoidance: point away from k nearest boids
-   Flock centering: point towards the center of mass of k nearest boids
-   Velocity matching: update velocity to the average of k nearest boids
**Appel's algorithm for N-body simulation**

Key idea: suppose particle is far, far away from cluster of particles:
-   Treat cluster of particles as a single aggregate particle
-   Compute force between particle and center of mass of aggregate

Algorithm
-   Build 3-d tree with N particles as nodes
-   Store center-of-mass of subtree in each node
-   To compute total force acting on a particle, traverse tree, but stop as soon as distance from particle to subdivision is sufficiently large

Running time per step is N log N

