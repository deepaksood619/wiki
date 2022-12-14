# Technologies / Tools

## Vitess

Vitess is a database clustering system for horizontal scaling of MySQL through generalized sharding.
By encapsulating shard-routing logic, Vitess allows application code and database queries to remain agnostic to the distribution of data onto multiple shards. With Vitess, you can even split and merge shards as your needs grow, with an atomic cutover step that takes only a few seconds.

## Traditional Transactional Architecture

![image](media/Technologies-Tools-image1.png)
<https://github.com/vitessio/vitess>

<https://vitess.io>

<https://www.planetscale.com/blog/videos-intro-to-vitess-its-powerful-capabilities-and-how-to-get-started>

## MySQL Workbench / MySQLWorkbench

<https://dev.mysql.com/doc/workbench/en/wb-performance-explain.html>
<https://www.mysql.com/products/workbench>
<https://dev.to/realtrevorfaux/8-new-sql-tools-that-will-change-how-you-work-in-2020-n63>

## Settings

- Preferences > SQL Editor > DBMS connection read timeout interval (in seconds) > 3000

## Shortcuts

Edit>Format>Beautify Query

Shortcut:CMD+B

## Search

## *.*test

find all objects that include test in their name

## *.test

find all objects that names start with test

## Reverse Engineer

## Data Grip

## NoSQL Workbench

<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html>

## DBeaver

## Universal Database Tool

DBeaveris an SQL client and a database administration tool. For [relational databases](https://en.wikipedia.org/wiki/Relational_database) it uses the [JDBC](https://en.wikipedia.org/wiki/JDBC) API to interact with databases via a JDBC driver. For other databases ([NoSQL](https://en.wikipedia.org/wiki/NoSQL)) it uses proprietary database drivers. It provides an editor that supports [code completion](https://en.wikipedia.org/wiki/Autocomplete) and [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting). It provides a plugin architecture (based on the [Eclipse](https://en.wikipedia.org/wiki/Eclipse_(software)) plugins architecture) that allows users to modify much of the application's behavior to provide database-specific functionality or features that are database-independent. This is a desktop application written in [Java](https://en.wikipedia.org/wiki/Java_platform) and based on [Eclipse](https://en.wikipedia.org/wiki/Eclipse_(software)) platform.
Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases. Supports all popular databases: MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix, Presto, etc.
With DBeaver you are able to manipulate with your data like in a regular spreadsheet, create analytical reports based on records from different data storages, export information in an appropriate format. For advanced database users DBeaver suggests a powerful SQL-editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more.

Out-of-the box DBeaver supports more than 80 databases.

Having usability as its main goal, DBeaver offers:

- Carefully designed and implemented User Interface
- Support of Cloud datasources
- Support for Enterprise security standard
- Capability to work with various extensions for integration with Excel, Git and others.
- Great number of features
- Multiplatform support
<https://dbeaver.io>

<https://github.com/dbeaver/dbeaver>

## Shortcuts

- Ctrl + ] - New sql script

## Teradata

Analytics, Data Lakes and Data Warehouses Unified in the Cloud

## Datastage

Datastage is an ETL tool which extracts data, transform and load data from source to the target. The data sources might include sequential files, indexed files, relational databases, external data sources, archives, enterprise applications, etc. DataStage facilitates business analysis by providing quality data to help in gaining business intelligence.
<https://www.guru99.com/datastage-tutorial.html>

## Liquibase

Liquibase helps millions of teams track, version, and deploy database schema changes.
Liquibase Hub - Visualize all changes-  Changelogs
    -  **Formats**
        -  XML
        -  YAML
        -  JSON
        -  SQL

- Tracking Tables
  - DATABASECHANGELOG

Track which changes have or have not been deployed

- DATABASECHANGELOGLOCK

## Commands

liquibase update
<https://www.liquibase.org>

## Fixing Forward

Since rolling back database changes is complicated, time-consuming, and error-prone, the fixing forward approach is very quickly getting very popular.

## Fixing forward is lower-risk

DBAs aren't trying to get the database back to the old state. Instead, the focus is on getting to a good working state (with all that updated data).

## Fixing forward eliminates overhead

Teams can become more agile with their development for database code, making it very popular with the DevOps, CI/CD, and Agile development communities.
The fix forward method works best when changes are broken into small chunks that are deployed independently and automatically. If you're starting from a software development environment where you have one years' worth of work about to deploy, this may not be the approach you adopt right now. However, there are tools that can help you break up your database scripts and schema changes into small, trackable chunks that make this approach much more accessible to companies that are ready to try this out.
<https://www.liquibase.com/blog/roll-back-database-fix-forward>
