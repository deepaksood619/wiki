# Shuffle Sort

Created: 2018-02-02 17:47:51 +0500

Modified: 2018-02-02 17:53:32 +0500

---

Goal: Rearrange array so that result is a uniformly random permutation
-   Generate a random real number for each array entry
-   Sort the array

Proposition: Shuffle sort produces a uniformly random permutation of the input array, provided no duplicate values

Drawback - requires sort which takes quadratic or linearithmic time (quasilinear time, where k = 1, [n log n])

Solution - Knuth Shuffle takes linear time


