# K-Nearest Neighbor (KNN)

Created: 2019-03-16 08:56:03 +0500

Modified: 2021-11-14 21:18:37 +0500

---

The model representation for KNN is the entire training dataset. Simple right?



Predictions are made for a new data point by searching through the entire training set for the K most similar instances (the neighbors) and summarizing the output variable for those K instances. For regression problems, this might be the mean output variable, for classification problems this might be the mode (or most common) class value.



The trick is in how to determine the similarity between the data instances. The simplest technique if your attributes are all of the same scale (all in inches for example) is to use the Euclidean distance, a number you can calculate directly based on the differences between each input variable.



KNN can require a lot of memory or space to store all of the data, but only performs a calculation (or learn) when a prediction is needed, just in time. You can also update and curate your training instances over time to keep predictions accurate.



The idea of distance or closeness can break down in very high dimensions (lots of input variables) which can negatively affect the performance of the algorithm on your problem. This is called the curse of dimensionality. It suggests you only use those input variables that are most relevant to predicting the output variable.



<https://machinelearningmastery.com/k-nearest-neighbors-for-machine-learning



![Bayes Classifier: Recap TUNA 1 L) P(HILSA 1 L) SHARK 1 L) Maximum Aposteriori (MAP) Rule Distributions assumed to be of particular family (e.g., Gaussian), and parameters estimated from training data. 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image1.png)

![Bayes Classifier: Recap TUNA 1 L) P(HILSA 1 L) SHARK 1 L) Approximate Maximum Aposteriori (MAP) Rule Non-parametric (data driven) approach: consider a small window around L, Find which class is most populous in that window. 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image2.png)

![Nearest Neighbor Classifiers • Basic idea: If it walks like a duck, quacks like a duck, then it's probably a duck Training Records 11T KHARAGPUR Compute Test Record Distance oose k of the "nearest" records NPYCL ONL'NE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image3.png)



**Basic Idea**
-   k-NN classification rule is to assign to a test sample the majority category label of its k nearest training samples
-   In practice, k is usually chosen to be odd, so as to avoid ties
-   The k = 1 rule is generally called the nearest-neighbor classification rule



![Definition of Nearest Neighbor (a) I-nearest neighbor (b) 2-nearest neighbor (c) 3-nearest neighbor K-nearest neighbors of a record x - data points that have the k smallest distance to x 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image4.png)

![Nearest Neighbor: Voronoi Diagram Properties: 0 _3 11T KHARAGPUR 1) 2) All possible points within a sample's Voronoi cell are the nearest neighboring points for that sample For any sample, the nearest sample is determined by the closest Voronoi cell edge NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image5.png)

![Distance-weighted k-NN Replace i (q) arg max y (v, f (Xi)) by: veV i k 1 f (q) arg max l, 02 General Kernel functions like Parzen Windows may be considered Instead of inverse distance. 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image6.png)

![Predicting Continuous Values Replace k j (q) = arg max Wiö )) Note: unweighted corresponds to Wi=l for all i E Wif(xD k 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image7.png)



**Nearest-Neighbor classifiers: Issues**
-   The value of k, the number of nearest neighbors to retrieve
-   Choice of distance metric to compute distance between records
-   Computational complexity
    -   Size of training set
    -   Dimension of data



![Value of K • Choosing the value of k: --- If k is too small, sensitive to noise points --- If k is too large, neighborhood may include points from other classes Rule of thumb: K = sqrt(N) N: number of training points 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image8.png)

![Distance Metrics mx.y)- - Camberra: Q is a definite m x m weight ¯ _ ¯ size, V is mtri_x of A AJ is of attrmte in tminång Wt yi is mage attrmte i cæ•ing in training is of all attritmte i training sizex of all in r. sign(Xi --- --- yj) 11T KHARAGPUR Figure Equations Of selected distance functions. (x and y are vectors Of m attribute values). NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image9.png)



**Distance Measure: Scale Effects**
-   Different features may have different measurement scales
    -   E.g., patient weight in kg (range [50,200]) vs blood protein values in ng/dL (range[-3,3])
-   Consequences
    -   Patient weight will have a much greater influence on the distance between samples
    -   May bias the performance of the classifier



![Standardization • Transform raw feature values into z-scores z X(jis the value for the ith sample and fh feature is the average of allXüfor feature j is the standard deviation of alLxo over all input samples • Range and scale of z-scores should be similar (providing distributions of raw feature values are alike) 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image10.png)

![• Nearest Neighbor : Dimensionality Problem with Euclidean measure: High dimensional data curse of dimensionality Can produce counter-intuitive results --- Shrinking density--- sparsification effect d = 1.4142 11T KHARAGPUR 100000000000 vs 000000000001 d = 1.4142 NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image11.png)

![Distance for Nominal Attributes Value Difference Metric ( V DWI) [Stanfill & Waltz, 1986] Providing appropriate distance measurements 11T KHARAGPUR for nominal attributes. = # times attribute a had value x Na.x.c = # times attribute a had value x and class was c C = # output classes Two values are considered closer if they have more sinmilar classifications, i.e., if they have rnore sirnilar correlations with the output classes. NPTEL ONLINE CERTIFICATION COURSES 2 ](media/K-Nearest-Neighbor-(KNN)-image12.png)

![Distance for Heterogeneous Data In this section, we define a heterogeneous distance function HVDM that returns the distance between two input vectors x and y. It is defined as follows: (11) where m is the number of attributes. The function da(xö') returns a distance between the two values x and y for attribute a and is defined as: (12) 11T KHARAGPUR if x or y is unknown; Otherwise... da (x , y) normalized _ , y), if a is norninal normalized _ diff a (x , y), if a is linear NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image13.png)



**Nearest Neighbour: Computational Complexity**
-   Expensive
    -   To determine the nearest neighbour of a query point q, must compute the distance to all N training examples
        -   Pre-sort training examples into fast data structures (kd-trees)
        -   Compute only an approximate distance (LSH - Locality Sensitive Hashing)
        -   Remove redundant data (condensing)
-   Storage requirements
    -   Must store all training data P
        -   Remove redundant data (condensing)
        -   Pre-sorting often increases the storage requirements
-   High dimensional data
    -   Curse of Dimensionality
        -   Required amount of training data increases exponentially with dimension
        -   Computational cost also increases dramatically
        -   Partitioning techniques degrade to linear search in high dimension



**Reduction in Computational Complexity**
-   Reduce size of training set
    -   Condensation, editing
-   Use geometric data structure for high dimensional search



**Condensation: Decision Regions**
-   Each cell contains one sample, and every location within the cell is closer to that sample than to any other sample
-   A Voronoi diagram divides the space into such cells
-   Every query point will be assigned the classification of the sample within that cell. The *decision boundary* separates the class regions based on the 1-NN decision rule
-   Knowledge of this boundary is sufficient to classify new points
-   The boundary itself is rarely computed; many algorithms seek to retain only those points necessary to generate an identical boundary

![](media/K-Nearest-Neighbor-(KNN)-image14.jpg)



**Condensing**
-   Aim is to reduce the number of training samples
-   Retain only the samples that are needed to define the decision boundary
-   **Decision Boundary Consistent -** a subset whose nearest neighbour decision boundary is identical to the boundary of the entire training set
-   **Minimum Consistent Set -** the smallest subset of the training data that correctly classifies all of the original training data

![0 Original data Condensed data Minimum Consistent Set ](media/K-Nearest-Neighbor-(KNN)-image15.jpeg)



**Condensed Nearest Neighbor (CNN)**

1.  Initialize subset with a single (or K) training example

2.  Classify all remaining samples using the subset, and transfer any incorrectly classified samples to the subset

3.  Return to 2 until no transfers occurred or the subset is full


-   Incremental
-   Order dependent
-   Neither minimal nor decision boundary consistent
-   O(n^3) for brute-force method



**High dimensional search**
-   Given a point set and a nearest neighbor query point
-   Find the points enclosed in a rectangle (range) around the query
-   Perform linear search for nearest neighbor only in the rectangle

![ue ](media/K-Nearest-Neighbor-(KNN)-image16.jpg)



**kd-tree: data structure for range search**
-   Index data into a tree
-   Search on the tree
-   Tree construction: At each level we use a different dimension to split

![](media/K-Nearest-Neighbor-(KNN)-image17.jpeg)



**KNN: Alternate Terminologies**
-   Instance based learning
-   Lazy learning
-   Case based reasoning
-   Exemplar based learning



**Text search: Documents as vectors**
-   We have a |V| - dimensional vector space
-   Terms are axes of the space
-   Documents are points or vectors in this space
-   Very high-dimensional: tens of millions of dimensions when you apply this to a web search engine
-   These are very sparse vectors - most entries are zero



**Queries as vectors**
-   Key idea 1: Do the same for queries: represent them as vectors in the space
-   Key idea 2: Rank documents according to their proximity to the query in this space
-   proximity = similarity of vectors
-   proximity ~= inverse of distance
-   Recall: we do this because we want to get away from the you're-either-in-or-out Boolean model
-   Instead: rank more relevant documents higher than less relevant documents



**Formalizing vector space proximity**
-   First cut: distance between two points
    -   ( = distance between the end points of the two vectors)
-   Euclidean distance?
-   Euclidean distance is a bad idea...
-   ... because Euclidean distance is large for vectors of different lenghts



**Use angle instead of distance**
-   Thought experiment: take a document d and append it to itself. Call this document d'
-   Sematically d and d' have the same content
-   The Euclidena distance between the two documents can be quite large
-   The angle between the two documents is 0, corresponding to maximal similarity
-   Key idea: Rank documents according to angle with query



**From angles to cosines**
-   The following two notions are equivalent
    -   Rank documents in decreasing order of the angle between query and document
    -   Rank documents in increasing order of cosine (query, document)
-   Cosine is a monotonically decreasing function for the interval [0, 180]



![Cosine similarity illustrated POOR o o V(d2 V(d3) RICH 1 ](media/K-Nearest-Neighbor-(KNN)-image18.png)



**End of K-Nearest Neighbor**

**Classifier Evaluation**
-   Metrics for Performance Evaluation
    -   How to evaluate the performance of a model
-   Methods for Performance Evaluation
    -   How to obtain reliable estimates?
-   Methods for Model Comparision
    -   How to compare the relative performance among competing models?



**Limitation of Accuracy**
-   Consider a 2-class problem
    -   Number of class 0 examples = 9990
    -   Number of class 1 examples = 10
-   If model predicts everything to be class 0, accuracy is 9990/10000 = 99.9%
    -   Accuracy is misleading because model does not detect any class 1 example



![Cost Matrix PREDICTED CLASS C(ilj) Class---Yes ACTUAL CLASS Class=No Class---Yes C(YesIYes) C(YeslNo) Class---No C(NolYes) C(NolNo) C(i Ij): Cost of misclassifying class j example as class i 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image19.png)

![Cost-Sensitive Measures Precision (p) Recall (r) 2 rp F - measure (F) Precision is biased towards C(Yes I Yes) & C(Yesl No) Recall is biased towards C(Yesl Yes) & C(No I Yes) F-measure is biased towards all except C(NO I No) WI a + W4d Weighted Accuracy 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image20.png)



**Model Evaluation**
-   Metrics for Performance Evaluation
    -   How to evaluate the performance of a model
-   Methods for Performance Evaluation
    -   How to obtain reliable estimates of performance?
    -   Performance of a model may depend on other factors besides the learning algorithm:
        -   Class distribution
        -   Cost of misclassification
        -   Size of training and test sets
-   Methods for Model Comparision
    -   How to compare the relative performance among competing models?



![Learning Curve 70 100 101 11T KHARAGPUR 102 Sample Size _ NPTEL ONLINE 103 Learning curve shows how accuracy changes with varying sample size Effect of small sample size: Bias in the estimate Variance of estimate 104 CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image21.png)



**Methods of Estimation**
-   Holdout
    -   Reserve 2/3 for training and 1/3 for testing
-   Random subsampling
    -   Repeated holdout
-   Cross validation
    -   Partition data into k disjoint subsets
    -   k-fold: train on k-1 partitions, test on the remaining one
    -   Leave-one-out: k=n
-   Stratified sampling
    -   Oversampling vs undersampling
-   Bootstrap
    -   Sampling with replacement



**ROC (Receiver Operating Characteristic)**
-   Developed in 1950s for signal detection theory to analyze noisy signals
    -   Characterize the trade-off between positive hits and false alarms
-   ROC Curve plots TP (on the y-axis) against FP (on the x-axis)
-   Performance of each classifier represented as a point on the ROC curve
    -   changing the threshold of algorithm, sample distribution or cost matrix changes the location of the point



![ROC Curve - I-dimensional data set containing 2 classes (positive and negative) - any points located at x > t is classified as positive 0.016 0.012 Class At threshold t: Class 0.3 06 positive 07 TP=O.5, FN=O.5, FP=O.12, FN=O.88 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image22.png)

![ROC Curve (T p,Fp): • (0,0): declare everything to be negative class • (1,1): declare everything to be positive class • (1,0): ideal • Diagonal line: --- Random guessing --- Below diagonal line: • prediction is opposite of the & 0.6 ova False Positive 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image23.png)

![Using ROC for Model Comparison 0.4 0.3 02 0.1 0 o 0.1 0.2 0.3 2 04 0.5 0.6 False Positive Rate NPTEL ONLINE 0.7 0.8 0.9 No model consistently outperform the other Ml is better for small FPR M2 is better for large FPR Area Under the ROC curve Ideal: • Area = 1 Random guess: • Area = 0.5 11T KHARAGPUR CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image24.png)



**Test of Significance**
-   Given two models:
    -   Model M1: accuracy = 85%, tested on 30 instances
    -   Model M2: accuracy = 75%, tested on 5000 instances
-   Can we say M1 is better than M2?
    -   How much confidence can we place on accuracy of M1 and M2?
    -   Can the difference in performance measure be explained as a result of random fluctuations in the test set?



![Comparing Performance of 2 Models • Given two models, say Ml and M2, which is better? Ml is tested on DI (size=nl), found error rate = e 1 M2 is tested on D2 (size=n2), found error rate = e 2 --- Assume DI and D2 are independent --- If nl and n2 are sufficiently large, then e2 N ( V2,02) Approximate: 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image25.png)

![Comparing Performance of 2 Models • To test if performance difference is statistically significant: d = el ---e2 --- d N(deot) where dt is the true difference --- Since DI and D2 are independent, their variance adds up: -4-022 = ö12+ö el(l ---el) e2(1 ---e2) --- At (I-a) confidence level, d == Z 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/K-Nearest-Neighbor-(KNN)-image26.png)


























