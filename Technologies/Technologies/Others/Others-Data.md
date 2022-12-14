# Others - Data

## Data Hub

Data Discovery and Lineage for Big Data Ecosystem

<https://github.com/linkedin/WhereHows/tree/datahub>

<https://engineering.linkedin.com/blog/2019/data-hub>

## Dagster

Dagster is a system for building modern data applications. Combining an elegant programming model and beautiful tools, Dagster allows infrastructure engineers, data engineers, and data scientists to seamlessly collaborate to process and produce the trusted, reliable data needed in today's world.

Data applications built with Dagster will have the following properties:

- Queryable, operable, and monitor-able by tools through an API.
- Constructed withdatadependencies, rather than justexecutiondependencies. In addition to defining the execution order of computation within a graph, Dagster also expresses data flowing through a graph.
- Self-describing with well-defined metadata, consumable by users and tooling alike.
- Business logic defined in your tool of choice, from Spark, to Python, to SQL, to Jupyter notebooks, or any arbitrary computation.
- Executable in a number of environments - locally, within CI/CD pipelines, staging, production so forth - by having first-class abstractions that allow an author to modify their computing environment/context while leaving their business logic unchanged.
- Designed for local development, with an out-of-the-box IDE-esque tool called Dagit.
- Monitorable by emitting a structured stream of events during computation, rather than solely relying on unstructured logging. These events describes the semantic meaning of a computation using a well-defined API, consumable and interpretable by tooling.
- Able to describe their data using a type system which isgradual, flexible, andoptional, allowing for incremental adoption. It is designed to supplement, not supplant, the type system of language or system that defines the actual computation.
- Designed for reuse. Solids describe their metadata, types, configuration, and resource requirements and are potentially reusable within many contexts.
- A typed configuration system, which enables high-quality error messages and tooling support, such as the config editor provided within Dagit.
- Targets existing computational infrastructure - e.g. Kubernetes, Airflow, Dask, FaaS platforms, etc - for scheduling and execution in a pluggable fashion. Airflow and Dask initially supported.

<https://dagster.readthedocs.io/en/0.6.6>

<https://medium.com/dagster-io/introducing-dagster-dbd28442b2b7>

<https://dagster.readthedocs.io/en/stable/sections/learn/tutorial/index.html>

[Dagster: A New Programming Model for Data Processing | Elementl](https://www.youtube.com/watch?v=D_1VJapCscc)

![image](../../media/Technologies-Others-Others-Data-image1.jpg)

## Dremel

Dremel is a scalable, interactive ad-hoc query system for analysis of read-only nested data. By combining multi-level execution trees and columnar data layout, it is capable of running aggregation queries over trillion-row tables in seconds. The system scales to thousands of CPUs and petabytes of data, and has thousands of users at Google.

<https://ai.google/research/pubs/pub36632>

## Dremio - The missing link in data lakes

## Talend

<https://www.talend.com>

<https://www.youtube.com/watch?v=bqa0kB59SUc>

## DVC

[DVC](https://dvc.org/) stands for "data version control". This project invites data scientists and engineers to a Git-inspired world, where all workflow versions are tracked, along with all the data artifacts and models, as well as associated metrics.

<https://dvc.org>

## DBT

Analytics engineering is the data transformation work that happens between loading data into your warehouse and analyzing it. dbt allows anyone comfortable with SQL to own that workflow.

<https://www.getdbt.com>
