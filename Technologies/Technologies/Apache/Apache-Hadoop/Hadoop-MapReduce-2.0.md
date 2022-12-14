# Hadoop MapReduce 2.0

Created: 2019-03-08 22:18:27 +0500

Modified: 2020-08-15 23:39:23 +0500

---

## Introduction
-   **MapReduce** is a programming model and an associated implementation for processing and generating large data sets
-   Users specify a map function that processes a key/value pair to generate a set of intermediate key/value pairs, and a reduce function that merges all intermediate values associated with the same intermediate

![Introduction MapReduce is a programming model and implementation for pr s ing and generati sets. Users specify a map function that processe pair to generate a set of intermediate key/va a reduce function that merges all interm associated with the same intermediate key. ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image1.png)

![Contd... • Programs written in this functional style are parallelized and executed on a large cluster Q on'Lå machines. • The run-tire system takes care of the details of input data, scheduling the program's execution machines, handling machine failures, and mana il inter-machine communication. • This allows programmers without any experience v distributed systems to easily utilize the resour distributed system. • A typical MapReduce computation processes ma ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image2.png)

![Distributed File System Chunk Servers file is split into contiguous chunks .TypicaIly each chunk is 16-64M.B- Æach chunk replicated (usually 2x or 3x) .Try to keep replicas in different racks Master node Also known as Name Nodes in HDFS Stores metadata .Might be replicated ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image3.png)

![Motivation for Map Reduce Large-Scale Data Processing Want to use 1000s of CPUs • But don't want hassle of mana • g things MapReduce Architecture provides 'Automatic parallelization & distribyffon 'Fault tolerance ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image4.png)

![What is MapReduce? • Terms are borrowed from Functional Language (e.g., Li Sum of square • (map square '(13 3 4)) • Output: (119/1!) [prores e hr cord ntially and independer • (red%ce + '(1 49 16)) • (+ 16 (+ 9 (+ 4 1) ) ) • Output: 30 U [processes set of all records in batches] • Let's consider a sample application: Wordcount ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image5.png)

![Map • Process individual records to generate intermc key/value pairs. Welc me Everyone Input <filename, file text> Val} Welcome Everyone Hello Everyone ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image6.png)

![Map Parallelly Process individual records to gel intermediate key/value pairs. MAP TASK 1 Welco e ve one ve one 110 Everyone Hello Everyone ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image7.png)

![Map Parallelly a large number of indi Process records to generate intermediate key/vall Welcome 1 Are e same people we were th.rkngof You 1 Here 1 Input <filename, file text> ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image8.png)

![Reduce • Reduce processe n merges all intermediatc associated per key Gx-vwv Value Key Welcome veryone Hello Everyone 1 Everyone 1 Hello Welcome 1 ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image9.png)

![Reduce Each key assigned to one Reduce Parallelly Processes any merges all intermedi by partitioning keys Welcome Everyone Hello Everyone 1 1 REDUCE TASK 1 REDUCE TASK 2 Everyone Hello Welcome 2 1 ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image10.png)

![Programming Model 'The computation takes a set of input key/vall produces a set of output key/value pairs. 'The user of the MapReduce library ex computation as two functions: (i) The Map ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image11.png)

![(i) Map Abstraction 'Map, written by the user, takes an input pair a set of intermediate key/value pairs. 'The MapReduce library groups together all values associated with the same intermediatc passes them to the Reduce function. ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image12.png)

![(ii) Reduce Abstraction 'The Reduce function, also written by the use intermediate key 'l' and a set of values for that 'It merges together these values to form a pos CL'aÆ set of values. Typically just zero or one output va ue is Reduce invocation. The ari the user's reduce function via n iter tor. ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image13.png)

![Map-Reduce Functions for Wc map(key, value): // key: document name; value: text of document for each word w in value: emit(w, 1) reduce(key, values): // key: a vørd; values: an ite result = O or over counts ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image14.png)

![Map-Reduce Functions Input: a set of key/value pairs User supplies two functions• reduce(kl, list(vl)) -5 v2 (kl,vl) is an intermediate key/value pair Output is the set of (kl,v2) pairs ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image15.png)

![Applications Here are a few simple applications of interesting can be easily expressed as MapReduce computati [Distributed Grep: The map function emits a line supplied pattern. The reduce function is an identi• just copies the supplied intermediate data to the c Count of URL Access Frequency: The a cunc logs of web page requests and outputs I URL; function adds together all values for the same U (URL; total cou t) pair. e ReverseWeb-Link Graph: The map function ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image16.png)

![Contd... Term-Vector per Host: A term vector surr most important words that occur in a docun of documents as a list of (word; frequency) pæ The map function emits a (hostname; term for each input document (where the extracted from the URL of the document). The reduce function is passed all per-doc ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image17.png)

![Contd... Inverted Index: The map function parses eac and emits a sequence of (word; document I reduce function accepts all pairs for a giver the corresponding document IDs and em list(document ID)) pair. The set of all output simple inverted index. It is easy to at computation to keep track of word positions. Distributed Sort: The map functioozextracts each record, and emits a (key; record) pair ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image18.png)

![Applications of MapReduce (1) Distributed Grep: Input: large set of files Output: lines that match pattern Map --- Emits a line if it matches the sup pattern Reduce --- Copies the intermediate data ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image19.png)

![Applications of MapReduce (2) Reverse Web-Link Grap . Input: Web graph: tuples (a, b) where (page a page b) • Output: For each page, list of pages tha Map --- proce web log and for each ing ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image20.png)

![Applications of MapReduce (3) Count of URL access frequency. • Input: Log of accessed URLs, e.g., from pro Output: For each RL, % of total accesses f Map --- Process web log and outp ts <URL, Multiple Reducers - Emits <URL, URL_coun (So far, like Wordcount. But still need %) Chain another MapReduce job after above Map --- Processes <IJRL, URL count> and 01 (<URL, )> ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image21.png)

![Applications of MapReduce (4) Map task's output is sorted (e.g., quicksort) Reduce task's input is sorted (e.g., mergesor Sort Input: Series of (key, value) pairs Output: Sorted <value>s Map --- <key, value> <value, > (identit) Reducer --- <key, value> -Y (id Partitioning function --- partition keys acros: based on ranges (can't use hashing!) ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image22.png)

![The YARN Scheduler Used underneath Hadoop 2.x + • YARN = Yet Another Resource Negotiator • Treats each server as a collection of containers Container = fixed PU + fixed memory Has 3 main components Global Resource Manager (RM) V/ • Scheduling Per-server Node Manager (NM) • Daemon and server-specific functions ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image23.png)

![YARN. 1. Need container How a job gets a cont; Resource Manager Capacity Scheduler 3. Container on Node B Node Node Manager A 2. C ntai Node B ](../../../media/Technologies-Apache-Hadoop-MapReduce-2.0-image24.png)

## Projection Pushdown

Projection pushdown minimizes data transfer betweenMapR Databaseand the Apache Spark engine by omitting unnecessary fields from table scans. It is especially beneficial when a table contains many columns.












