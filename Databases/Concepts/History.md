# History

Created: 2020-04-19 16:40:35 +0500

Modified: 2020-08-18 23:26:22 +0500

---

![39 1980s - RELATIONAL MODEL The relational model wins. ---+ IBM comes out with DB2 in 1983. -9 "SEQUEL" becomes the standard (SQL). Many new "enterprise" DBMSs but Oracle wins marketplace. IBM DB2 ORACLE , "TANDEM Informix __TERADA m" ASE InterBase INGRE Stonebraker creates Postgres. ±CMU.DB 15-721 (spring 2020) ](media/History-image1.png){width="7.479166666666667in" height="4.197916666666667in"}

![±CMU.DB 1980s - OBJECT-ORIENTED DATABASES Avoid "relational-object impedance mismatch" by tightly coupling objects and database. Few of these original DBMSs from the 1980s s exist today but many of the technologies exi in other forms (JSON, XML) ObjectStore. VERSANT 15-721 (spring 2020) ](media/History-image2.png){width="7.479166666666667in" height="4.197916666666667in"}

![41 OBJECT-ORIENTED MODEL Application Code class Student { int id; String name; String email; String phone[]; Relational Schema STUDENT (id, name, email) STUDENT PHONE (Sid, phone) id 1001 ±CMU.DB name m.O.p. email ante@up.com Sid leel leel phone 444-444-4444 555-555-5555 15-721 (spring 2020) ](media/History-image3.png){width="7.479166666666667in" height="4.197916666666667in"}

![41 OBJECT-ORIENTED MODEL Application Code class Student { int id; String name; String email; String phone[]; ±CMU.DB Student "id": leøl, "name": "M.O.P." "email": "ante@u 4444" , "555-5 -5555" 15-721 (spring 2020) ](media/History-image4.png){width="7.479166666666667in" height="4.197916666666667in"}

![±CMU.DB 41 OBJECT-ORIENTED MODEL A Complex Queries "email": "ante@up.com", A No Standard API 15-721 (spring 2020) ](media/History-image5.png){width="7.479166666666667in" height="4.197916666666667in"}

![42 1990s - BORING DAYS No major advancements in database systems or application workloads. -9 Microsoft forks Sybase and creates SQL Server. ---+ MySQL is written as a replacement for mSQL. ---+ Postgres gets SQL support. -9 SQLite started in early 2000. QLite ±CMU.DB PostgreSQL 15-721 (spring 2020) ](media/History-image6.png){width="7.479166666666667in" height="4.197916666666667in"}

![±CMU.DB - INTERNET BOOM All the big players were heavyweight and expensive. Open-source databases were missing important features. Many companies wrote their own custom middleware to scale out database across single- node DBMS instances. 15-721 (spring 2020) ](media/History-image7.png){width="7.479166666666667in" height="4.197916666666667in"}

![±CMU.DB 44 - DATA WAREHOUSES Rise of the special purpose OLAP DBMSs. ---+ Distributed / Shared-Nothing ---9 Relational / SQL ---+ Usually closed-source. Significant performance benefits from using columnar data storage model. N NETÉZZA PARACCEL monet Greenplum DATAllegrc» VERTION 15-721 (spring 2020) ](media/History-image8.png){width="7.479166666666667in" height="4.197916666666667in"}

![](media/History-image9.png){width="7.479166666666667in" height="4.197916666666667in"}

![](media/History-image10.png){width="7.479166666666667in" height="4.197916666666667in"}

![47 2010s - HYBRID SYSTEMS Hybrid Transactional-Analytical Processing. Execute fast OLTP like a NewSQL system while also executing complex OLAP queries like a data warehouse system. -9 Distributed / Shared-Nothing ---+ Relational / SQL -9 Mixed open/closed-source. -2 Hyper A MEMSQL , HANA JustOneo. ice Peloton ±CMU.DB 15-721 (spring 2020) ](media/History-image11.png){width="7.479166666666667in" height="4.197916666666667in"}

![48 - CLOUD SYSTEMS First database-as-a-service (DBaaS) offerings were "containerized" versions of existing DBMSs. There are new DBMSs that are designed from scratch explicitly for running in a cloud environment. »«snowflake amazon REDSHIFT xeround The Cloud Database --- Googl Spanner ±CMU.DB Amazon + _ • y FAUNA Aurora SlicingDice Micr 15-721 (spring 2020) ](media/History-image12.png){width="7.479166666666667in" height="4.197916666666667in"}

![49 201 os - SHARED-DISK ENGINES Instead of writing a custom storage manager, the DBMS leverages distributed storage. -9 Scale execution layer independently of storage. ---+ Favors log-structured approaches. This is what most people think of when they talk about a data lake. clouderå APACHE S »«snowflake MACHINE IMPALA presto ±CMU.DB + Spar Microsoft 15-721 (spring 2020) IVE ](media/History-image13.png){width="7.479166666666667in" height="4.197916666666667in"}

![52 201 os - GRAPH SYSTEMS Systems for storing and querying graph data. Their main advantage over other data models is to provide a graph-centric query API -4 Recent research demonstrated that is unclear wheth there is any benefit to using a graph-centric execution engine and storage manager. TigerGraph O Dgraph GRAPH grAphbase.ai --- lerminusDB ±CMU.DB 15-721 (spring 2020) e J sGraph * IndrÅDB ](media/History-image14.png){width="7.479166666666667in" height="4.197916666666667in"}

![53 2010s - TIMESERIES SYSTEMS Specialized systems that are designed to store timeseries / event data. The design of these systems make deep assumptions about the distribution of datæan workload query patterns. TIMESCALE VICTORIA V METRICS 15-721 (spring 2020) O influxdb ClickHouse fS ±CMU.DB ](media/History-image15.png){width="7.479166666666667in" height="4.197916666666667in"}

![±CMU.DB 54 2010s - SPECIALIZED SYSTEMS Embedded DBMSs Multi-Model DBMSs Blockchain DBMSs Hardware Acceleration 15-721 (spring 2020) ](media/History-image16.png){width="7.479166666666667in" height="4.197916666666667in"}
[01 - History of Databases (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=SdW5RKUboKc)
![u Carnegie Mellon University ADVANCED DATABASE SYSTEMS History of // 15-721 // spriög 2020 ](media/History-image17.jpg){width="5.0in" height="2.8020833333333335in"}