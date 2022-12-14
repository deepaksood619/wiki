# Apache Hadoop

Created: 2018-09-08 18:58:23 +0500

Modified: 2020-08-01 14:38:28 +0500

---

- MapReduce API (Processing large parallel data)
- MapReduce job management
- Distributed Filesystem (HDFS)

Java based file system which is distributed and fault-tolerant and hadoop relies on HDFS for doing all its processing

- Enormous ecosystem

## Key points

- Open source framework
- Stores data in a distributed manner
- Process data in parallel

## Layers

- HDFS, reliable storage layer
- MapReduce, batch processing engine
- YARN, resouce management layer

## Hadoop

- It has two basic parts
  - Hadoop Distributed File System (HDFS) is the storage system of Hadoop which splits big data and distribute across many nodes in a cluster
    - Scaling out of H/W resources
    - Fault Tolerant
  - MapReduce: Programming model that simplifies parallel programming
    - Map -> apply()
    - Reduce -> summarize()

Google uses MapReduce for indexing websites

Hadoop is an open-source framework to store and process Big Data in a distributed environment. It contains two modules, one is MapReduce and another is Hadoop Distributed File System (HDFS).

- MapReduce:It is a parallel programming model for processing large amounts of structured, semi-structured, and unstructured data on large clusters of commodity hardware.
- HDFS:Hadoop Distributed File System is a part of Hadoop framework, used to store and process the datasets. It provides a fault-tolerant file system to run on commodity hardware.

The Hadoop ecosystem contains different sub-projects (tools) such as Sqoop, Pig, and Hive that are used to help Hadoop modules.

- Sqoop:It is used to import and export data to and from between HDFS and RDBMS.
- Pig:It is a procedural language platform used to develop a script for MapReduce operations.
- Hive:It is a platform used to develop SQL type scripts to do MapReduce operations.

Note:There are various ways to execute MapReduce operations:

- The traditional approach using Java MapReduce program for structured, semi-structured, and unstructured data.
- The scripting approach for MapReduce to process structured and semi structured data using Pig.
- The Hive Query Language (HiveQL or HQL) for MapReduce to process structured data using Hive.

5 daemons run on Hadoop in these 3 layers. Daemons are the processes that run in the background. 5 daemons of Hadoop are as follows:

- **NameNode**

It works asMasterin Hadoop cluster. Namenode stores meta-data i.e. number of blocks, replicas and other details. Meta-data is present in memory in the master. NameNode also assigns tasks to the slave node. As it is the centerpiece of HDFS, so it should deploy on reliable hardware

- **DataNode**

It works asSlavein Hadoop cluster. In Hadoop HDFS, DataNode is responsible for storing actual data in HDFS. DataNode performs read and write operation as per request for the clients. DataNodes can also deploy on commodity hardware.

- **Secondary NameNode**

Its main function is to take checkpoints of the file system metadata present on namenode. It is not the backup namenode. It is a helper to the primary NameNode but it does not replace the primary namenode.

- **ResourceManager**

It is a cluster level component and runs on the Master machine. Hence it manages resources and schedule applications running on the top of YARN. It has two components: Scheduler & Application Manager.

- **NodeManager**

It is a node level component. NodeManager runs on each slave machine. It continuously communicate with Resource Manager to remain up-to-date

# Working

To process any data, the client first submits data and program. Hadoop store data usingHDFSand then process the data using MapReduce.

1. **Hadoop Data Storage**

Hadoop Distributed File System-- HDFS is the primary storage system of Hadoop. It stores very large files running on a cluster of commodity hardware. HDFS stores data reliably even in the case of machine failure. It also provides high throughput access to the application by accessing in parallel.

The data is broken into small chunks as blocks. Block is the smallest unit of data that the file system store. Hadoop application distributes data blocks across the multiple nodes. Then, each block is replicated as per the replication factor (by default 3). Once all the blocks of the data are stored on datanode, the user can process the data.

2. **Hadoop Data Processing**

Hadoop MapReduceis the data processing layer. It is the framework for writing applications that process the vast amount of data stored in the HDFS. MapReduce processes a huge amount of data in parallel by dividing the job into a set of independent tasks (sub-job). In Hadoop, MapReduce works by breaking the processing into phases: Map and Reduce.

- Map --It is the first phase of processing. In which we specify all the complex logic/business rules/costly code. The map takes a set of data and converts it into another set of data. It also breaks individual elements into tuples (key-value pairs).
- Reduce --It is the second phase of processing. In which we specify light-weight processing like aggregation/summation. The output from the map is the input to Reducer. Then, reducer combines tuples (key-value) based on the key. And then, modifies the value of the key accordingly.

![HIVE PIG M a p Reduce YARN _ Higher Levels: Interactivity Lower Levels: Stor ge & Scheduling One Possible layer grarn for Hadoop Systern 50 l.Had op Distributed File System: HI)FS 3.MapReduce: ogramming model that simplifies parallel programming a.Scaling out of H/W resources b.fiIfTöFrant 2.YARN: Flexible scheduling & Resource management-Q.ye.LHDFS a.Yahoo uses YARN to schedule jobs over 40,000 servers Big Data Computing V Map-> apply() .Reduce-> summarize() / c.Google used MR for Indexing websites V4.P)g & Hive: Augment MapReduceV U a Pig: DataflQ.L based script programming SQL-like-gug:jes (Greated at Facebook) Big Data Enabling Technologies ](../../media/Technologies-Apache-Apache-Hadoop-image1.png)

![HIVE M a p Reduce YARN HDFS Higher Levels: Interactivity Lower Levels: Storage & Scheduling One Possible layer diagrarn for Hadoop Systern 5.Giraph: Specialized models for graph 5.Cassandra/MongoDB/HBase: NO QL database processing a.HBase is used for Fa book's Messaging a. Used by Facebook to analyze social grgphs Platform 6.Storm/Spark/Flink: Real time, in- v' memory processing of data on top of YARN/HDFS, IOO times faster than regular processing Big Data Computing b.Sparse table 6.Zookeeper: reated by YAHOO to perform the duties of centralized management system for synchronization, configuration and to ensure high availability Big Data Enabling Technologies ](../../media/Technologies-Apache-Apache-Hadoop-image2.png)

Map Reduce

- MapReduce is a programming model and an associated implmentation for processing and generating large data sets
- Users specify a map function that processs a key/value pair to generate a set of intermediate key/value pairs, and a reduce function that merges all intermediate values associated with the same intermediate key

![Map Reduce HDFSSplit Input value) pairs Map (Keyl. valuel) (Keyk, valuek) (Keyl , internediate values) (Final Keyl. value) Big Data Computing HOES Split Input (key, value) pairs Map (Keyl, valuel) (Keyk, valuek) Shuffle & Sort: Aggregate values by key HDFSWit Input (key, value) pairs Map (Keyl. vallÆ1) (Keyk, valA) (Keyk, intermediate values) (Final final value) Big Data Enabling Technologies ](../../media/Technologies-Apache-Apache-Hadoop-image3.png)

![Hadoop Ecosystem Big Data Computing PIG H Ive Query HCatalog etadataSemces MapReduce Distributed Processi YARN v/ Resource Scheduling and NegcRjation HDFS U Distributed Storage Big Data Enabling Technologies ](../../media/Technologies-Apache-Apache-Hadoop-image4.png)

![Hadoop Ecosystem MAPREDUCE (Processing using different languages) SPARK (In-Memory. Data Flow Engine) Södr Resource Management Storage HIVE & DRILL (Ana Iytical SQL-on-Hadoop) DRILL KAFKA & STORM (Streaming) STORM Flume n s tructured/ MAHOUT & SPARK ML1ib (Machine learning) MLlib PIG (Scripting) SOLR & LUCENE (Sea r chi & Indexing) Solr YARN J (NoSQL Database) OOZIE (Sched u ling) Sqoop Structured Data ZOOKEEPER & AMBARI (Management & Coordination) Apache Ambari Semi-structured Data Big Data Computing Big Data Enabling Technologies ](../../media/Technologies-Apache-Apache-Hadoop-image5.png)

![home/foo/data, 3, Bloc ops Datanodes Replication VYite ien Rack 2 Basic architecture of Hadoop distributed file system (HDFS) Big Data Computing Big Data Enabling Technologies](../../media/Technologies-Apache-Apache-Hadoop-image6.png)

## YARN - Yet Another Resource Manager

- Apache Hadoop YARN is the resource management and job scheduling technology in the open source Hadoop distributed processing framework
- YARN is responsible for allocating system resources to the various applications running in a Hadoop cluster and scheduling tasks to be executed on different cluster nodes

![seßopuqoel 1qeu3!Su elea g!8 *f (a.u!eiuo Sunndwoo elea 8!8 .Vtjau'muo euإلادرأ lV.'"!3.1111031 ÅNUV ](../../media/Technologies-Apache-Apache-Hadoop-image7.png)

## References

<https://techvidvan.com/tutorials/how-hadoop-works-internally>

<https://www.toptal.com/hadoop/interview-questions>
