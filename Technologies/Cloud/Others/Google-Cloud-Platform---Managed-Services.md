# Google Cloud Platform - Managed Services

Created: 2018-06-14 00:50:11 +0500

Modified: 2020-11-05 15:23:19 +0500

---

1. **Compute**

    a.  Compute Engine

    b.  App Engine

Serverless application that completely abstracts away infrastructure so you focus only on code

c.  Kubernetes Engine (GKE)

d.  Cloud Functions

Serverless environment to build and connect cloud services. With Cloud Functions you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services. Your Cloud Function is triggered when an event being watched is fired. Your code executes in a fully managed environment. There is no need to provision any infrastructure or worry about managing any servers.

Cloud Functions are written in Javascript and execute in a Node.js v6.11.5 environment on Google Cloud Platform. You can take your Cloud Function and run it in any standard Node.js runtime which makes both portability and local testing a breeze.

1. HTTP Functions

2. Background Functions

e.  Cloud Scheduler

Fully managed cron job service

<https://cloud.google.com/scheduler/docs/quickstart>

2. **Big Data**

    a.  Big Query

BigQueryis a serverless data warehouse. Tables in BigQuery are organized into datasets.

b.  Cloud Dataflow

c.  Cloud Dataproc

Cloud Dataproc is a managed Spark and Hadoop service that lets you take advantage of open source data tools for batch processing, querying, streaming, and machine learning. Cloud Dataproc automation helps you create clusters quickly, manage them easily, and save money by turning clusters off when you don't need them.

d.  Cloud Composer

e.  Cloud Datalab

f.  Cloud Dataprep

g.  Cloud Pub/Sub

Geo-redundant real-time messaging for all message sizes and velocities

h.  Genomics

i.  Google Data Studio

3. **Identity & Security**

    a.  Cloud Identity

    b.  Cloud IAM

    c.  Cloud Identity-Aware Proxy

    d.  Cloud Data Loss Prevention API

    e.  Security Key Enforcement

    f.  Cloud Resource Manager

    g.  Cloud Security Command Center

    h.  Cloud Security Scanner

    i.  Access Transparency

4. **Internet of Things**

    a.  Cloud IoT Core

5. **Professional Services**

    a.  Consulting

    b.  Technical Account Management

    c.  Advanced Solutions Lab

    d.  Training

    e.  Certification

    f.  QwikLabs

6. **Storage and Databases**

    a.  Cloud Storage

Geo-redundant object storage for high QPS (Query Per Second) needs

- gsutil

Cloud Storage allows world-wide storage and retrieval of any amount of data at any time. You can use Cloud Storage for a range of scenarios including serving website content, storing data for archival and disaster recovery, or distributing large data objects to users via direct download.

b.  Cloud SQL

c.  Cloud Bigtable

d.  Cloud Spanner: No-Compromise Relational Database Service

Cloud Spanner is the only enterprise-grade, globally-distributed, and strongly consistent database service built for the cloud specifically to combine the benefits of relational database structure with non-relational horizontal scale. This combination delivers high-performance transactions and strong consistency across rows, regions, and continents with an industry-leading 99.999% availability SLA, no planned downtime, and enterprise-grade security. Cloud Spanner revolutionizes database administration and management and makes application development more efficient.

Its basically a CP system (Consistency - Partition tolerance)

<https://cloud.google.com/blog/products/gcp/inside-cloud-spanner-and-the-cap-theorem>

<https://cloud.google.com/spanner/docs/true-time-external-consistency>

<https://ai.google/research/pubs/pub45855>

<https://thedataguy.in/internals-of-google-cloud-spanner>

A Spanner cluster*[contains](https://cloud.google.com/spanner/docs/replication#replica_types)multiple read-write, may contain some read-only and some witness replicas.

- Read-write replicas serve reads and writes.
- Read-only replicas serve reads.
- Witnesses don't serve data but participate in leader election.

Read-only and witness replicas are only used for multi-regional Spanner clusters that can span across multiple geographical regions. Single region clusters only use read-write replicas. Each replica lives in a different zone in the region to avoid single point of failure due to zonal outages.

- Fully managed
  - No versioning (you don't know which spanner you are using)
  - No messing with tablespaces
  - No software patching
  - No upgrades
  - No downtime
  - No index rebuilds
  - No resharding
  - Dynamically scalable (up and down) within seconds

![What workloads fit Cloud Spanner best? 01 Sharded RDBMS Manually sharding is difficult. People do it to achieve scale. Cloud Spanner gives you relational data and scale. 02 Scalable relational data Cloud Spanner is a scalable relational database. Instead of moving to NoSQL, move from one relational database to a more scalable relational database. 03 Manageability/HA Cloud Spanner is highly automated. Schema changes and patching are all online operations. Cloud Spanner does not have any planned downtime and comes with up to a 99.999% availability SLA. 04 Multi-region Write once and have Cloud Spanner automatically replicate your data to multiple regions. Most customers use regional instances, but multi-region is there if you need it. ](../../media/Cloud-Others-Google-Cloud-Platform---Managed-Services-image1.png)

![For which app types? 01 Mission-critical Mission/business-critical apps where downtime is not an option. Custom build with a dedicated engineering team. 02 SaaS Leading SaaS providers choose Cloud Spanner because of its scalability. Currently limits on number of databases per instance make this more attractive to single-tenant SaaS models. 03 Gaming Gaming companies love Cloud Spanner for the unique combination of relational data, high throughput, and global reach. ](../../media/Cloud-Others-Google-Cloud-Platform---Managed-Services-image2.png)

- When cloud spanner fits less well
  - Lift and shift
  - Lots of in-database business logic (triggers, stored procedures)
  - Compatibility needed
  - App is very sensitive to very low latency (micro/nano/low single digit ms)
- Stale reads
- External (strong) consistency
  - Low-latency synchronous replication - data is available on commit
  - True ACID database
- Considerations
  - Key choice in tables and indexes
    - Sequential- or timestamp-based keys can cause hotspots limiting performance
    - Random UUIDs or hashes distribute data better
  - Lack of: Triggers, stored procedures, and check constraints
    - Not null constraint exits, keys are unique, unique column values via indexes
  - Foreign key constraints and on-delete cascades only with parent-child interleaved tables
  - No sequence generation for keys
  - Indexes are tables too
    - Same contraints for index keys
    - Querying non-covering index is a table join
  - Primary key is the ROWID
    - Uniquely identifies the row
    - Used to determine where the row is in the storage
  - Backup and DR
    - Managed export/import
    - Historial data snapshots
    - System-managed backups
- TrueTime and MVCC
  - Linearization - C of "ACID"
  - Serialization - I of "ACID"
  - Read snapshots - MVCC to avoid read locks = External Consistency

- Can we deploy in single region?

e.  Cloud Datastore

## Highly-scalable NoSQL database. It automatically handles sharding and replication, providing you with a highly available and durable database that scales automatically to handle your applications' load. Datastore provides a myriad of capabilities such as ACID transactions, SQL-like queries, and indexes

f.  Persistent Disk

g.  Cloud Memorystore

![Database Management Portfolio on GCP In-memory Cloud Memorystore Managed Redis & MemcacheD Non-relational / NoSQL Relational Cloud SQL Managed MySQL, PostgreSQL, & SQL Server Strategic Data warehouse Partners Cloud Serverless, scalable document store Cloud Bigtable Low latency, scalable wide column store Cloud Spanner Scalable relational database BigQuery Enterprise data warehouse Built and managed by Google e redis DB mongo elastic ORTRSTRX.: O influxdata Oneoqj €;eonfluent Built and managed by Partners (as a service or Anthos) Databases On GCE/GKE SAP HANA Microsoft SQL Server Oracle IBM Db2 MySQL PostgreSQL MariaDB Non-relational Managed by you and/or Partners Google Cloud ](../../media/Cloud-Others-Google-Cloud-Platform---Managed-Services-image3.png)

7. **API Platform and Ecosystems**

    a.  Google Maps Platform

    b.  Apigee API Platform

Enterprise API management for multi-cloud environments

AnAPI proxyis your interface to developers that want to use your backend services. Rather than having them consume those services directly, they access an Edge API proxy that you create. With a proxy, you can provide value-added features such as:

- Security
- Rate limiting
- Quotas
- Caching & persistence
- Analytics
- Transformations
- CORS
- Fault handling

c.  API Monetization

d.  Developer Portal

e.  API Analytics

f.  Apigee Sense

g.  Cloud Endpoints

API management apps built on Google Cloud

8. **Management Tools**

    a.  Stackdriver Overview

    b.  Monitoring

    c.  Logging

    d.  Error Reporting

    e.  Trace

    f.  Debugger

    g.  Profiler

    h.  Cloud Deployment Manager

    i.  Cloud Console

    j.  Cloud Shell
        -   ephemeral vm

    k.  Cloud Mobile App

    l.  Cloud Billing API

    m.  Cloud APIs

9. **Networking**

    a.  Virtual Private Cloud (VPC)

    b.  Cloud Load Balancing

    c.  Cloud Armor

    d.  Cloud CDN

    e.  Cloud Interconnect

    f.  Cloud DNS

    g.  Network Service Tiers

10. **Cloud AI**

    a.  Cloud AutoML

    b.  Cloud TPU

    c.  Cloud Machine Learning Engine

    d.  Cloud Job Discovery

    e.  Dialogflow Enterprise Edition

    f.  Cloud Natural Language

    g.  Cloud Speech-to-Text

    h.  Cloud Text-to-Speech

    i.  Cloud Translation API

    j.  Cloud Vision API

    k.  Cloud Video Intelligence

11. **Data Transfer**

    a.  Google Transfer Appliance

    b.  Cloud Storage Transfer Service

    c.  Google BigQuery Data Transfer Service

12. **Developer Tools**

    a.  Cloud SDK

    b.  Container Registry

    c.  Container Builder

    d.  Cloud Source Repositories

    e.  Cloud Tools for Intellij

    f.  Cloud Tools for Powershell

    g.  Cloud Tools for Visual Studio

    h.  Cloud Tools for Eclipse

    i.  Gradle App Engine Plugin

    j.  Cloud Test Lab

13. **Productivity Tools**

    a.  G Suite

    b.  Hire

    c.  Chrome Android

## Gcloud Commands

gcloud auth list

gcloud auth login

gcloud config set project <project-id>

gcloud config set compute/zone asia-south1-a

gcloud iam service-accounts create [NAME]

gcloud projects add-iam-policy-binding playground-209220 --member "serviceAccount:deepak-mac@playground-209220.iam.gserviceaccount.com" --role "roles/owner"

gcloud iam service-accounts keys create deepak-cred.json --iam-account deepak-mac@playground-209220.iam.gserviceaccount.com

gcloud container clusters list

gcloud container clusters create <cluster_name>

gcloud container clusters get-credentials <cluster_name>

gcloud container clusters update your-first-cluster-1 --enable-autoscaling --min-nodes 1 --max-nodes 4 --zone asia-south1-a

gcloud container clusters describe your-first-cluster-1 --zone asia-south1-a

gcloud container node-pools list --cluster your-first-cluster-1

gcloud sql instances create postgres-instance --database-version POSTGRES_9_6 --tier db-g1-small #create a postgres instance

gcloud sql users set-password postgres --host=% --instance postgres-instance --password [PASSWORD] #set a password for the postgres instance

gcloud compute addresses create endpoints-ip --region us-central1 #create a static ip

## POC problems

1. Not able to use cloud dataflow for transforming and passing data to smap

2. Cloud dataflow uses apache beam which is in Java and all functions must be written in java

3. Data visualization must be created from scratch using cloud datastudio

4. Not great device management, no control on devices inbuilt using cloud iot core

## References

## Google BigTable - <https://cloudplatform.googleblog.com/2018/04/what-we-learned-doing-serverless-the-Smart-Parking-story.html>

<https://github.com/gregsramblings/google-cloud-4-words>

<https://medium.com/google-cloud/13-most-common-google-cloud-reference-architectures-23630b46326d>

![API PLATFORM AND ECOSYSTEMS API API Mor*tization AR Platfom AR attxks Clm_'d API gatmay AR man g r tent p«tal & •rketDl*e GOOGLE MAPS Distance Matrix AR Maps AR Maps JnaS@t Maps Maps Stx fot OS Maps State API Maps unity Maps uRLs gaps JS API Places SDK for SDK jos Street Static AA G sullE PLAIFORM Apps 9 ript Chat Bots Markup G Marketd*e G suite APWSOKs (FIREBASE) CWd FirebßO for Fir&ase A.•8 Tetim Vireo-as e App Fir&ase CWd Vireo-as e Dynamic Vireo-as e Fimbase Vireo-as e Remote Config Lab Analytics for ML Kit for Firebase GCP FOUNDATIONAL OPEN ADDITIONAL RESOURCES Goo* Goo* GCP Vireo-as e G Suite Blog Goo* Certificatory Goo* System Status Goo* Goo* Goo* Blog Goo* Blog Goo* Sec.---it' 'aggie Regiorz Network gap stMe md Wt•driwl Ob*ct md seeing Cruh æpMt"g "ytd Create AMB test App/Goagle each Lin to cmtent with Cmtutual data configure instaled e analytics fot SOURCE PROJECTS Batch"' data SeCwe fot Of Chud natiw framework um.com/gex'g api* e com.'certifeation e com-'tra map spl at' cam Google Cloud DEVELOPER'S CHEAT SHEET v2019.7.17 Created by the Google Developer Relations Team at b Feedback ? ad&eg BC-ate' Web maps gaps fM gaps SOK for OS Web S tatZ maps Lhity f« scheme for '&tadata (REST) maces OS Stat* stret C.t to Ass i stive app ewrything Gtmd Contextual n ConætionA bots Chat Cmte tmge provision manage Crute edit Red and Mite Read and Mite Cmte edit p---tatou Drive f" sekction unge G Suite hteracti•ae schema.org integrated Inks. COMPUTE App Run Storage DATABASES Chud Éire-st ore Chud DATA AND ANALYIICS 8igQmy B EngiM Mn%d Serverkss GFus. TRIS. Disks phtfom Objet storage and *æSS AnhiW W -at tached VS Server Petabytæsale, DB docunent De Red S DB an*yttS ](../../media/Cloud-Others-Google-Cloud-Platform---Managed-Services-image4.png)

![ОМА AWLY1]cs (СОМТ,) Стив Ожа AliML А1 Motebo&s Auta'& Auta'& тападе St.'batch Ма•-.авев ј..у*ег Spark Hadoop G10baI Metadma data p'atf--- fw Dat* Ьу J.ytMt*р-аг*ј AutoSc*d тове' CuStT Cu5t3-T ---е pnhg nd Сопче" ta ЈОЬ ML tot vide• НагВ.ч-ме МИ Стеже АМуп„ Create QrriM реет .•hth GCP .р. to ИРС KLI*.'0RkAG (CONI-} С1оиВ мат Sery•te Virtu*%tvat• ОГ THlNGS (loT) Ало stcuawy Ассезз Театара Au•t С1оиВ Ома А7 %Оху Кеу С1оиВ SeCwity C"tu E.t 0eteCt& S---ty Кеу "twity Кеу С1оиВ рт ку Кеу Ских SeCwity S---'ty Кеу Кеу 0005 N•twOrE V*tu' pMte "rviCe ---h tnmc ---g---t %ftware *Симу Audt С1из*у ап' SkWity ИМСе Кеу ртом 3eCwity ассезз Фу T.f*t« (2FA) VPC &ntjty.N5M дер Кеу %rviCe PO«t 'т..мсну, ЕП9ће SeCwjty Кеу T.f*t« AutMBtitati66 (ИА) Ое•се T00LS Ск»а АРЕ ста ВМД М Сом*МоЬ' Stx'driw Repwt'ng Sta&driw Тг*. aev•ELOPER sok 'ГтВ hte"ij StudiO Стив C%ud Стив C%ud Стив C%ud А 8ui&9 Т.ап51аьоп АР] Vvdo АВ Se*th ОМ ted Grad[e Мр ЕПфМ MlGu ТО GCP Ск»а оаеа StN* RedBMt M@ate Меа Ш Сопри& ЕПОМ nd Сом t30B 'ЧеЬ,ЬиВ infraStmCtw• ---оуТМИ GCP В termM,-'CU Арр r---t« САЈ ср Арр wf--- СИ GCP Wted g't Маче" јоЬ 1nteWJ GO tod ср StLM СР tONg prtvate М--- Арр to ВА data Мае fw R.dghft tO fw Teadata to УМ' GkE Сопри& ЕП9М tOOB VM toe сп'•агми€п он • • •](../../media/Cloud-Others-Google-Cloud-Platform---Managed-Services-image5.png)
