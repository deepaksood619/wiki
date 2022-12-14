# BI Tools

<https://www.toptal.com/business-intelligence/interview-questions>

## Tableau - Visualization from relational databases and data cubes, OLAP cubes, cloud databases

<https://www.datacamp.com/community/tutorials/tableau-visualizations-with-measure-names-and-measure-values>

<https://public.tableau.com/en-us/s>

<https://public.tableau.com/en-us/gallery/travel-planner-emissions-calculator>

## PowerBI vs Google Data Studio

Overall, both Power BI and Google data studio are similar when it comes to data integration, **Power BI has better ease of working**(given our understanding of Microsoft tools such as Excel) and functionality whereas**Google data studio requires significant learning and workaround**to achievesimilar visualizations. Please find below details for the same.

- **Data Integration**
  - Both the tools connect to various data sources without much issues (In few instances, third party tools might be required for Google Data Studio).
  - However, Data studio has an edge when connecting with Google services. Google services like AdWords, Google Sheets and Google Analytics are natively fully integrated with Google Data Studio.
  - Google data studio might need third party applications such as Supermetricsfor adding few data sources.
- **Functionality**
  - Power BI has a large functionality with sophisticated functions. For example, basic functionality such asline, bar and pie chartsare available in both the tools, sophisticated functions suchCohort analysis, standard funnelare not available in Google data. However, I believe these visualizations could be achievedby modifying data using SQL queries.
  - Power BI is superior to Google data studio in processing data visualization with large data.
- **Ease of working**
  - Power BI's DAX functions being similarto Excel formulas (which most of the team members have experience on), is a bit easier to work on.
  - Working on Google data studio would be a learningcurve.
- **Pricing**
  - Power BI costs $10 per user while Google data studio is free of cost.
  - However, adding few data sources to Google data studio needs third party applications such as Supermetrics which costs between $20 - $50.
  - Given Google data studio is a cloud based application, it would eliminate the need for AWS machine(needed to build Power BI report)to builtthe reports.

## Others

1. QlikView
2. Klipfolio
3. Geckoboard
4. Google Data Studio
5. Domo
6. SSRS (Sql Server Reporting Services)

    SQL Server Reporting Services(SSRS)is a server-based report generating software system from [Microsoft](https://en.wikipedia.org/wiki/Microsoft). It is part of a suite of [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server) services, including SSAS ([SQL Server Analysis Services](https://en.wikipedia.org/wiki/SQL_Server_Analysis_Services)) and SSIS ([SQL Server Integration Services](https://en.wikipedia.org/wiki/SQL_Server_Integration_Services)).

7. Sisense - <https://www.sisense.com>

![image](media/Data-Visualization_BI-Tools-image1.jpeg)

<https://medium.com/activewizards-machine-learning-company/a-comparative-analysis-of-top-6-bi-and-data-visualization-tools-in-2018-658490665973>

## Redash

Redashwas built to allow fast and easy access to billions of records, that we process and collect using Amazon Redshift ("petabyte scale data warehouse" that "speaks" PostgreSQL). TodayRedashhas support for querying multiple databases, including: Redshift, Google BigQuery, PostgreSQL, MySQL, Graphite, Presto, Google Spreadsheets, Cloudera Impala, Hive and custom scripts.

### Redash consists of two parts

1. **Query Editor:** think of [JS Fiddle](https://jsfiddle.net/) for SQL queries. It's your way to share data in the organization in an open way, by sharing both the dataset and the query that generated it. This way everyone can peer review not only the resulting dataset but also the process that generated it. Also it's possible to fork it and generate new datasets and reach new insights.

2. **Visualizations and Dashboards:** once you have a dataset, you can create different visualizations out of it, and then combine several visualizations into a single dashboard. Currently Redash supports charts, pivot table, cohorts and [more](https://redash.io/help/user-guide/visualizations/visualization-types).

<https://github.com/getredash/redash>

[https://redash.io](https://redash.io/)

<https://hub.helm.sh/charts/redash/redash>

## Rive

Rive is a real-time interactive design tool that allows you to design, animate, and immediately integrate your assets into any platform thanks to our [open source runtimes](https://rive.app/runtimes).

<https://rive.app>

## AWS QuickSight

Amazon QuickSight is built with "SPICE" -- a Super-fast, Parallel, In-memory Calculation Engine. Built from the ground up for the cloud, SPICE uses a combination of columnar storage, in-memory technologies enabled through the latest hardware innovations and machine code generation to run interactive queries on large datasets and get rapid responses. SPICE supports rich calculations to help you derive valuable insights from your analysis without worrying about provisioning or managing infrastructure. Data in SPICE is persisted until it is explicitly deleted by the user. SPICE also automatically replicates data for high availability and enables QuickSight to scale to hundreds of thousands of users who can all simultaneously perform fast interactive analysis across a wide variety of AWS data sources.

<https://aws.amazon.com/blogs/aws/amazon-quicksight-q-business-intelligence-using-natural-language-questions>

<https://aws.amazon.com/quicksight>

<https://aws.amazon.com/blogs/big-data/add-comparative-and-cumulative-date-time-calculations-in-amazon-quicksight>

## Metabase

Metabase is an open source business intelligence tool. It lets you ask questions about your data, and displays answers in formats that make sense, whether that's a bar graph or a detailed table.

Your questions can be saved for later, making it easy to come back to them, or you can group questions into great looking dashboards. Metabase also makes it easy to share questions and dashboards with the rest of your team.

`docker run -p 3000:3000 --name metabase metabase/metabase`

<https://www.metabase.com/docs/latest/users-guide/01-what-is-metabase.html>

<https://www.metabase.com/docs/latest/getting-started.html>

<https://www.metabase.com/learn>

<https://github.com/metabase/metabase>

## Others

<https://www.talend.com/>
