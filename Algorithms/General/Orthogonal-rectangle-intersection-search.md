# Orthogonal rectangle intersection search

Created: 2018-02-07 08:21:32 +0500

Modified: 2018-02-07 09:10:14 +0500

---

Goal: find all intersections among a set of N orthogonal rectangles

**Sweep-line algorithm (**Sweep vertical line from left to right) -

![Orthogonal rectangle intersection: sweep-line algorithm Sweep vertical line from left to right. • x-coordinates of left and right endpoints define events. • Maintain set of rectangles that intersect the sweep line in an interval search tree (using y-intervals of rectangle). • Left endpoint: interval search fory-interval of rectangle; insert y-interval. • Right endpoint: remove y-interval. 3 2 3 2 10 y-coordinates ](media/Orthogonal-rectangle-intersection-search-image1.png)



**Proposition:** Sweep line algorithm takes time proportional to N log N + R log N to find R intersections among a set of N rectangles.



**Proof:**
-   Put x-coordinates on a PQ (or sort) - N log N
-   Insert y-intervals into ST - N log N
-   Delete y-intervals from ST - N log N
-   Interval searches for y-intervals - N log N + R log N



**Bottom line:** Sweep line reduces 2d orthogonal rectangle intersection search to 1 d interval search

