# Machine Learning Algorithm K-means using Map Reduce for Big Data Analytics

Created: 2019-04-01 20:38:21 +0500

Modified: 2021-06-13 20:20:17 +0500

---

## Preface

- In this lecture, we will discuss machine learning classification algorithm k-means using mapreduce for big data analytics

## Cluster Analysis (Clustering) Overview

- Goal: Organize similar items into groups
- In cluster analysis, the goal is to organize similar items in given dataset into groups or clusters. By segmenting given data into clusters, we can analyze each cluster more carefully

## Applications

- Segment customer base into groups
- Characterize different weather patterns for a region
- Group news articles into topics
- Discover crime hot spots

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image1.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image2.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image3.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image4.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image5.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image6.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image7.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image8.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image9.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image10.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image11.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image12.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image13.png)

## Cluster Analysis Summary

- Organize similar items into groups
- Analyzing clusters often leads to useful insights about data
- Clusters require analysis and interpretation

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image14.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image15.png)

## Chossing Initial Centroids

- Issue:

Final clusters are sensitive to initial centroids

- Solution:

Run k-means multiple times with different random intitial centroids, and choose best results

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image16.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image17.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image18.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image19.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image20.png)

![image](media/Machine-Learning-Algorithm-K-means-using-Map-Reduce-for-Big-Data-Analytics-image21.png)

## K-Means summary

- Classic algorithm for cluster analysis
- Simple to understand and implement and is efficient
- Value of k must be specified
- Final clusters are sensitive to initial centroids
