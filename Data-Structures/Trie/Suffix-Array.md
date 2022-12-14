# Suffix Array

Created: 2018-04-10 22:51:14 +0500

Modified: 2021-06-12 09:00:01 +0500

---

## *A suffix array is a sorted array of all suffixes of a given string*. The definition is similar to[Suffix Tree which is compressed trie of all suffixes of the given text](https://www.geeksforgeeks.org/pattern-searching-set-8-suffix-tree-introduction/). Any suffix tree based algorithm can be replaced with an algorithm that uses a suffix array enhanced with additional information and solves the same problem in the same time complexity

A suffix array can be constructed from Suffix tree by doing a DFS traversal of the suffix tree. In fact Suffix array and suffix tree both can be constructed from each other in linear time.
Advantages of suffix arrays over suffix trees include improved space requirements, simpler linear time construction algorithms (e.g., compared to Ukkonen's algorithm) and improved cache locality

## Applications -

- Full text indices
- Data compression algorithms
- Field of bibliometrics

# Suffix Arrays and Suffix Sort

![image](media/Suffix-Array-image1.png)

![image](media/Suffix-Array-image2.png)

![image](media/Suffix-Array-image3.png)

![image](media/Suffix-Array-image4.png)

![image](media/Suffix-Array-image5.png)

![image](media/Suffix-Array-image6.png)

## Longest common prefix (LCP)

![image](media/Suffix-Array-image7.png)

![image](media/Suffix-Array-image8.png)

![image](media/Suffix-Array-image9.png)

![image](media/Suffix-Array-image10.png)

![image](media/Suffix-Array-image11.png)

![image](media/Suffix-Array-image12.png)

![image](media/Suffix-Array-image13.png)

![image](media/Suffix-Array-image14.png)

![image](media/Suffix-Array-image15.png)

![image](media/Suffix-Array-image16.png)

![image](media/Suffix-Array-image17.png)

![image](media/Suffix-Array-image18.png)

![image](media/Suffix-Array-image19.png)

![image](media/Suffix-Array-image20.png)
![image](media/Suffix-Array-image21.png)
![image](media/Suffix-Array-image22.png)

![image](media/Suffix-Array-image23.png)
![image](media/Suffix-Array-image24.png)
