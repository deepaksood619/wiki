# Left Leaning Red-Black BSTs (LLRB tree)

Created: 2018-02-05 22:05:48 +0500

Modified: 2018-02-06 09:44:20 +0500

---

## Red-Black Tree

1. Left-leaning red-black BSTs

   - Represent 2-3 tree as a BST

   - Use internal left-leaning links as glue for 3-nodes
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image1.png)

- Properties
  - No node has two red links connected to it
  - Every path from root to null link has the same number of black links
  - Red links lean left

- Operations

1. Search
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image2.png)
2. Implementation
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image3.png)
3. Left rotation - Orient a (temporarily) right-leaning red link to lean left
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image4.png)
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image5.png)
4. Right rotation - Orient a left-leaning red link to (temporarily) lean right
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image6.png)
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image7.png)
5. Color flip - Recolor to split a (temporary) 4-node
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image8.png)
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image9.png)
6. Insertion in a LLRB tree

   - Basic Strategy

![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image10.png)

- Insert into a tree with exactly 1 node

![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image11.png)

- Insert into a 2-node at the bottom
  - Do standard BST insert; color new link red
  - If new red link is a right link, rotate left

![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image12.png)

- Insert into a tree with exactly 2 nodes

![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image13.png)

- Insert into a 3-node at the bottom
  - Do standard BST insert; color new link red
  - Rotate to balance the 4-node
  - Flip colors to pass red link up one level
  - Rotate to make lean left
  - Repeat case 1 or case 2 up the tree

![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image14.png)
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image15.png)

## Insertion Code

![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image16.png)

1. If implemented properly, the height of a red-black BST with N keys is at most 2 lg N
![image](media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image17.png)

## Applications -

## Red-black trees are widely used as system symbol tables -

- Java: Java.util.TreeMap, java.util.TreeSet
- C++ STL: map, multimap, multiset
- Linux kernel: completely fair scheduler, linux/rbtree.h
- Emacs: conservative stack scanning
