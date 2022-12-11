# Storage

Created: 2020-02-25 17:47:33 +0500

Modified: 2022-11-18 16:12:39 +0500

---

[AWS re:Invent 2019: [REPEAT 1] Amazon Aurora storage demystified: How it all works (DAT309-R1)](https://www.youtube.com/watch?v=DrtwAOND1Pc)



**Cost**

| Storage Rate | $0.11per GB-month           |
|--------------|-------------------------------|
| I/O Rate     | $0.22per 1 million requests |



S3 - $0.025per GB



**Storage**

The minimumstorageis 10GB. Based on yourdatabaseusage, your AmazonAurora storagewill automatically grow, up to 64 TB, in 10GB increments with no impact todatabaseperformance. There is no need to provisionstoragein advance



![Quick recap: Database B+ Tree Root Interme diate Leaf 1 Data is organized in emory as fixed sized "pages", e.g. 16KB (aka "buffer-pool") Leaf 2 Interme diate Leaf 3 Leaf 4 Pages are serialized into durable storage (aka "checkpoint") periodically Root Interme diate Interme Leaf 1 Leaf 2 Leaf 3 Leaf 4 diate ](media/AWS-Aurora_Storage-image1.png){width="5.0in" height="2.75in"}



![Quick recap: DO-REDO-UNDO protocol Data is modified "in-place" in the buffer-pool using a DO/REDO/UNDO operation Log records with before and after images are stored in a write-ahead log (WAL) New state Old state DO Log record New state Log record Old state Log record Old state UNDO New state REDO ](media/AWS-Aurora_Storage-image2.png){width="5.0in" height="2.9166666666666665in"}



![Quick recap: Crash Recovery Pages on durable storage TXI Log records on durable storage Checkpoint TX2 System failure System recovery TX2 and TX3 are redone by using the REDO procedure is undone by using the REDO/UNDO procedure 4 4 ](media/AWS-Aurora_Storage-image3.png){width="5.0in" height="2.7395833333333335in"}



![Quick recap: I/Os required for persistence Pages on durable storage Log record write: typically few bytes Torn page protection write: page sized, e.g. 16KB Checkpoint write: page sized, e.g. 16KB User data change size << I/O size (32KB+) Databases are all about I/O Log records on durable storage ](media/AWS-Aurora_Storage-image4.png){width="5.0in" height="2.7708333333333335in"}



**Cloud native database architecture**

**Traditional database architecture**
-   Databases are all about I/O
-   Design principles for > 40 years
    -   Increase I/O bandwidth
    -   Decrease number of I/Os



**Aurora approach: Log is the database**

![Log stream from beginning of the database to ti t2 t3 t4 G Any version of a database page can be constructed using the log stream Blue-page at t5 can be created using log records from ti and t5 ](media/AWS-Aurora_Storage-image5.jpg){width="5.0in" height="2.1666666666666665in"}



**Aurora approach: Offload checkpointing to the storage fleet**





![Aurora approach: Offload checkpointing to the storage fleet Relying only on log stream for page reads is not practical (too slow) Solution: Use periodic checkpoints Database instance is burdened with checkpointing task Solution: Use a distributed storage fleet for continuous checkpointing ](media/AWS-Aurora_Storage-image6.png){width="5.0in" height="2.5416666666666665in"}



![Aurora approach: compute & storage separation Compute & storage have different lifetimes Compute instances • fail and are replaced • are shut down to save cost • are scaled up/down/out on the basis of load needs Storaqe, on the other hand, has to be long-lived Decouple compute and storage for scalability, availability, durability Compute SQL Transactions Caching Logging Network storage ](media/AWS-Aurora_Storage-image7.png){width="5.0in" height="2.71875in"}



![Aurora uses service-oriented architecture We built a log-structured distributed storage system that is multi-tenant, multi-attach, and purpose-built for databases SQL Transactions Caching I. Logging + storage Annazon DynamoD8 53 Amazon Route 53 Amazon EC2 Amazon SS ](media/AWS-Aurora_Storage-image8.png){width="5.0in" height="2.8333333333333335in"}



![I/O flow in Amazon Aurora storage node Storage node Incoming queue Database instance Peer storage nodes Log records ACK Update Queue Group GC Data Pages Coa lesce Continuous backup S3 backup Scrub Peer-to-peer gossip H ot log (j) Receive log records and add to in-memory queue and durably persist log records @ ACK to the database @ Organize records and identify gaps in log @ Gossip with peers to fill in holes @ Coalesce log records into new page versions @ Periodically stage log and new page versions to S3 @ Periodically garbage collect old versions @ Periodically validate CRC codes on blocks Note: • All steps are asynchronous • Only steps 1 and 2 are in the foreground latency path ](media/AWS-Aurora_Storage-image9.png){width="5.0in" height="2.4479166666666665in"}



**Durability at scale**

![Uncorrelated and independent failures At scale there are continuous independent failures due to failing nodes, disks, and switches. The solution is replication One common straw man: Replicate 3-ways with 1 copy per AZ Use write and read quorums of 2/3 Availability Zone 1 Availability Zone 2 Availability Zone 3 Shared storage volume x Storage nodes with SSDs ](media/AWS-Aurora_Storage-image10.png){width="5.0in" height="2.0833333333333335in"}



![What about AZ failure? Still have 2/3 copies Can establish quorum No data loss Availability Zone 1 Availability Zone 2 Availability Zone 3 Shared storage volume 11 • • • Storage nodes with SSDs ](media/AWS-Aurora_Storage-image11.png){width="5.0in" height="1.8645833333333333in"}



![What about AZ + 1 failures? Losing 1 node in an AZ while another AZ is down Lose 2/3 copies Lose quorum Lose data Availability Zone 1 Availability Zone 2 Availability Zone 3 Shared storage volume Storage nodes with SSDs ](media/AWS-Aurora_Storage-image12.png){width="5.0in" height="2.0833333333333335in"}



![Aurora tolerates AZ + 1 failures Replicate 6-ways with 2 copies per AZ Write quorum of 4/6 What if an AZ fails? Still have 4/6 copies Maintain write availability What if there is an AZ + 1 failure ? Still have 3 copies No data loss Rebuild failed copy by copying from 3 copies Recover write availability Availability Zone 1 Availability Zone 2 Availability Zone 3 Shared storage volume Storage nodes with SSDs ](media/AWS-Aurora_Storage-image13.png){width="5.0in" height="2.1770833333333335in"}



**Aurora uses segmented storage**
-   Partition volume into n fixed-size segments
    -   Replicate each segment 6 ways into a protection group (PG)
-   Trade-off between likelihood of faults and time to repair
    -   If segments are too small, failures are more likely
    -   If segments are too big, repairs take too long
-   Choose the biggest size that lets us repair "fast enough"
    -   We currently picked a segment size of 10 GB, as we repair a 10-GB segment in less than a minute



![Fast and reversible membership changes Use quorum sets, and epochs to • Enable quicker transitions with epoch advances • Create richer temporary quorums during changes • Reverse changes by more quorum transitions Epoch 1: All nodes are healthy Epoch 2: Node F is in a suspect state; second quorum group is formed with node G; both quorums are active Epoch 3: Node F is confirmed unhealthy; new quorum group with node G is active ](media/AWS-Aurora_Storage-image14.png){width="5.0in" height="2.25in"}



**Performance results**

![Aurora I/O profile MySQL with replica 3 Replica Primary instance instance 4 Amazon EBS Amazon EBS 2 5 Amazon EBS Amazon EBS mirror Amuon MySQL I/O profile for 30-min Sysbench run 780K transactions • Average 7.4 1/Os per transaction Log Aurora Primary instance ASYNC 4/6 QUORUM AZ 2 Replica instance Replica instance 11 Continuous backup Aurora 10 profile for 30-min Sysbench run 27M transactions: 35x more 0.95 1/Os per transaction amplification): 7.7* less Bi nlog Data Double-write Frm files ](media/AWS-Aurora_Storage-image15.png){width="5.0in" height="2.3958333333333335in"}



![Write and read throughput Aurora MySQL is 5x faster than MySQL 250,000 200,000 200,000 170,000 150,000 100,000 5Q000 9,536 Write 800,000 705,000 705,000 5.592 •Aurora 5.7 •Aurora 56 'My-SQL 5.7 •MySQL 56 700,000 600,000 500,000 400,000 300,000 200,000 100,000 Aurora 5.7 • Aurora 5.6 290,787 . MySQL 5.7 .MySQL 56 Using Sysbench with 250 tables and 200,000 rows per table on R4.16XL ](media/AWS-Aurora_Storage-image16.png){width="5.0in" height="2.6770833333333335in"}



**Global databases**

![Global physical replication Primary region AZ 3 Replica instance backup Amazon AZ 2 Replica instance AZ 1 O Primary instance o O Replication Replication Fleet Secondary region Replica instance Replication agent Replication Fleet AZ 2 Replica instance ASYNC 4/6 quorum Replica instance ASYNC 4/6 quorum 0 backup @ Primary instance sends log records in parallel to storage nodes, replica instances, and replication server @ Replication server streams log records to replication agent in secondary region @ Replication agent sends log records in parallel to storage nodes and replica instances @ Replication server pulls log records from storage nodes to catch up after outages Up to 150K writes/second; negligible performance impact <1 second cross-region replica lag under heavy load <1 minute to accept full read-write workloads after region failure ](media/AWS-Aurora_Storage-image17.png){width="5.0in" height="2.5208333333333335in"}



![Global replication performance Logical vs. physical replication 250,000 200,000 150,000 100,000 50,000 ---QPS ---Lag Logical replication 600 500 400 200 100 250,000 200,000 150,000 100,000 50,000 ---QPS ---Lag Physical replication 5.00 4.50 4.00 3.50 3.00 2.50 0 2.00 1.50 1.00 0.50 0.00 ](media/AWS-Aurora_Storage-image18.png){width="5.0in" height="2.3541666666666665in"}



![Global databases Primary region (US West) Primary instance o ASYNC 4/6 quorum o Continuous backup Continuous Inserts O Repl ication 0 Secondary region (US East) Replica instance ASYNC 4/6 quorum Replication agent Continuous Reads backup ](media/AWS-Aurora_Storage-image19.png){width="5.0in" height="2.1354166666666665in"}



**Fast database cloning**

![Fast database cloning Create a copy of a database without duplicate storage costs Creation of a clone is instantaneous because it doesn't require deep copy Data copy happens only on write, when original and cloned volume data differ Typical use cases Clone a production database to run tests Reorganize a database • Save a point-in-time snapshot for analysis without impacting production system Dev/test applications Production applications oo Benchmarks Production applications oo Production database ](media/AWS-Aurora_Storage-image20.png){width="5.0in" height="2.75in"}



![Database cloning: How does it work? Source database Cloned database Page Page 2 Page 3 Page 4 Page 5 As databases diverge, new pages are added appropriately to each database while still referencing pages common to both databases Shared distributed storage system Protection group 1 Page Page Page 1 3 5 Protection qroup 2 ](media/AWS-Aurora_Storage-image21.png){width="5.0in" height="3.0729166666666665in"}



**Database backtrack**

![Database backtrack t to Invisible Invisible Rewind to t3 Rewind to ti Backtrack is a quick way to bring the database to a particular point in time without having to restore from backups Rewinding the database to quickly recover from unintentional DML/DDL operations Rewind multiple times to determine the desired point in time in the database state; for example, quickly iterate over schema changes without having to restore multiple times ](media/AWS-Aurora_Storage-image22.png){width="5.0in" height="2.8645833333333335in"}
























