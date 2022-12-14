# Shell Sort

Created: 2018-02-02 10:09:54 +0500

Modified: 2019-12-23 00:02:40 +0500

---
-   In-place comparison sort
-   Not Stable



Idea: Move entries more than one position at a time by h-sorting the array
-   Insertion sort, with stride length h.
-   h - 3x+1



[ShellSort](http://en.wikipedia.org/wiki/Shellsort)is mainly a variation of[Insertion Sort](http://quiz.geeksforgeeks.org/insertion-sort/).In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h'th element is sorted.



![an h-sorted array is h interleaved sorted subsequences LEEAMHLEPSOLT s 0 s s X x R Shellsort. [Shell 1959] h-sort array for decreasing sequence of values of h. input 13-sort 4-sort I-sort p L A H H E E E E E L L L L H s s H L 0 0 L L E L T T P M E E s o p A A R M M T s P s s L L X T E E R x ](media/Shell-Sort-image1.png)



h-sort Can be used as -
-   Sorting by insertion (insertion sort)
-   Sorting by exchange (bubble sort)



Proposition: A g-sorted array remains g-sorted after h-sorting it.

Increment sequences (Gap sequences):
-   3x + 1 (Knuth)
-   1, 5, 19, 109, 209, 929, 2161, 3905 (Sedgewick)



![public class Shell public static void sort(Comparab1e[] a) int N = a. length; int h = 1 while (h < N/ 3) h while (h >= 1) Ä//+sort&e array for (int i = h; for (int j = i, exch(a, j' 1; 4, 13, 40, 121, a[j-h]); 364 , j- 3X+l increment sequence insertion sort move to next increment private / * as private / * as - 11/3; static before static before boolean less (Comparable v, Comparable w) void exch(Comparab1e[] a, int i, int j) ](media/Shell-Sort-image2.png)



![The worst-case number of compares used by shellsort with Proposition. the increments is O(N3/2). Number of compares used by shellsort with the increments Property. is at most by a small multiple of N times the # of increments used. 5,000 1 0,ooo 20,000 40,000 80,000 compares 93 209 46 7 1022 2266 N I .289 58 143 349 855 2089 2.5 Nig N 106 230 495 1059 2257 Remark. measured in thousands Accurate model has not yet been discovered (!) ](media/Shell-Sort-image3.png)



![Why are we interested in shellsort? Example of simple idea leading to substantial performance gains. bzip2, /linux/kernel/groups.c Useful in practice. • Fast unless array size is huge (used for small subarrays). • Tiny, fixed footprint for code (used in some embedded systems). • Hardware sort prototype. uClibc Simple algorithm, nontrivial performance, interesting questions. • Asymptotic growth rate? • Best sequence of increments? 4--- problem: find a better increment sequence • Average-case performance? Lesson. Some good algorithms are still waiting discovery. ](media/Shell-Sort-image4.png)



![Shell Sort Sort. cmelOped by Donald C Shen, is a non-stable in-place Sort. Shell Sort Improves on the efficiency of insertion sort by quickly shifting values to their destination, Average sort time is MrSt-CASe time is For COnSult Theory In Figure 2-2(a) we have an example Of SOrfig by First we extract Shift 3 and 5 down one slot. and then insert the I. for a count of 2 shifts, In the next frame. two shifts are required before Can 2 The process LÄtil the last frame. where a 2 + 2 + 1 --- 5 shifts have been made. In Figure 2-2(b) an exam* of shell sort is illustrated. We begin by doing an insertion sort using a spacjngoftwo In the frame 3-1 Extracting 1. we Shift 3 One glot for a Shift Count Of 1 _ Next we rwrnbers 5-2. We extract 2. Shift 5 and then insert 2 After gwt'ng with a Spacing o' two, a final ig made with a Spacing Of one. This ig Simply the traditional insertion son. The totalshift count using shell sort is 1 •1+1 •3. ay using an initialspacimg were able to quickly Shift to the* proper (a) Figure 2-2: Shell sort spacülgs may be used to a Sort the array ig with a large Spacing, the Spacing reduced, and the a"ay aga.n_ On spacing is Although the shell sort is easy to comprehend. formal analysis is difficult. In particular. optimalspacimg values Knuth a techniqLÄ to Sedgewick. that deterrn.neg Spacing h based on the follo•aing formulas: if s is even m =8-2'-6 ifs is These Calculations result in values . _ ) = Calculate h LMtil 3b' N. the number of elements in the array, Then choose for a staring value. For example. sort >= so the first is 41 _ The Second Spacing is 19, ISO items, 109 (3 109 then 5. finally l. ](media/Shell-Sort-image5.png)



<https://www.codingeek.com/algorithms/shell-sort-algorithm-explanation-implementation-and-complexity





