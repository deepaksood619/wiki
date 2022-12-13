# Consistency

Created: 2019-04-21 13:17:45 +0500

Modified: 2019-12-30 16:06:43 +0500

---

**ANY**
-   any server (may not be replica)
-   Fastest: coordinator caches write and replies quickly to client

**ALL**
-   all replicas
-   Ensures strong consistency, but slowest

**ONE**
-   at least one replica
-   Faster than ALL, but cannot tolerate a failure

**QUORUM**
-   quorum across all replicas in all datacenters
-   Majority > 50%
-   Quorums faster than ALL, but still ensure strong consistency
-   Several key-value/NoSQL stores (e.g., Riak and Cassandra) use quorums

![Quorums in Detail • Several key-value/NoSQL stores (e.g., Riak and Cassandra) use quorums. Reads • Client specifies value of R (s N = total number of replicas of that key). R = read consistency lev Coordinator waits fo R replicas t respond before sending result to clien . • In background, coordinator checks for consistency of remaining (N-R replicas, and initiates read repair if needed. Big Data Computing Design of Key-Value Stores ](media/Cassandra_Consistency-image1.png)

![Quorums in Detail (Contd..) • Writes come in two flavors • Client specifies W N) W = write consistency level. Client writes new value to W replicas and returns. Two flavors: • Coordinator blocks until quorum is reached. • Asynchronous: Just write and return. Big Data Computing Design of Key-Value Stores ](media/Cassandra_Consistency-image2.png)

![Quorums in Detail (Contd.) • R = read replica count, W = write replica count • Two necessary conditions: 1. W+R>N 2. W>N/2 • Select values based on applicat•on • (W=l, R=l): very few writes and reads • (W=N, R=l): great for read-heavy workloads • (W=N/2+1, R=N/2+1): great for write-heavy workloads • (W=l, R=N): great for write-heavy workloads with mostly one client writing per key Big Data Computing Design of Key-Value Stores ](media/Cassandra_Consistency-image3.png)

![Cassandra Consistency Levels (Contd.) • Client is allowed to choose a consistency level for each operation (read/write) ANY: any server (may not be replica) • Fastest: coordinator may cache write and reply quickly to client ALL: all replicas • Slowest, but ensures strong consistency ONE: at least one replica • Faster than ALL, and ensures durability without failures QUORUM: quorum across all replicas in all datacenters (DCs) • Global consistency, but still fast • LOCAL QUORUM: quorum in coordinator's DC • Faster: only waits for quorum in first DC client contacts • EACH_QUORUM: quorum in every DC • Lets each DC do its own quorum: supports hierarchical replies Big Data Computing Design of Key-Value Stores ](media/Cassandra_Consistency-image4.png)

![Types of Consistency • Cassandra offers Eventual Consistency • Are there other types of weak consistency models? Big Data Computing Design of Key-Value Stores ](media/Cassandra_Consistency-image5.png)

