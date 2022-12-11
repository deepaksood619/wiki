# Left Leaning Red-Black BSTs (LLRB tree)

Created: 2018-02-05 22:05:48 +0500

Modified: 2018-02-06 09:44:20 +0500

---

**Red-Black Tree**

1.  Left-leaning red-black BSTs

    a.  Represent 2-3 tree as a BST

    b.  Use internal left-leaning links as glue for 3-nodes



![3-node less than a 2-3 tree a etwee a and b greater than b less than a etwee a and b red links "glue" nodes within a 3-node c b larger key is root greater than b black links connect 2-nodes and 3-nodes s corresponding red-black BST ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image1.png){width="5.0in" height="2.84375in"}



a.  Properties
    -   No node has two red links connected to it
    -   Every path from root to null link has the same number of black links
    -   Red links lean left

b.  Operations



1.  Search



![Observation. Search is the same as for elementary BST (ignore color). but runs faster because of better balance public Val get(Key key) Node x = root; while (x null) int cmp = key. compareTo (x. key) ; (cmp < O) x = x. left; > O) x = x. right; return x. val ; x if c s else if (cmp else if (cmp 0) return null; Remark. Most other ops (e.g., floor, iteration, selection) are also identical. ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image2.png){width="5.0in" height="3.4166666666666665in"}



2.  Implementation



![Each node is pointed to by precisely one link (from its parent) can encode color of links in nodes. private static final boolean private static final boolean private cl ass Node Key key; Value val ; Node left, right; boolean color; // color RED BLACK - true; false; h h. 1 eft . color is RED c A D h. ri ght. col or is BLACK of parent link private bool ean isRed(Node x) if (x null) return false; return x. color --- RED; null links are black ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image3.png){width="5.0in" height="3.1354166666666665in"}



3.  Left rotation - Orient a (temporarily) right-leaning red link to lean left



![Left rotation. rotate E left (before) less than E Orient a (temporarily) right-leaning red link to lean left. h s between E and S x greater than S private Node rotateLeft(Node h) assert isRed(h. right); = h. right; Node x h. ri ght = x. left; x. left = h = h. color; x. color h. color = RED return x; Invariants. Maintains symmetric order and perfect black balance. ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image4.png){width="5.0in" height="3.3645833333333335in"}



![rotate E left (after) less than E s between E and S x greater than S ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image5.png){width="4.895833333333333in" height="4.34375in"}



4.  Right rotation - Orient a left-leaning red link to (temporarily) lean right



![Right rotation. rotate S right Orient a left-leaning red link to (temporarily) lean right. (befo re) x less than E Invariants. E S between E and S h greater than S private Node rotateRight(Node h) assert isRed(h.1eft); Node x = h. left; h. left = x. right; x. right x. color = h. color; h.color = RED return x; Maintains symmetric order and perfect black balance. ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image6.png){width="5.0in" height="3.3541666666666665in"}



![rotate S right (after) x less than E s between E and S greater than S ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image7.png){width="5.0in" height="3.6770833333333335in"}



5.  Color flip - Recolor to split a (temporary) 4-node



![Color flip. flip colors (before) less than A Invariants. Recolor to split a (temporary) 4-node. between A and E s between E and S private void flipCoIors(Node h) assert ; assert isRed(h.1eft); assert isRed(h. right); h. color = RED h. left. color = BLACK; h. right. color = BLACK; greater than S Maintains symmetric order and perfect black balance. ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image8.png){width="5.0in" height="3.3020833333333335in"}



![flip colors (after) less than A h between A and E s between E and S greater than S ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image9.png){width="5.0in" height="3.125in"}



6.  Insertion in a LLRB tree

    a.  Basic Strategy

![Basic strategy. Maintain I-I correspondence with 2-3 trees by applying elementary red-black BST operations. insert C add new node here right link red so rotate left c c s s s A c ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image10.png){width="4.822916666666667in" height="3.4895833333333335in"}

b.  Insert into a tree with exactly 1 node

![Warmup l. left Insert into a tree with exactly I node. root b search ends at this null link root b red link to new node containing a converts 2-node to 3-node right root search ends Fat this null link a attached new node -------with red link b root b rotated left to make a legal 3-node ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image11.png){width="4.822916666666667in" height="2.8333333333333335in"}

i.  Insert into a 2-node at the bottom
    -   Do standard BST insert; color new link red
    -   If new red link is a right link, rotate left

![Case l. Insert into a 2-node at the bottom. • Do standard BST insert; color new link red. • If new red link is a right link, rotate left. insert C add new node here right link red so rotate left c c s s s ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image12.png){width="4.072916666666667in" height="3.5208333333333335in"}

c.  Insert into a tree with exactly 2 nodes

![Warmup 2. larger b a b a b a Insert into a tree with exactly 2 nodes. search ends at this null link attached new node with red link c colors flipped to black c smaller c b search ends at this null link c b attached new between a a a a c search ends ---at this null link c attached new b red link c b NNrotated left a a b b node with red link rotated right c colors flipped to black c b b rotated right c colors flipped to black c ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image13.png){width="4.822916666666667in" height="3.1041666666666665in"}

i.  Insert into a 3-node at the bottom
    -   Do standard BST insert; color new link red
    -   Rotate to balance the 4-node
    -   Flip colors to pass red link up one level
    -   Rotate to make lean left
    -   Repeat case 1 or case 2 up the tree

![Case 2. Insert into a 3-node at the bottom. • Do standard BST insert; color new link red. • Rotate to balance the 4-node (if needed). Flip colors to pass red link up one level. • Rotate to make lean left (if needed). inserting H c add new node here s c c two lefts in a row so rotate right s right link red so rotate left c s c both children red so flip colors s s ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image14.png){width="4.447916666666667in" height="2.9479166666666665in"}



![Case 2. Insert into a 3-node at the bottom. • Do standard BST insert; color new link red. • Rotate to balance the 4-node (if needed). • Flip colors to pass red link up one level. • Rotate to make lean left (if needed). • Repeat case I or case 2 up the tree (if needed). inserting p s c c add new node here right link red so rotate left c s M both ildren red so p flip colors two lefts in a row so rotate right c c s s both children red so flip colors p s c p s both children red so flip colors ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image15.png){width="4.447916666666667in" height="3.1666666666666665in"}



**Insertion Code**

![Insertion in a LLRB tree: Java implementation Same code for all cases. • Right child red, left child black: rotate left. • Left child, left-left grandchild red: rotate right. • Both children red: flip colors. right rotate pri vate Node put(Node h, Key key, Value val) if (h null) return new int cmp = key. compareTo(h . key) ; Node (key, val , = put(h.left, (cmp < O) else if (cmp > O) else if (cmp if (i sRed(h. right) if (i sRed(h. left) if (isRed(h. left) return h; h. left h. ri ght = put(h.right, h. val = val; && !isRed(h.1eft)) RED) ; key , key , h && isRed(h. left. left)) h val); val); rotateLeft (h) ; rotateRi ght(h) ; && isRed(h. right)) fl i pC01 ors (h) ; h left rotate flip colors insert at bottom (and color it red) lean left balance 4-node split 4-node only a few extra lines of code provides near-perfect balance ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image16.png){width="5.0in" height="3.8541666666666665in"}



1.  If implemented properly, the height of a red-black BST with N keys is at most 2 lg N



![Balance in LLRB trees Proposition. Height of tree is s 2 lgN in the worst case. • Every path from root to null link has same number of black links. • Never two red links in-a-row. Property. Height of tree is 1.00 lgN in typical applications. ](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image17.png){width="5.0in" height="4.260416666666667in"}



**Applications -**

**Red-black trees are widely used as system symbol tables -**
-   Java: Java.util.TreeMap, java.util.TreeSet
-   C++ STL: map, multimap, multiset
-   Linux kernel: completely fair scheduler, linux/rbtree.h
-   Emacs: conservative stack scanning



















