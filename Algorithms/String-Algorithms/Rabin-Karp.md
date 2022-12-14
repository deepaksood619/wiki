# Rabin Karp

Created: 2018-12-23 22:44:57 +0500

Modified: 2018-12-23 22:45:07 +0500

---

![Rabin-Karp fingerprint search Basic idea = modular hashing. • Compute a hash of pattern characters 0 to M- 1. • For each i, compute a hash of text characters i to M + i- • If pattern hash = text substring hash, check for a match. pat. charAt(i) o 2 o 3 3 o 1 2 1 6 1 1 1 1 2 5 2 4 4 4 4 3 3 3 1 1 1 1 4 5 4 5 5 5 5 % 997 = 613 txt . charAt(i) 6 7 8 9 10 11 12 13 14 15 5 9 265358979 % 997 = 508 9 % 997 = 201 9 2 % 997 = 715 ](media/Rabin-Karp-image1.png)

![Efficiently computing the hash function Modular hash function. Using the notation ti for txt.charAt(i we wish to compute = tiR M-1 + ti+l R M-2 + + ti+M-1 R 0 (mod Q) Intuition. M-digit, base-R integer, modulo Q. Horner's method. Linear-time method to evaluate degree-M I pat. charAt() 535 2 % 997 = o 1 o 2 2 2 1 6 6 % 997 = (2*10 + 6) % 997 = 26 // Compute hash for private long hash(S long h = o; for (int j ](media/Rabin-Karp-image2.png)

![Efficiently computing the hash function Challenge. How to efficiently compute given that we knc Key property. Xi = tiR + ti+l R + ... + ti+M---1 RO --- ti+l R M-1 + + + ti+MR0 Xi+l ¯ Can update hash function in constant time! Xi+l current value tIRM-l) R subtract leading digit multiply by radix add new (can pre trailing digit current value new value 1 2 4 4 4 3 1 1 1 4 5 5 5 5 9 9 9 6 2 2 2 7 > text 6 5 current value ](media/Rabin-Karp-image3.png)

![Rabin-Karp substring search example o 1 2 3 4 5 6 7 8 9 o 3 3 3 3 3 3 2 4 0/0 997 = 1 1 1 1 1 1 1 3 1 4 5 3 5 9 6 2 7 6 8 5 9 10 11 12 13 14 15 3589793 % 997 = (3*10 + 1) 0/0 997 = 31 4 4 4 4 4 % 997 = (31*10 + 4) % 997 = 314 1 1 1 1 1 (314*10 + 1) 0/0 997 % 997 = = 150 5 5 5 5 5 0/0 997 = (150*10 + 5) 0/0 997 % 997 = ((508 + - + 9) 0/0 997 = 9 9 9 9 9 2 2 2 2 ((201 + - 0/0 997 = 6 6 6 % 997 - ((715 + - 5 % 997 = ((971 + 5 5 3 % 997 = ((442 + (997 - 30)) ](media/Rabin-Karp-image4.png)

![Rabin-Karp: Java implementation public class RabinKarp private long patHash; private int M; private long Q; private int R; private long RM; pattern hash value pattern length modul us radix // RA(M-I) % Q public Rabi nKarp(String pat) M = pat. length(); R = 256; Q = longRandomPrime() ; for (int • = 1; i M-1; patHash - hash(pat, M); a large (but av precon ](media/Rabin-Karp-image5.png)



![Rabin-Karp: Java implementation (continued) Monte Carlo version. Return match if hash match. public int search(String txt) check for has using rolling has int N = txt. length(); int txtHash if (patHash for (int i txtHash txtHash --- hash(txt, M); txtHash) return 0; = (txtHash + Q - RM*txt. charAt(i -M) % Q) = (txtHash*R + txt.charAt(i)) % Q; if (patHash txtHash) return i - return N; ](media/Rabin-Karp-image6.png)

![Rabin-Karp analysis Theory. If Q is a sufficiently large random prime (about MN then the probability of a false collision is about I/N. Practice. Choose Q to be a large prime (but not so large to c Under reasonable assumptions, probability of a collision is al Monte Carlo version. • Always runs in linear time. • Extremely likely to return correct answer (but not always Las Vegas version. • Always returns correct answer. ](media/Rabin-Karp-image7.png)

![Rabin-Karp fingerprint search Advantages. • Extends to 2d patterns. • Extends to finding multiple patterns. Disadvantages. • Arithmetic ops slower than char compares. • Las Vegas version requires backup. • Poor worst-case guarantee. How would you extend Rabin-Karp to efficiently search ft Q. one of P possible patterns in a text of length N? ](media/Rabin-Karp-image8.png)








