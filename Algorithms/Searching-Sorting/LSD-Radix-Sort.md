# LSD Radix Sort

Created: 2018-03-28 21:54:35 +0500

Modified: 2018-03-28 21:54:58 +0500

---

![Least-significant-digit-first string sort LSD string (radix) sort. • Consider characters from right to left. • Stably sort using dth character as the key (using key-inde sort key (d = 2) sort key (d = l) 0 1 2 3 4 5 d a c f b a d a a a b d b d d 0 1 2 3 4 7 d c e a f b a a b d a a b b b d d d d d 0 1 2 3 4 5 6 7 8 d c f b d e a a 7 8 fe d a a a a a b d e b b d d d b d d ](media/LSD-Radix-Sort-image1.png){width="5.5in" height="4.125in"}

![LSD string sort: correctness proof Proposition. LSD sorts fixed-length strings in ascending ord Pf. [by induction on i] After pass i, strings are sorted by last i characters. • If two strings differ on sort key, key-indexed sort puts them in proper relative order. • If two strings agree on sort key, stability keeps them in proper relative order. 0 1 2 3 4 5 6 7 8 9 d c b d a a b ](media/LSD-Radix-Sort-image2.png){width="5.5in" height="4.125in"}

![LSD string sort: Java implementation public class LSD public static void sort(String[] a, int R 256; int N --- a. length; String[] aux = new String[N] ; for (int d = W-1; d >= 0; d--) int [ ] count = new int[R+1] ; for (int i int W) fix rac do for ke .charAt(d) + 1]++; for (int r --- count[r+l] += count [r] ; for (int i ](media/LSD-Radix-Sort-image3.png){width="5.5in" height="4.125in"}

![Summary of the performance of sorting algorithms Frequency of operations. algorithm insertion sort mergesort quicksort heapsort LSD guarantee Nig N 1.39 Nig N 2 Nig N 2 WN random N lgN 1.39 Nig N 2 Nig N 2 WN extra space stable? yes yes no no yes ](media/LSD-Radix-Sort-image4.png){width="5.5in" height="4.125in"}

![String sorting interview question Problem. Sort one million 32-bit integers. Ex. Google (or presidential) interview. Which sorting method to use? • Insertion sort. • Mergesort. • Quicksort. • Heapsort. • LSD string sort. ](media/LSD-Radix-Sort-image5.png){width="5.5in" height="4.125in"}







