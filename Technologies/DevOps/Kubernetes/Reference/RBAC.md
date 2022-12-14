# RBAC

Created: 2019-09-22 14:38:23 +0500

Modified: 2020-09-14 10:29:16 +0500

---

![Leo Role Based Access Control (RBAC) RBAC is a simple method of managing access in large systems In RBAC we group permissions and assign them to groups of users RBAC is a compromise between operations and security Security wants users with exact permissions per user Operations wants manageability It is important to find the balance, meaning, a good amount of roles ](../../../media/DevOps-Kubernetes-RBAC-image1.png)

![Roles, Roles, Roles & ClusterRoIes A role is a group of rules Rule = a permission set Roles rules are scoped to a namespace ClusterRole rules scope is the cluster ClusterRoles can also be scoped down to a namespace with the right configuration Defining a role does not provide access Role Scope: Namespace Label(s) Rule(s) ClusterR01e Label(s) Rule(s) ](../../../media/DevOps-Kubernetes-RBAC-image2.png)

![Rules Rules are the building blocks of roles Each rule addresses a key question: What is allowed? A verb is an action, for example, get, create Kubernetes is an API first platform, hence, resources are also defined as APIs and API groups All rules are always ALLOWing access Verb(s) Verb(s) Verb(s) Role Rule Resource(s) Rule Resource(s) Rule Resource(s) ](../../../media/DevOps-Kubernetes-RBAC-image3.png)

![Erm Resources - Permissions Targets Resources are defined top-down Each layer defined, narrows down the applied resources Leaving the resources blank, translates to "All resources in the API Group" A specific (resource) name would narrow the selection to the specific resource API Group Resource Type Name ](../../../media/DevOps-Kubernetes-RBAC-image4.png)

![Ern Leo NonResourceURL There are resources that are not API resources. They are simply URLs. For example: /healthz Their access is controlled using Kubernetes permissions NonResourceURLs are defined as Cluster level objects (even though they're not actually cluster objects) To use them, they must be part of a ClusterRole and associated with ClusterRoleBinding ](../../../media/DevOps-Kubernetes-RBAC-image5.png)

![Subjects Users, groups and service accounts are subjects in Kubernetes Associating roles with subjects assign access to subjects Access is granted directly or indirectly (through groups) The complete set of access is calculated and the result is the actual access list for the user Kubernetes does not have DENY rules, therefore, all access is augmented ](../../../media/DevOps-Kubernetes-RBAC-image6.png)

![O UL)JeCt Special Groups Automatically populated groups prefixed with system: like: authenti cated Unauthenticated mas ters Service Account Group Automatically populated groups for service accounts. One for every namespace and one lobal Service Account Users defined internally in Kubernetes to run workloads IDP User Users authenticated by the identity provider Group Groups from the identity provider consists users and other groups ](../../../media/DevOps-Kubernetes-RBAC-image7.png)

![Complete structure visual IDP User CluserRole Group ClusterRole IDP Group Cluster Rule Verb(s) Rule Resource(s) Verb(s) Role Binding Role Resource(s) Rule Rule ](../../../media/DevOps-Kubernetes-RBAC-image8.png)



## Authorization

<https://kubernetes.io/docs/reference/access-authn-authz/authorization

<https://kubernetes.io/docs/reference/access-authn-authz/rbac

<https://www.cncf.io/blog/2018/08/01/demystifying-rbac-in-kubernetes

## Commands

## Create access role for kubernetes dashboard

kubectl create clusterrolebinding kubernetes-dashboard -n kube-system --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard

<https://www.youtube.com/watch?v=mvvCf3eQ1cc>
