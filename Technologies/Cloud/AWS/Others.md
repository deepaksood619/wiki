# Others

Created: 2020-02-11 22:36:45 +0500

Modified: 2021-12-05 02:55:13 +0500

---

## Creating a new account

1. Signup

2. Create admin group

3. Create account alias

4. Transfer billing account to admin group users

<https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_billing.html>

5. Never use your root credentials again

6. Create billing alarms

<https://medium.com/@harrietty/setting-up-your-aws-account-the-right-way-dfa9a6b5cfbb>

<https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_billing.html>

<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html>

## Networking > Elastic Load Balancing

Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.

## Network Load Balancer Components

Aload balancerserves as the single point of contact for clients. The load balancer distributes incoming traffic across multiple targets, such as Amazon EC2 instances. This increases the availability of your application. You add one or more listeners to your load balancer.

Alistenerchecks for connection requests from clients, using the protocol and port that you configure, and forwards requests to a target group.

Eachtarget grouproutes requests to one or more registered targets, such as EC2 instances, using the TCP protocol and the port number that you specify. You can register a target with multiple target groups. You can configure health checks on a per target group basis. Health checks are performed on all targets registered to a target group that is specified in a listener rule for your load balancer.

A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second. After the load balancer receives a connection request, it selects a target from the target group for the default rule. It attempts to open a TCP connection to the selected target on the port specified in the listener configuration.

<https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html>

## EC2 > Networking > Elastic IP Addresses

AnElastic IP addressis a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet; for example, to connect to your instance from your local computer.

<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html>

## EC2 > Networking > ENI

An elastic network interface (referred to as a*network interface*in this documentation) is a logical networking component in a VPC that represents a virtual network card.

<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html>

## IAM > Roles > Identity Providers and Federation

If you already manage user identities outside of AWS, you can use IAMidentity providersinstead of creating IAM users in your AWS account. With an identity provider (IdP), you can manage your user identities outside of AWS and give these external user identities permissions to use AWS resources in your account. This is useful if your organization already has its own identity system, such as a corporate user directory. It is also useful if you are creating a mobile app or web application that requires access to AWS resources.

When you use an IAM identity provider, you don't have to create custom sign-in code or manage your own user identities. The IdP provides that for you. Your external users sign in through a well-known IdP, such as Login with Amazon, Facebook, or Google. You can give those external identities permissions to use AWS resources in your account. IAM identity providers help keep your AWS account secure because you don't have to distribute or embed long-term security credentials, such as access keys, in your application.

To use an IdP, you create an IAM identity provider entity to establish a trust relationship between your AWS account and the IdP. IAM supports IdPs that are compatible with [OpenID Connect (OIDC)](http://openid.net/connect/) or [SAML 2.0 (Security Assertion Markup Language 2.0)](https://wiki.oasis-open.org/security)

<https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html>

## Security Groups

## Cluster security group

- It is designed to allow all traffic from the control plane and managed node groups to flow freely between each other

## Node security group

- It is designed to allow traffic between worker nodes, or allowing a service like rds, redshift

## AWS Data Migration Service (DMS)

AWS Database Migration Service (AWS DMS) is a cloud service that makes it easy to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS to migrate your data into the AWS Cloud, between on-premises instances (through an AWS Cloud setup), or between combinations of cloud and on-premises setups.

With AWS DMS, you can perform one-time migrations, and you can replicate ongoing changes to keep sources and targets in sync. If you want to change database engines, you can use the AWS Schema Conversion Tool (AWS SCT) to translate your database schema to the new platform. You then use AWS DMS to migrate the data. Because AWS DMS is a part of the AWS Cloud, you get the cost efficiency, speed to market, security, and flexibility that AWS services offer.

A task can consist of three major phases

- The full load of existing data
- The application of cached changes
- Ongoing replication

## Components

- Replication instance
- Endpoint
- Replication tasks

## Migration Types

- Full load (Migrate existing data) -- If you can afford an outage long enough to copy your existing data, this option is a good one to choose. This option simply migrates the data from your source database to your target database, creating tables when necessary.
- Full load + CDC (Migrate existing data and replicate ongoing changes) -- This option performs a full data load while capturing changes on the source. After the full load is complete, captured changes are applied to the target. Eventually, the application of changes reaches a steady state. At this point, you can shut down your applications, let the remaining changes flow through to the target, and then restart your applications pointing at the target.
- CDC only (Replicate data changes only) -- In some situations, it might be more efficient to copy existing data using a method other than AWS DMS. For example, in a homogeneous migration, using native export and import tools might be more efficient at loading bulk data. In this situation, you can use AWS DMS to replicate changes starting when you start your bulk load to bring and keep your source and target databases in sync.

<https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.HighLevelView.html>

<https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Components.html>

[**https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html**](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html)

## Loading multiple tables in parallel

By default, AWS DMS loads eight tables at a time. You might see some performance improvement by increasing this slightly when using a very large replication server, such as a dms.c4.xlarge or larger instance.

<https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Troubleshooting.html>

[**https://aws.amazon.com/premiumsupport/knowledge-center/dms-batch-apply-cdc-replication/**](https://aws.amazon.com/premiumsupport/knowledge-center/dms-batch-apply-cdc-replication/)

<https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html>

[**https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html**](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html)

"ParallelApplyThreads": 4,

"ParallelApplyBufferSize": 100,

"CommitRate": 50000

BatchApplyEnabled

"ChangeProcessingTuning": {

"BatchApplyPreserveTransaction": true,

## "BatchApplyTimeoutMin": 120, / 300

## "BatchApplyTimeoutMax": 300, / 600

~~"BatchApplyMemoryLimit": 500, (for preprocessing)~~

~~"BatchSplitSize": 0,~~

~~"MinTransactionSize": 10000,~~

~~"CommitTimeout": 100,~~

"MemoryLimitTotal": 2048,

"MemoryKeepTime": 120,

"StatementCacheSize": 50

},

Connection settings - maxFileSize=250000 (250MB)

## Schema Conversion Tool

<https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html>

## Pricing

All data transfer into AWS Database Migration Service is free, and data transferred between AWS Database Migration Service and databases in Amazon RDS and Amazon EC2 Instances in the same Availability Zone also is free.

| c4.large | $0.154 |
|----------|---------|
| c5.large | $0.154 |

<https://hevodata.com/blog/aurora-to-redshift-data-migration-using-aws-dms>
