# Monitoring

# Confluent Control Center

Confluent Control Center is a web-based tool for managing and monitoring Apache Kafka. Control Center provides the functionality for building and monitoring production data pipelines and streaming applications.

## Data Streams

You can use Control Center to monitor your data streams end to end, from producer to consumer. Use Control Center to verify that every message sent is received (and received only once), and to measure system performance end to end. Drill down to better understand cluster usage, and identify any problems.

## System Health

Control Center can monitor the health of your Kafka clusters. You can see trends for important broker and topic health metrics, as well as set alerts on important cluster KPIs.

## Kafka Connect Configuration

You can also use Control Center to manage and monitor Kafka Connect: the open source toolkit for connecting external systems to Kafka. You can easily add new sources to load data from external data systems and new sinks to write data into external data systems. Additionally, you can manage, monitor, and configure connectors with Confluent Control Center.

## References

<https://docs.confluent.io/current/tutorials/cp-demo/docs/index.html#cp-demo>

# Tips

1. Monitor both space and time retention

2. Keep as little transient data around

3. Have a quick way to increase retention

4. Use multi-tiered replication alerts

5. Balance your cluster by IO and leadership

6. Make sure lag monitoring works when consumers stop committing

## Monitoring (Definitive Guide)

- Metrics Basics
- Kafka Broker Metrics
  - Under-replicated partitions
  - Broker metrics
  - Topic and partition metrics
  - JVM monitoring
  - OS monitoring
  - Logging
- Client Monitoring
  - Producer metrics
  - Consumer metrics
  - Quotas
- Lag Monitoring
- End-to-End Monitoring
  - Kakfa-monitor <https://github.com/linkedin/kafka-monitor>

## Tools

- kafka manager
- kafka-lag-exporter

## Metrics

<https://docs.google.com/spreadsheets/d/1qZW7xBiuGkiiEqf0rhCHGVRYGIISLYmJQMTNz9HkonU/edit#gid=1068940419>

<https://medium.com/quantyca/how-to-monitor-your-kafka-cluster-efficiently-d45ce37c02f1>
