# Hadoop MapReduce 2.0

Created: 2019-03-08 22:18:27 +0500

Modified: 2020-08-15 23:39:23 +0500

---

## Introduction

- **MapReduce** is a programming model and an associated implementation for processing and generating large data sets
- Users specify a map function that processes a key/value pair to generate a set of intermediate key/value pairs, and a reduce function that merges all intermediate values associated with the same intermediate

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image1.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image2.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image3.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image4.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image5.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image6.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image7.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image8.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image9.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image10.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image11.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image12.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image13.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image14.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image15.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image16.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image17.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image18.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image19.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image20.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image21.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image22.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image23.png)

![image](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image24.png)

## Projection Pushdown

Projection pushdown minimizes data transfer betweenMapR Databaseand the Apache Spark engine by omitting unnecessary fields from table scans. It is especially beneficial when a table contains many columns.
