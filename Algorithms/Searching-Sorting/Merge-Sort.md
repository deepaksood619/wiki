# Merge Sort

Created: 2018-02-03 11:23:00 +0500

Modified: 2020-06-18 10:49:10 +0500

---

Merge sortrecursively halves the given array. Once the subarrays reach trivial length, merging begins. Merging takes the smallest element between two adjacent subarrays and repeats that step until all elements are taken, resulting in a sorted subarray. The process is repeated on pairs of adjacent subarrays until we arrive at the starting array, but sorted.



**Properties**
-   Stable
-   General algorithm uses auxillary array



**Basic Plan (Divide and Conquer Algorithm)**
-   Divide array into two halves
-   Recursively sort each half
-   Merge two halves.



**Abstract in-place Merging**

![private static void merge(Comparab1e[] a, Comparable[] aux, int 10, int mid, int hi) assert isSorted(a, 10, mid) ; assert isSorted(a, mi d+l, hi); for (int k aux [k] = ace ; = 10, int for (int k if (i > mid) else if (j > hi) else if (1 ess(aux [j] , el se // precondition: aC10. .mid] sorted // precondition: almi d+l.. hi] sorted copy merge aux[i])) aCk] = aux [j++] ; = aux Ci++] ; = aux [j++] ; = aux Ci++] ; assert isSorted(a, 10, hi); // postcondition: a C 10.. hi] sorted ](media/Merge-Sort-image1.png){width="5.0in" height="2.4583333333333335in"}



**Sort**

![public class Merge private static void merge(... ) / * as before * / private static void sort(Comparab1eC] a, if (hi 10) return; int mid = 10 + (hi - 10) / 2; sort(a, aux, 10, mid); sort(a, aux, mi d+l, hi); merge(a, aux, 10, mid, hi); public static void sort(Comparab1eC] a) aux = new Comparable[a. length] ; sort(a, aux, 0, a. length Comparable[] aux, int 10, int hi) ](media/Merge-Sort-image2.png){width="5.0in" height="2.9583333333333335in"}



**Complexity**
-   Time complexity - O(N lg N)
-   Space complexity - O( N ) for auxiliary array
-   It guarantees to sort any array ofnitems with at mostnlgncompares.



**Improvements**
-   Use insertion sort for small subarrays
    -   Mergesort has too much overhead for tiny subarrays
    -   Cutoff to insertion sort for ~ 7 items
-   Stop if already sorted
    -   Is biggest item in first half <= smallest item in second half
    -   Helps for partially-ordered arrays
    -   ![private static void sort(Comparab1eC] a, if (hi 10) return; int mid = 10 + (hi • - 10) / 2; sort (a, aux, 10, mid); sort (a, aux, mid+l, hi); if a [mid])) return; merge(a, aux, 10, mid, hi); Comparabl aux, int 10, int hi) ](media/Merge-Sort-image3.png){width="5.0in" height="1.4479166666666667in"}
-   Eliminate the copy to the auxiliary array
    -   Save time (but not space by switching the role of the input and auxiliary array in each recursive call)



![private static void merge(Comparab1e[] a, int • = 10 , j = mid+l; for (int k if else if else if else private static Comparable[] aux, Comparable[] aux, int 10, int mid, int hi) (i > mid) (j > hi) = hi; k++) aux [k] aux [k] a[i])) aux[k] aux [k] merge from to aux[] void sort (Comparable[] a, if (hi <= 10) return; int mid = 10 + (hi • - 10) / 2; sort (aux, a, 10, mid); sort (aux, a, mid+l, hi); int 10, int hi) merge(a, aux, 10, switch roles of aux C] mid, hi); and Note: sort(a) initializes aux C] and sets aux [i] = a[i] for each i. ](media/Merge-Sort-image4.png){width="5.0in" height="2.8541666666666665in"}



![How many compares does mergesort---the pure version without any optimizations---make to sort an input array that is already sorted? constant logarithmic linear • linearithmic Correct It makes --- NIgN compares, which is the best case for mergesort. We note that the optimized version that checks whether a[mid] a[mid + l] only requires N compares. ](media/Merge-Sort-image5.png){width="5.0in" height="2.5520833333333335in"}



**[Non-recursive Bottom-up mergesort]{.underline}**

Basic Plan -
-   Pass through array, merging subarrays of size 1.
-   Repeat for subarrays of size 2, 4, 8, 16, ...



![public class MergeBU private static void merge(... ) / * as before * / public static void a) int N = a. length; Comparable [J aux = new Comparable [N] ; for (int sz = 1; sz < N; sz = SZ+SZ) for (int 10 = O; 10 < N-sz; 10 sz+sz) Math . mi n(10+sz+sz-1, but about 10% slower than recursive, Bottom line. top-down mergesort on typical systems Simple and non-recursive version of mergesort. ](media/Merge-Sort-image6.png){width="5.0in" height="3.5104166666666665in"}



Also, We prove that any compare-based sorting algorithm must make at least∼nlgncompares in the worst case.








