# Design Patterns

Created: 2020-07-23 16:30:51 +0500

Modified: 2021-12-28 21:45:09 +0500

---

## Design Patterns of Microservices

1.  [Aggregator](https://www.edureka.co/blog/microservices-design-patterns#Aggregator)2.  [**API Gateway**](https://www.edureka.co/blog/microservices-design-patterns#APIGateway)

3.  [**Chained or Chain of Responsibility**](https://www.edureka.co/blog/microservices-design-patterns#Chained)

4.  [**Asynchronous Messaging**](https://www.edureka.co/blog/microservices-design-patterns#AsynchronousMessaging)5.  [Database or Shared Data](https://www.edureka.co/blog/microservices-design-patterns#Database)

6.  [Event Sourcing](https://www.edureka.co/blog/microservices-design-patterns#EventSourcing)

7.  [Branch](https://www.edureka.co/blog/microservices-design-patterns#Branch)

8.  [Command Query Responsibility Segregator](https://www.edureka.co/blog/microservices-design-patterns#CQRS)

9.  [Circuit Breaker](https://www.edureka.co/blog/microservices-design-patterns#CircuitBreaker)

10. [Decomposition](https://www.edureka.co/blog/microservices-design-patterns#Decomposition)
<https://www.edureka.co/blog/microservices-design-patterns>
![image](media/Microservice-Architecture_Design-Patterns-image1.jpg)
-   Decomposition patterns
    -   [Decompose by business capability](https://microservices.io/patterns/decomposition/decompose-by-business-capability.html)
    -   [Decompose by subdomain](https://microservices.io/patterns/decomposition/decompose-by-subdomain.html)
## Functional Decomposition

Functional decomposition is a term that engineers use to describea set of steps in which they break down the overall function of a device, system, or process into its smaller parts. A function is simply a task that is performed by a device, system, or process. Decomposition is a process of breaking down.

<https://en.wikipedia.org/wiki/Functional_decomposition>-   The[Database per Service pattern](https://microservices.io/patterns/data/database-per-service.html)describes how each service has its own database in order to ensure loose coupling.
-   The[API Gateway pattern](https://microservices.io/patterns/apigateway.html)defines how clients access the services in a microservice architecture.
-   The[Client-side Discovery](https://microservices.io/patterns/client-side-discovery.html)and[Server-side Discovery](https://microservices.io/patterns/server-side-discovery.html)patterns are used to route requests for a client to an available service instance in a microservice architecture.
-   The Messaging and Remote Procedure Invocation patterns are two different ways that services can communicate.
-   The[Single Service per Host](https://microservices.io/patterns/deployment/single-service-per-host.html)and[Multiple Services per Host](https://microservices.io/patterns/deployment/multiple-services-per-host.html)patterns are two different deployment strategies.
-   Cross-cutting concerns patterns:[Microservice chassis pattern](https://microservices.io/patterns/microservice-chassis.html)and[Externalized configuration](https://microservices.io/patterns/externalized-configuration.html)
-   Testing patterns:[Service Component Test](https://microservices.io/patterns/testing/service-component-test.html)and[Service Integration Contract Test](https://microservices.io/patterns/testing/service-integration-contract-test.html)
-   [Circuit Breaker](https://microservices.io/patterns/reliability/circuit-breaker.html)
-   [Access Token](https://microservices.io/patterns/security/access-token.html)
-   Observability patterns:
    -   [Log aggregation](https://microservices.io/patterns/observability/application-logging.html)
    -   [Application metrics](https://microservices.io/patterns/observability/application-metrics.html)
    -   [Audit logging](https://microservices.io/patterns/observability/audit-logging.html)
    -   [Distributed tracing](https://microservices.io/patterns/observability/distributed-tracing.html)
    -   [Exception tracking](https://microservices.io/patterns/observability/exception-tracking.html)
    -   [Health check API](https://microservices.io/patterns/observability/health-check-api.html)
    -   [Log deployments and changes](https://microservices.io/patterns/observability/log-deployments-and-changes.html)
-   UI patterns:
    -   [Server-side page fragment composition](https://microservices.io/patterns/ui/server-side-page-fragment-composition.html)
    -   [Client-side UI composition](https://microservices.io/patterns/ui/client-side-ui-composition.html)
<https://microservices.io/patterns/microservices.html>

## Catalog of patterns**

<table>
<colgroup>
<col style="width: 22%" />
<col style="width: 58%" />
<col style="width: 19%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Pattern</strong></th>
<th><strong>Summary</strong></th>
<th><strong>Category</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador">Ambassador</a></td>
<td>Create helper services that send network requests on behalf of a consumer service or application.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer">Anti-Corruption Layer</a></td>
<td>Implement a façade or adapter layer between a modern application and a legacy system.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/async-request-reply">Asynchronous Request-Reply</a></td>
<td>Decouple backend processing from a frontend host, where backend processing needs to be asynchronous, but the frontend still needs a clear response.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends"><strong>Backends for Frontends</strong></a></td>
<td><p><strong>Create separate backend services to be consumed by specific frontend applications or interfaces.</strong></p>
<p></p>
<p><a href="https://samnewman.io/patterns/architectural/bff/">https://samnewman.io/patterns/architectural/bff/</a></p></td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation"><strong>Design and Implementation</strong></a></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead">Bulkhead</a></td>
<td>Isolate elements of an application into pools so that if one fails, the others will continue to function.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside">Cache-Aside</a></td>
<td>Load data on demand into a cache from a data store</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/choreography">Choreography</a></td>
<td>Let each service decide when and how a business operation is processed, instead of depending on a central orchestrator.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker">Circuit Breaker</a></td>
<td>Handle faults that might take a variable amount of time to fix when connecting to a remote service or resource.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/claim-check">Claim Check</a></td>
<td>Split a large message into a claim check and a payload to avoid overwhelming a message bus.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction">Compensating Transaction</a></td>
<td>Undo the work performed by a series of steps, which together define an eventually consistent operation.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/competing-consumers">Competing Consumers</a></td>
<td>Enable multiple concurrent consumers to process messages received on the same messaging channel.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/compute-resource-consolidation">Compute Resource Consolidation</a></td>
<td>Consolidate multiple tasks or operations into a single computational unit</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs">CQRS</a></td>
<td>Segregate operations that read data from operations that update data by using separate interfaces.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/deployment-stamp">Deployment Stamps</a></td>
<td>Deploy multiple independent copies of application components, including data stores.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability">Availability</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing">Event Sourcing</a></td>
<td>Use an append-only store to record the full series of events that describe actions taken on data in a domain.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/external-configuration-store">External Configuration Store</a></td>
<td>Move configuration information out of the application deployment package to a centralized location.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/federated-identity">Federated Identity</a></td>
<td>Delegate authentication to an external identity provider.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/security">Security</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/gatekeeper">Gatekeeper</a></td>
<td>Protect applications and services by using a dedicated host instance that acts as a broker between clients and the application or service, validates and sanitizes requests, and passes requests and data between them.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/security">Security</a></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation">Gateway Aggregation</a></td>
<td>Use a gateway to aggregate multiple individual requests into a single request.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading">Gateway Offloading</a></td>
<td>Offload shared or specialized service functionality to a gateway proxy.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-routing">Gateway Routing</a></td>
<td>Route requests to multiple services using a single endpoint.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/geodes">Geodes</a></td>
<td>Deploy backend services into a set of geographical nodes, each of which can service any client request in any region.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability">Availability</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring">Health Endpoint Monitoring</a></td>
<td>Implement functional checks in an application that external tools can access through exposed endpoints at regular intervals.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability">Availability</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/index-table">Index Table</a></td>
<td>Create indexes over the fields in data stores that are frequently referenced by queries.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/leader-election">Leader Election</a></td>
<td>Coordinate the actions performed by a collection of collaborating task instances in a distributed application by electing one instance as the leader that assumes responsibility for managing the other instances.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/materialized-view">Materialized View</a></td>
<td>Generate prepopulated views over the data in one or more data stores when the data isn't ideally formatted for required query operations.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters">Pipes and Filters</a></td>
<td>Break down a task that performs complex processing into a series of separate elements that can be reused.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/priority-queue">Priority Queue</a></td>
<td>Prioritize requests sent to services so that requests with a higher priority are received and processed more quickly than those with a lower priority.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber">Publisher/Subscriber</a></td>
<td>Enable an application to announce events to multiple interested consumers asynchronously, without coupling the senders to the receivers.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling">Queue-Based Load Leveling</a></td>
<td>Use a queue that acts as a buffer between a task and a service that it invokes in order to smooth intermittent heavy loads.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability">Availability</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/retry">Retry</a></td>
<td>Enable an application to handle anticipated, temporary failures when it tries to connect to a service or network resource by transparently retrying an operation that's previously failed.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/scheduler-agent-supervisor">Scheduler Agent Supervisor</a></td>
<td>Coordinate a set of actions across a distributed set of services and other remote resources.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency">Resiliency</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/sequential-convoy">Sequential Convoy</a></td>
<td>Process a set of related messages in a defined order, without blocking processing of other groups of messages.</td>
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging">Messaging</a></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/sharding">Sharding</a></td>
<td>Divide a data store into a set of horizontal partitions or shards.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar">Sidecar</a></td>
<td>Deploy components of an application into a separate process or container to provide isolation and encapsulation.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting">Static Content Hosting</a></td>
<td>Deploy static content to a cloud-based storage service that can deliver them directly to the client.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler">Strangler</a></td>
<td>Incrementally migrate a legacy system by gradually replacing specific pieces of functionality with new applications and services.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation">Design and Implementation</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring">Management and Monitoring</a></p></td>
</tr>
<tr class="even">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/throttling">Throttling</a></td>
<td>Control the consumption of resources used by an instance of an application, an individual tenant, or an entire service.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability">Availability</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability">Performance and Scalability</a></p></td>
</tr>
<tr class="odd">
<td><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/valet-key">Valet Key</a></td>
<td>Use a token or key that provides clients with restricted direct access to a specific resource or service.</td>
<td><p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management">Data Management</a>,</p>
<p><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/category/security">Security</a></p></td>
</tr>
</tbody>
</table>

<https://docs.microsoft.com/en-us/azure/architecture/patterns>

## Enterprise Application Architecture
-   **Domain Logic Patterns:** Transaction Script, Domain Model, Table Module, Service Layer.
-   **Data Source Architectural Patterns:** Table Data Gateway, Row Data Gateway, Active Record, Data Mapper.
-   **Object-Relational Behavioral Patterns:** Unit of Work, Identity Map, Lazy Load
-   **Object-Relational Structural Patterns:** Identity Field, Foreign Key Mapping, Association Table Mapping, Dependent Mapping, Embedded Value, Serialized LOB, Single Table Inheritance, Class Table Inheritance, Concrete Table Inheritance, Inheritance Mappers.
-   **Object-Relational Metadata Mapping Patterns:** Metadata Mapping, Query Object, Repository.
-   **Web Presentation Patterns:** Model View Controller, Page Controller, Front Controller, Template View, Transform View, Two-Step View, Application Controller.
-   **Distribution Patterns:** Remote Facade, Data Transfer Object
-   **Offline Concurrency Patterns:** Optimistic Offline Lock, Pessimistic Offline Lock, Coarse Grained Lock, Implicit Lock.
-   **Session State Patterns:** Client Session State, Server Session State, Database Session State.
-   **Base Patterns:** Gateway, Mapper, Layer Supertype, Separated Interface, Registry, Value Object, Money, Special Case, Plugin, Service Stub, Record Set
<https://martinfowler.com/eaaCatalog/index.html>
