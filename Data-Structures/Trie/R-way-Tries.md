# R-way Tries

Created: 2018-04-10 23:06:14 +0500

Modified: 2018-05-03 23:28:29 +0500

---

![Tries Tries. [from retrieval, but pronounced "try"] • Store characters in nodes (not keys). • Each node has R children, one for each possible characte • For now, we do not draw null links. link to trie for all keys that start with s key by sea b y value 4 6 4 root -.............................+ e 6 s h e o o t h e ](media/R-way-Tries-image1.png){width="6.489583333333333in" height="5.010416666666667in"}

![Search in a trie Follow links corresponding to each character in the key. • Search hit: node where search ends has a non-null value • Search miss: reach null link or node where search ends get("shells") b y s 4 a 6 h e h 0 o ](media/R-way-Tries-image2.png){width="6.489583333333333in" height="5.010416666666667in"}

![Search in a trie Follow links corresponding to each character in the key. • Search hit: node where search ends has a non-null value • Search miss: reach null link or node where search ends get("she") b y s 4 a 6 h e h o o ](media/R-way-Tries-image3.png){width="6.489583333333333in" height="5.010416666666667in"}

![Search in a trie Follow links corresponding to each character in the key. • Search hit: node where search ends has a non-null value Search miss: reach null link or node where search ends I get("shell") b y s 4 a 6 h e h 0 o ](media/R-way-Tries-image4.png){width="6.489583333333333in" height="5.010416666666667in"}

![Search in a trie Follow links corresponding to each character in the key. • Search hit: node where search ends has a non-null value Search miss: reach null link or node where search ends I get("shelter") b y s 4 a 6 h e h 0 o ](media/R-way-Tries-image5.png){width="6.489583333333333in" height="5.010416666666667in"}

![Insertion into a trie Follow links corresponding to each character in the key. • Encounter a null link: create new node. • Encounter the last character of the key: put("shore", 7) b y s 4 a 6 h e set value in that h 0 ](media/R-way-Tries-image6.png){width="6.489583333333333in" height="5.010416666666667in"}
![Trie construction demo trie ](media/R-way-Tries-image7.png){width="6.489583333333333in" height="5.010416666666667in"}

![Trie representation: Java implementation Node. A value, plus references to R nodes. private static class Node private Object val ue; private Node[] next = new Node [R] ; characters are implicitly s use Object insl no generic arr; s h h e 0 defined by link index 2 ](media/R-way-Tries-image8.png){width="6.489583333333333in" height="5.010416666666667in"}

![R-way trie: Java implementation public class TrieST<Va1ue> private static final int R = 256; private Node root = new Node(); private static class Node / * see previous slide * / extended Af public void put(String key, Value val) { root = put(root, key, val, 0); private Node put(Node x, String key, Value val, in if (x null) x = new Node(); if (d ------ key. length()) { x. val char c = key. charAt (d) ; = val ; return x; ](media/R-way-Tries-image9.png){width="6.489583333333333in" height="5.010416666666667in"}

![R-way trie: Java implementation (continued) public bool ean contains (String key) { return get(key) null; public Value get(String key) Node x = get(root, key, 0) ; if (x null) return null; return (Value) x. val ; cast needed private Node get(Node x, String key, int d) if (x if (d --- null) return null; --- key. length()) return x; ](media/R-way-Tries-image10.png){width="6.489583333333333in" height="5.010416666666667in"}

![Trie performance Search hit. Need to examine all L characters for equality. Search miss. • Could have mismatch on first character. • Typical case: examine only a few characters (sublinear). Space. R null links at each leaf. (but sublinear space possible if many short strings share con ](media/R-way-Tries-image11.png){width="6.489583333333333in" height="5.010416666666667in"}

![Popular interview question Goal. Design a data structure to perform efficient spell checl Solution. Build a 26-way trie (key = word, value = bit). English-language text a b c m g f e o e 1.1 1 j n o o w r a s a a a oooeooooooooeoeeooeooooooooooe ](media/R-way-Tries-image12.png){width="6.489583333333333in" height="5.010416666666667in"}

![Deletion in an R-way trie To delete a key-value pair: • Find the node corresponding to key and set value to null • If node has null value and all null links, b y s remove that nodc h 4 a 6 h e 0 o ](media/R-way-Tries-image13.png){width="6.489583333333333in" height="5.010416666666667in"}

![Deletion in an R-way trie To delete a key-value pair: • Find the node corresponding to key and set value to null • If node has null value and all null links, remove that nod( b y s 4 a 6 h e h 0 o ](media/R-way-Tries-image14.png){width="6.489583333333333in" height="5.010416666666667in"}

![String symbol table implementations cost summary character accesses (typical case) implementation red-black BST hashing (linear probing) R-way trie R-way trie. search hit L+C lg2N search miss c lg2N log RN insert c lg2N space (references) 4N to 16N ](media/R-way-Tries-image15.png){width="6.489583333333333in" height="5.010416666666667in"}
