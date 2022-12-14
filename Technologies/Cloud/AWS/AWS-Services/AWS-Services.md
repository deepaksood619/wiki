# AWS Services

1. **Migration**

   - AWS Application Discovery Service

Discover On-Premises Applications to Streamline Migration

2. AWS Database Migration Service

Migrate Databases with Minimal Downtime

3. AWS Migration Hub

Track Migrations from a Single Place

4. AWS Server Migration Service

Migrate On-Premises Servers to AWS

5. AWS Snowball

Petabyte-scale Data Transport

6. AWS Snowball Edge

Petabyte-scale Data Transport with On-board Compute

7. AWS Snowmobile

Exabyte-scale Data Transport

2. **Management Tools**

   - Amazon CloudWatch

Monitor Resources and Applications

<https://github.com/monitoringartist/grafana-aws-cloudwatch-dashboards>

## Cloudwatch search queries

-Select -query

-QUERY -READ -WRITE

-server -lms_p2021030122 -sttashrdsmain -vishal_goyal -rdsadmin -deepak_sood -api-v2_p2021030121 -loan-tape-etl_c2021030122

## Logs Insight

fields *@timestamp*, *@message*

| sort *@timestamp* desc

| limit 20

fields *@timestamp*, *@message* | filter *@message* like /(?i)(connect)/ # | filter @timestamp > 1668527666 | fields tomillis(*@timestamp*) as millis # | filter @millis < 1668566034 | parse *@message* ',*,*,' as @instance,@user | parse *@message* /(?<@ip>d{1,3}.d{1,3}.d{1,3}.d{1,3})/ | stats count() AS counter by @user | sort by @counter desc | limit 100

2. AWS Auto Scaling

Scale Multiple Resources to Meet Demand

3. AWS CloudFormation

Create and Manage Resources with Templates

AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment. AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This gives you a single source of truth for your AWS and third party resources.

4. AWS CloudTrail

Track User Activity and API Usage

5. AWS Config

Track Resource Inventory and Changes

6. AWS OpsWorks

Automate Operations with Chef and Puppet

7. AWS Service Catalog

Create and Use Standardized Products

8. AWS Systems Manager

Gain Operational Insights and Take Action

9. AWS Trusted Advisor

Optimize Performance and Security

10. AWS Personal Health Dashboard

Personalized View of AWS Service Health

3. **Media Services**

   - Amazon Elastic Transcoder

Easy-to-use Scalable Media Transcoding

2. Amazon Kinesis Video Streams

Process and Analyze Video Streams

3. AWS Elemental MediaConvert

Convert File-based Video Content

4. AWS Elemental MediaLive

Convert Live Video Content

5. AWS Elemental MediaPackage

Video Origination and Packaging

6. AWS Elemental MediaStore

Media Storage and Simple HTTP Origin

7. AWS Elemental MediaTailor

Video Personalization and Monetization

4. **Machine Learning**

   - Amazon SageMaker

Build, Train, and Deploy Machine Learning Models at Scale

2. Amazon Comprehend

Discover Insights and Relationships in Text

3. Amazon Lex

Build Voice and Text Chatbots

4. Amazon Polly

Turn Text into Lifelike Speech

5. Amazon Rekognition

Analyze Image and Video

6. Amazon Machine Learning

Machine Learning for Developers

7. Amazon Translate

Natural and Fluent Language Translation

8. Amazon Transcribe

Automatic Speech Recognition

9. AWS DeepLens

Deep Learning Enabled Video Camera

10. AWS Deep Learning AMIs

Quickly Start Deep Learning on EC2

11. Apache MXNet on AWS

Scalable, High-performance Deep Learning

12. TensorFlow on AWS

Open-source Machine Intelligence Library

13. Amazon Textract

Easily extract printed text, handwriting, and data from virtually any document

<https://github.com/aws-samples/amazon-textract-code-samples/tree/master/python>

14. Amazon Kendra

Highly accurate intelligent search service powered by machine learning

- Quickly implement a unified search experience across multiple structured and unstructured content repositories.
- Use natural language processing (NLP) to get highly accurate answers without the need for machine learning (ML) expertise.
- Fine-tune your search results based on content attributes, freshness, user behavior, and more.
- Deliver ML-powered instant answers, FAQs, and document ranking as a fully managed service.

5. **Mobile Services**

   - AWS Amplify

<https://ui.docs.amplify.aws/?platform=react>

<https://docs.amplify.aws>

2. AWS Mobile Hub

Build, Test, and Monitor Apps

3. Amazon API Gateway

Build, Deploy, and Manage APIs

4. Amazon Pinpoint

Push Notifications for Mobile Apps

5. AWS AppSync

Real-time and Offline Mobile Data Apps

6. AWS Device Farm

Test Android, FireOS, and iOS Apps on Real Devices in the Cloud

7. AWS Mobile SDK

Mobile Software Development Kit

8. AWS Location Service

6. **AR & VR**

   - Amazon Sumerian

Build and Run VR and AR Applications

7. **Application Integeration**

   - AWS Step Functions

Coordinate Distributed Applications

AWS Step Functions is a serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications. Through its visual interface, you can create and run a series of checkpointed and event-driven workflows that maintain the application state.The output of one step acts as an input to the next. Each step in your application executes in order, as defined by your business logic.

Orchestrating a series of individual serverless applications, managing retries, and debugging failures can be challenging. As your distributed applications become more complex, the complexity of managing them also grows. Step Functions automatically manages error handling, retry logic, and state.With its built-in operational controls, Step Functions manages sequencing, error handling, retry logic, and state, removing a significant operational burden from your team.

2. Amazon Simple Queue Service (SQS)

Managed Message Queues

3. Amazon Simple Notification Service (SNS)

Pub/Sub, Mobile Push and SMS

Amazon Simple Notification Service (SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. Amazon SNS provides topics for high-throughput, push-based, many-to-many messaging. Using Amazon SNS topics, your publisher systems can fan out messages to a large number of subscriber endpoints for parallel processing, including [Amazon SQS](https://aws.amazon.com/sqs/) queues, [AWS Lambda](https://aws.amazon.com/lambda/) functions, and HTTP/S webhooks. Additionally, SNS can be used to fan out notifications to end users using mobile push, SMS, and email.

4. Amazon MQ

Managed Message Broker for ActiveMQ

Amazon MQ is a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud. Message brokers allow different software systems--often using different programming languages, and on different platforms--to communicate and exchange information. Amazon MQ reduces your operational load by managing the provisioning, setup, and maintenance of ActiveMQ, a popular open-source message broker. Connecting your current applications to Amazon MQ is easy because it uses industry-standard APIs and protocols for messaging, including JMS, NMS, AMQP, STOMP, MQTT, and WebSocket. Using standards means that in most cases, there's no need to rewrite any messaging code when you migrate to AWS.

5. Amazon Eventbridge

Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated Software-as-a-Service (SaaS) applications, and AWS services. EventBridge delivers a stream of real-time data from event sources, such as Zendesk, Datadog, or Pagerduty, and routes that data to targets like AWS Lambda. You can set up routing rules to determine where to send your data to build application architectures that react in real time to all of your data sources. EventBridge makes it easy to build event-driven applications because it takes care of event ingestion and delivery, security, authorization, and error handling for you.

Schema Registry - Now in Preview:As your applications become more interconnected through events, you need to spend more effort in finding events and understanding their structure in order to write code to react to those events. The Amazon EventBridge schema registry stores event structure - or schema - in a shared central location and maps those schemas to code for Java, Python, and Typescript so it's easy to use events as objects in your code. Schema from your event bus can be automatically added to the registry through the schema discovery feature. You can connect to and interact with the schema registry from the AWS Management Console, APIs, or the SDK Toolkits for Jetbrains (Intellij, PyCharm, Webstorm, Rider) and VS Code.

<https://aws.amazon.com/eventbridge>

8. **Customer Engagement**

   - Amazon Connect

Cloud-based Contact Center

2. Amazon Pinpoint

Push Notifications for Mobile Apps

3. Amazon Simple Email Service (SES)

Email Sending and Receiving

9. **Business Productivity**

   - Alexa for Business

Empower your Organization with Alexa

2. Amazon Chime

Frustation-free Meetings, Video Calls, and Chat

Amazon Chime is a communications service that lets you meet, chat, and place business calls inside and outside your organization, all using a single application. Developers can use the same communications infrastructure and services that power Amazon Chime, and add audio calling, video calling, and screen sharing capabilities directly to their applications using the Amazon Chime SDK.

Amazon Chime Voice Connector is a service that enables enterprises to migrate their telephony workloads to AWS. IT professionals can use Voice Connector for low-cost SIP trunking from on-premises or cloud-based phone systems. Voice Connector supports inbound calling, outbound calling, or both. Developers can also use Voice Connector to build PSTN calling in their own applications using the Amazon Chime SDK or stream audio for phone call analytics and machine learning.

<https://aws.amazon.com/chime>

3. Amazon WorkDocs

Enterprise Storage and Sharing Service

4. Amazon WorkMail

Secure and Managed Business Email and Calendaring

10. **Desktop & App Streaming**

- Amazon WorkSpaces

Desktop Computing Service

2. Amazon AppStream 2.0

Stream Desktop Applications Securely to a Browser

11. **Internet of Things**

- AWS IoT Core

Connect Devices to the Cloud

2. Amazon FreeRTOS

IoT Operating System for Microcontrollers

3. AWS Greengrass

Local Compute, Messaging, and Sync for Devices

4. AWS IoT 1-Click

One Click Creation of an AWS Lambda Trigger

5. AWS IoT Analytics

Analytics for IoT Devices

6. AWS IoT Button

Cloud Programmable Dash Button

7. AWS IoT Device Defender

Security Management for IoT Devices

8. AWS IoT Device Management

Onboard, Organize, and Remotely Manage IoT Devices

12. **Game Development**

- Amazon GameLift

Simple, Fast, Cost-effective Dedicated Game Server Hosting

2. Amazon Lumberyard

A Free Cross-Platform 3D Game Engine with Full Source, Integrated with AWS and Twitch

13. **Others**

## Distributed Load Testing on AWS

Amazon Web Services (AWS) offers customers a scalable, distributed, and serverless architecture to deliver a load testing tool for web application performance testing. The Distributed Load Testing on AWS solution automatically launches and configures containers running on AWS Fargate to help you easily create and simulate thousands of connected users generating a select number of transactions per second without having to provision servers. This solution delivers application performance monitoring, which will help you understand how your application will perform at scale and at expected load, identifying bottlenecks before you release your application.

<https://aws.amazon.com/solutions/implementations/distributed-load-testing-on-aws>

<https://aws.amazon.com/about-aws/whats-new/2020/10/introducing-distributed-load-testing-v1-1>

## FinSpace

<https://aws.amazon.com/about-aws/whats-new/2021/05/introducing-amazon-finspace-a-fully-managed-service-to-store-prepare-and-analyze-data-for-the-financial-services-industry-fsi>

<https://aws.amazon.com/blogs/big-data/analyzing-petabytes-of-trade-and-quote-data-with-amazon-finspace>
