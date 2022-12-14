# Developer Tools

1. AWS CodeStar

Develop and Deploy AWS Applications

AWS CodeStar provides the tools you need to quickly develop, build, and deploy applications on AWS. With AWS CodeStar, you can use a variety of project templates to start developing applications on [Amazon EC2](https://aws.amazon.com/ec2/details/), [AWS Lambda](https://aws.amazon.com/lambda/details/), and [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/details/). AWS CodeStar projects support many popular programming languages including Java, JavaScript, PHP, Ruby, and Python. AWS CodeStar allows you to accelerate application delivery by providing a pre-configured continuous delivery toolchain for developing, building, testing, and deploying your projects on AWS. You can easily secure access for your projects through built-in security policies for various roles including owners, contributors, and viewers. The project dashboard in AWS CodeStar makes it easy to centrally monitor application activity and manage day-to-day development tasks such as recent code commits, builds, and deployments. Because AWS CodeStar integrates with Atlassian JIRA, a third-party issue tracking and project management tool, you can create and manage JIRA issues in the AWS CodeStar dashboard.

2. AWS CodeCommit

Store Code in Private Git Repositories

## Pros

- IAM integration with very fine grained control

## Cons

- Send notifications on comments in a PR (Need to test this)

## Seting up multiple repositories in multiple accounts

Host example

Hostname git-codecommit.ap-south-1.amazonaws.com

User APKAU2R6AAK3AIIGFLW3

IdentityFile ~/.ssh/id_rsa

Host odf

Hostname git-codecommit.ap-south-1.amazonaws.com

User APKAYNHO7HOVCVHRHQAU

IdentityFile ~/.ssh/id_rsa

git clone ssh://odf/v1/repos/cred-workspace

git remote add origin ssh://example/v1/repos/decision-engine

<https://forums.aws.amazon.com/thread.jspa?threadID=228206>

## Git remote codecommit

<https://aws.amazon.com/about-aws/whats-new/2020/03/aws-codecommit-introduces-open-source-remote-helper>

<https://docs.aws.amazon.com/codecommit/latest/userguide/temporary-access.html>

<https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-git-remote-codecommit.html>

<https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-unixes.html>

<https://aws.amazon.com/blogs/devops/using-git-with-aws-codecommit-across-multiple-aws-accounts>

3. AWS CodeBuild

Build and Test Code

4. AWS CodeDeploy

Automate Code Deployment

5. AWS CodePipeline

Release Software using Continuous Delivery

6. AWS Cloud9

Write, Run, and Debug Code on a Cloud IDE

AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal. Cloud9 comes prepackaged with essential tools for popular programming languages, including JavaScript, Python, PHP, and more, so you don't need to install files or configure your development machine to start new projects. Since your Cloud9 IDE is cloud-based, you can work on your projects from your office, home, or anywhere using an internet-connected machine. Cloud9 also provides a seamless experience for developing serverless applications enabling you to easily define resources, debug, and switch between local and remote execution of serverless applications. With Cloud9, you can quickly share your development environment with your team, enabling you to pair program and track each other's inputs in real time.

7. AWS X-Ray

Analyze and Debug Your Applications

8. AWS Command Line Interface

Unified Tool to Manage AWS Services

9. CodeGuru

Amazon CodeGuru is a machine learning service for automated code reviews and application performance recommendations. It helps you find the most expensive lines of code that hurt application performance and keep you up all night troubleshooting, then gives you specific recommendations to fix or improve your code. CodeGuru is powered by machine learning, best practices, and hard-learned lessons across millions of code reviews and thousands of applications profiled on open source projects and internally at Amazon. With CodeGuru, you can find and fix code issues such as resource leaks, potential concurrency race conditions, and wasted CPU cycles. And with low, on-demand pricing, it is inexpensive enough to use for every code review and application you run. CodeGuru supports Java applications today, with support for more languages coming soon. CodeGuru helps you catch problems faster and earlier, so you can build and run better software.

<https://aws.amazon.com/codeguru>

10. Chatbot

AWS Chatbot is an interactive agent that makes it easy to monitor and interact with your AWS resources in your [Slack](https://slack.com/) channels and [Amazon Chime](https://aws.amazon.com/chime/) chat rooms. With AWS Chatbot you can receive alerts and run commands to return diagnostic information, invoke AWS Lambda functions, and create AWS support cases so that your team can collaborate and respond to events faster.

<https://aws.amazon.com/chatbot>
