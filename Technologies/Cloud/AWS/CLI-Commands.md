# CLI Commands

Created: 2020-02-11 12:48:19 +0500

Modified: 2022-08-12 12:42:37 +0500

---

**AWS cli (brew install awscli)**

**pip install awscli**



Graphical installer - <https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html>



Linux

curl "<https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip>" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install

<https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html>



aws configure

region - ap-south-1

output - json



**# adding new profile**

aws configure --profile zen



aws ec2 describe-instances --profile {{profile_name}}

aws s3 ls --profile zen



**#get current user**

aws sts get-caller-identity



aws sts get-access-key-info --access-key-id AKIAU2R6AAK3KKWSWRFU

aws organizations describe-account --account-id 331916247734



aws s3 ls s3://stashfin-migration-data/userdevicesms/year=2020/month=05/day=09/1334d4026463437b



aws s3 mb s3://bigbet90 --region us-west-2

aws s3 presign s3://bigbet90/index.html --expires-in 90 # in seconds max 36 hours

aws s3 cp aws.png s3://bigbet90 --region us-west-2 --endpoint-url <https://bigbet90.s3-accelerate.amazonaws.com>



**Download folder / bucket from s3**

aws s3 sync

aws s3 sync . s3://bigbet90

aws s3 sync s3://source-bucket/source-path ./local_folder



aws s3 sync test s3://stashfin-storage-dev/test

aws s3 sync s3://stashfin-websites/prod/collection-crm/ collection-crm/

aws s3 sync s3://static-document/collection-waiver/ collection-waiver/



aws s3api get-object --bucket DOC-EXAMPLE-BUCKET1--key dir/my_images.tar.bz2 my_images.tar.bz2



**# download file**

AWS_ACCESS_KEY_ID=AKIAU2R6AAK3EV5BGBEY AWS_SECRET_ACCESS_KEY=QESl8sJgJMk2KGh3KkPdcn6HXvyhJ+zWoDR/tMZd aws s3 cp s3://stashfin-storage/webroot/document/aadhaar_front_masked/6950089/aadhaar-front-masked2022-03-07-12-44-11-7946.png aadhaar-front-masked2022-03-07-12-44-11-7946.png



**Upload a file to s3**

AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX aws s3 cp sms_data_oct_20_to_feb_21_new.csv s3://stashfin-migration-data/sms_data_oct_20_to_feb_21_new.csv



aws s3 cp /home/jenkins/agent/workspace/Prod_prod_collection-crm_master/build/ s3://stashfin-websites/prod/collection-crm --recursive



AWS_ACCESS_KEY_ID=AKIAU2R6AAK3EV5BGBEY AWS_SECRET_ACCESS_KEY=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 aws s3 cp s3://stashfin-migration-data/sms_data_oct_20_to_feb_21_new.csv sms_data_oct_20_to_feb_21_new.csv



aws iam delete-policy --policy-arn arn:aws:iam::331916247734:policy/ssh_update_policy



aws rds create-db-instance --db-instance-identifier daily-db-snapshot-reader --db-cluster-identifier daily-db-snapshot --engine aurora-mysql --db-instance-class db.r5.large --availability-zone ap-south-1a

**aws rds create-db-instance --db-instance-identifier prod-reader --db-cluster-identifier backup-sttash-main-db-instance-cluster --engine aurora-mysql --db-instance-class db.r5.2xlarge --availability-zone ap-south-1b**



aws rds delete-db-instance --db-instance-identifier daily-db-snapshot-reader

**aws rds delete-db-instance --db-instance-identifier prod-reader**



aws rds modify-db-parameter-group --db-parameter-group-name [aurora-data-analytics-group](https://ap-south-1.console.aws.amazon.com/rds/home?region=ap-south-1#parameter-groups-detail:ids=aurora-data-analytics-group;type=DbParameterGroup;editing=false) --parameters "ParameterName='max_execution_time',ParameterValue=3200000,ApplyMethod=immediate"



aws rds modify-db-parameter-group --db-parameter-group-name aurora-prod-db-write-group --parameters "ParameterName='max_execution_time',ParameterValue=1500000,ApplyMethod=immediate"



**Tools**

**awslogs**

awslogsis a simple command line tool for querying groups, streams and events from[Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) logs.



<https://github.com/jorgebastida/awslogs>
-   Set credentials at your env vars;
-   Logs in production: `awslogs get production-zf-backend ALL --aws-region sa-east-1`;
-   Logs in staging: `awslogs get staging-zf-backend ALL --aws-region us-east-1`.
