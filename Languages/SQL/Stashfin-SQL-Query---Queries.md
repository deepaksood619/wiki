# example SQL Query / Queries

Created: 2020-02-13 15:34:08 +0500

Modified: 2022-11-19 18:47:56 +0500

---

## SELECT count(*) AS TOTALNUMBEROFTABLES FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'sttash_website_LIVE'

## # 20 Apr 2021 - 955

## # 01/06/22 - 926

## # 20/07/22 - 927

## # Show all unused indexes

select count(*) from sys.schema_unused_indexes;

## # show all unused tables

## SHOW TABLE STATUS where `Rows` = 0

## SHOW TABLE STATUS where `Rows` = 0

## # 37

## SHOW TABLE STATUS where `Rows` < 5

## # 101

show master status; #check binlog position

SELECT @@TX_ISOLATION;

SHOW ENGINE INNODB STATUS;

SELECT * FROM INFORMATION_SCHEMA.INNODB_TRX;

select event_name, current_alloc from sys.memory_global_by_current_bytes;

show variables like '%binlog%';

show variables like '%log_bin%';

SELECT ( @@key_buffer_size

+ @@query_cache_size

+ @@innodb_buffer_pool_size

+ @@innodb_log_buffer_size

+ @@max_connections * (

@@read_buffer_size

+ @@read_rnd_buffer_size

+ @@sort_buffer_size

+ @@join_buffer_size

+ @@binlog_cache_size

+ @@thread_stack

+ @@tmp_table_size )

) / (1024 *1024* 1024) AS MAX_MEMORY_GB;

SELECT

r.trx_id waiting_trx_id,

r.trx_mysql_thread_id waiting_thread,

r.trx_query waiting_query,

b.trx_id blocking_trx_id,

b.trx_mysql_thread_id blocking_thread,

b.trx_query blocking_query

FROM    information_schema.innodb_lock_waits w

INNER JOIN information_schema.innodb_trx b

ON b.trx_id = w.blocking_trx_id

INNER JOIN information_schema.innodb_trx r

ON r.trx_id = w.requesting_trx_id;

## Delete performance schema tables

call sys.ps_truncate_all_tables(true);

## To get all tables with columnscolumnAorColumnBin the databaseYourDatabase

SELECT DISTINCT TABLE_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME IN ('columnA','ColumnB')
AND TABLE_SCHEMA='YourDatabase';

## Sizing

## # Table combined with index

SELECT

TABLE_NAME AS `Table`,

ROUND((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024 / 1024) AS `Size (GB)`

FROM

information_schema.TABLES

WHERE

TABLE_SCHEMA = "sttash_website_LIVE"

ORDER BY

(DATA_LENGTH + INDEX_LENGTH)

DESC;

show indexes from <table_name>;

SHOW EXTENDED INDEX FROM <table_name>;

## # Different index sizes per table

SELECT database_name, table_name, index_name,

ROUND(stat_value * @@innodb_page_size / 1024 / 1024 / 1024, 2) size_in_gb

FROM mysql.innodb_index_stats

WHERE stat_name = 'size'

ORDER BY size_in_gb DESC;

## # Only index sizes

select table_schema as database_name,

table_name,

round(index_length/1024/1024,2) as index_size

from information_schema.tables

where table_type = 'BASE TABLE'

and table_schema not in ('information_schema', 'sys',

'performance_schema', 'mysql')

order by index_size desc;

## # Get all FullText indexes

SELECT TABLE_SCHEMA, TABLE_NAME

FROM information_schema.statistics

WHERE index_type LIKE 'FULLTEXT%';

## # defragmentation

select table_name,

round(data_length/1024/1024) as data_length_mb,

round(data_free/1024/1024) as data_free_mb

from information_schema.tables

where round(data_free/1024/1024) > 500

order by data_free_mb;

OPTIMIZE TABLE sttash_website_LIVE.email_instance_moratorium;

## Others

SELECT date(create_date), COUNT(*) FROM userDeviceSms WHERE date(create_date) BETWEEN NOW() - INTERVAL 6 HOUR AND NOW()

group by date(create_date)

order by date(create_date);

SELECT CONCAT(YEAR(create_date), " ",

MONTH(create_date)) as month,

count(id)

FROM st_customer_detail

GROUP BY YEAR(create_date),

MONTH(create_date)

ORDER BY YEAR(create_date) DESC, MONTH(create_date) DESC;

SELECT

customer_id, json_extract(template_data,'$.agent'), count(*) as count

FROM

communication_log

WHERE

template_id = 'chat_link'

AND create_date BETWEEN NOW() - INTERVAL 6 HOUR AND NOW()

group by customer_id, json_extract(template_data,'$.agent')

ORDER BY count DESC;

SELECT

c.id, cron_name, template_id_id, body

FROM

crons_cron c

JOIN

communication_templates t ON c.template_id_id = t.id

WHERE

c.id IN (27,43,205,206,207,210,211,214,236,274,301,302,304,334,339,341,345,349,350,398,399,404,405,406,407,408,423,460,727,728,729,730,732,753);
