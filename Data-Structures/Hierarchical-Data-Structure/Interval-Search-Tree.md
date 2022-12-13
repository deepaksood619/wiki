# Interval Search Tree

Created: 2018-02-06 20:08:03 +0500

Modified: 2018-02-07 08:20:57 +0500

---

Operations
-   Insert an interval
-   Search for an interval
-   Delete an interval
-   Interval intersection query: Given an interval (lo, hi), find all intervals (or one interval) in data structure that intersects (lo, hi)
![Interval search trees Create BST, where each node stores an interval (10, hi). • Use left endpoint as BST key. • Store max endpoint in subtree rooted at node. (17, 19) 24 (21, 24) 24 binary search tree (left endpoint is key) 8 (7, 10) 18 (15, 18) 10 18 max endpoint in subtree rooted at node ](media/Interval-Search-Tree-image1.png)
![To insert an interval (10, hi): • Insert into BST, using 10 as the key. Update max in each node on search path. insert interval (16, 22) (1 7, 19) 24 (21, 24) 24 8 (7, 10) 18 (1 5, 18) 10 18 ](media/Interval-Search-Tree-image2.png)
![Interval search tree demo To search for any one interval that intersects query interval (10, hi) : • If interval in node intersects query interval, return it. • Else if left subtree is null, go right. • Else if max endpoint in left subtree is less than 10, go right. (16, 22) • Else go left. interval intersection search for (21, 23) 8 22 10 24 24 22 compare (21 , 23) to (16, 22) 22 (intersection!) (21, 23) ](media/Interval-Search-Tree-image3.png)
![Node x = root; while (x if else if else if else null) (x. interval . intersects(lo, (x. left --- --- null) (x. left. max < 10) hi)) return x. interval ; x = x. right; x = x. right; x = x. left; return null; ](media/Interval-Search-Tree-image4.png)
**Implementation -** Use a red-black BST to guarantee performance
| operation                                          | brute | interval search tree | best in theory |
|---------------------------------|----------|------------------|-------------|
| insert interval                                    | 1     | log N                | log N          |
| find interval                                      | N     | log N                | log N          |
| delete interval                                    | N     | log N                | log N          |
| find any one interval that intersects (*lo*, *hi*) | N     | log N                | log N          |
| find all intervals that intersects (*lo*, *hi*)    | N     | R log N              | R + log N      |