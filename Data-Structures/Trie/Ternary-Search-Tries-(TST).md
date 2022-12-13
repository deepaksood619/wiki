# Ternary Search Tries (TST)

Created: 2018-04-10 23:10:17 +0500

Modified: 2018-04-11 20:03:16 +0500

---

Solve the problem of using large amount of data by R-way tries.
Exactly 3 children.
Creating associative Symbol table
![Ternary search tries • Store characters and values in nodes (not keys). • Each node has 3 children: smaller (left), equal (middle), I Fast Algorithms for Sorting and Searching Strings Jon L. Bentley* Abstract We present theoretical algorithms for sorting and searching multikey data, and derive from them practical C implementations for applications in which keys are charac- ter strings. The sorting algorithm blends Quicksort and radix sort; it is competitive with the best known C sort codes. The searching algorithm blends tries and binary search trees; it is faster than hashing and other commonly used search methods. The basic ideas behind the algo- Robert Sedgewick# that is competitive with the most efficient string sorting programs kiown. The second program is a symbol table implementation that is faster than hashing. which is com- monly regarded as the fastest symbol table implementa- tion. The symbol table implementation is much more space-efficient than multiway trees, and supports more advanced searches. In many application programs, sorts use a Quicksort implementation based on an abstract compare operation, ](media/Ternary-Search-Tries-(TST)-image1.png)

![Ternary search tries • Store characters and values in nodes (not keys). • Each node has 3 children: smaller (left), equal (middle), I link to TSTfor all keys that start with a letter before s link to thC1i e 12 14 s e 10 roe 8 e 12 each node has three links 14 s 11 ](media/Ternary-Search-Tries-(TST)-image2.png)

![Search in a TST Follow links corresponding to each character in the key. • If less, take left link; if greater, take right link. • If equal, take the middle link and move to the next key c Search hit. Node where search ends has a non-null value. Search miss. Reach a null link or node where search ends ha get ("sea") match: take middle link, move to next char mismatch: take left or right link, do not move to next char a e b 12 14 s h e u a 0 O ](media/Ternary-Search-Tries-(TST)-image3.png)

![Search hit in a TST get("sea") return value associated ](media/Ternary-Search-Tries-(TST)-image4.png)

![](media/Ternary-Search-Tries-(TST)-image5.png)

![Ternary search trie construction demo ternary search trie ](media/Ternary-Search-Tries-(TST)-image6.png)

![26-way trie vs. TST 26-way trie. 26 null links in each leaf. n c g n e a la i u g e c) e u w a ko oooeooooooooeoeeooooooooooooo( 26-way trie (1035 null links, not shown) TST. 3 null links in each leaf. O m o u oft o ](media/Ternary-Search-Tries-(TST)-image7.png)

![TST representation in Java A T ST node is five fields: • A value. • A character c. • A reference to a left T ST. • A reference to a middle T ST. • A reference to a right T ST. standard array of links (R = 26) s private class Node private Value va private char c; private Node lef ternary search tree (T! link for keys s that start With s o ](media/Ternary-Search-Tries-(TST)-image8.png)

![TST: Java implementation public class TST<Va1 private Node root; private class Node / * see previous slide * / public void put(String key, Value val) { root = put(root, key, van, 0); private Node put(Node x, String key, 1) x.mld char c = if else if else if else key. charAt (d) ; if (x null) { x = new Node() ; Val ue x. 1 eft x. right (d < key. length() val , int d) = put(x.left, = put(x.right, = put(x.mld = val ; key , key , key , x. val ](media/Ternary-Search-Tries-(TST)-image9.png)

![TST: get (x. 1 eft , get(x. ri ght, Java implementation (continued) public bool ean contains(String key) { return get(key) != null; public Value get(String key) Node x = get(root, key, 0) ; if (x null) return null; return x. val ; private Node get(Node x, String key, = null) return null; key. charAt (d) ; int d) char c = if else if return return key , key, d) ](media/Ternary-Search-Tries-(TST)-image10.png)

![String symbol table implementation cost summary character accesses (typical case) implementation red-black BST hashing (linear probing) R-way trie TST search hit L + cig2N search miss c lg2N log RN In N insert clg2N L space (references) 4 N to 16 N ](media/Ternary-Search-Tries-(TST)-image11.png)
Very easy to speed up and saves a lot of data.
![TST with R2 branching at root Hybrid of R-way trie and T ST. • Do IV-way branching at root. • Each of R2 root nodes points to a T ST. array of 262 roots aa TST ab TST ac TST zy TST ](media/Ternary-Search-Tries-(TST)-image12.png)

![String symbol table implementation cost summary character accesses (typical case) implementation red-black BST hashing (linear probing) R-way trie TST TST with R2 search hit L + cig2N search miss c lg2N log RN insert clg2N L L + In N space (references) 4 N to 16 N ](media/Ternary-Search-Tries-(TST)-image13.png)

![TST vs. hashing Hashing. • Need to examine entire key. • Search hits and misses cost about the same. • Performance relies on hash function. • Does not support ordered symbol table operations. TSTs. • Works only for strings (or digital keys). Only examines just enough key characters. Search miss may involve only a few characters. Supports ordered symbol table operations (plus others!). ](media/Ternary-Search-Tries-(TST)-image14.png)