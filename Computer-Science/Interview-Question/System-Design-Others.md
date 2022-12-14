# System Design - Others

## CricInfo

[CRICINFO system design | CRICBUZZ System desi](http://youtube.com/watch?v=exSwQtMxGd4) gn
![image](media/System-Design-Others-image1.jpg)
![image](media/System-Design-Others-image2.png)

## Netflix

1. AWS

2. OpenConnect (Netflix CDN)
1. OC

2. Backend

3. Client
![image](media/System-Design-Others-image3.png)
<https://www.linkedin.com/pulse/system-design-netflix-narendra-l>

<https://netflixtechblog.com/netflixs-viewing-data-how-we-know-where-you-are-in-house-of-cards-608dd61077da>

[NETFLIX System design | software architecture for netflix](https://www.youtube.com/watch?v=psQzyFfsUGU)

## Gitlab

![image](media/System-Design-Others-image4.png)

## S3 system design (distributed cloud storage)

## Cluster Manager

1. Allocates account

2. Disaster recovery

3. Resource track

4. Holds policies Authentication + Authorization

5. Manages Cluster-  **Hash(UUID) - Partition Map Table**

- **Consistent Hashing**
- **1 hit wonder (don't cache any request till a threshold)**
  - Maybe the request is only once/twice for a day

## Streaming layer (Stream Manager)

1. Append only

2. Seal

3. Garbage collection

4. Replication

5. Health of FS

6. Store offsets
![image](media/System-Design-Others-image5.png)
<https://www.youtube.com/watch?v=UmWtcgC96X8>

## Web Crawlers

## Use Case

- Search engine
- Copywrite violation detection
- Keyword based finding
  - New analysis (share market)
- Web malware detection
- Web analytics
- Data science data crawlers

## Features

- Politeness / Crawl rate
- DNS query
- Distributed crawling
- Priority crawling
- Duplicate detection
  - Bruteforce
  - Hashing (MD5-SHA1)
  - MinHash
  - SimHash (Google uses this)
  - Fuzzy search
  - Latent semantic indexing
  - Standard boolean model
[System Design distributed web crawler to crawl Billions of web pages | web crawler system design](https://www.youtube.com/watch?v=BKZxZwUgL3Y)

## Financial System

![image](media/System-Design-Others-image6.png)

## TikTok

[System Design Interview: TikTok architecture with @sudoCODE](https://www.youtube.com/watch?v=07BVxmVFDGY&ab_channel=GauravSen)

- Intagram Reels
- Short TikTok Videos

## Challenges

- Ingestion

- Storage

- Distribution
Functional requirements

- Upload videos
- Feed
- Profiles

Non-functional requirements

- Scalability
- Availability
- Fault tolerant
- Performance

## Others

HTTP + json is not good (because contract is not upheld from developers while sending apis)
