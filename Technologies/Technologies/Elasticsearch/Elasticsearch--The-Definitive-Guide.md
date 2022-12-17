# Elasticsearch: The Definitive Guide

Created: 2019-04-18 17:14:07 +0500

Modified: 2019-06-09 21:22:43 +0500

---

Elasticsearch is a distributed, scalable, real-time search and analytics engine. It enables you to search, analyze, and explore your data. It exists because raw data sitting on a hard drive is just not useful.

A distributed real-time document store whereevery fieldis indexed and searchable

## Features

- Full Text Search
- real-time analytics of structured data
- Scalable search index
- Database queries only store and retrieve
- Indexing Preprocessing
  - Remove formatting
  - Remove stop words
  - Stemming - reduces the word down to its root
  - Add synonyms
- Corpus of documents
- Tokens
- Inverted index
- Add fuzziness
- Based on Apache Lucene
- First implementation was Compass 1 and Compass 2, and elasticsearch is the 3rd implementation

- Distributed and Highly Available Search Engine.
  - Each index is fully sharded with a configurable number of shards.
  - Each shard can have one or more replicas.
  - Read / Search operations performed on any of the replica shards.
- Multi Tenant.
  - Support for more than one index.
  - Index level configuration (number of shards, index storage, ...).
- Various set of APIs
  - HTTPRESTfulAPI
  - Native JavaAPI.
  - All APIs perform automatic node operation rerouting.
- Document oriented
  - No need for upfront schema definition.
  - Schema can be defined for customization of the indexing process.
- Reliable, Asynchronous Write Behind for long term persistency.
- (Near) Real Time Search.
- Built on top of Lucene
  - Each shard is a fully functional Lucene index
  - All the power of Lucene easily exposed through simple configuration / plugins.
- Per operation consistency
  - Single document level operations are atomic, consistent, isolated and durable.

## Real world use cases

- **Wikipedia** uses Elasticsearch to provide full-text search with highlighted search snippets, andsearch-as-you-typeanddid-you-meansuggestions.
- **The Guardian** uses Elasticsearch to combine visitor logs with social -network data to provide real-time feedback to its editors about the public's response to new articles.
- **Stack Overflow** combines full-text search with geolocation queries and usesmore-like-thisto find related questions and answers.
- **GitHub** uses Elasticsearch to query 130 billion lines of code.

## Navigating this book

- Chapters [You Know, for Search...](https://www.elastic.co/guide/en/elasticsearch/guide/current/intro.html) through [Inside a Shard](https://www.elastic.co/guide/en/elasticsearch/guide/current/inside-a-shard.html) provide an introduction to Elasticsearch. They explain how to get your data in and out of Elasticsearch, how Elasticsearch interprets the data in your documents, how basic search works, and how to manage indices. Chapters [Life Inside a Cluster](https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-cluster.html), [Distributed Document Store](https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-docs.html), [Distributed Search Execution](https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-search.html), and [Inside a Shard](https://www.elastic.co/guide/en/elasticsearch/guide/current/inside-a-shard.html) are supplemental chapters that provide more insight into the distributed processes at work, but are not required reading.
- Chapters [Structured Search](https://www.elastic.co/guide/en/elasticsearch/guide/current/structured-search.html) through [Controlling Relevance](https://www.elastic.co/guide/en/elasticsearch/guide/current/controlling-relevance.html) offer a deep dive into search---how to index and query your data to allow you to take advantage of more-advanced concepts such as word proximity, and partial matching. You will understand how relevance works and how to control it to ensure that the best results are on the first page.
- Chapters [Getting Started with Languages](https://www.elastic.co/guide/en/elasticsearch/guide/current/language-intro.html) through [Typoes and Mispelings](https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzzy-matching.html) tackle the thorny subject of dealing with human language through effective use of analyzers and queries. We start with an easy approach to language analysis before diving into the complexities of language, alphabets, and sorting. We cover stemming, stopwords, synonyms, and fuzzy matching.
- Chapters [High-Level Concepts](https://www.elastic.co/guide/en/elasticsearch/guide/current/aggs-high-level.html) through [Doc Values and Fielddata](https://www.elastic.co/guide/en/elasticsearch/guide/current/docvalues-and-fielddata.html) discuss aggregations and analytics---ways to summarize and group your data to show overall trends.
- Chapters [Geo Points](https://www.elastic.co/guide/en/elasticsearch/guide/current/geopoints.html) through [Geo Shapes](https://www.elastic.co/guide/en/elasticsearch/guide/current/geo-shapes.html) present the two approaches to geolocation supported by Elasticsearch: lat/lon geo-points, and complex geo-shapes.
- Chapters [Handling Relationships](https://www.elastic.co/guide/en/elasticsearch/guide/current/relations.html) through [Designing for Scale](https://www.elastic.co/guide/en/elasticsearch/guide/current/scale.html) talk about how to model your data to work most efficiently with Elasticsearch. Representing relationships between entities is not as easy in a search engine as it is in a relational database, which has been designed for that purpose. These chapters also explain how to suit your index design to match the flow of data through your system.
- Finally, Chapters [Monitoring](https://www.elastic.co/guide/en/elasticsearch/guide/current/cluster-admin.html) through [Post-Deployment](https://www.elastic.co/guide/en/elasticsearch/guide/current/post_deploy.html) discuss moving to production: the important configurations, what to monitor, and how to diagnose and prevent problems.

## Contents

1. **Getting Started**

    a.  You Know, for Search

    b.  Life Inside a Cluster

    c.  Data In, Data Out

    d.  Distributed Document Store

    e.  Searching - The Basic Tools

    f.  Mapping and Analysis

    g.  Full-Body Search

    h.  Sorting and Relevance

    i.  Distributed Search Execution

    j.  Index Management

    k.  Inside a Shard

2. **Search in Depth**

    a.  Structured Search

    b.  Full-Text Search

    c.  Multifield Search

    d.  Proximity Matching

    e.  Partial Matching

    f.  Controlling Relevance

3. **Dealing with Human Language**

    a.  Getting Started with Languages

    b.  Indentifying Words

    c.  Normalizing Tokens

    d.  Reducing Words to Their Root Form

    e.  Stopwords: Performance Versus Precision

    f.  Synonyms

    g.  Typoes and Mispelings

4. **Aggregations**

    a.  High-Level Concepts

    b.  Aggregation Test-Drive

    c.  Building Bar Charts

    d.  Looking at Time

    e.  Scoping Aggregations

    f.  Sorting Queries and Aggregations

    g.  Sorting Multivalue Buckets

    h.  Approximate Aggregations

    i.  Significant Terms

    j.  Doc Values and Fielddata

    k.  Closing Thoughts

5. **Geolocation**

    a.  Geo Points

    b.  Geohashes

    c.  Geo Aggregations

    d.  Goe Shapes

6. **Modeling Your Data**

    a.  Handling Relationships

    b.  Nested Objects

    c.  Parent-Child Relationship

    d.  Designing for Scale

7. **Administration, Monitoring, and Deployment**

    a.  Monitoring

    b.  Production Deployment

    c.  Post-Deployment

## References

<https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html>

<https://dev.to/full_stackgeek/the-architecture-of-elasticsearch-basic-overview-3c84>
