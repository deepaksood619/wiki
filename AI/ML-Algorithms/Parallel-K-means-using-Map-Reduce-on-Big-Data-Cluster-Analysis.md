# Parallel K-means using Map Reduce on Big Data Cluster Analysis

Created: 2019-04-01 20:38:29 +0500

Modified: 2021-06-30 11:28:00 +0500

---

![MapReducing 1 iteration of k-means CINYid S CM Classify: Assign observations cl est cluster center 2 arg min --- Map: For each data poin given emit(zi,xi) Recenter: Revise cluster centers as mean of assigned observations i:zi Reduce: Average over all points in cluster j (Zi=k) Big Data Computing Machine Learning Classification Algorithm ](media/Parallel-K-means-using-Map-Reduce-on-Big-Data-Cluster-Analysis-image1.png)

![Classification step as Map er center • Clas ify: Assign servations to clo arg min Zi 4--- arg min Il/lj --- Big Data Computing Machine Learning Classification Algorithm ](media/Parallel-K-means-using-Map-Reduce-on-Big-Data-Cluster-Analysis-image2.png)

![Recenter step as Reduce • Recenter: Revise cluster centers as mean of assiqned observations reduce(j, x_in_clust r • : [xl, x3,..., ] sum = O count = O for x in x in cluster sum coun 1 emit(j, sum/count) Big Data Computing Machine Learning Classification Algorithm ](media/Parallel-K-means-using-Map-Reduce-on-Big-Data-Cluster-Analysis-image3.png)

![Distributed KMeans Iterative Clustering iVic.p map(lp:, pa, x,) 4---- arg min --- x, emit(J. "j) Big Data Computing centroids datal data2 data3 data4 HDFS Machine Learning Classification Algorithm ](media/Parallel-K-means-using-Map-Reduce-on-Big-Data-Cluster-Analysis-image4.png)

![Distributed KMeans Iterative Clustering Centers Version i Points Mapper Reducer Points Mapper Reducer Centers Version i + I Big Data Computing Find Nearest Center Key is Center, Value is Movie Average Ratings Machine Learning Classification Algorithm ](media/Parallel-K-means-using-Map-Reduce-on-Big-Data-Cluster-Analysis-image5.png)



**Summary of Parallel k-means using MapReduce**
-   Map: classification step
    -   data parallel over data points
-   Recuce: recompute means
    -   data parallel over centers



**Some practical considerations**
-   k-means needs an iterative version of MapReduce
    -   Not standard formulation
-   Mapper needs to get data point and all centers
    -   A lot of data
    -   Better implmentation
        -   mapper gets many data points





