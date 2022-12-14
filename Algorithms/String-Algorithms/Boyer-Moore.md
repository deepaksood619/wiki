# Boyer-Moore

Created: 2018-04-16 22:05:17 +0500

Modified: 2018-04-16 22:05:26 +0500

---

![Boyer-Moore: mismatched character heuristic Intuition. • Scan characters in pattern from right to left. • Can skip as many as M text chars when finding one not i j text o 5 5 5 11 4 15 o F 1 1 2 N 3 D 4 1 5 N E 678 pattern 9 Y 10 11 12 13 14 15 16 17 STA Cl<tq E L N E E E E E ](media/Boyer-Moore-image1.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: mismatched character heuristic How much to skip? Q. Case l. Mismatch character not in pattern. before txt pat after N E E ](media/Boyer-Moore-image2.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: mismatched character heuristic How much to skip? Q. Case 2a. Mismatch character in pattern. before txt pat after N E E ](media/Boyer-Moore-image3.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: mismatched character heuristic How much to skip? Q. Case 2b. Mismatch character in pattern (but heuristic no hel before txt pat aligned with rightmost E? N E E ](media/Boyer-Moore-image4.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: mismatched character heuristic How much to skip? Q. Case 2b. Mismatch character in pattern (but heuristic no hel before txt pat after N E E ](media/Boyer-Moore-image5.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: mismatched character heuristic How much to skip? A. Precompute index of rightmost occurrence of character c (-1 if character not in pattern). -1 = new int [R] ; ri ght for (int c right [c] = for (int j = 0; j < M; j++) right [pat. charAt(j)] = -1 2 ](media/Boyer-Moore-image6.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: Java implementation public int int int for int search(String txt) N = txt. length(); M = pat. length(); skip; (int 1 • = O; i N-M; ski p) skip for (int j = M-1; j if (pat. charAt(j) . txt. skip = Math. max(l, j break; compute skip value charAt(i+j)) ri ght [txt. charAt (i +j) in case other term is nonpositive ](media/Boyer-Moore-image7.png){width="5.979166666666667in" height="4.614583333333333in"}

![Boyer-Moore: analysis Property. Substring search with the Boyer-Moore mismatchec heuristic takes about N/ M character compares to search fo length Min a text of length N. Worst-case. Can be as bad as sublinear! i skip o B A 1 B B A 2 B B B A 3 B B B B A 4 B B B B B A 567 0 1 2 3 4 5 0 1 1 1 1 1 B B B B A B B B B B B B 8 B B B 9 B B ](media/Boyer-Moore-image8.png){width="5.979166666666667in" height="4.614583333333333in"}








