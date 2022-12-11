# Others

Created: 2020-02-18 11:31:40 +0500

Modified: 2022-01-03 13:20:24 +0500

---

**Column level access controls**

<https://aws.amazon.com/about-aws/whats-new/2020/03/announcing-column-level-access-control-for-amazon-redshift/>



![AQUA for Amazon Redshift - Advanced Query Accelerator A new distributed and hardware-accelerated processing layer that will make Amazon Redshift 10x faster than any other cloud data warehouse without increasing cost Compute Node AQUA Node Custom AWS-designed processor Compute Node Compute Node Parallel execution AQUA Node Custom AQUA Node Custom AWS-designed AWS-designed processor processor Compute Node AQUA Node Custom AWS-designed processor Preview Minimize data movement over the network by pushing down operations to AQUA Nodes AQUA Nodes with custom AWS-designed analytics processors to make operations (compression, encryption, filtering, and aggregations) faster than traditional CPUs Available only with RA3, no code changes required. Available in preview. ](media/AWS-Redshift_Others-image1.png){width="5.916666666666667in" height="3.0208333333333335in"}

<https://aws.amazon.com/blogs/aws/new-aqua-advanced-query-accelerator-for-amazon-redshift/>



![Amazon Redshift Federated Query Query and join data from one or more RDS and Aurora PostgreSQL databases Analytics on operational data without data movement and ETL delays Integrate operational data with data warehouse and S3 data lake Flexible and easy way to ingest data avoiding complex ETL pipelines Intelligent distribution of computation to remote sources to optimize performance Redshift V JDBC/ODBC 1 1 1 Aurora PostgreSQL S3 Data lake 1 1 1 Previ RDS PostgreSQL ](media/AWS-Redshift_Others-image2.png){width="5.875in" height="3.2083333333333335in"}



![Materialized views Compute once, query many times Materialized View loc_sales Speed up queries by orders of magnitude • Joins, filters, aggregations, and projections store_info Simplify and accelerate ETL/BI pipelines • Incremental refresh User triggered maintenance Easier and faster migration to Amazon Redshift store sl loc NY owner Joe Ann Lisa loc NY total_sales 12.00 10.00 sales item store cust il i2 s2 cl Previeu rice 12.0 3.0 7.0 ](media/AWS-Redshift_Others-image3.png){width="5.0in" height="2.4166666666666665in"}



![Stored procedures support to simplify migrations Use Schema Conversion Tool to automatically convert your stored procedures Migrating to Amazon Redshift is even easier! Amazon Redshift supports Stored Procedures in PL/pgSQL format Stored procedures used for ETL, data validation, and custom business logic close to data. CREATE OR REPLACE PROCEDURE int, f2 varchar) AS $$ BEGIN RAISE INFO 'fl = %, f2 END; $$ LANGUAGE pipgsql; call test_sp1(5, 'abc'); INFO: fl = 5, f2 = abc % , fl, f2; ](media/AWS-Redshift_Others-image4.png){width="5.0in" height="2.6041666666666665in"}



![Spatial processing Spatial Analytics at scale --- ingest, store and analyze spatial data Seamlessly integrate spatial and business data Get new dimension of insights and value New data type GEOMETRY 40+ SQL spatial functions Accessors, Constructors, Predicates Insert Client + Select Copy S3, or local ](media/AWS-Redshift_Others-image5.png){width="5.0in" height="2.8645833333333335in"}

Amazon Redshift spatial provides location-based analytics for rich insights into your data. It seamlessly integrates spatial and business data to provide analytics for decision making.[Amazon Redshift launched native spatial data processing support in November 2019](https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-redshift-announces-support-spatial-data/), with a polymorphic data type GEOMETRY and several key SQL spatial functions. We now support GEOGRAPHY data type, and our library of SQL spatial functions has grown to 80. We support all the common spatial datatypes and standards, including Shapefiles, GeoJSON, WKT, WKB, eWKT, and eWKB.



**Vaccum and Analyze commands**

<https://hevodata.com/blog/redshift-vacuum-and-analyze/>

<https://docs.aws.amazon.com/redshift/latest/dg/t_Reclaiming_storage_space202.html>

<https://docs.aws.amazon.com/redshift/latest/dg/r_VACUUM_command.html>



**Auto WLM with queue priority**

<https://docs.aws.amazon.com/redshift/latest/dg/automatic-wlm.html>



**Others**

STL Load Errors - <https://docs.aws.amazon.com/redshift/latest/dg/r_STL_LOAD_ERRORS.html>

<https://docs.aws.amazon.com/redshift/latest/dg/c_serial_isolation.html>





