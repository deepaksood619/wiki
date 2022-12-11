# Count-min Sketch

Created: 2018-04-10 00:29:00 +0500

Modified: 2022-04-24 11:38:42 +0500

---

Space efficient probabilistic based data structure.



Count-min sketch is a probabilitstic data strucure that is used to count the frequency of events. Consider we have millions of events and we want to count top k events, then we can use count-min sketch instead of keeping the count of all the events. So for fraction of space it will give answer which will be close enough answer to the actual answer with some error rate.



Count-Min sketch is a probabilistic sub-linear space streaming algorithm. It is somewhat similar to bloom filter. The main difference is that bloom filter represents a set as a bitmap, while Count-Min sketch represents a multi-set which keeps a frequency distribution summary.



![](media/Count-min-Sketch-image1.jpeg){width="5.989583333333333in" height="3.3645833333333335in"}



<https://youtu.be/ibxXO-b14j4>

