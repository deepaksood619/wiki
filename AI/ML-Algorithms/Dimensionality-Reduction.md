# Dimensionality Reduction

Created: 2021-06-19 15:19:58 +0500

Modified: 2021-09-28 22:23:17 +0500

---

**Dimensionality Reduction**
-   Purpose
    -   Avoid curse of dimensionality
    -   Reduce amount of time and memory required by data mining algorithms
    -   Allow data to be more easily visualized
    -   May help to eliminate irrelevant features or reduce noise
-   Techniques
    -   Principle Component Analysis
    -   Singular Value Decomposition
    -   Others: supervised and non-linear techniques



**Data Dimensionaity**
-   From a theoretical point of view, increasing the number of features should lead to better performance
-   In practice, the inclusion of more features leads to worse performance (i.e., curse of dimensionality)
-   The number of training examples required increases exponentially with dimensionality



**Curse of Dimensionality**
-   When dimensionality increases, data becomes increasingly sparse in the space that it occupies
-   Definitions of density and distance between points, which is critical for clustering and outlier detection, become less meaningful



**Dimensionality Reduction**
-   Purpose
    -   Avoid curse of dimensionality
    -   Reduce amount of time and memory required by data mining algorithms
    -   Allow data to be more easily visualized
    -   May help to eliminate irrelevant features or reduce noise
-   Techniques
    -   Principle Component Analysis
    -   Single Value Decomposition
    -   Others: Supervised and non-linear techniques



![Dimensionality Reduction: PCA • Goal is to find a projection that captures the largest amount of variation in data ](media/Dimensionality-Reduction-image1.png)



![• Find the eigenvectors of the covariance matrix • The eigenvectors define the new space ](media/Dimensionality-Reduction-image2.png)



![Feature Subset Selection Another way to reduce dimensionality of data Redundant features --- duplicate much or all of the information contained in one or more other attributes --- Example: purchase price of a product and the amount of sales tax paid • Irrelevant features --- contain no information that is useful for the data mining task at hand --- Example: students' ID is often irrelevant to the task of predicting students' GPA ](media/Dimensionality-Reduction-image3.png)



![Techniques: --- Brute-force approch: • Try all possible feature subsets as input to data mining algorithm --- Embedded approaches: • Feature selection occurs naturally as part of the data mining algorithm --- Filter approaches: • Features are selected before data mining algorithm is run --- Wrapper approaches: Use the data mining algorithm as a black box to find best subset of attributes ](media/Dimensionality-Reduction-image4.png)



![Feature Creation Create new attributes that can capture the important information in a data set much more efficiently than the original attributes Three general methodologies: --- Feature Extraction • domain-specific --- Mapping Data to New Space --- Feature Construction • combining features ](media/Dimensionality-Reduction-image5.png)



![Dimensionality Reducti • Significant improvements can be achieved by f the data into a lower-dimensional space. 02 b2 --- > reduce c/injensiona/ity --- --- > y • Dimensionality can be reduced by: ](media/Dimensionality-Reduction-image6.png)

![Dimensionality Reduction (a combinations are particularly attractive t • Linear are simple to compute and analytically tractable • Given x E RN, the goal is to find an N x K ma that: € RK where K<<N b2 ](media/Dimensionality-Reduction-image7.png)

![Dimensionality Reduction • Idea: represent data in terms of basis vectors in v N is a basis of the IV-dimensional space (2) Lower-dimensional sub-space representation: ](media/Dimensionality-Reduction-image8.png)

![Dimensionality Reduction • Classical approaches for finding an optimal I transformation: --- Principal Components Analysis (PCA): Seeks a p: preserves as much information in the data as po least-squares sense). ](media/Dimensionality-Reduction-image9.png)

![Principal Component Analysi± • Dimensionality reduction implies information loss; PCA much information as possible by minimizing the reconsti How should we determine the "best" lower dimensional space? The "best" low-dimensional space can be determined by the "best" eiger covariance matrix of the data (i.e., the eigenvectors corresponding to the eigenvalues --- also called "principal components"). ](media/Dimensionality-Reduction-image10.png)

![PCA - Steps --- Suppose x x x are N x 1 vectors Step l: S --- (i.e., center at zer Step 2: subtract the mean: Step 3: form the matrix cotnptlte: 1 (satnple covariance matrix, IV x IV, characte es the scatter Step 4: compute the eigenvalues of C: I > ](media/Dimensionality-Reduction-image11.png)

![PCA --- Steps (cont'd) - Since C is symmetric, u l, &t2, . , u N form (I.e., any v actually (x --- X), can be vwitten as a linear combination of the eigenve• + 621/2 + • • • Step_ 6: ( dimensionality reduction sier) keep ing to the K largest eigenvalues: where K - The representation ors --- S into the basis u I , only the term u K is thus ](media/Dimensionality-Reduction-image12.png)

![PCA - Linear Transforma (x --- x).uz --- (x --- x).uz (Eti .ui ) • The linear transformation RN RK that perforn dimensionality reduction is: u2 UT (x ](media/Dimensionality-Reduction-image13.png)

![Geometric interpretatio • PCA projects the data along the directions where the data vari • These directions are determined by the eigenvectors of the co corresponding to the largest eigenvalues. • The magnitude of the eigenvalues corresponds to the variance the eigenvector directions. u 2 x ](media/Dimensionality-Reduction-image14.png)

![Error due to dimensionality re The original vector x can be reconstructed us principal components: or X = • PCA minimizes the reconstruction error: • It can be shown that the reconstruction error IS ](media/Dimensionality-Reduction-image15.png)

<https://www.datacamp.com/community/tutorials/principal-component-analysis-in-python>



**Feature Subset Selection**
-   Another way to reduce dimensionality of data
-   Redundant features
    -   duplicate much or all of the information contained in one or more other attributes
    -   Example: purchase price of a product and the amount of sales tax paid
-   Irrelevant features
    -   contain no information that is useful for the data mining task at hand
    -   Examples: students' ID is often irrelevant to the task of predicting students' GPA


-   Evaluate a subset of feature
-   Search for the best subset


-   Techniques
    -   Brute-force approach
        -   Try all possible feature subsets as input to data mining algorithm
    -   Embedded approaches
        -   Feature selection occurs natually as part of the data mining algorithm
    -   Fiter approaches
        -   Features are selected before data mining algorithm is run
    -   Wrapper approaches
        -   Use the data mining algorithm as a black box to find best subset of attributes















