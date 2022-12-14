# Outline Documentation

Created: 2019-01-29 11:24:47 +0500

Modified: 2020-09-01 23:41:05 +0500

---

1.  Overview

    a.  What is kubernetes

    b.  Kubernetes Components

    c.  The Kubernetes API

    d.  Working with Kubernetes Objects

        i.  Undestanding Kubernetes Objects

        ii. Names

        iii. Namespaces

        iv. Labels and Selectors

        v.  Annotations

        vi. Field Selectors

        vii. Recommended Labels

    e.  Object Management using kubectl

        i.  Kubernetes Object Management

        ii. Managing Kubernetes Objects Using Imperative Commands

        iii. Imperative Management of Kubernetes Objects Using Configuration Files

        iv. Declarative Management of Kubernetes Objects Using Configuration Files

2.  Kubernetes Architecture

    a.  Nodes

    b.  Master-Node communication

    c.  Concepts Underlying the Cloud Controller Manager

3.  Containers

    a.  Images

    b.  Container Environment Variables

    c.  Runtime Class

    d.  Container Lifecycle Hooks

4.  Workloads

    a.  Pods

        i.  Pod Overview

        ii. Pods

        iii. Pod Lifecycle

        iv. Init Containers

        v.  Pod Preset

        vi. Disruptions

    b.  Controllers

        i.  ReplicaSet

        ii. ReplicationController

        iii. Deployments

        iv. StatefulSets

        v.  DaemonSet

        vi. Garbage Collection

        vii. TTL Controller for Finished Resources

        viii. Jobs - Run to Completion

        ix. CronJob

5.  Services, Load Balancing, and Networking

    a.  Services

    b.  DNS for Services and Pods

    c.  Connecting Applications with Services

    d.  Ingress

    e.  Network Policies

    f.  Adding entries to Pod /etc/hosts with HostAliases

6.  Storage

    a.  Volumes

    b.  Persistant Volumes

    c.  Volume Snapshots

    d.  Storage Classes

    e.  Volume Snapshot Classes

    f.  Dynamic Volume Provisioning

    g.  Node-specific Volume Limits

7.  Configuration

    a.  Configuration Best Practices

    b.  Managing Compute Resources for Containers

    c.  Assigning Pods to Nodes

    d.  Taints and Tolerations

    e.  Secrets

    f.  Organizing Cluster Access Using kubeconfig Files

    g.  Pod Priority and Preemtion

    h.  Scheduler Performance Tuning

8.  Policies

    a.  Resource Quotas

    b.  Pod Security Policies

9.  Cluster Administration

    a.  Cluster Administration Overview

    b.  Certificates

    c.  Cloud Providers

    d.  Managing Resources

    e.  Cluster Networking

    f.  Logging Architecture

    g.  Configuring kubelet Garbage Collection

    h.  Federation

    i.  Proxies in Kubernetes

    j.  Controller manager metrics

    k.  Installing Addons

10. Extending Kubernetes

    a.  Extending your Kubernetes Cluster

    b.  Extending the Kubernetes API

        i.  Extending the Kubernetes API with the aggregation layer

        ii. Custom Resources

    c.  Compute, Storage, and Networking Extensions

        i.  Network Plugins

        ii. Device Plugins

    d.  Service Catalog

    e.  Poseidon-Firmament - An alternate scheduler



**Concepts**

[Overview](https://kubernetes.io/docs/concepts/overview/)

Get a high-level outline of Kubernetes and the components it is built from.

[Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/)

The architectural concepts behind Kubernetes.

[Containers](https://kubernetes.io/docs/concepts/containers/)

Technology for packaging an application along with its runtime dependencies.

[Workloads](https://kubernetes.io/docs/concepts/workloads/)

Understand Pods, the smallest deployable compute object in Kubernetes, and the higher-level abstractions that help you to run them.

[Services, Load Balancing, and Networking](https://kubernetes.io/docs/concepts/services-networking/)

Concepts and resources behind networking in Kubernetes.

[Storage](https://kubernetes.io/docs/concepts/storage/)

Ways to provide both long-term and temporary storage to Pods in your cluster.

[Configuration](https://kubernetes.io/docs/concepts/configuration/)

Resources that Kubernetes provides for configuring Pods.

[Security](https://kubernetes.io/docs/concepts/security/)

Concepts for keeping your cloud-native workload secure.

[Policies](https://kubernetes.io/docs/concepts/policy/)

Policies you can configure that apply to groups of resources.

[Scheduling and Eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/)

In Kubernetes, scheduling refers to making sure that Pods are matched to Nodes so that the kubelet can run them. Eviction is the process of proactively failing one or more Pods on resource-starved Nodes.

[Cluster Administration](https://kubernetes.io/docs/concepts/cluster-administration/)

Lower-level detail relevant to creating or administering a Kubernetes cluster.

[Extending Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/)

Different ways to change the behavior of your Kubernetes cluster.



<https://kubernetes.io/docs/concepts



**Tasks**

[Install Tools](https://kubernetes.io/docs/tasks/tools/)

Set up Kubernetes tools on your computer.

[Administer a Cluster](https://kubernetes.io/docs/tasks/administer-cluster/)

Learn common tasks for administering a cluster.

[Configure Pods and Containers](https://kubernetes.io/docs/tasks/configure-pod-container/)

Perform common configuration tasks for Pods and containers.

[Manage Kubernetes Objects](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/)

Declarative and imperative paradigms for interacting with the Kubernetes API.

[Inject Data Into Applications](https://kubernetes.io/docs/tasks/inject-data-application/)

Specify configuration and other data for the Pods that run your workload.

[Run Applications](https://kubernetes.io/docs/tasks/run-application/)

Run and manage both stateless and stateful applications.

[Run Jobs](https://kubernetes.io/docs/tasks/job/)

Run Jobs using parallel processing.

[Access Applications in a Cluster](https://kubernetes.io/docs/tasks/access-application-cluster/)

Configure load balancing, port forwarding, or setup firewall or DNS configurations to access applications in a cluster.

[Monitoring, Logging, and Debugging](https://kubernetes.io/docs/tasks/debug-application-cluster/)

Set up monitoring and logging to troubleshoot a cluster, or debug a containerized application.

[Extend Kubernetes](https://kubernetes.io/docs/tasks/extend-kubernetes/)

Understand advanced ways to adapt your Kubernetes cluster to the needs of your work environment.

[TLS](https://kubernetes.io/docs/tasks/tls/)

Understand how to protect traffic within your cluster using Transport Layer Security (TLS).

[Manage Cluster Daemons](https://kubernetes.io/docs/tasks/manage-daemon/)

Perform common tasks for managing a DaemonSet, such as performing a rolling update.

[Service Catalog](https://kubernetes.io/docs/tasks/service-catalog/)

Install the Service Catalog extension API.

[Networking](https://kubernetes.io/docs/tasks/network/)

Learn how to configure networking for your cluster.

[Extend kubectl with plugins](https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/)

Extend kubectl by creating and installing kubectl plugins.

[Manage HugePages](https://kubernetes.io/docs/tasks/manage-hugepages/scheduling-hugepages/)

Configure and manage huge pages as a schedulable resource in a cluster.

[Schedule GPUs](https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/)

Configure and schedule GPUs for use as a resource by nodes in a cluster.



<https://kubernetes.io/docs/tasks



<https://kubernetes.io/docs/home
