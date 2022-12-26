# Database Workloads

Created: 2018-02-06 10:56:25 +0500

Modified: 2020-03-01 00:04:42 +0500

---

## OLTP (On-line Transaction Processing)

## Transactions

## groups of read and write requests that occur together as atomic units

OLTP is characterized by a large number of short on-line transactions (INSERT, UPDATE, DELETE). The main emphasis for OLTP systems is put on very fast query processing, maintaining data integrity in multi-access environments and an effectiveness measured by number of transactions per second. In OLTP database there is detailed and current data, and schema used to store transactional databases is the entity model (usually 3NF).-  Most likely to have data from the past hour

- Data is inserted and updated more often
- Typically uses an operational database

## OLAP (On-line Analytical Processing)

is characterized by relatively low volume of transactions. Queries are often very complex and involve aggregations. For OLAP systems a response time is an effectiveness measure. OLAP applications are widely used by Data Mining techniques. In OLAP database there is aggregated, historical data, stored in multi-dimensional schemas (usually star schema).-  Typically uses a data warehouse

- Help business with decision making and problem solving
- Queries a large amount of data
The following table summarizes the major differences between OLTP and OLAP system design.

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 40%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr class="header">
<th></th>
<th><p><strong>OLTP System</strong></p>
<p><strong>Online Transaction Processing</strong></p>
<p><strong>(Operational System)</strong></p></th>
<th><p><strong>OLAP System</strong></p>
<p><strong>Online Analytical Processing</strong></p>
<p><strong>(Data Warehouse)</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td>Source of data</td>
<td>Operational data; OLTPs are the original source of the data.</td>
<td>Consolidation data; OLAP data comes from the various OLTP Databases</td>
</tr>
<tr>
<td>Purpose of data</td>
<td>To control and run fundamental business tasks</td>
<td>To help with planning, problem solving, and decision support</td>
</tr>
<tr>
<td>What the data</td>
<td>Reveals a snapshot of ongoing business processes</td>
<td>Multi-dimensional views of various kinds of business activities</td>
</tr>
<tr>
<td>Inserts and Updates</td>
<td>Short and fast inserts and updates initiated by end users</td>
<td>Periodic long-running batch jobs refresh the data</td>
</tr>
<tr>
<td>Queries</td>
<td>Relatively standardized and simple queries Returning relatively few records</td>
<td>Often complex queries involving aggregations</td>
</tr>
<tr>
<td>Processing Speed</td>
<td>Typically very fast</td>
<td>Depends on the amount of data involved; batch data refreshes and complex queries may take many hours; query speed can be improved by creating indexes</td>
</tr>
<tr>
<td>Space Requirements</td>
<td>Can be relatively small if historical data is archived</td>
<td>Larger due to the existence of aggregation structures and history data; requires more indexes than OLTP</td>
</tr>
<tr>
<td>Database Design</td>
<td>Highly normalized with many tables</td>
<td>Typically de-normalized with fewer tables; use of star and/or snowflake schemas</td>
</tr>
<tr>
<td>Backup and Recovery</td>
<td>Backup religiously; operational data is critical to run the business, data loss is likely to entail significant monetary loss and legal liability</td>
<td>Instead of regular backups, some environments may consider simply reloading the OLTP data as a recovery method</td>
</tr>
</tbody>
</table>
1. ClickHouse

2. Druid

3. Pinot
<https://medium.com/@leventov/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7>

## RTAP - Real Time Analytic Processing

Stream processing

## HTAP - Hybrid Transaction + Analytical Processing

OLTP + OLAP together on the same database instance
