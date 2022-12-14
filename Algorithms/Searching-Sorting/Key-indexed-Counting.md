# Key-indexed Counting

Created: 2018-03-26 23:18:45 +0500

Modified: 2018-06-02 14:30:11 +0500

---

**Proporties**
-   Linear time algorithm for sorting
-   Stable



**Key-Indexed Counting**

Assumption - Keys are integers between 0 and R-1

Implication - Can use key as an array index



Applications
-   Sort string by first letter.
-   Sort class roster by section.
-   Sort phone numbers by area code.
-   Subroutine in a sorting algorithm.



Remarks - Keys may have associated data => can't just count up number of keys of each value (because we have to transfer the data as well)



![input name section Anderson Brown Davi s Garci a Harris Jackson Johnson Jones Marti n Marti nez Miller Moore Robi nson Smi th Taylor Thomas Thompson Whi te Wi Ili ams Wi I son 2 3 3 4 1 3 4 3 1 2 2 1 2 4 3 4 4 2 3 4 sorted result (by section) Harris Marti n Moore Anderson Marti nez Miller Robi nson Whi te Brown Davi s Jackson Jones Taylor Wi 1 i ams Garci a Johnson Smi th Thomas Thompson Wi I son 1 1 1 2 2 2 2 2 3 3 3 3 3 3 4 4 4 4 4 4 keys are small integers ](media/Key-indexed-Counting-image1.png){width="2.6041666666666665in" height="4.3125in"}



![Key-indexed counting demo Goal. Sort an array al] of N integers between 0 and R- 1. int N --- a. length; int [ ] count = new int[R+1] ; for (int i count [a [i ] +1] ++ ; for (int r count[r+l] += count [r] ; i 0 1 2 3 4 5 6 7 d a c b d b ](media/Key-indexed-Counting-image2.png){width="6.40625in" height="4.802083333333333in"}

![Key-indexed counting demo Goal. Sort an array al] of N integers between 0 and R- 1. • Count frequencies of each letter using key as index. count frequencies int N --- a. length; int [ ] count = new int[R+1] ; for (int i count [a [i ] +1] ++ ; for (int r count[r+l] += count [r] ; i 0 1 2 3 4 5 6 7 d a c b d b ](media/Key-indexed-Counting-image3.png){width="6.40625in" height="4.802083333333333in"}

![Key-indexed counting demo Goal. Sort an array al] of N integers between 0 and R- 1. • Compute frequency cumulates which specify destinatior compute cumulates int N --- a. length; int [ ] count = new int[R+1] ; for (int i count [a [i ] +1] ++ ; for (int r count[r+l] += count [r] ; i 0 1 2 3 4 5 6 7 d a c b d b ](media/Key-indexed-Counting-image4.png){width="6.40625in" height="4.802083333333333in"}

![Key-indexed counting demo Goal. Sort an array al] of N integers between 0 and R- 1. • Access cumulates using key as index to move items. int N --- a. length; int [ ] count = new int[R+1] ; for (int i count [a [i ] +1] ++ ; for (int r count[r+l] += count [r] ; i 0 1 2 3 4 5 6 7 d a c b d b ](media/Key-indexed-Counting-image5.png){width="6.40625in" height="4.802083333333333in"}

![Key-indexed counting demo Goal. Sort an array al] of N integers between 0 and R- 1. • Copy back into original array. int N --- a. length; int [ ] count = new int[R+1] ; for (int i count [a [i ] +1] ++ ; for (int r count[r+l] += count [r] ; i 0 1 2 3 4 5 6 7 a a b b b c d d ](media/Key-indexed-Counting-image6.png){width="6.40625in" height="4.802083333333333in"}

![Key-indexed counting: analysis Proposition. Key-indexed counting uses 11 N +4 R array a N items whose keys are integers between 0 and R- 1. Proposition. Key-indexed counting uses extra space propor Stable? aCIO] a CII] Anderson Brown Davi s Garcia Harris Jackson Johnson Jones Martin Marti nez Miller Moore Robi nson 2 3 3 4 1 3 4 3 1 2 2 1 2 Harri s Marti n Moore Anderson Marti nez Miller Robi nson Whi te Brown Davi s Jackson Jones Tayl or 1 1 1 2 2 2 2 2 3 3 3 3 3 aux CO) aux Cl] aux C 2] aux CB] aux aux [5] aux C 6] aux C 7 ) aux CU aux C 9 ) aux aux [11] aux [12] ](media/Key-indexed-Counting-image7.png){width="6.40625in" height="4.802083333333333in"}



![Alphabets Digital key. Sequence of digits over fixed alphabet. Number of digits R in alphabet. Radix. name BINARY OCTAL DECIMAL HEXADECIMAL DNA LOWERCASE UPPERCASE PROTEIN BASE64 2 8 10 16 4 26 26 20 64 lgR() 1 3 4 4 2 5 5 5 characters 01 01234567 0123456789 0123456789ABCDEF ACTG abcdefghi j kl mnopq rstuv ABCDEFGHIJKLMNOPQRSTUV ACDEFGHIKLMNPQRSTVW ABCDEFGHIJKLMNOPQRSTUVWXY 6 ](media/Key-indexed-Counting-image8.png){width="6.40625in" height="4.802083333333333in"}








