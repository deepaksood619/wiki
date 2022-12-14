# Amazon EKS

Created: 2020-02-20 22:53:56 +0500

Modified: 2022-01-02 23:14:23 +0500

---

Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.



Amazon EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Amazon EKS automatically detects and replaces unhealthy control plane instances, and it provides automated version upgrades and patching for them.

Amazon EKS is also integrated with many AWS services to provide scalability and security for your applications, including the following:
-   Amazon ECR for container images
-   Elastic Load Balancing for load distribution
-   IAM for authentication
-   Amazon VPC for isolation



**Amazon EKS Control Plane Architecture**

Amazon EKS runs a single tenant Kubernetes control plane for each cluster, and control plane infrastructure is not shared across clusters or AWS accounts.

This control plane consists of at least two API server nodes and threeetcdnodes that run across three Availability Zones within a Region. Amazon EKS automatically detects and replaces unhealthy control plane instances, restarting them across the Availability Zones within the Region as needed. Amazon EKS leverages the architecture of AWS Regions in order to maintain high availability. Because of this, Amazon EKS is able to offer an[SLA for API server endpoint availability](https://aws.amazon.com/eks/sla).

Amazon EKS uses Amazon VPC network policies to restrict traffic between control plane components to within a single cluster. Control plane components for a cluster cannot view or receive communication from other clusters or other AWS accounts, except as authorized with Kubernetes RBAC policies.



<https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html>



**EKS > Managed Node Groups**

Amazon EKS managed node groups automate the provisioning and lifecycle management of nodes (Amazon EC2 instances) for Amazon EKS Kubernetes clusters.



With Amazon EKS managed node groups, you don't need to separately provision or register the Amazon EC2 instances that provide compute capacity to run your Kubernetes applications. You can create, update, or terminate nodes for your cluster with a single operation. Nodes run using the latest Amazon EKS-optimized AMIs in your AWS account while node updates and terminations gracefully drain nodes to ensure that your applications stay available.



All managed nodes are provisioned as part of an Amazon EC2 Auto Scaling group that is managed for you by Amazon EKS. All resources including the instances and Auto Scaling groups run within your AWS account. Each node group uses the Amazon EKS-optimized Amazon Linux 2 AMI and can run across multiple Availability Zones that you define.



**Commands**

# Get authentication Token

**kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')**



**kubectl proxy**



<http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#!/login>



**Commands**

**AWS EKS**

**#Adding users to eks**

kubectl describe configmap -n kube-system aws-auth



mapUsers:

----

- userarn: arn:aws:iam::331916247734:user/deepak.sood@stashfin.com

username: deepak.sood

groups:

- system:masters



<https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html>



**#get kubeconfig credentials from eks to local**

aws eks --region ap-south-1 list-clusters

aws eks --region ap-south-1 update-kubeconfig --name stashfin-dev-eks

aws eks --region ap-south-1 update-kubeconfig --name stashfin-prod-eks



**#login to AWS ECR**

aws ecr get-login-password | docker login --username AWS --password-stdin 331916247734.dkr.ecr.ap-south-1.amazonaws.com



**eksctl**

eksctlis a simple CLI tool for creating clusters on EKS - Amazon's new managed Kubernetes service for EC2. It is written in Go, uses CloudFormation, was created by[Weaveworks](https://www.weave.works/)and it welcomes contributions from the community. Create a basic cluster in minutes with just one command



A cluster will be created with default parameters

∙ exciting auto-generated name, e.g. "fabulous-mushroom-1527688624"

∙ 2xm5.largenodes (this instance type suits most common use-cases, and is good value for money)

∙ use official AWS EKS AMI

∙us-west-2region

∙ dedicated VPC (check your quotas)

∙ using static AMI resolver



eksctl create cluster --name prod --version 1.14 --region ap-south-1 --fargate

eksctl create cluster --name=stashfin --nodes=2 --version 1.14 --region ap-south-1 --nodes-min=2 --nodes-max=5

eksctl delete cluster --name=stashfin



eksctl create cluster --managed



<https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html>



**brew tap weaveworks/tap**

**brew install weaveworks/tap/eksctl**

**brew upgrade eksctl && brew link --overwrite eksctl**

**eksctl version**



Usage: eksctl [command] [flags]



Commands:

eksctl create Create resource(s)

eksctl get Get resource(s)

**eksctl get cluster**

eksctl update Update resource(s)

eksctl upgrade Upgrade resource(s)

eksctl delete Delete resource(s)

eksctl set Set values

eksctl unset Unset values

eksctl scale Scale resources(s)

eksctl drain Drain resource(s)

eksctl utils Various utils

eksctl completion Generates shell completion scripts

eksctl version Output the version of eksctl

eksctl help Help about any command



eksctl utils write-kubeconfig --cluster=stashfin [--kubeconfig=<path>][--set-kubeconfig-context=<bool>]



<https://eksctl.io



**Using Fargate with EKS**

<https://eksctl.io/usage/fargate



**Reserve some memory for the kubelet and the system namespaces (for Kubelet OOM)**

Using Cloudformation you can simply set some extra arguments on the kubelet process:



--kubelet-extra-args "--node-labels=cluster=${ClusterName},nodegroup=${NodeGroupName} --kube-reserved memory=0.3Gi,ephemeral-storage=1Gi --system-reserved memory=0.2Gi,ephemeral-storage=1Gi --eviction-hard memory.available<200Mi,nodefs.available<10%"



In that case you reserve 300MB for the kube-system namespace and 200 MB for the system itself.



In addition if there are less than 200 MB available the eviction option uses the oom_killer to kill pods on that node to avoid OOM errors on the Kubelet.



**PVC**

Can be modified once in 6 hours



**Optimizations**

<https://kubedex.com/90-days-of-aws-eks-in-production



**Tools**

**kube2iam**

kube2iam provides different AWS IAM roles for pods running on Kubernetes



**EKS 1.17**

Upgrading your EKS cluster to[v1.17](http://v1.17/)



What needs to be taken care of..!



Breaking Points in k8s v1.17:

𝟏.[𝙧𝙗𝙖𝙘.𝙖𝙪𝙩𝙝𝙤𝙧𝙞𝙯𝙖𝙩𝙞𝙤𝙣.𝙠𝟖𝙨.𝙞𝙤/𝙫𝟏𝙖𝙡𝙥𝙝𝙖𝟏](http://rbac.authorization.k8s.io/%F0%9D%99%AB%F0%9D%9F%8F%F0%9D%99%96%F0%9D%99%A1%F0%9D%99%A5%F0%9D%99%9D%F0%9D%99%96%F0%9D%9F%8F)and[𝙧𝙗𝙖𝙘.𝙖𝙪𝙩𝙝𝙤𝙧𝙞𝙯𝙖𝙩𝙞𝙤𝙣.𝙠𝟖𝙨.𝙞𝙤/𝙫𝟏𝙗𝙚𝙩𝙖𝟏](http://rbac.authorization.k8s.io/%F0%9D%99%AB%F0%9D%9F%8F%F0%9D%99%97%F0%9D%99%9A%F0%9D%99%A9%F0%9D%99%96%F0%9D%9F%8F)API groups are deprecated in favor of[𝙧𝙗𝙖𝙘.𝙖𝙪𝙩𝙝𝙤𝙧𝙞𝙯𝙖𝙩𝙞𝙤𝙣.𝙠𝟖𝙨.𝙞𝙤/𝙫𝟏,](http://rbac.authorization.k8s.io/%F0%9D%99%AB%F0%9D%9F%8F,)and will no longer be served in[𝘃𝟭.𝟮𝟬.](http://v1.20./)

𝟐. Also, ([𝙗𝙚𝙩𝙖.𝙠𝙪𝙗𝙚𝙧𝙣𝙚𝙩𝙚𝙨.𝙞𝙤/𝙞𝙣𝙨𝙩𝙖𝙣𝙘𝙚-𝙩𝙮𝙥𝙚)](http://beta.kubernetes.io/%F0%9D%99%9E%F0%9D%99%A3%F0%9D%99%A8%F0%9D%99%A9%F0%9D%99%96%F0%9D%99%A3%F0%9D%99%98%F0%9D%99%9A-%F0%9D%99%A9%F0%9D%99%AE%F0%9D%99%A5%F0%9D%99%9A))is deprecated in favor of[𝙣𝙤𝙙𝙚.𝙠𝙪𝙗𝙚𝙧𝙣𝙚𝙩𝙚𝙨.𝙞𝙤/𝙞𝙣𝙨𝙩𝙖𝙣𝙘𝙚-𝙩𝙮𝙥𝙚](http://node.kubernetes.io/%F0%9D%99%9E%F0%9D%99%A3%F0%9D%99%A8%F0%9D%99%A9%F0%9D%99%96%F0%9D%99%A3%F0%9D%99%98%F0%9D%99%9A-%F0%9D%99%A9%F0%9D%99%AE%F0%9D%99%A5%F0%9D%99%9A)

𝟑. Start using the 𝘼𝙒𝙎 𝙀𝘽𝙎 𝘾𝙎𝙄 𝘿𝙧𝙞𝙫𝙚𝙧 directly for any new volumes, instead of in-tree AWS EBS plugin[𝙠𝙪𝙗𝙚𝙧𝙣𝙚𝙩𝙚𝙨.𝙞𝙤/𝙖𝙬𝙨-𝙚𝙗𝙨](http://kubernetes.io/%F0%9D%99%96%F0%9D%99%AC%F0%9D%99%A8-%F0%9D%99%9A%F0%9D%99%97%F0%9D%99%A8)

𝟒. Even EKS hasn't enabled the 𝘊𝘚𝘐𝘔𝘪𝘨𝘳𝘢𝘵𝘪𝘰𝘯𝘈𝘞𝘚(It enable the replacement of existing in-tree storage plugins such as 𝙠𝙪𝙗𝙚𝙧𝙣𝙚𝙩𝙚𝙨.𝙞𝙤/𝙖𝙬𝙨-𝙚𝙗𝙨 with a corresponding CSI driver), for details kindly go through this:<https://lnkd.in/gBsZ4hQ>



For further details:<https://lnkd.in/gwD9BQM>

What's new in k8s v1.17:<https://lnkd.in/gSXZatU>



**IAM Roles for Service Accounts (IRSA)**

<https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts



**Max number of pods**

max pods = (Number of network interfaces for the instance type × (the number of IP addressess per network interface - 1)) + 2



**Pod Density and Cost EKS (WeaveWorks)**

<https://docs.google.com/spreadsheets/d/1MCdsmN7fWbebscGizcK6dAaPGS-8T_dYxWp0IdwkMKI/edit#gid=1549051942>



**CNI Metrics Helper**

The CNI metrics helper is a tool that you can use to scrape network interface and IP address information, aggregate metrics at the cluster level, and publish the metrics to Amazon CloudWatch.



<https://docs.aws.amazon.com/eks/latest/userguide/cni-metrics-helper.html>
