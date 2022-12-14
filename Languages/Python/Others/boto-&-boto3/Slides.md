# Slides

Created: 2020-03-16 12:17:40 +0500

Modified: 2022-11-09 15:40:28 +0500

---

**Boto3**
-   AWS SDK for Python developers
    -   Software development kit
    -   Interact with AWS easily through Python
-   Supports Python 2 & 3
-   Data-driven from the group up
-   Up-to-date service API support
-   Consistent interface
-   Modern object-oriented API



![Introducing Boto 3 (Preview) Boto 3 Session Config Resources Clients Botocore Session Credentials Clients Authentication HI---rps Serialization ](media/boto-&-boto3_Slides-image1.png)

![Boto 3 Example import bot03 bot03. resource( ' s3 ') s3 Bucket( 'my-bucket') bucket bucket objects.all(): for obj in print(obj . key, obj last_modified) ](media/boto-&-boto3_Slides-image2.png)

![Feature: Clients • Exposes Botocore clients to developers • Generated from JSON service description • Provides low-level service access • Typically maps 1:1 with the service API • Exception: snake-cased method names --- ListBuckets => list buckets ](media/boto-&-boto3_Slides-image3.png)

![Feature: Clients import bot03 bot03 client( 'sqs') sqs sqs . list _ queues (QueueNamePrefix- ' test ' ) response print (response[ 'QueueUr1s ' ] ](media/boto-&-boto3_Slides-image4.png)

![](media/boto-&-boto3_Slides-image5.png)

![Feature: Client Pagination • Automatically handles pagination • Yields individual pages • You must process each page ](media/boto-&-boto3_Slides-image6.png)

![Feature: Client Pagination bot03. client( ' s3') # Get a paginator and iterate through each page s3 . get_paginator( ' list _ objects ' ) paginator paginator. paginate(Bucket= ' my-bucket ' ) : for page in page[ 'Contents ' ] : for obj in ' Key' l) ](media/boto-&-boto3_Slides-image7.png)

![Feature: Client Waiters Starting Running Terminated Amazon EC2 Instance ](media/boto-&-boto3_Slides-image8.png)

![Feature: Client Waiters bot03 client( 'ec2') ec2 # Get a waiter and wait for instance to be ready ec2 get_waiter( ' instance_running' ) waiter waiter. wait ' i-abc123 ' ] ) print('lnstance is ready! ') ](media/boto-&-boto3_Slides-image9.png)

Feature: Resources
-   Generated from JSON resource description
-   Object-oriented API for AWS
-   Identifiers & attributes
-   Actions
-   References
-   Sub-resources
-   Collections



![Resources Amazon EC2 instance = Instance(id) Amazon S3 bucket = Bucket(name) Amazon SQS queue = Queue(url) ](media/boto-&-boto3_Slides-image10.png)

![Resources: Identifiers Amazon EC2 instance.id Amazon S3 object.bucket_name, object.key Amazon SQS queue.url ](media/boto-&-boto3_Slides-image11.png)

![Resources: Attributes Amazon EC2 instance.instance_type Amazon S3 object.last_modified Amazon SQS queue.attributes['DelaySeconds'] ](media/boto-&-boto3_Slides-image12.png)

![Resources: Actions Amazon EC2 Amazon S3 object.put(Body='heIlo') Amazon SQS queue.receive_messages() ](media/boto-&-boto3_Slides-image13.png)

![Resources: References Amazon EC2 instance.subnet Amazon S3 Amazon SQS ](media/boto-&-boto3_Slides-image14.png)

![Resources: Sub-resources Amazon EC2 ec2.lnstance(id) Amazon S3 bucket.Object(key) Amazon SQS sqs.Queue(url) ](media/boto-&-boto3_Slides-image15.png)

![Resources: Collections Amazon EC2 ec2.instances Amazon S3 bucket.objects Amazon SQS sqs.queues ](media/boto-&-boto3_Slides-image16.png)

![Feature: Resources import bot03 bot03. resource( ' s3 ') s3 Object( 'my-bucket' , obj ' my-key. jpg ' ) print (obj content _ type) print (obj last_modified) 'image/ jpeg' datetime. datetime(2014, 9, 22, 21, 43, 49) ](media/boto-&-boto3_Slides-image17.png)

![Feature: Collections bot03') objects all(): for obj in print(obj key) sqs queues . ' a') : for queue in print(queue url) # Batch actions coming soon! bucket objects. delete() ](media/boto-&-boto3_Slides-image18.png)



**Project Example**

![Drop Video Transcoder IID ](media/boto-&-boto3_Slides-image19.png)

![Drop Video Transcoder Amazon S3 IID Amazon SNS Amazon SQS Amazon Elastic Transcoder ](media/boto-&-boto3_Slides-image20.png)



![Transcoding Setup • Elastic Transcoder requires configuration • S3 bucket for input • S3 bucket for output • Amazon SNS topic for notifications • IAM role for access • Transcoding pipeline • Transcoding job ](media/boto-&-boto3_Slides-image21.png)

![Basics: Session & Connection • A default session is created for you --- Config and credentials loaded from file / environment • Creating clients • Creating resources ](media/boto-&-boto3_Slides-image22.png)

![Basics: Session & Connection import bot03 # Creating a client by name bot03. client( ' s3 client # Creating a resource by name bot03 resource( 's3') resource ](media/boto-&-boto3_Slides-image23.png)

![Amazon S3 Uploading • Create a new bucket • Get a bucket by name • Upload a file ](media/boto-&-boto3_Slides-image24.png)

![Amazon S3 Uploading import bot03 # Create a new bucket bot03. resource( ' s3 ') s3 . create_bucket(Name= ' Bot03 ' ) bucket # Get a bucket by name s3 Bucket( 'Bot03') bucket ](media/boto-&-boto3_Slides-image25.png)

![Amazon S3 Uploading import bot03 # Get a bucket by name s3 Bucket( 'Bot03') bucket # Upload a new file with open('file.mov', 'rb') data: as bucket. Object( 'file.mov') put(Body data) ](media/boto-&-boto3_Slides-image26.png)

![Amazon S3 Downloading • Finding buckets • Finding objects • Downloading object contents ](media/boto-&-boto3_Slides-image27.png)

![Amazon S3 Downloading import bot03 # List all objects in all buckets bot03. resource( ' s3 ') s3. buckets. all(): for bucket in bucket objects all(): for obj in print(bucket.name, obj key) ](media/boto-&-boto3_Slides-image28.png)

![Amazon S3 Downloading import bot03 # Download a file s3 Bucket( 'Bot03') bucket bucket Object( ' output. mp4' ) obj data = obj get()['Body'] read() ](media/boto-&-boto3_Slides-image29.png)

![Amazon SNS Topic & Amazon SQS Queue • Create a new Amazon SNS topic • Get an existing Amazon SNS topic • Create a new Amazon SQS queue • Get an existing Amazon SQS queue • Send notifications to an Amazon SQS queue • Check for new messages ](media/boto-&-boto3_Slides-image30.png)

![Amazon SNS Topic & Amazon SQS Queue import bot03 # Create SNS topic (idempotent) sns topic # Get topic bot03 . resource( ' sns sns . create_topic(Name= ' Bot03 ' ) an SNS topic sns Topic(' < TOPIC ARN>') ](media/boto-&-boto3_Slides-image31.png)

![Amazon SNS Topic & Amazon SQS Queue # Create an SQS queue (idempotent) sqs queue # Get queue bot03 . resource( ' sqs ') sqs . create_queue(QueueName= ' Bot03 ' ) an existing queue sqs get_queue_by_name(QueueName= ' Bot03 ' ) ](media/boto-&-boto3_Slides-image32.png)

![Amazon SNS Topic & Amazon SQS Queue # Subscribe an SQS queue to the topic topic subscribe( Protocol= ' sqs' , Endpoint-queue attributes[ 'QueueArn' ] ) ](media/boto-&-boto3_Slides-image33.png)

![IAM Roles • Create a new IAM role • Set up permissions Amazon S3 --- Amazon SQS --- Amazon Elastic Transcoder ](media/boto-&-boto3_Slides-image34.png)

![IAM Roles import bot03 # Create IAM role iam = bot03 . resource('iam') iam. create_role( role RoleName= ' role-name ' , AssumeR01eP01icyDocument= ](media/boto-&-boto3_Slides-image35.png)

![IAM Roles # Set role policy policy = role. RoleP01icy( 'transcoder') policy. put 'Version : ' '2012-10-17' , ' Statement' : [ ](media/boto-&-boto3_Slides-image36.png)

![Transcoding Pipeline & Jobs • Create a new pipeline • Options include --- Input / output S3 bucket --- IAM role --- Amazon SNS topic config • Create a new job ](media/boto-&-boto3_Slides-image37.png)

![Transcoding Pipeline & Jobs # Create a new pipeline bot03. client( ' elastictranscoder ' ) transcoder transcoder. create _ pipeline( response Name= ' Bot03 ' , InputBucket= ' Bot03-input ' , OutputBucket= ' Bot03-output ' , ARN>' , ](media/boto-&-boto3_Slides-image38.png)

![Transcoding Pipeline & Jobs # Create a new transcoding job transcoder. create_job ( job Pipelineld-response[ 'Pipeline' ] [ 'Id ' ] , Input-{ 'Key': 'input .mov' , Outputs={ ](media/boto-&-boto3_Slides-image39.png)



**Add a Little Glue**
-   Directory watcher
-   Main function
    -   Upload / start job / wait / download / delete
-   Amazon S3 cleanup functionality
-   Amazon SQS cleanup







































