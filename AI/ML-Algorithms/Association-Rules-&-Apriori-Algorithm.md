# Association Rules & Apriori Algorithm

Created: 2019-01-22 10:48:20 +0500

Modified: 2021-06-19 15:47:05 +0500

---

**Association Rule Mining**
-   Given a set of transactions, find rules that will predict the occurrence of an item based on the occurrences of other items in the transaction

![Market-Basket transactions TID Item s 1 Bread, Milk 2 Bread, Diaper, Beer, Eggs 3 Milk, Diaper, Beer, Coke 4 Bread, Milk, Diaper, Beer 5 Bread, Milk, Diaper, Coke Example of Association Rules {Diaper} ---i {Beer}, {Milk, Bread} {Eggs,Coke}, {Beer, Bread} ---Y {Milk}, Implication means co-occurrence, not causality! ](media/Association-Rules-&-Apriori-Algorithm-image1.jpeg)



**Definition: Frequent Itemset**
-   **Itemset**
    -   A collection of one or more items
        -   Example: {Milk, Bread, Diaper}
    -   k-itemset
        -   An itemset that contains k items
-   **Support count (σ)**
    -   Frequency of occurrence of an itemset
    -   E.g. σ({Milk, Break, Diaper}) = 2
-   **Support**
    -   Fraction of transactions that contain an itemset
    -   E.g. s({Milk, Bread, Diaper}) = 2/5
-   **Frequent Itemset**
    -   An itemset whose support is greater than or equal to a *minsup* threshold
-   **Association Rule**
    -   An implication expression of the form X->Y, where X and Y are itemsets
    -   Example
        -   {Milk, Diaper} -> {Beer}
-   **Rule Evaluation Metrics**
    -   Support (s)
        -   Fraction of transactions that contain both X and Y
    -   Confidence (c)
        -   Measures how often items in Y appear in transactions that contain X
    -   Example

![{Vlilk, Diaper} Beer c(N1ilk, Diaper, Beer) _ 2 ITI = 0.4 5 = 0.67 o (N'lilk, Diaper) 3 ](media/Association-Rules-&-Apriori-Algorithm-image2.jpg)



**Association Rule Mining Task**
-   Given a set of transactions T, the goal of association rule mining is to find all rules having
    -   support >= *minsup* threshold
    -   confidence >= *minconf* threshold
-   Brute-force approach
    -   List all possible association rules
    -   Compute the support and confindence for each rule
    -   Prune rules that fail the *minsup* and *minconf* thresholds
    -   Computationally prohibitive



**Mining Association Rules**
-   Two-step approach

    1.  Frequent Itemset Generation
        -   Generate all itemsets whose support >= minsup

    2.  Rule Generation
        -   Generate high confidence rules from each frequent itemset, where each rule is a binary partitioning of a frequent itemset
-   Frequent itemset generation is still computationally expresive



![Frequent Itemset Generatior null ABC AC ABD ABE AE ACD BC ACE BD ADE BE BCD CD BCE CE BDE Givt ](media/Association-Rules-&-Apriori-Algorithm-image3.png)

![requent temset eneratlon • Brute-force approach: --- Each itemset in the lattice is a candidate frequent ite --- Count the support of each candidate by scanning 1 2 3 4 5 Transactions Items Bread, Milk Bread, Dia er, Beer, E s Milk Dia er Beer Coke Bread, Milk, Dia er, Beer Bread Milk Dia er Coke ](media/Association-Rules-&-Apriori-Algorithm-image4.png)



**Frequent Itemset Generation Strategies**
-   Reduce the number of candidates (M)
    -   Complete search: M = 2^d^
    -   Use pruning techniques to reduce M
-   Reduce the number of transactions (N)
    -   Reduce size of N as the size of itemset increases
    -   Used by DHP and vertical-based mining algorithms
-   Reduce the number of comparisions (NM)
    -   Use efficient data structures to store the candidates or transactions
    -   No need to match every candidate against every transaction



DHP - Direct Hashing and Pruning



![Reducing Number of Candidat Apriori principle: --- If an itemset is frequent, then all of its subsets mt frequent • Apriori principle holds due to the following pro support measure: VX,Y : (X Y) s(X) --- Support of an itemset never exceeds the support ](media/Association-Rules-&-Apriori-Algorithm-image5.png)

Example - If bat + ball are not frequent, then we can say that bat + ball + gloves is also not frequent.

Other way around of Apriori principle - if an itemset is not frequent, then all its superset are also not frequent.



![Illustrating Apriori Principle null Found to be Infrequent AB ABC AC ABD AD ABE AE ACD BC ACE ADE BCE ](media/Association-Rules-&-Apriori-Algorithm-image6.png)

![Illustrating Apriori Princ Item Bread Coke Milk Beer Dia er Eggs Count 4 4 3 4 Items (I-itemsets) Itemset Bread,Milk Bread, Beer Bread,Dia er Milk,Beer {Milk,Diaper} Beer Dia er Count Pairs C Minimum Support = 3 If every subset is considered, 3 3 3 Iternset Bread (No ne candid or Egg Milk Dia ](media/Association-Rules-&-Apriori-Algorithm-image7.png)



**Apriori Algorithm**
-   Let k = 1
-   Generate frequent itemsets of length 1
-   Repeat until no new frequent itemsets are identified
    -   Generate length (k+1) candidate itemsets from length k frequent itemsets
    -   Prune candidate itemsets containing subsets of length k that are infrequent
    -   Count the support of each candidate by scanning the DB
    -   Eliminate candidates that are infrequent, leaving only those that are frequent



**Factors affecting complexity**
-   Choice of minimum support threshold
    -   Lowering support threshold results in more frequent itemsets
    -   this may increase number of candidates and max length of frequent itemsets
-   Dimensionality (number of items) of the data set
    -   more space is needed to store support count of each item
    -   if number of frequent items also increases, both computation and I/O costs may also increase
-   Size of database
    -   Apriori makes multiple passes, run time of algorithm increase with number of transactions
-   Average transaction width
    -   This may increase max length of frequent itemsets and traverals of hash tree (number of subsets in a transaction increases with its width)







