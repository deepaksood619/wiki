# Appel's Algorithm

Created: 2018-02-06 19:45:03 +0500

Modified: 2018-02-06 19:45:10 +0500

---

## Appel's algorithm for N-body simulation

Key idea: suppose particle is far, far away from cluster of particles:

- Treat cluster of particles as a single aggregate particle
- Compute force between particle and center of mass of aggregate

Algorithm

- Build 3-d tree with N particles as nodes
- Store center-of-mass of subtree in each node
- To compute total force acting on a particle, traverse tree, but stop as soon as distance from particle to subdivision is sufficiently large

Running time per step is N log N
