# Indexed Priority Queue

Created: 2018-03-11 14:08:42 +0500

Modified: 2018-03-11 14:09:29 +0500

---

![Indexed priority qt.JeUe Associate an index between 0 and N- I with each key in a priority queue. • Client can insert and delete-the-minimum. • Client can change the key by specifying the index. public class voi d voi d boolean int boolean int IndexMi nPQ<Key extends IndexMi nPQ(int N) insert(int i , Key key) decreaseKey(int i , Key contai ns(int i) del Mi n ( ) i sEmpty() si ze ( ) Comparabl key) create indexed priority queue with indices O, l, ..., N-l associate key with index i decrease the key associated with index i is i an index on the priority queue? remove a minimal key and return its associated index is the priority queue empty? number of entries in the priority queue ](media/Indexed-Priority-Queue-image1.png){width="5.0in" height="3.5625in"}
![Indexed priority qveve implementation Implementation. • Start with same code as MinPQ. • Maintain parallel arrays keys[], pq[], and qp[] so that: keys[i] is the priority of i --- pq[i] is the index of the key in heap position i qp[i] is the heap position of the key with index i • Use implement decreaseKey(i , key) • keys [i pq [i] qp [i] o A 1 1 s O 5 2 o 4 3 7 8 1 4 T 2 7 6 5 1 1 6 6 5 7 4 3 8 3 3 1 ](media/Indexed-Priority-Queue-image2.png){width="5.0in" height="4.958333333333333in"}
**Applications**
-   Prim's Algorithm