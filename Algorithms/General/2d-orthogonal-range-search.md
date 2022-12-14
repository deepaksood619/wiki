# 2d orthogonal range search

Created: 2018-02-06 19:20:17 +0500

Modified: 2018-02-06 19:48:04 +0500

---

![Range search in a 2d tree demo Goal. Find all points in a query axis-aligned rectangle. • Check if point in node lies in given rectangle. • Recursively search left/bottom (if any could fall in rectangle). • Recursively search right/top (if any could fall in rectangle). 8 6 9 3 5 10 10 ](media/2d-orthogonal-range-search-image1.png)



**Analysis:**

Typical case: R + log N

Worst case (assuming tree is balanced): R + sqrt(N)



![Nearest neighbor search in a 2d tree demo Goal. Find closest point to query point. query point 10 10 ](media/2d-orthogonal-range-search-image2.png)



![Nearest neighbor search in a 2d tree demo • Check distance from point in node to query point. • Recursively search left/bottom (if it could contain a closer point). • Recursively search right/top (if it could contain a closer point). Organize method so that it begins by searching for query point. 6 3 4 8 9 2 7 10 nearest neighbor = 5 ](media/2d-orthogonal-range-search-image3.png)



**Analysis:**

Typical case: log N

Worst case (even if tree is balanced): N



