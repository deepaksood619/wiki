# CQL (Cassandra Query Language)

Created: 2019-03-17 17:50:35 +0500

Modified: 2020-01-03 17:00:20 +0500

---

**CQL**
-   CQL mapping to cassandra's internal data structure
-   Use SQL like query language
-   **CQL is a reintroduction of schema**
-   **CQL creates a common language** so that details of the data model can be easily communicated
-   **CQL is a best-practices Cassandra interface** and hides the messy details
-   CQL let's you take advantage of the C* Data structure
-   CQL protocol is binary and therefore interoperable with any language
-   CQL is asynchronous and fast (Thrift transport layer is synchronous)
-   CQL allows the possibility for prepared statements



**Commands**

DESCRIBE KEYSPACES;

DESCRIBE TABLES;



CREATE KEYSPACE killrvideo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};



USE killrvideo;



CREATE TABLE raw_data_by_day ( sensor text, day text, ts timeuuid, reading int, primary key((sensor, day), ts) ) WITH CLUSTERING ORDER BY (ts DESC) AND COMPACTION = {'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 1};



CREATE TABLE stuff ( a int, b int, myset set<int>, mylist list<int>, mymap map<int, int>, PRIMARY KEY (a,b));

CREATE TABLE videos ( video_id timeuuid, added_date timestamp, Title text, PRIMARY KEY (video_id));

CREATE TABLE videos_by_tag ( tag text, video_id timeuuid, added_date timestamp, Title text, PRIMARY KEY (tag, video_id));



CREATE TABLE videos_by_tag ( tag text, video_id timeuuid, added_date timestamp, Title text, PRIMARY KEY (tag, added_date, video_id)) WITH CLUSTERING ORDER BY(added_date ASC, video_id ASC);



INSERT INTO killrvideo.videos(video_id, added_date, Title) VALUES (1645ea59-14bd-11e5-a993-8138354b7e31, '2014-01-29', 'Cassandra History');



BEGIN BATCH

INSERT into users(username,name,age) VALUES('raziz12','Rashid Aziz',34);

INSERT INTO users_by_cities(username,name,city, age) VALUES ('raziz12','Rashid Aziz','Karachi',30);

APPLY BATCH;





UPDATE stuff SET myset = {1,2}, mylist = [3,4,5], mymap = {6:7, 8:9} WHERE a = 0 AND b = 1;



SELECT * FROM stuff; (in cassandra-cli)

SELECT * FROM killrvideo.videos;

SELECT count(*) FROM killrvideo.videos;

SELECT * FROM videos_by_tag WHERE tag='cassandra';

SELECT * FROM videos_by_tag WHERE tag = 'cassandra' AND title='Cassandra Intro';

SELECT * FROM videos_by_tag WHERE tag='cassandra' ORDER BY added_date DESC;



LIST stuff;



SELECT key_aliases, column_aliases FROM system.schema_columnfamilies WHERE keyspace_name = 'test' AND columnfamily_name = 'stuff'; (in cqlsh)



TRUNCATE videos;

DROP TABLE videos_by_tag;



COPY videos(video_id, added_date, title) FROM '/Users/deepaksood/Downloads/ds201-6.0-labwork/labwork/data-files/videos.csv' WITH HEADER=TRUE;



COPY videos_by_tag (tag, video_id, added_date, title) FROM '/Users/deepaksood/Downloads/ds201-6.0-labwork/labwork/data-files/videos-by-tag.csv' WITH HEADER=TRUE;



QUIT



**DESCRIBE TABLE videos;**

SELECT token(video_id), video_id FROM videos;



![Example (in cqlsh) CREATE KEYSPACE test replication = {'class': 'SimpleStrategy', 'replication_factor': I}; USE test; CREATE TABLE stuff ( a int, b int, myset set<int>, mylist list<int>, mymap map<int,int>, PRIMARY KEY (a,b)); UPDATE stuff SET myset = {1,2}, mylist = [3,4,5], mymap = {6:7,8:9} WHERE a = O AND b 1; SELECT * FROM stuff; (in cassandra-cli) use test; list stuff ; (in cqlsh) SELECT key_aliases,column_aliases from system.schema_columnfamilies WHERE keyspace_name = 'test' AND columnfamily_name = 'stuff'; Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image1.png){width="7.5in" height="5.625in"}





![Introducing CQL (Contd.) CREATE TABLE users ( id timeuuid PRIMARY KEY, lastname varchar, firstname varchar, dateOfBirth timestamp ); INSERT INTO users (id,lastname, firstname, dateofbirth) VALUES UPDATE users SET firstname = 'John' WHERE id = f74cOb20-0862-1 le3-8cf6-b74c10b01fc6; SELECT dateofbirth,firstname,lastname FROM users , dateofbirth I firstname I lastname 1975-09-15 | John I Berryman Big Data Computing CQL ](media/Cassandra_CQL-(Cassandra-Query-Language)-image2.png){width="7.5in" height="5.614583333333333in"}

![Remember this: • Cassandra finds rows fast • Cassandra scans columns fast • Cassandra does not scan rows Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image3.png){width="7.5in" height="5.614583333333333in"}

![The CQL/Cassandra Mapping CREATE TABLE emplo(ees ( naye text PRIMARY KEY, age int, role text role age john 37 dev Big Data Computing name I age I role john | 37 | dev eric | 38 | ceo eric age 38 role ceo ](media/Cassandra_CQL-(Cassandra-Query-Language)-image4.png){width="7.5in" height="5.625in"}

![The CQL/Cassandra Mapping CREATE TABLE employees ( company text, V name text, age int, role text, PRIMARY KEY (company,name) company I name I age I role OSC | 38 | ceo OSC Ilohn 137 1 dev RKG I anya | 29 | lead RKG I ben 127 1 dev RKG I chad 135 lops c anya:age 29 eric:age 38 anya:role lead eric:role dev ben:age 27 john:age 37 ben:role dev john:role dev chad:age 35 chad:role ops Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image5.png){width="7.5in" height="5.614583333333333in"}

![The CQL/Cassandra Mapping (Contd.) CREATE TABLE example ( A text, B text, C text, D text, E text, F text, PRIMARY KEY Al BICI Dl EIF alblcldlelf alblclglhli albljlklllm alnlolplqlr sl u Iv w Ix a:b e o:p:E J a:n q Big Data Computing o:p:F s:t LEV:E w CQL m x ](media/Cassandra_CQL-(Cassandra-Query-Language)-image6.png){width="7.5in" height="5.614583333333333in"}

![CQL for Sets, Lists and Maps • Collection Semantics Sets hold list of unique element us_ts hold ordered, possibly repeating elements Maps hold a list of key-value pairs • Uses same old Cassandra datastructure • Declaring CREATE TABLE mytable( X text, Y text, / myset set<text> mylist mymap map<text, text>, PRIMARY KEY (X,Y) Big Data Computing Collection fields can not be used in primary keys ](media/Cassandra_CQL-(Cassandra-Query-Language)-image7.png){width="7.5in" height="5.625in"}

![Inserting INSERT INTO mytable (row, myset) VALUES (123, { 'apple', 'banana'}); INSERT INTO mytable (row, mylist) VALUES (123, ['apple','banana','apple']); INSERT INTO mytable (row, mymap) VALUES (123, Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image8.png){width="7.5in" height="5.614583333333333in"}

![Updating UPDATE my-table SET myset - - myset + {'apple','banana'} WHERE row = 123; UPDATE mytable SET myset = myset - { 'apple' } WHERE row = 123; UPDATE mytable SET mylist = mylist + ['apple','banana'] WHERE row = 123; UPDATE mytable SET myllSt = • ['banana'] + mylist WHERE row = 123; UPDATE mytable SET mymap['fruit'l = 'apple' WHERE row = 123 UPDATE mytable SET mymap = mymap + { 'fruit':'apple'} WHERE row = 123 Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image9.png){width="7.5in" height="5.614583333333333in"}

![SETS CREATE TABLE mytable( X text, Y text, myset set<int> PRIMARY KEY (X,Y) X I Yl myset albl {1,2} al cl b:myset:l a b:myset:2 c:myset:3 c:myset:4 c:myset:5 Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image10.png){width="7.5in" height="5.625in"}

![LISTS CREATE TABLE mytable( X text, Y text, mylist list<int>, PRIMARY KEY (X,Y) a X I Yl mylist albl [1,2] 2 1 Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image11.png){width="7.5in" height="5.614583333333333in"}

![MAPS CREATE TABLE mytable( X text, Y text, mymap map<text,int>, PRIMARY KEY (X,Y) b:mymap:m b:mymap:n X I Yl mymap al {m:1,n:2} a I c l{n:3,p:4,q:5} a 1 2 c:mymap:n 3 c:mymap: 4 c:mymap:q 5 Big Data Computing ](media/Cassandra_CQL-(Cassandra-Query-Language)-image12.png){width="7.5in" height="5.614583333333333in"}












