# 3-way string radix quicksort

Created: 2018-04-10 22:16:48 +0500

Modified: 2018-04-10 22:17:36 +0500

---

![3-way string quicksort (Bentley and Sedgewick, 1997) Overview. Do 3-way partitioning on the dth character. • Less overhead than R-way partitioning in MSD string sor • Does not re-examine characters equal to the partitioning (but does re-examine characters not equal to the partitic partitioning item use first character to partition into "less", "equal", and "greater" subarrays sells seashells by the sea shore the shells by are seashells she seashells sea shore surely shells ](media/3-way-string-radix-quicksort-image1.png)

![3-way string quicksort: trace of recursive calls partitioning item are She sells seashells by the sea shore the shells she sells are are s s s s s ashells ashells a ore rely e 11 S s s s s s shells ashells a ore rely s s shells IIS ashells a shells she surely shore she ](media/3-way-string-radix-quicksort-image2.png)

![3-way string quicksort: Java implementation private static void sort(String[] a) { sort(a, 0, a. length private static void sort(String[] a, int 10, if (hi <= 10) return; int It --- 10, gt = hi; int v = int hi 3-way (using ( d); int i while (i int t --- if else if to handle variable-le charAt(a[i], d); (t < v) exch(a, lt++, i + + ) ; (t > v) exch(a, i, gt--); ](media/3-way-string-radix-quicksort-image3.png)

![3-way string quicksort vs. standard quicksort Standard quicksort. • Uses ---2 N In N string compares on average. • Costly for keys with long common prefixes (and this is 3-way string (radix) quicksort. • Uses ---2NlnNcharacter compares on average for randor • Avoids re-comparing long common prefixes. Fast Algorithms for Sorting and Searching Strings Jon L. Bentley* Robert Sedgewick# ](media/3-way-string-radix-quicksort-image4.png)

![3-way string quicksort vs. MSD string sort MSD string sort. • Is cache-inefficient. • Too much memory storing count[]. • Too much overhead reinitializing count[] and aux[]. library of Congress call numbers 3-way string quicksort. • Has a short inner loop. • Is cache-friendly. • Is in-place. 75.5 S15 75.5 $983 75. 198 QA 76 A26 QA 76 76 A273 1 983 ](media/3-way-string-radix-quicksort-image5.png)

![Summary of the performance of sorting algorithms Frequency of operations. algorithm insertion sort mergesort quicksort heapsort LSD guarantee Nig N 1.39 Nig N 2 Nig N 2 NW random N lgN 1.39 Nig N 2 Nig N 2 NW extra space stable? yes yes no no yes ](media/3-way-string-radix-quicksort-image6.png)



![Which of the following is a reason to use 3-way radix quicksort instead of MSD radix sort when sorting an array of strings? To guarantees stability. To make fewer character compares. To sort faster. Correct The main reasons to use 3-way radix quicksort are speed and memory. 3-way radix quicksort is not stable and it uses more character compares than MSD radix sort. Both 3-way radix quicksort and MSD radix sort handle variable-length strings. To handle variable-length strings. ](media/3-way-string-radix-quicksort-image7.png)







