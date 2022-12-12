# Elementary Symbol Tables

Created: 2018-05-12 19:55:30 +0500

Modified: 2018-12-23 22:42:43 +0500

---

**Symbol Tables (Associative Arrays, Maps and Dictionaries)-**

Key-value pair abstraction -
-   Insert a value with specified key
-   Given a key, search for the corresponding value
**Applications -**
-   DNS lookup
    -   Insert domain name with specified IP address
    -   Give domain name, find corresponding IP address
-   Reverse DNS lookup
-   Dictionary
-   Web search
-   Compiler
-   Routing table
-   Genomics
-   File system
-   Symbol tables first used in compilers, for doing fast lookups for symbols
**Associative array abstraction**

Associate one value with each key
**Keys and values**

Value type: Any generic type

Key type:
-   Assume keys are Comparable, use compareTo()
-   Assume keys are any generic type, use equals() to test equality; use hashCode() to scramble key.
-   Use immutable types for symbol table keys
    -   Immutable in java - Integer, Double, String, java.io.File
    -   Mutable in java - StringBuilder, java.net.URL, arrays
**Implementation -**

a.  Using Linked List (Unordered)b.  Using Ordered Array

    i.  Using Binary Search

Keep two array, one for keys and other for values (order by keys)

c.  Using Binary Search Tree

A BST is a binary tree in symmetric order

Each node has a key, and every node's key is:
-   Larger than all keys in its left subtree
-   Smaller than all keys in its right subtree
| implementation                     | worst-case cost (after N inserts) |       |       | average case (after N random inserts) |             |             | ordered iteration? | key interface       |
|-------------|--------|------|-------|--------|------|-------|---------|-----------|
|                                   | search                            | insert | delete | search hit                            | insert       | delete       |                   |                    |
| sequential search (unordered list) | N                                 | N      | N      | N/2                                   | N            | N/2          | no                 | equals()            |
| binary search (ordered array)      | lg N                              | N      | N      | lg N                                  | N/2          | N/2          | yes                | compareTo()         |
| BST                                | N                                 | N      | N      | 1.39 lg N                             | 1.39 lg N    | ?            | yes                | compareTo()         |
| 2-3 tree                           | c lg N                            | c lg N | c lg N | c lg N                                | c lg N       | c lg N       | yes                | compareTo()         |
| red-black BST                      | 2 lg N                            | 2 lg N | 2 lg N | 1.00 lg N *                          | 1.00 lg N * | 1.00 lg N * | yes                | compareTo()         |
| separate chaining                  | lg N*                            | lg N* | lg N* | 3.5*                                 | 3.5*        | 3.5*        | no                 | equals() hashCode() |
| linear probing                     | lg N*                            | lg N* | lg N* | 3.5*                                 | 3.5*        | 3.5*        | no                 | equals() hashCode() |
# Symbol Table Applications -

1.  **Sets**

A collection of distinct keys

Application - Exception filter
-   Read in a list of words from one file
-   Print out all words from standard input that are {in, not in} the list
    -   Whitelist a set of strings or objects
    -   Blacklist a set of strings or objects

Application of Exception filter -
-   Spell checker
-   Browser
-   Parental controls
-   Chess
-   Spam filter
-   Credit cards
2.  **Dictionary Clients**

Applications -
-   DNA sequence - CODON
-   IP - URL
-   Email- Username
3.  **Indexing Clients**
    -   **File Indexing**

Index a PC (or the web)

Goal: Given a list of files specified, create an index so that you can efficiently find all files containing a given query string

Solution: Key = query string; value = set of files containing that string
-   Book index
-   Concordance (with the search result give context of the word, like few texts before the search word and few texts after)

Goal: Preprocess a text corpus to support concordance queries: given a word, find all occurrences with their immediate contexts.
4.  **Sparse Vectors**

Sparse Matrix-vector multiplication

Using symbol table, we can have space proportional to number of nonzero values. We can use hash table because the order is also not important. Keys will be the position of the nonzero element in each row and value will be the actual value.
![Summary of the performance of symbol-table implemen Order of growth of the frequency of operations. implementation red-black BST hash table search log N It typical case insert log N delete log N ordered operations yes no t under uniform ](media/Elementary-Symbol-Tables-image1.png){width="6.75in" height="5.21875in"}

![String symbol table basic API String symbol table. Symbol table specialized to string keys public class voi d Value voi d Stri ngST<Va1 ue> Stri ngST() put(String key, Value get(String key) delete (String key) val) create an enu put key-value pair return value pai delete key and ct ](media/Elementary-Symbol-Tables-image2.png){width="6.75in" height="5.21875in"}

![implementation red-black BST hashing (linear probing) Parameters • N = number of strings • L = length of string String symbol table implementations cost summary character accesses (typical case) • R = radix search hit L + cig2N search miss clg2N insert c lg2N space (references) 4N to 16N file moby.txt actors.txt size 1.2 ME 82 ME ](media/Elementary-Symbol-Tables-image3.png){width="6.75in" height="5.21875in"}
# Character Based Operations

![String symbol table API Character-based operations. The string symbol table API sur useful character-based operations. Prefix match. key by sea sells she shells shore the Keys with prefix sh: she, value 4 6 3 7 5 shells, and shore. ](media/Elementary-Symbol-Tables-image4.png){width="6.75in" height="5.21875in"}

![String symbol table API public class voi d Value voi d Iterabl e<Stri ng> Iterabl e<Stri ng> Iterabl e<Stri ng> St ri ngST<Va1 ue> Stri ngST() put(String key, Value val) get (String key) delete(String key) keys() keysWithPrefix(String s) keysThatMatch(String s) create a symbol tat put key-value pair i/ value paire delete key and cor all k keys having keys that match s (w, ](media/Elementary-Symbol-Tables-image5.png){width="6.75in" height="5.21875in"}

![Warmup: ordered iteration To iterate through all keys in sorted order: • Do inorder traversal of trie; add keys encountered to a • Maintain sequence of characters on path from root to no by sea keys ( ) key b by s se sea sel sell sells sh she shell shells by by by by sea sea sea sells sells sells b shells s O h O O s t h e o O O she she ](media/Elementary-Symbol-Tables-image6.png){width="6.75in" height="5.21875in"}

![Ordered iteration: Java implementation To iterate through all keys in sorted order: • Do inorder traversal of trie; add keys encountered to a • Maintain sequence of characters on path from root to no public Iterabl e<Stri keys() Queue<String> queue = new Queue<String>() ; col lect(root, queue) ; return queue; private void collect (Node x, if (x == null) return; sequence of ch on path from rl String prefix, Queue<Strn ](media/Elementary-Symbol-Tables-image7.png){width="6.75in" height="5.21875in"}
![String symbol tables summary A success story in algorithm design and analysis. Red-black BST. • Performance guarantee: log N key compares. • Supports ordered symbol table API. Hash tables. • Performance guarantee: constant number of probes. • Requires good hash function for key type. Tries. R-way, TST. • Performance guarantee: log N characters accessed. ](media/Elementary-Symbol-Tables-image8.png){width="6.75in" height="5.21875in"}