# Huffman Compression

Created: 2018-05-29 13:11:24 +0500

Modified: 2021-11-01 21:39:47 +0500

---

**Variable-length codes**

Use different number of bits to encode different chars



![Ex. Morse code: • Issue. Ambiguity. SOS ? IAMIE ? EEWNI ? In practice. Use a medium gap to separate codewords. codeword for S is a prefix of codeword for V Numbers ](media/Huffman-Compression-image1.jpg)



Que: How do we avoid ambiguity?

Ans: Ensure that no condeword is a prefix of another



Ex 1: Fixed-length code

Ex 2: Append special stop char to each codeword

Ex 3: General prefix-free code



![Codeword tabIe Codeword Кеу А в с D R 101 о 110 100 1110 Кеу А в с D R уа!ие 101 11 00 010 100 011 Compressed bitstring А В СА ! Compressed bitstring 29 tS А В 'ИСА RA! ](media/Huffman-Compression-image2.jpg)



**Prefix-free codes: trie representation**

Que: How to represent the prefix-free code?

Ans: A binary trie
-   Chars in leaves
-   Codeword is path from root to leaf



![Codeword table Trie representa tion Codeword table Trie representation key A c D R value 101 o 110 100 1110 o o D 1 key A c D R value 101 11 010 100 011 O 1 c 1 o c 001 1 R o D O R B Compressed bitstring A B '{A CA DAB ! Compressed bitstring 1 29 bits ](media/Huffman-Compression-image3.jpg)



**Compression**
-   Method 1: start at leaf; follow path up to the root; print bits in reverse
-   Method 2: create ST of key-value pairs



**Expansion**
-   Start at root
-   Go left if bit is 0; go right if 1
-   If leaf node, print char and return to root



**Huffman trie node data type**

![pri vate static class Node impl ements Comparable<Node> private final char ch; // used only for leaf nodes private final int freq; // used only for compress private final Node left, right; public Node(char ch, int freq, Node left, Node right) thi s. freq this. left this. right this. ch = ch; = freq; = left; = right; public bool ean isLeaf() { return 1 eft null && right public int compareTo(Node that) { return this. freq - that. freq; null; initializing constructor is Node a leaf? compare Nodes by frequency (stay tuned) ](media/Huffman-Compression-image4.jpg)



**Prefix-free codes: expansion**

![public void expand() Node root = readTrie(); int N --- Bi naryStdIn . readlnt(); for (int i = 0; i < N; i ++) Node x = root; while (!x.isLeaf()) if ( ! Bi naryStdIn. readB001ean()) read in encoding trie read in number of chars expand codeword for ith char x = x. left; else x = x. right; Bi naryStdOut . wri te (x . ch , Bi naryStdOut . close ; 8); ](media/Huffman-Compression-image5.jpg)



Running time: Linear in input size N



**How to transmit**

Que: How to write the trie?

Ans: Write preorder traversal of trie; mark leaf and internal nodes with a bit

![preorder traversal leaves O c O private static void writeTrie(Node x) if (x.isLeaf()) Bi naryStdOut. wri te (t rue) ; BinaryStdOut.write(x. ch, 8) ; retu rn ; Bi naryStdOut. wri te (fal se) ; writeTri e(x. left) ; wri teTri e (x. ri ght) ; 01010000010010100010001000010101010000110101010010101000010 tt 23 5 internal nodes Using preorder traversal to encode a trie as a bitstream ](media/Huffman-Compression-image6.jpg)



Note: If message is long, overhead of transmitting trie is small



Que: How to read in the trie?

Ans: Reconstruct from preorder traversal of trie

![preorder traversal leaves O c O 01010000010010100010001000010101010000110101010010101000010 t private static Node readTrie() if (BinaryStdIn. readB001 ean()) char c = BinaryStdIn. readChar(8) ; return new Node(c, O, null, null); Node x = readTrie(); Node y = readTrie() ; return new Node('0', O, x, y); used only for leaf nodes 23 t 4 t 5 internal nodes Using preorder traversal to encode a trie as a bitstream ](media/Huffman-Compression-image7.jpg)



**Shannon-Fano codes**

Que: How to find best prefix-free code?

Shannon-Fano algorithm:
-   Partition symbols S into two subsets S~0~ and S~1~ of (roughly) equal freq
-   Codewords for symbols in S~0~ start with 0; for symbols in S~1~ start with 1
-   Recur in S~0~ and S~1~.



![char freq encoding char freq encoding So = codewords starting with O Sl = codewords starting with 1 ](media/Huffman-Compression-image8.jpg)



Problem 1: How to divide up symbols?

Problem 2: Not optimal



![char freq encoding 111 1011 100 110 1010 ](media/Huffman-Compression-image9.jpg)



**Huffman codes**

Que: How to find best prefix-free code?



Huffman algorithm:
-   Count frequency freq[i] for each char i in input
-   Start with one node corresponding to each char i (with weight freq[i])
-   Repeat until single trie formed:
    -   Select two tries with min weight freq[i] and freq[j]
    -   merge into single trie with weight freq[i] + freq[j]



**Constructing a Huffman encoding trie: Java implementation**

![private static Node for (char i = 0; buildTrie(int[] freq) Mi pq = new Mi ; if (freq[i] > 0) pq.insert(new Node(i, freq [i] , null, null)); while (pq.size() > 1) Node x = pq.de1Min(); Node y = pq.de1Min(); Node parent = new Node('0' , pq. insert (parent) ; initialize PQ with singleton tries merge two smallest tries x. freq + y. freq, x, return pq.de1Min() ; not used for internal nodes total frequency two subtries ](media/Huffman-Compression-image10.jpg)



**Huffman encoding summary**

Proposition: Huffman algorithm produces an optimal prefix-free code



Implementation:

Pass 1: tabulate char frequencies and build trie

Pass 2: encode file by traversing frie or lookup table



Running time: Using a binary heap => N+R log R



![Suppose that you have a n-byte input stream consisting of n 7-bit ASCII characters. Approximately what compression ratio does Huffman compression achieve if each ASCII character appears with equal frequency? 1/2 3/4 7/8 Correct The Huffman trie will be a complete binary trie of height 7 (with the 128 characters in the leaves). Therefore, the encoding of each character will require 7 bits. 1 ](media/Huffman-Compression-image11.png)













