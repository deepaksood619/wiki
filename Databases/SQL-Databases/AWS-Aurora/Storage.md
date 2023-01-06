# Storage

---

[AWS re:Invent 2019: [REPEAT 1] Amazon Aurora storage demystified: How it all works (DAT309-R1)](https://www.youtube.com/watch?v=DrtwAOND1Pc)

## Cost

| Storage Rate | $0.11per GB-month           |
|--------------|-------------------------------|
| I/O Rate     | $0.22per 1 million requests |
S3 - $0.025per GB

## Storage

The minimumstorageis 10GB. Based on yourdatabaseusage, your AmazonAurora storagewill automatically grow, up to 64 TB, in 10GB increments with no impact todatabaseperformance. There is no need to provisionstoragein advance
![image](media/AWS-Aurora_Storage-image1.png)
![image](media/AWS-Aurora_Storage-image2.png)
![image](media/AWS-Aurora_Storage-image3.png)
![image](media/AWS-Aurora_Storage-image4.png)

## Cloud native database architecture

## Traditional database architecture

- Databases are all about I/O
- Design principles for > 40 years
  - Increase I/O bandwidth
  - Decrease number of I/Os

## Aurora approach: Log is the database

![image](media/AWS-Aurora_Storage-image5.jpg)

## Aurora approach: Offload checkpointing to the storage fleet![image](media/AWS-Aurora_Storage-image6.png)

![image](media/AWS-Aurora_Storage-image7.png)
![image](media/AWS-Aurora_Storage-image8.png)
![image](media/AWS-Aurora_Storage-image9.png)

## Durability at scale

![image](media/AWS-Aurora_Storage-image10.png)
![image](media/AWS-Aurora_Storage-image11.png)
![image](media/AWS-Aurora_Storage-image12.png)
![image](media/AWS-Aurora_Storage-image13.png)

## Aurora uses segmented storage

- Partition volume into n fixed-size segments
  - Replicate each segment 6 ways into a protection group (PG)
- Trade-off between likelihood of faults and time to repair
  - If segments are too small, failures are more likely
  - If segments are too big, repairs take too long
- Choose the biggest size that lets us repair "fast enough"
  - We currently picked a segment size of 10 GB, as we repair a 10-GB segment in less than a minute
![image](media/AWS-Aurora_Storage-image14.png)

## Performance results

![image](media/AWS-Aurora_Storage-image15.png)
![image](media/AWS-Aurora_Storage-image16.png)

## Global databases

![image](media/AWS-Aurora_Storage-image17.png)
![image](media/AWS-Aurora_Storage-image18.png)
![image](media/AWS-Aurora_Storage-image19.png)

## Fast database cloning

![image](media/AWS-Aurora_Storage-image20.png)
![image](media/AWS-Aurora_Storage-image21.png)

## Database backtrack

![image](media/AWS-Aurora_Storage-image22.png)
